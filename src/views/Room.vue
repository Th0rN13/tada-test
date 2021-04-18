<template>
	<div class="chat_wrap">
		<p v-for="message in this.roomMessages" :key="message.created">
			<b>{{ message?.sender?.username || 'unknown' }}:</b> {{ message?.text }}
		</p>
	</div>
	<InputLine :room="room" />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import InputLine from '@/components/InputLine.vue';

export default {
	name: 'Room',
	props: ['room'],
	components: {
		InputLine,
	},
	setup(props) {
		const store = useStore();
		store.dispatch('getRoomHistory', props.room);
		return {
			roomMessages: computed(() => store.getters.roomMessages(props.room)),
		};
	},
};
</script>
