<template>
  <div class="filters container">
    <Dropdown
      :items="['date', 'name', 'quantity', 'distance']"
      :placeholder="$t('filters.column_items')"
    />
  </div>
</template>
<script lang="ts" setup>
import Dropdown from "@/components/MainContent/Dropdown.vue";
import { useStore } from "@/stores/store";
const store = useStore();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
.filters {
}
</style>
