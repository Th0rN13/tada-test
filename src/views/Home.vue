<template>
	<div class="wrap">
		<RoomList />

		<!-- <div class="input-wrap">
		<input
			type="text"
			placeholder="Введите имя"
			:value="username"
			@change="change"
			@keydown.enter="updateName"
		/>
		<button @click="updateName">Изменить имя</button>
		<span><b v-if="nameChanged">Имя изменено</b></span>
	</div>
	<div class="input-wrap">
		<input
			placeholder="Введите название комнаты"
			type="text"
			v-model="newRoom"
			@keydown.enter="gotoNewRoom"
		/>
		<button @click="gotoNewRoom">Создать новую комнату</button>
	</div> -->
		<div class="empty-room">Выберите комнату</div>
	</div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import RoomList from '@/components/RoomList.vue';

export default {
	name: 'HomePage',
	components: { RoomList },
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
			if (newRoom.value.trim()) {
				router.push(`/room/${newRoom.value}`);
			}
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
.empty-room {
	padding: 8px;
}
</style>
