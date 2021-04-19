<template>
	<div class="input-wrap">
		<input type="text" :value="username" @change="change" @keydown.enter="updateName" />
		<button @click="updateName">Change name</button>
		<span><b v-if="nameChanged">name changed</b></span>
	</div>
	<div class="input-wrap">
		<input type="text" v-model="newRoom" @keydown.enter="gotoNewRoom" />
		<button @click="gotoNewRoom">Goto NewRoom</button>
	</div>
	<div class="rooms-wrap">
		<div class="room" v-for="room in roomList" :key="room">
			<router-link :to="`/room/${room.name}`">{{ room.name }}</router-link>
			<b>{{ room?.last_message?.sender?.username || 'unknown' }}</b>
			<span>{{ room?.last_message?.text }}</span>
		</div>
	</div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
	setup() {
		const store = useStore();
		const router = useRouter();
		const username = ref('');
		const newRoom = ref('');
		const nameChanged = ref(false);
		const loading = ref(false);
		const roomList = computed(() => store.state.rooms);
		const storeUsername = computed(() => store.state.username);

		onMounted(() => {
			username.value = store.state.username;
		});

		const updateName = () => {
			loading.value = true;
			store.dispatch('updateName', username.value).then((result) => {
				loading.value = false;
				if (result) {
					username.value = result;
					nameChanged.value = true;
					setTimeout(() => {
						nameChanged.value = false;
					}, 2000);
				} else {
					username.value = storeUsername.value;
				}
			});
		};

		const change = ({ target: { value } }) => {
			username.value = value;
		};

		const gotoNewRoom = () => {
			router.push(`/room/${newRoom.value}`);
		};

		return {
			username,
			updateName,
			roomList,
			change,
			nameChanged,
			newRoom,
			gotoNewRoom,
		};
	},
};
</script>

<style>
.input-wrap {
	padding: 8px;
}
.input-wrap input {
	padding: 4px;
	width: 200px;
	margin-right: 8px;
}
.input-wrap button {
	padding: 4px;
	width: 120px;
}
.rooms-wrap {
	padding: 8px;
}
.room {
	display: flex;
	padding: 12px;
}
.room:hover {
	background-color: whitesmoke;
}
.room a {
	width: 200px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	margin-right: 8px;
}
.room b {
	margin-right: 8px;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 200px;
	max-height: 48px;
	overflow: hidden;
}
.room span {
	margin-left: 8px;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 600px;
	overflow: hidden;
}
</style>
