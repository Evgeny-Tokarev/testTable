<template>
	<div class="table container">
		<div class="table__wrapper">
			<table>
				<thead>
					<tr>
						<th>
							<div class="table__th-inner">
								<h4
									:style="{
										marginTop: 'auto',
									}">
									{{ $t('table.header.date') }}
								</h4>
							</div>
						</th>
						<th>
							<div class="table__th-inner">
								<SortSwitcher
									:active-type="
										store.sort.column === 'title' ? store.sort.type : ''
									"
									@change-sort="
										type => (store.sort = { column: 'title', type: type })
									" />
								<h4>{{ $t('table.header.title') }}</h4>
							</div>
						</th>
						<th>
							<div class="table__th-inner">
								<SortSwitcher
									:active-type="
										store.sort.column === 'quantity' ? store.sort.type : ''
									"
									@change-sort="
										type => (store.sort = { column: 'quantity', type: type })
									" />
								<h4>{{ $t('table.header.quantity') }}</h4>
							</div>
						</th>
						<th>
							<div class="table__th-inner">
								<SortSwitcher
									:active-type="
										store.sort.column === 'distance' ? store.sort.type : ''
									"
									@change-sort="
										type => (store.sort = { column: 'distance', type: type })
									" />
								<h4>{{ $t('table.header.distance') }}</h4>
							</div>
						</th>
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
			:pages="Math.floor(state.rows.length / state.rowsPerPage)"
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
import SortSwitcher from '@/components/Table/SortSwitcher.vue'
import { TableData } from '@/models/tableData'
const store = useStore()

const state: ComponentState = reactive({
	currentPage: 1,
	rowsPerPage: 5,
	rows: store.data,
	paginatedRows: computed(() =>
		state.rows.filter(
			(_: any, idx: number) =>
				idx + 1 <= state.currentPage * state.rowsPerPage &&
				idx + 1 > (state.currentPage - 1) * state.rowsPerPage
		)
	),
})
const numberRegex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/
store.$subscribe(() => {
	const filteredRows = filterRows()
	if (!(store.sort.column && store.sort.type)) state.rows = filteredRows
	else state.rows = sortRows(filteredRows)
	if (state.currentPage > Math.floor(state.rows.length / state.rowsPerPage))
		state.currentPage = 1
})

function sortRows(filteredRows: TableData[]) {
	switch (store.sort.column) {
		case 'title':
			return filteredRows.sort((a: TableData, b: TableData) => {
				if (store.sort.column && store.sort.type) {
					if (store.sort.type === 'up')
						return a[store.sort.column] > b[store.sort.column] ? 1 : -1
					else return a[store.sort.column] < b[store.sort.column] ? 1 : -1
				} else return 0
			})

		case 'quantity':
			return filteredRows.sort((a: TableData, b: TableData) => {
				if (store.sort.column && store.sort.type) {
					if (store.sort.type === 'up')
						return +a[store.sort.column] - +b[store.sort.column]
					else return +b[store.sort.column] - +a[store.sort.column]
				} else return 0
			})
		case 'distance':
			return filteredRows.sort((a: TableData, b: TableData) => {
				if (store.sort.column && store.sort.type) {
					if (store.sort.type === 'up')
						return +a[store.sort.column] - +b[store.sort.column]
					else return +b[store.sort.column] - +a[store.sort.column]
				} else return 0
			})
	}
}

function filterRows() {
	return store.data.filter(row => {
		if (store.filter.column && store.filter.condition && store.filter.value) {
			switch (store.filter.condition) {
				case 'equals':
					return row[store.filter.column] === store.filter.value
				case 'contains':
					return row[store.filter.column].includes(store.filter.value)
				case 'greater':
					if (
						numberRegex.test(row[store.filter.column]) &&
						numberRegex.test(store.filter.value)
					) {
						return Number(row[store.filter.column]) > Number(store.filter.value)
					} else return row[store.filter.column] > store.filter.value
				case 'less':
					if (
						numberRegex.test(row[store.filter.column]) &&
						numberRegex.test(store.filter.value)
					) {
						return Number(row[store.filter.column]) < Number(store.filter.value)
					} else return row[store.filter.column] < store.filter.value
			}
		} else return true
	})
}
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

	&__th-inner {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-between;
		height: 80px;
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
