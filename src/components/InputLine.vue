<template>
	<div class="input">
		<input type="text" v-model="line" @keydown.enter="send" />
		<button @click="send">send</button>
	</div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
	name: 'InputLine',
	props: ['room'],
	setup(props) {
		const store = useStore();
		const line = ref('');
		const send = () => {
			store.dispatch('newSendMessage', { room: props.room, text: line.value });
			line.value = '';
		};
		return {
			line,
			send,
		};
	},
};
</script>

<style>
.input {
	flex: 0 0 48px;
}
</style>
