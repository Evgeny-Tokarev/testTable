<template>
  <div class="main-content">
    <Filters />
    <Table />
  </div>
</template>
<script lang="ts" setup>
import Table from "@/components/MainContent/Table.vue";
import Filters from "@/components/MainContent/Filters.vue";
</script>
<style lang="scss" scoped>
.main-content {
  background-color: var(--bg-color);
}
</style>
