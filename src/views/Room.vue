<template>
	<div class="wrap">
		<RoomList />
		<div class="chat-wrap">
			<div class="chat-messages" @scroll="scroll">
				<p v-if="!roomMessages.length" class="hint">В этой комнате еще нет сообщений</p>
				<p
					v-for="message in roomMessages"
					class="message"
					:class="{ my_message: message?.sender?.username === username }"
					:key="message.created"
				>
					<b>{{ message?.sender?.username || 'unknown' }}:</b>
					{{ message?.text }}
				</p>
				<p class="hint" v-if="roomQueue.length">
					Не отправленные сообщения (сервер не подтвердил получение)
				</p>
				<p
					v-for="message in roomQueue"
					:class="{ my_message: message?.sender?.username === username }"
					:key="message.id"
				>
					<b>{{ message?.sender?.username || 'unknown' }}:</b>
					{{ message?.text }}
					<button @click="repeatSend(message.id)">Повторить</button>
					<button @click="clearMsg(message.id)">Удалить</button>
				</p>
				<span :ref="(el) => (lastItem = el)"></span>
			</div>
			<InputLine :room="room" />
			<ScrollIcon :needScroll="scrollToDown" @toggle-scroll="toggleScroll" />
		</div>
	</div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import InputLine from '@/components/InputLine.vue';
import ScrollIcon from '@/components/ScrollIcon.vue';
import RoomList from '@/components/RoomList.vue';

export default {
	name: 'Room',
	props: ['room'],
	components: {
		InputLine,
		ScrollIcon,
		RoomList,
	},
	setup(props) {
		const router = useRouter();
		const store = useStore();
		const loadNewRoom = (roomName) => {
			store.dispatch('getRoomHistory', roomName).then((result) => {
				if (result !== roomName) {
					router.push(`/room/${result}`);
				}
			});
		};

		loadNewRoom(props.room);

		const lastItem = ref(null);
		const scrollToDown = ref(true);
		const scrollingNow = ref(false);

		const roomMessages = computed(() => store.getters.roomMessages(props.room));
		const roomQueue = computed(() => store.getters.roomQueue(props.room));
		const loadedRooms = computed(() => store.state.openedRooms);
		const username = computed(() => store.state.username);

		const toggleScroll = () => {
			lastItem.value.scrollIntoView(true);
			setTimeout(() => {
				scrollToDown.value = true;
			}, 50);
		};

		const scroll = () => {
			if (!scrollingNow.value) {
				scrollToDown.value = false;
			}
		};

		const repeatSend = (id) => {
			store.dispatch('tryRepeatSend', id);
		};

		const clearMsg = (id) => {
			store.dispatch('clearMessage', id);
		};

		watch(
			() => props.room,
			() => {
				if (!loadedRooms.value.has(props.room)) {
					loadNewRoom(props.room);
				}
			},
			{ flush: 'post' },
		);

		watch(
			() => store.getters.roomMessages(props.room),
			() => {
				if (scrollToDown.value && lastItem?.value?.scrollIntoView) {
					scrollingNow.value = true;
					lastItem.value.scrollIntoView(true);
					setTimeout(() => {
						scrollingNow.value = false;
					}, 50);
				}
			},
			{ flush: 'post' },
		);

		return {
			roomMessages,
			roomQueue,
			scrollToDown,
			lastItem,
			toggleScroll,
			scroll,
			username,
			repeatSend,
			clearMsg,
		};
	},
};
</script>

<style>
.wrap {
	display: flex;
	height: calc(100% - 48px);
}
.chat-wrap {
	height: 100%;
	flex: 0 1 100%;
	display: flex;
	flex-direction: column;
}
.chat-messages {
	flex: 0 1 100%;
	overflow-y: scroll;
	word-break: break-all;
	padding: 8px;
	display: flex;
	flex-direction: column;
}
.message {
	background: skyblue;
	border-radius: 4px;
	padding: 8px;
	margin: 8px 40% 8px 0;
}
.message.my_message {
	margin-left: 40%;
	margin-right: 0;
}
.hint {
	background: rgba(245, 222, 179, 0.322);
	text-align: center;
	color: gray;
	padding: 0px;
	margin: 8px 0;
}
</style>
