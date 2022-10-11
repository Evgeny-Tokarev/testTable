<template>
  <div class="table container">
    <table>
      <thead>
        <tr>
          <th>{{ $t("table.header.date") }}</th>
          <th>{{ $t("table.header.title") }}</th>
          <th>{{ $t("table.header.quantity") }}</th>
          <th>{{ $t("table.header.distance") }}</th>
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
    <Pagination />
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "@/stores/store";
import { computed } from "@vue/reactivity";
import { reactive } from "vue";
import { ComponentState } from "@/models/componentState";
import Pagination from "@/components/Table/Pagination.vue";
const store = useStore();

const state: ComponentState = reactive({
  currentPage: 1,
  rowsPerPage: 5,
  paginatedRows: computed(() =>
    store.data.filter(
      (row, idx) =>
        idx + 1 <= state.currentPage * state.rowsPerPage &&
        idx + 1 > (state.currentPage - 1) * state.rowsPerPage
    )
  ),
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
.table {
  padding-top: 25px;
  height: calc(100vh - 5rem);
  background-color: var(--bg-color);

  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead {
    height: 50px;
  }
  th,
  td {
    text-align: center;
    border: 1px solid var(--text-color);
  }
  td:first-child {
    width: 20%;
  }
  td:nth-child(2) {
    width: 30%;
  }
  td:nth-child(3) {
    width: 25%;
  }
  td:last-child {
    width: 25%;
  }
}
</style>
