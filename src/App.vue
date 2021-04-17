<template>
	<button @click="click">click</button>
	{{ JSON.stringify(this.$store.state) }}
</template>

<script>
import { useStore } from 'vuex';

export default {
	name: 'App',
	setup() {
		const store = useStore();
		function click() {
			store.dispatch('getRooms');
		}
		return {
			click,
		};
	},
	components: {},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
