<template>
	<div class="main-content">
		<Filters />
		<Table />
	</div>
</template>
<script lang="ts" setup>
import Table from '@/components/MainContent/Table.vue'
import Filters from '@/components/MainContent/Filters.vue'
</script>
<style lang="scss" scoped>
.main-content {
	padding-top: 25px;
	position: relative;
	z-index: 0;
}
</style>
