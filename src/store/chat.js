import Vuex from 'vuex';
import { getRooms, connectWebSocket } from '@/helpers/api';

export const store = new Vuex.Store({
	state() {
		return {
			rooms: [],
			messages: [],
			users: [],
			serverSettings: {},
			status: 'offline',
		};
	},
	getters: {},
	mutations: {
		updateRooms(state, payload) {
			state.rooms = payload;
		},
		updateStatus(state, payload) {
			state.status = payload ? 'online' : 'offline';
		},
	},
	actions: {
		async getRooms(store) {
			const rooms = await getRooms();
			store.commit('updateRooms', rooms?.result);
		},
		async connectStatus(store, status) {
			store.commit('updateStatus', status);
		},
		async message(store, message) {
			console.log('action message: ', message);
		},
	},
});

export function connectStoreToChat(store) {
	function statusCb(status) {
		store.dispatch('connectStatus', status);
	}
	function messageCb(message) {
		store.dispatch('message', message);
	}
	connectWebSocket('myname', statusCb, messageCb);
}
