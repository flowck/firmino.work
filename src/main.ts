import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/components/_globals";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_API;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
