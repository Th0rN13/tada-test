<template>
	<div class="nav">
		<div class="name-wrapper">
			<div v-if="!editNameMode" class="name-change" title="Кликните, чтобы поменять">
				<div class="name-change-hint">Ваше имя:</div>
				<b>{{ username }}</b>
				<button class="change-button" @click="enterEditNameMode">Поменять</button>
			</div>
			<div v-if="editNameMode" class="input-name">
				<input
					type="text"
					placeholder="Введите имя"
					v-model="inputtedName"
					@keydown.enter="changeName"
				/>
				<button class="ok" @click="changeName">Поменять имя</button>
				<button class="cancel" @click="dontChangeName">x</button>
			</div>
		</div>
		<div class="room-wrapper">
			<div v-if="!editRoomMode" class="room-change">
				{{ roomName }}
				<button class="change-button" @click="enterEditRoomMode">Создать новую</button>
				<input type="checkbox" class="hidden" v-model="editRoomMode" />
			</div>
			<div v-if="editRoomMode" class="input-room">
				<input
					type="text"
					placeholder="Введите название комнаты"
					v-model="inputtedRoom"
					@keydown.enter="openRoom"
				/>
				<button class="ok" @click="openRoom">Создать комнату</button>
				<button class="cancel" @click="dontOpenRoom">x</button>
			</div>
			<div v-if="loading">loading...</div>
			<div
				class="status"
				:class="{ online: status }"
				:title="`Connection status: ${status ? 'ok' : 'bad'}`"
			></div>
		</div>
	</div>
</template>

<script>
import { computed, watch, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

export default {
	props: ['status'],
	setup() {
		const router = useRouter();
		const route = useRoute();
		const store = useStore();
		const openedRooms = computed(() => store.state.openedRooms);
		const username = computed(() => store.state.username);
		const roomName = computed(() => route.path.replace('/room/', ''));
		const editNameMode = ref(false);
		const inputtedName = ref(username.value);
		const editRoomMode = ref(roomName.value === '/');
		const inputtedRoom = ref('');
		const loading = ref(false);

		const enterEditNameMode = () => {
			editNameMode.value = true;
		};

		const changeName = () => {
			editNameMode.value = false;
			loading.value = true;
			store.dispatch('updateName', inputtedName.value).then((result) => {
				inputtedName.value = result;
				loading.value = false;
			});
		};

		const dontChangeName = () => {
			editNameMode.value = false;
		};

		const enterEditRoomMode = () => {
			editRoomMode.value = true;
		};

		const openRoom = () => {
			editRoomMode.value = false;
			store.dispatch('createRoom', inputtedRoom.value).then((result) => {
				if (result) router.push(`/room/${result}`);
			});
		};

		const dontOpenRoom = () => {
			editRoomMode.value = false;
		};

		watch(openedRooms, (newOpened, oldOpened) => {
			if (!newOpened.has(roomName) && oldOpened.has(roomName)) {
				router.push('/');
			}
		});

		watch(roomName, () => {
			editRoomMode.value = false;
		});

		return {
			openedRooms,
			close,
			username,
			editNameMode,
			inputtedName,
			changeName,
			dontChangeName,
			loading,
			editRoomMode,
			inputtedRoom,
			openRoom,
			dontOpenRoom,
			roomName,
			enterEditNameMode,
			enterEditRoomMode,
		};
	},
};
</script>

<style>
.name-change {
	cursor: pointer;
}
.hidden {
	display: none;
}
.nav {
	flex: 0 0 48px;
	display: flex;
	align-items: center;
	padding: 0 24px;
	position: relative;
}
.nav a {
	padding: 8px;
	color: blue;
	text-decoration: none;
}
.status {
	position: absolute;
	right: 8px;
	width: 24px;
	height: 24px;
	top: calc(50% - 12px);
	border-radius: 50%;
	background-color: red;
}
.status.online {
	background-color: greenyellow;
}
.link {
	padding: 8px;
	border-radius: 4px;
}
.router-link-exact-active {
	background-color: wheat;
}
.name-wrapper {
	width: 400px;
}
.name-change {
	display: flex;
	align-items: center;
}
.name-change-hint {
	margin-right: 8px;
}
.ok {
	color: green;
}
.cancel {
	color: red;
}
.change-button {
	margin-left: 8px;
}
</style>
