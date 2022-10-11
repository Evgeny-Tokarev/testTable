import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "@/assets/styles/main.scss";
import { createI18n } from "vue-i18n";
import messages from "@/locales/locale";

const i18n = createI18n({
  allowComposition: true,
  locale: "en",
  messages,
});
const app = createApp(App);
app.use(createPinia());
app.use(i18n);
app.mount("#app");
