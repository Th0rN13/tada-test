<template>
	<div class="nav">
		<router-link to="/" exact>Home</router-link>
		<router-link to="/room/name">Room</router-link>
	</div>
</template>

<style>
.nav {
	flex: 0 0 48px;
	display: flex;
	align-items: center;
	padding: 0 24px;
}
.nav a {
	padding: 8px;
	color: blue;
	text-decoration: none;
}
</style>
