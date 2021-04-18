<template>
	<main>
		<Nav />
		<router-view />
	</main>
</template>

<script>
import { useStore } from 'vuex';
import { connectStoreToChat } from '@/store/chat';
import Nav from '@/components/Nav.vue';

export default {
	name: 'App',
	setup() {
		const store = useStore();
		store.dispatch('getRooms');
		connectStoreToChat(store);
		return {};
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
.chat_wrap {
	width: 100%;
	flex: 1 0 400px;
	display: flex;
	flex-wrap: nowrap;
}
.chat {
	flex: 1 0 320px;
}
.room_list {
	flex: 0 0 200px;
}
.input {
	flex: 0 0 48px;
}
</style>
