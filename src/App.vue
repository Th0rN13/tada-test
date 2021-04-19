<template>
	<main>
		<Nav :status="status" />
		<router-view />
	</main>
</template>

<script>
import { useStore } from 'vuex';
import { computed, watch } from 'vue';
import { connectStoreToChat } from '@/store/chat';
import Nav from '@/components/Nav.vue';

export default {
	name: 'App',
	setup() {
		const store = useStore();

		const username = computed(() => store.state.username);
		const status = computed(() => store.state.status === 'online');

		watch(username, () => {
			connectStoreToChat(store, username.value);
		});
		connectStoreToChat(store, username.value);
		store.dispatch('getRooms');
		store.dispatch('getSettings');
		return {
			status,
		};
	},
	components: {
		Nav,
	},
};
</script>

<style>
*,
*::after,
*::before {
	box-sizing: border-box;
}
body {
	padding: 0;
	margin: 0;
	height: 100vh;
}
#app {
	height: 100%;
}
main {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
</style>
