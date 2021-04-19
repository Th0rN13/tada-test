<template>
	<div class="nav">
		<router-link to="/" exact>Home</router-link>
		<router-link to="/room/kozma">Kozma room</router-link>
		<router-link to="/room/user_room">User room</router-link>
		<div class="status" :class="{ online: status }"></div>
	</div>
</template>

<script>
export default {
	props: ['status'],
	setup() {
		return {};
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
