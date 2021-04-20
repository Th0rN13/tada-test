<template>
	{{ result }}
</template>

<script>
import { computed } from 'vue';

export default {
	name: 'TimeDate',
	props: ['date'],
	setup(props) {
		const today = new Date();
		const yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		const todayStr = today.toLocaleDateString('ru', {
			year: '2-digit',
			month: '2-digit',
			day: '2-digit',
		});
		const yesterdayStr = yesterday.toLocaleDateString('ru', {
			year: '2-digit',
			month: '2-digit',
			day: '2-digit',
		});

		const result = computed(() => {
			const date = new Date(props.date);
			const timeStr = date.toLocaleTimeString('ru', {
				hour: '2-digit',
				minute: '2-digit',
			});
			const dateStr = date.toLocaleDateString('ru', {
				year: '2-digit',
				month: '2-digit',
				day: '2-digit',
			});
			if (todayStr === dateStr) return timeStr;
			return yesterdayStr === dateStr ? 'Вчера' : dateStr;
		});

		return {
			result,
		};
	},
};
</script>
