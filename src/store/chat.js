import Vuex from 'vuex';
import { getRooms, connectWebSocket, getSettings, getRoomHistory } from '@/helpers/api';

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
	getters: {
		roomMessages: (state) => (findRoom) => {
			return state.messages.filter(({ room }) => findRoom === room);
		},
	},
	mutations: {
		removeDuplicateMessages(state) {
			state.messages = state.messages.filter(
				({ created }, idx, arr) => idx === arr.findIndex((msg) => msg.created === created),
			);
		},
		updateRooms(state, payload) {
			state.rooms = payload;
		},
		updateRoomHistory(state, payload) {
			state.messages = state.messages.concat(payload);
		},
		updateSettings(state, payload) {
			state.settings = payload;
		},
		updateStatus(state, payload) {
			state.status = payload ? 'online' : 'offline';
		},
		message(state, message) {
			state.messages.push(message);
		},
	},
	actions: {
		async getRooms(store) {
			const rooms = await getRooms();
			store.commit('updateRooms', rooms?.result);
		},
		async getRoomHistory(store, room) {
			const roomHistory = await getRoomHistory(room);
			store.commit('updateRoomHistory', roomHistory?.result);
			store.commit('removeDuplicateMessages');
		},
		async getSettings(store) {
			const settings = await getSettings();
			store.commit('updateSettings', settings?.result);
		},
		async connectStatus(store, status) {
			store.commit('updateStatus', status);
		},
		async message(store, message) {
			store.commit('message', message);
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
