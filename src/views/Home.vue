<template>
	<input type="text" :value="username" @change="change" @keydown.enter="updateName" />
	<button @click="updateName">Change name</button>
	<p v-for="room in roomList" :key="room">
		<router-link :to="`/room/${room.name}`">{{ room.name }} room</router-link><br />
		<span
			>last message: <b>{{ room?.last_message?.sender?.username || 'unknown' }}</b>
			{{ room?.last_message?.text }}</span
		>
	</p>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
	setup() {
		const store = useStore();
		let username = store.state.username;

		const updateName = () => {
			store.dispatch('updateName', username);
		};

		const change = ({ target: { value } }) => {
			username = value;
		};

		const roomList = computed(() => store.state.rooms);

		return {
			username,
			updateName,
			roomList,
			change,
		};
	},
};
</script>
