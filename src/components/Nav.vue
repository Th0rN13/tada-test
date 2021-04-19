<template>
	<div class="nav">
		<router-link to="/" exact custom v-slot="{ href, navigate, isExactActive }">
			<div class="link" :class="[isExactActive && 'router-link-exact-active']">
				<a :href="href" @click="navigate">Home</a>
			</div>
		</router-link>
		<router-link
			v-for="room in openedRooms"
			:key="room"
			:to="`/room/${room}`"
			custom
			v-slot="{ href, navigate, isExactActive }"
		>
			<div class="link" :class="[isExactActive && 'router-link-exact-active']">
				<a :href="href" @click="navigate">{{ room }}</a>
				<button class="close" @click="close(room)">x</button>
			</div>
		</router-link>
		<div class="status" :class="{ online: status }"></div>
	</div>
</template>

<script>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

export default {
	props: ['status'],
	setup() {
		const router = useRouter();
		const route = useRoute();
		const store = useStore();
		const openedRooms = computed(() => store.state.openedRooms);

		const close = (room) => {
			store.dispatch('closeRoom', room);
			if (route.path === `/room/${room}`) {
				router.push('/');
			}
		};

		watch(openedRooms, (newOpened, oldOpened) => {
			const roomName = route.path.replace('/room/', '');
			if (!newOpened.has(roomName) && oldOpened.has(roomName)) {
				router.push('/');
			}
		});

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
.link {
	padding: 8px;
	border-radius: 4px;
}
.router-link-exact-active {
	background-color: wheat;
}
</style>
