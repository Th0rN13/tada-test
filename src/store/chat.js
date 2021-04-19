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
			username: localStorage.getItem('username') || 'anonymous',
			rooms: [],
			openedRooms: new Set(),
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
		updateName(state, name) {
			state.username = name;
		},
		addOpenedRooms(state, room) {
			state.openedRooms.add(room);
		},
		closeOpenedRoom(state, room) {
			state.openedRooms.delete(room);
		},
	},
	actions: {
		async getRooms(store) {
			const rooms = await getRooms();
			store.commit('updateRooms', rooms?.result);
		},
		async getRoomHistory(store, room) {
			if (Number.isInteger(+store.state.settings?.max_room_title_length)) {
				room = room.slice(0, +store.state.settings?.max_room_title_length);
			}
			store.commit('addOpenedRooms', room);
			const roomHistory = await getRoomHistory(room);
			if (roomHistory) {
				store.commit('updateRoomHistory', roomHistory?.result);
				store.commit('removeDuplicateMessages');
			}
			return room;
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
		updateName(store, name) {
			if (name && name.length <= store.state.settings?.max_username_length) {
				localStorage.setItem('username', name);
				store.commit('updateName', name);
				return name;
			}
			return null;
		},
		closeRoom(store, room) {
			store.commit('closeOpenedRoom', room);
		},
	},
});

export function connectStoreToChat(store, username) {
	function statusCb(status) {
		store.dispatch('connectStatus', status);
	}
	function messageCb(message) {
		store.dispatch('message', message);
	}
	connectWebSocket(username, statusCb, messageCb);
}
