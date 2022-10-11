<template>
  <div class="menu">
    <LocaleSwitcher class="locale-switcher" />
    <Button class="theme-button" @click="setTheme(store.theme)">
      <img
        class="theme-icon"
        :src="store.theme === 'dark' ? Moon : Sun"
        alt="theme icon"
      />
    </Button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed, onMounted, ref } from "vue";
import { useStore } from "@/stores/store";
import Button from "@/components/reusable/Button.vue";
import LocaleSwitcher from "@/components/reusable/LocaleSwitcher.vue";
import Moon from "@/assets/images/moon.svg";
import Sun from "@/assets/images/sun.svg";
import { getWidth } from "@/composables/resizeController";

const store = useStore();
const width = getWidth();
const state = reactive({});
onMounted(() => {
  setTheme(store.theme);
});
const setTheme = (theme: string) => {
  document.documentElement.className = theme;
  store.theme = theme === "dark" ? "light" : "dark";
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
.menu {
  display: flex;
  justify-content: space-between;
  padding: 0 2.5%;
  align-items: stretch;
  min-height: 5rem;
  background-color: var(--primary);
  position: relative;
  z-index: 0;

  .navbar {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .navbar_hidden {
    display: none;
  }

  .menu-button {
    background: var(--bg-color);
    color: var(--text-color);
  }

  .burger-button {
    align-self: center;
    background-color: var(--bg-color);
    color: var(--text-color);
  }

  .burger-icon {
    position: relative;
    width: 30px;
    height: 20px;
    border-top: 2px solid var(--text-color);
    border-bottom: 2px solid var(--text-color);
  }

  .burger-icon::before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: calc(50% - 1px);
    height: 2px;
    background-color: var(--text-color);
  }

  .locale-switcher {
    margin-left: auto;
  }

  .theme-button {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    padding: 5px;
    margin-left: 10px;
    background-color: var(--bg-color);
  }

  .theme-icon {
    width: 25px;
    height: 25px;
  }

  @media screen and (min-width: 800px) {
    padding: 0 10%;

    .navbar {
      position: static;
      flex-direction: row;
    }

    .navbar_hidden {
      display: flex;
    }

    .theme-button {
      margin-left: 20px;
    }
  }
}
</style>
