<template>
	<div class="table container">
		<div class="table__wrapper">
			<table>
				<thead>
					<tr>
						<th>{{ $t('table.header.date') }}</th>
						<th>{{ $t('table.header.title') }}</th>
						<th>{{ $t('table.header.quantity') }}</th>
						<th>{{ $t('table.header.distance') }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(row, idx) in state.paginatedRows" :key="idx">
						<td>{{ row.date }}</td>
						<td>{{ row.title }}</td>
						<td>{{ row.quantity }}</td>
						<td>{{ row.distance }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<Pagination
			:pages="Math.floor(state.filteredRows.length / state.rowsPerPage)"
			:currentPage="state.currentPage"
			@page-change="(page: number) => (state.currentPage = page)" />
	</div>
</template>
<script lang="ts" setup>
import { useStore } from '@/stores/store'
import { computed } from '@vue/reactivity'
import { reactive } from 'vue'
import { ComponentState } from '@/models/componentState'
import Pagination from '@/components/Table/Pagination.vue'
const store = useStore()

const state: ComponentState = reactive({
	currentPage: 1,
	rowsPerPage: 5,
	filteredRows: store.data,
	paginatedRows: computed(() =>
		state.filteredRows.filter(
			(_: any, idx: number) =>
				idx + 1 <= state.currentPage * state.rowsPerPage &&
				idx + 1 > (state.currentPage - 1) * state.rowsPerPage
		)
	),
})
const floatRegex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/
store.$subscribe(() => {
	state.filteredRows = store.data.filter(row => {
		if (store.filter.column && store.filter.condition && store.filter.value) {
			switch (store.filter.condition) {
				case 'equals':
					return row[store.filter.column] === store.filter.value
				case 'contains':
					return row[store.filter.column].includes(store.filter.value)
				case 'greater':
					if (
						floatRegex.test(row[store.filter.column]) &&
						floatRegex.test(store.filter.value)
					) {
						return Number(row[store.filter.column]) > Number(store.filter.value)
					} else return row[store.filter.column] > store.filter.value
				case 'less':
					if (
						floatRegex.test(row[store.filter.column]) &&
						floatRegex.test(store.filter.value)
					) {
						return Number(row[store.filter.column]) < Number(store.filter.value)
					} else return row[store.filter.column] < store.filter.value
			}
		} else return true
	})
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.table {
	padding: 25px 0;
	min-height: 50vh;
	&__wrapper {
		min-width: 100%;
		overflow-x: auto;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		box-shadow: 0 6px 15px -5px var(--text-color);
	}
	thead {
		height: 50px;
	}
	th,
	td {
		text-align: center;
		border: 1px solid var(--text-color);
		padding: 0 5px;
		white-space: nowrap;
	}
	td:first-child,
	th:first-child {
		width: 20%;
	}
	td:nth-child(2),
	th:nth-child(2) {
		width: 40%;
	}
	td:nth-child(3),
	th:nth-child(2) {
		width: 20%;
	}
	td:last-child,
	th:last-child {
		width: 20%;
	}
}
</style>
