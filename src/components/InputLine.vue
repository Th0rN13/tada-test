<template>
	<div class="input">
		<input
			class="send-input"
			type="text"
			v-model="line"
			@keydown.enter="send"
			placeholder="Введите сообщение..."
		/>
		<button class="send-button" @click="send">Отправить сообщение</button>
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
	display: flex;
	padding: 0px;
	border-top: 1px solid gray;
}
.send-input {
	padding: 4px;
	margin: 2px;
	flex: 1 0 320px;
	width: 320px;
}
.send-button {
	padding: 4px;
	margin: 2px;
	flex: 0 0 200px;
}
</style>
