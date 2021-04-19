<template>
	<input type="text" :value="username" @change="change" @keydown.enter="updateName" />
	<button @click="updateName">Change name</button>
	<span><b v-if="nameChanged">name changed</b></span>
	<p v-for="room in roomList" :key="room">
		<router-link :to="`/room/${room.name}`">{{ room.name }} room</router-link><br />
		<span
			>last message: <b>{{ room?.last_message?.sender?.username || 'unknown' }}</b>
			{{ room?.last_message?.text }}</span
		>
	</p>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
	setup() {
		const store = useStore();
		const username = ref('');
		const nameChanged = ref(false);
		const loading = ref(false);
		const roomList = computed(() => store.state.rooms);
		const storeUsername = computed(() => store.state.username);

		onMounted(() => {
			username.value = store.state.username;
		});

		const updateName = () => {
			loading.value = true;
			store.dispatch('updateName', username.value).then((result) => {
				console.log(result);
				loading.value = false;
				if (result) {
					username.value = result;
					nameChanged.value = true;
					setTimeout(() => {
						nameChanged.value = false;
					}, 2000);
				} else {
					username.value = storeUsername.value;
				}
			});
		};

		const change = ({ target: { value } }) => {
			username.value = value;
		};

		return {
			username,
			updateName,
			roomList,
			change,
			nameChanged,
		};
	},
};
</script>
