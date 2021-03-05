import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueMeta from "vue-meta";

import "./filters";
import "@/components/_globals";

Vue.config.productionTip = false;

Vue.use(VueMeta, { refreshOnceOnNavigation: true });

axios.defaults.baseURL = process.env.VUE_APP_API;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
