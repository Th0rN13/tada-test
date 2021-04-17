import Vuex from 'vuex';
import { getRooms } from '@/helpers/api';

export const store = new Vuex.Store({
	state() {
		return {
			rooms: [],
			messages: [],
			users: [],
			serverSettings: {},
		};
	},
	getters: {},
	mutations: {
		updateRooms(state, payload) {
			state.rooms = payload;
		},
	},
	actions: {
		async getRooms(store) {
			const rooms = await getRooms();
			store.commit('updateRooms', rooms?.result);
		},
	},
});
