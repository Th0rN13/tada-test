<template>
	<div class="chat_wrap">
		<p v-for="message in this.roomMessages" :key="message.created">
			<b>{{ message?.sender?.username || 'unknown' }}:</b> {{ message?.text }}
		</p>
	</div>
	<InputLine room="kozma" />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import InputLine from '@/components/InputLine.vue';

export default {
	name: 'Room',
	components: {
		InputLine,
	},
	setup() {
		const store = useStore();
		return {
			roomMessages: computed(() => store.getters.roomMessages('kozma')),
		};
	},
};
</script>
