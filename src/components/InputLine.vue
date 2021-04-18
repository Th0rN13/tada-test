<template>
	<div>
		<input type="text" v-model="line" @keydown.enter="send" />
		<button @click="send">send</button>
	</div>
</template>

<script>
import { sendMessage } from '@/helpers/api';

export default {
	name: 'InputLine',
	props: ['room'],
	data() {
		return {
			line: '',
		};
	},
	methods: {
		send() {
			sendMessage(this.room, this.line);
			this.line = '';
		},
	},
};
</script>
