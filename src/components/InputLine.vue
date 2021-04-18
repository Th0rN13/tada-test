<template>
	<div>
		<input type="text" v-model="line" @keydown.enter="send" />
		<button @click="send">send</button>
	</div>
</template>

<script>
import { ping, sendMessage } from '@/helpers/api';

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
			ping();
			sendMessage('this.room', this.line);
			this.line = '';
		},
	},
};
</script>
