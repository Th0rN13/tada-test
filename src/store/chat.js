import Vuex from 'vuex';
import { v4 as uuid } from '@lukeed/uuid';
import {
	getRooms,
	connectWebSocket,
	getSettings,
	getRoomHistory,
	sendMessage,
} from '@/helpers/api';

export const store = new Vuex.Store({
	state() {
		return {
			username: 'myname',
			rooms: [],
			messages: [],
			users: [],
			serverSettings: {},
			status: 'offline',
			sendQueue: [],
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
		addToQueue(state, message) {
			state.sendQueue.push(message);
		},
		filterQueue(state, filterId) {
			state.sendQueue = state.sendQueue.filter(({ id }) => id !== filterId);
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
			if (message.id) {
				store.commit('filterQueue', message.id);
			}
		},
		async newSendMessage(store, { text, room }) {
			const id = uuid();
			store.commit('addToQueue', { text, room, id });
			sendMessage(room, text, id);
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
