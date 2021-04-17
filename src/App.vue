<template>
	<main>
		<div class="chat_wrap">
			<div class="chat"></div>
			<div class="room_list">
				<div v-for="room in this.$store.state.rooms" :key="room.name">{{ room.name }}</div>
			</div>
		</div>
		<div class="input">
			<input type="text" />
		</div>
	</main>
</template>

<script>
import { useStore } from 'vuex';

export default {
	name: 'App',
	setup() {
		const store = useStore();
		store.dispatch('getRooms');
		return {};
	},
	components: {},
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
