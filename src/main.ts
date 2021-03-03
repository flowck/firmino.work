import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { register } from "./components/_globals";

const app = createApp(App)
  .use(store)
  .use(router);

register(app);

app.mount("#app");
