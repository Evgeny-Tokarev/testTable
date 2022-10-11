<template>
  <div class="dropdown">
    <h3 :for="props.placeholder" class="dropdown__title">
      {{ props.placeholder }}
    </h3>
    <div class="dropdown__menu">
      <h4 class="dropdown__placeholder">{{ state.selectedItem }}</h4>
      <div
        class="dropdown__arrow-button"
        :class="state.showMenu ? 'dropdown__arrow-button_activated' : ''"
        @click="state.showMenu = !state.showMenu"
      ></div>
    </div>
    <ul
      class="dropdown__list"
      :class="state.showMenu ? 'dropdownt__list_shown' : ''"
    >
      <li
        class="dropdown__menu-item"
        v-for="(item, idx) in props.items"
        :key="idx"
      >
        {{ item }}
      </li>
    </ul>

    <div class="dropdown__select-arrow"></div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { ComponentState } from "@/models/componentState";
interface Props {
  placeholder: string;
  items: string[];
}
const props = defineProps<Props>();
const state: ComponentState = reactive({
  selectedItem: props.items[0],
  showMenu: false,
});
</script>

<style lang="scss" scoped>
.dropdown {
  width: 300px;
  color: black;
  &__title {
    color: var(--text-color);
  }
  &__menu {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    background-color: var(--bg-color);
    border: 1px solid var(--text-color);
    border-radius: 5px;
    height: 40px;
  }
  &__list {
    list-style: none;
    padding: none;
    display: none;
  }
  &__list_shown {
    display: flex;
  }
  &__placeholder {
    color: var(--text-color);
  }
  &__arrow-button {
    width: 20px;
    height: 20px;
    border-left: 2px solid var(--text-color);
    border-top: 2px solid var(--text-color);
    transform: rotate(45deg) translateY(5px);
    cursor: pointer;
    transition: all 0.5s;
  }
  &__arrow-button_activated {
    transform: rotate(225deg) translateX(5px);
    transition: all 0.5s;
  }
}
</style>
