import { createApp } from "vue";
import App from "./App.vue";

import vuetify from "@/plugins/vuetify";
import router from "./router";
import "@/styles/main.scss";

const app = createApp(App).use(router).use(vuetify);
app.mount("#app");
