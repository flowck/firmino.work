import Vue from "vue";
import { IRootState } from "./IRootState";
import { PostModule } from "./modules/postModule";
import { Actions, Modules, Mutations } from "./contants";
import Vuex, { GetterTree, ActionTree, MutationTree } from "vuex";

Vue.use(Vuex);

const rootState: IRootState = {
  isLoading: false
};

const getters: GetterTree<IRootState, IRootState> = {
  isLoading: (state: IRootState) => state.isLoading
};

const actions: ActionTree<IRootState, IRootState> = {
  [Actions.SetLoading]: ({ commit }, status: boolean) => {
    commit(Mutations.SET_LOADING, status);
  }
};

const mutations: MutationTree<IRootState> = {
  [Mutations.SET_LOADING]: (state: IRootState, status: boolean) => {
    state.isLoading = status;
  }
};

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  state: rootState,
  modules: { [Modules.POST_MODULE]: PostModule }
});
