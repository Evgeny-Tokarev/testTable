<template>
  <div class="pagination">
    {{ state.currentPage }}
    <Button
      class="pagination__prev-button custom-button_type_elevated"
      button-text="&lt;"
    />
    <div class="pagination__pages">
      <Button
        class="pagination__page-button custom-button_type_elevated"
        :class="
          page === state.currentPage ? 'pagination__page-button_active' : ''
        "
        v-for="page in state.pages <= 5
          ? state.pages
          : state.currentPage > 2
          ? 1
          : [1, 2, 3]"
        :key="page"
        :button-text="page"
        @click="goToPage(page)"
      />
    </div>
    <div
      class="pagination__ellipsis"
      v-if="state.pages > 5 && state.currentPage > 2"
    >
      ...
    </div>
    <Button
      class="pagination__page-button custom-button_type_elevated"
      :class="
        page === state.currentPage ? 'pagination__page-button_active' : ''
      "
      v-for="page in state.pages > 5 &&
      state.currentPage > 2 &&
      state.currentPage < pages
        ? [state.currentPage - 1, state.currentPage, state.currentPage + 1]
        : state.currentPage === pages
        ? [state.currentPage - 2, state.currentPage - 1, state.currentPage]
        : []"
      :key="page"
      :button-text="page"
      @click="goToPage(page)"
    />
    <div
      class="pagination__ellipsis"
      v-if="state.pages > 5 && state.currentPage < state.pages - 1"
    >
      ...
    </div>
    <Button
      class="pagination__page-button custom-button_type_elevated"
      :class="
        page === state.currentPage ? 'pagination__page-button_active' : ''
      "
      v-for="page in state.pages <= 5
        ? []
        : state.currentPage < state.pages - 1
        ? [state.pages]
        : []"
      :key="page"
      :button-text="page"
      @click="goToPage(page)"
    />
    <Button
      class="pagination__next-button custom-button_type_elevated"
      button-text=">"
      @click="
        state.currentPage < state.pages
          ? ++state.currentPage
          : (state.currentPage = 1)
      "
    />
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch } from "vue";
import { ComponentState } from "@/models/componentState";
import Button from "@/components/reusable/Button.vue";
import { useStore } from "@/stores/store";

interface Props {
  pages: number;
  currentPage: number;
}

const props = defineProps<Props>();
const store = useStore();
const emit = defineEmits<{
  (e: "pageChange", page: number): void;
}>();
const state: ComponentState = reactive({
  pages: props.pages,
  currentPage: props.currentPage,
});

watch(
  () => props,
  () => {
    state.pages = props.pages;
    state.currentPage = props.currentPage;
  },
  { deep: true }
);

function goToPage(page: number) {
  emit("pageChange", page);
}
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 10px;
  &__prev-button,
  &__next-button,
  &__page-button {
    color: var(--text-color);
    padding: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 25px;
    font-weight: 800;
    border: 1px solid var(--text-color);
    background-color: var(--bg-color);
    border-radius: 50%;
    transition: all 0.2s;
  }
  &__pages {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  &__page-button_active {
    box-shadow: none;
    margin-top: 4px;
    margin-bottom: -4px;
    transition: all 0.2s;
  }
  &__page-button_active:after {
    bottom: 5px;
    transition: all 0.2s;
  }
}
</style>
