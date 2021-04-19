<template>
	<div class="chat_wrap" @scroll="scroll">
		<p
			v-for="(message, idx) in this.roomMessages"
			:class="{ my_message: message?.sender?.username === username }"
			:key="message.created"
			:ref="
				(el) => {
					if (el && idx === this.roomMessages.length - 1) lastItem = el;
				}
			"
		>
			<b>{{ message?.sender?.username || 'unknown' }}:</b>
			{{ message?.text }}
		</p>
	</div>
	<InputLine :room="room" />
	<ScrollIcon :needScroll="scrollToDown" @toggle-scroll="toggleScroll" />
</template>

<script>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
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
		const store = useStore();
		store.dispatch('getRoomHistory', props.room);

		const lastItem = ref(null);
		const scrollToDown = ref(true);
		let scrollingNow = false;

		const roomMessages = computed(() => store.getters.roomMessages(props.room));
		const username = computed(() => store.state.username);

		const toggleScroll = (value) => {
			lastItem.value.scrollIntoView(true);
			scrollToDown.value = value;
		};

		const scroll = () => {
			if (!scrollingNow) {
				scrollToDown.value = false;
			}
		};

		watch(
			() => store.getters.roomMessages(props.room),
			() => {
				if (scrollToDown.value && lastItem?.value?.scrollIntoView) {
					scrollingNow = true;
					lastItem.value.scrollIntoView(true);
					setTimeout(() => {
						scrollingNow = false;
					}, 20);
				}
			},
			{ flush: 'post' },
		);

		return {
			roomMessages,
			scrollToDown,
			lastItem,
			toggleScroll,
			scroll,
			username,
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
