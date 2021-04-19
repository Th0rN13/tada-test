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
		roomQueue: (state) => (findRoom) => {
			return state.sendQueue.filter(({ room }) => findRoom === room);
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
		updateRoomsMessage(state, message) {
			if (message?.room) {
				const findRoom = state.rooms.find(({ name }) => name === message?.room);
				if (findRoom) {
					findRoom.last_message = message;
				}
			}
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
			store.commit('updateRoomsMessage', message);
			if (message.id) {
				store.commit('filterQueue', message.id);
			}
		},
		async newSendMessage(store, { text, room }) {
			const id = uuid();
			if (
				Number.isInteger(+store.state.settings?.max_message_length) &&
				text.length > +store.state.settings?.max_message_length
			) {
				text = text.slice(0, +store.state.settings?.max_message_length);
			}
			store.commit('addToQueue', {
				text,
				room,
				id,
				sender: { username: store.state.username },
			});
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
		tryRepeatSend(store, repeatId) {
			const { id, room, text } = store.state.sendQueue.find((el) => el.id === repeatId);
			sendMessage(room, text, id);
		},
		clearMessage(store, id) {
			store.commit('filterQueue', id);
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
