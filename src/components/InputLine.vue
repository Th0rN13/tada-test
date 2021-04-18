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
	props: { room: String },
	data() {
		return {
			line: '',
		};
	},
	methods: {
		send() {
			console.log('try to send:', this.line);
			sendMessage('room', this.line, Math.random());
			this.line = '';
		},
	},
};
</script>
