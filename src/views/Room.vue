<template>
	<div class="chat_wrap">
		<p
			v-for="(message, idx) in this.roomMessages"
			:key="message.created"
			:ref="
				(el) => {
					if (el && idx === this.roomMessages.length - 1) lastItem = el;
				}
			"
		>
			<b>{{ message?.sender?.username || 'unknown' }}:</b> {{ message?.text }}
		</p>
	</div>
	<InputLine :room="room" />
</template>

<script>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import InputLine from '@/components/InputLine.vue';

export default {
	name: 'Room',
	props: ['room', 'scrollToDown'],
	components: {
		InputLine,
	},
	setup(props) {
		const store = useStore();
		store.dispatch('getRoomHistory', props.room);

		const lastItem = ref(null);

		const roomMessages = computed(() => store.getters.roomMessages(props.room));

		watch(
			() => store.getters.roomMessages(props.room),
			() => {
				// if (props.scrollToDown && lastItem?.value) lastItem.value.scrollIntoView();
				if (lastItem?.value?.scrollIntoView) lastItem.value.scrollIntoView(false);
			},
			{ flush: 'post' },
		);

		return {
			roomMessages,
			lastItem,
		};
	},
};
</script>

<style>
.chat_wrap {
	width: 100%;
	flex: 1 0 400px;
	overflow: auto;
}
.chat_wrap p {
	margin: 4px 0;
}
</style>
