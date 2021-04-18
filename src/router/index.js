import { createWebHistory, createRouter } from 'vue-router';
import Room from '@/views/Room.vue';
import Home from '@/views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/room/:room',
		name: 'Room',
		component: Room,
		props: true,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
