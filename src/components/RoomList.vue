<template>
	<div class="rooms-wrap">
		<router-link
			v-for="room in roomList"
			:key="room"
			:to="`/room/${room.name}`"
			custom
			v-slot="{ href, navigate }"
		>
			<a :href="href" class="room" @click="navigate">
				<div class="room__title">Комната: {{ room.name }}</div>
				<div class="room__last-message">Последнее сообщение:</div>
				<div class="room__last-message">
					<span class="room__last-author">{{
						room?.last_message?.sender?.username || 'unknown'
					}}</span
					>:
					<span class="room__last-text">{{ room?.last_message?.text }}</span>
				</div>
			</a>
		</router-link>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
	name: 'RoomList',
	setup() {
		const store = useStore();
		const roomList = computed(() => store.state.rooms);

		return {
			roomList,
		};
	},
};
</script>

<style>
.rooms-wrap {
	padding: 0px;
	flex: 0 0 320px;
	width: 320px;
	border-right: 1px solid gray;
	height: 100%;
	overflow: auto;
}
.room {
	text-decoration: none;
	color: inherit;
	display: flex;
	flex-wrap: wrap;
	padding: 8px;
	cursor: pointer;
	border-bottom: 1px solid gray;
}
.room:last-child {
	border-bottom: none;
}
.room:hover {
	background-color: whitesmoke;
}
.room__title {
	width: 100%;
	font-weight: 700;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.room__last-message {
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.room__last-author {
	color: black;
}
.room__last-message {
	color: gray;
}
</style>
