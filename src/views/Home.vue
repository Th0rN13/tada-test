<template>
	<input type="text" v-model="username" @keydown.enter="change" />
	<button @click="change">Change name</button>
	<p v-for="room in roomList" :key="room">
		<router-link :to="`/room/${room.name}`">{{ room.name }} room</router-link>
	</p>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
	setup() {
		const store = useStore();
		const username = ref(store.state.username);

		const change = () => {
			store.dispatch('updateName', username);
		};

		const roomList = computed(() => store.state.rooms);

		return {
			username,
			change,
			roomList,
		};
	},
};
</script>
