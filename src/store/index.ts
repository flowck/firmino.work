import Vue from "vue";
import Vuex from "vuex";
import { Modules } from "./contants";
import { IRootState } from "./IRootState";
import { PostModule } from "./modules/postModule";

Vue.use(Vuex);

const rootState: IRootState = {
  isLoading: false
};

export default new Vuex.Store({
  actions: {},
  mutations: {},
  state: rootState,
  modules: { [Modules.POST_MODULE]: PostModule }
});
