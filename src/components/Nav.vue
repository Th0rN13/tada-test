<template>
	<div class="nav">
		<router-link to="/" exact>Home</router-link>
		<div v-for="room in openedRooms" :key="room">
			<router-link :to="`/room/${room}`">{{ room }} room</router-link>
			<button class="close" @click="close(room)">x</button>
		</div>
		<div class="status" :class="{ online: status }"></div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

export default {
	props: ['status'],
	setup() {
		const router = useRouter();
		const route = useRoute();
		const store = useStore();
		const openedRooms = computed(() => store.getters.openedRooms);
		const close = (room) => {
			store.dispatch('closeRoom', room);
			if (route.path === `/room/${room}`) {
				router.push('/');
			}
		};
		return {
			openedRooms,
			close,
		};
	},
};
</script>

<style>
.nav {
	flex: 0 0 48px;
	display: flex;
	align-items: center;
	padding: 0 24px;
	position: relative;
}
.nav a {
	padding: 8px;
	color: blue;
	text-decoration: none;
}
.status {
	position: absolute;
	right: 8px;
	width: 24px;
	height: 24px;
	top: calc(50% - 12px);
	border-radius: 50%;
	background-color: red;
}
.status.online {
	background-color: greenyellow;
}
</style>
