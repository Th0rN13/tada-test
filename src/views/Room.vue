<template>
	<div class="chat_wrap" @scroll="scroll">
		<p
			v-for="message in this.roomMessages"
			:class="{ my_message: message?.sender?.username === username }"
			:key="message.created"
		>
			<b>{{ message?.sender?.username || 'unknown' }}:</b>
			{{ message?.text }}
		</p>
		<p v-if="roomQueue.length">not yet sended</p>
		<p
			v-for="message in this.roomQueue"
			:class="{ my_message: message?.sender?.username === username }"
			:key="message.id"
		>
			<b>{{ message?.sender?.username || 'unknown' }}:</b>
			{{ message?.text }}
			<button @click="repeatSend(message.id)">-></button>
			<button @click="clearMsg(message.id)">x</button>
		</p>
		<span :ref="(el) => (lastItem = el)"></span>
	</div>
	<InputLine :room="room" />
	<ScrollIcon :needScroll="scrollToDown" @toggle-scroll="toggleScroll" />
</template>

<script>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import InputLine from '@/components/InputLine.vue';
import ScrollIcon from '@/components/ScrollIcon.vue';

export default {
	name: 'Room',
	props: ['room'],
	components: {
		InputLine,
		ScrollIcon,
	},
	setup(props) {
		const router = useRouter();
		const store = useStore();
		store.dispatch('getRoomHistory', props.room).then((result) => {
			if (result !== props.room) {
				router.push(`/room/${result}`);
			}
		});

		const lastItem = ref(null);
		const scrollToDown = ref(true);
		const scrollingNow = ref(false);

		const roomMessages = computed(() => store.getters.roomMessages(props.room));
		const roomQueue = computed(() => store.getters.roomQueue(props.room));
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
.chat_wrap {
	width: 100%;
	flex: 1 0 400px;
	overflow: auto;
	word-break: break-all;
}
.chat_wrap p {
	background: skyblue;
	border-radius: 4px;
	padding: 8px;
	margin: 8px 40% 8px 0;
}
p.my_message {
	margin-left: 40%;
	margin-right: 0;
}
</style>
