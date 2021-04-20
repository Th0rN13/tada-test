<template>
	<button
		v-if="!needScroll"
		class="scroll-icon"
		@click="toggle"
		title="Прокручивать к новым сообщениям"
	>
		v
	</button>
</template>

<script>
export default {
	name: 'ScrollIcon',
	props: ['needScroll'],
	setup(props, { emit }) {
		const toggle = () => {
			emit('toggle-scroll');
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
	bottom: 40px;
	right: 24px;
	font-size: 2.5em;
	outline: none;
	border: 2px solid transparent;
}
.scroll-icon:active {
	border: 2px solid rgb(0, 0, 151);
}
</style>
