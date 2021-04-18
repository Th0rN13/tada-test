<template>
	<div>
		<input type="text" v-model="line" @keydown.enter="sendMessage" />
		<button @click="sendMessage">send</button>
	</div>
</template>

<script>
export default {
	name: 'InputLine',
	data() {
		return {
			line: '',
		};
	},
	methods: {
		sendMessage() {
			console.log(this.line);
			this.line = '';
		},
	},
};
</script>
