<template>
	<button class="scroll-icon" @click="toggle">{{ needScroll ? 'v' : 'x' }}</button>
</template>

<script>
export default {
	name: 'ScrollIcon',
	props: ['needScroll'],
	setup(props, { emit }) {
		const toggle = () => {
			emit('toggle-scroll', !props.needScroll);
		};
		return {
			toggle,
		};
	},
};
</script>

<style>
.scroll-icon {
	position: absolute;
	border-radius: 50%;
	width: 48px;
	height: 48px;
	background-color: blue;
	color: white;
	border: none;
	bottom: 56px;
	right: 24px;
	font-size: 2.5em;
}
</style>
