import axios from "axios";
import { IPost, IRawPost } from "./IPost";
import { Actions, Getters } from "../../contants";
import { IRootState } from "./../../IRootState";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { transformPosts } from "./postUtils";

interface IPostModuleState {
  posts: IPost[];
}

enum Mutations {
  SET_POSTS = "SET_POSTS"
}

const postModuleState: IPostModuleState = {
  posts: []
};

const actions: ActionTree<IPostModuleState, IRootState> = {
  [Actions.GetPosts]: async ({ commit }) => {
    const { data: posts }: { data: IRawPost[] } = await axios.get("/posts");
    console.log(JSON.stringify(posts[0]));
    commit(Mutations.SET_POSTS, transformPosts(posts));
  }
};

const mutations: MutationTree<IPostModuleState> = {
  [Mutations.SET_POSTS]: (state: IPostModuleState, posts: IPost[]) => {
    state.posts = posts;
  }
};

const getters: GetterTree<IPostModuleState, IRootState> = {
  [Getters.POSTS]: (state: IPostModuleState) => state.posts
};

export const PostModule: Module<IPostModuleState, IRootState> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: postModuleState
};
