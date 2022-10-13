<template>
	<div class="filters container">
		<Dropdown
			:items="['title', 'quantity', 'distance']"
			:heading="$t('filters.column_title')"
			filterType="column" />
		<Dropdown
			:items="['equals', 'contains', 'greater', 'less']"
			:heading="$t('filters.condition_title')"
			filterType="condition" />
		<TextField :placeholder="$t('filters.value_title')" />
	</div>
</template>
<script lang="ts" setup>
import Dropdown from '@/components/reusable/Dropdown.vue'
import TextField from '@/components/reusable/TextField.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.filters {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 10px;
}
</style>
