import axios from "axios";
import { IPost, IRawPost } from "./IPost";
import { IRootState } from "./../../IRootState";
import { Actions, Getters } from "../../contants";
import { transformPosts, transformPost } from "./postUtils";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

interface IPostModuleState {
  posts: IPost[];
  currentPost: IPost | null;
}

enum Mutations {
  SET_POSTS = "SET_POSTS",
  SET_CURRENT_POST = "SET_CURRENT_POST"
}

const postModuleState: IPostModuleState = {
  posts: [],
  currentPost: null
};

const actions: ActionTree<IPostModuleState, IRootState> = {
  [Actions.GetPosts]: async ({ commit, dispatch }) => {
    try {
      const { data: posts }: { data: IRawPost[] } = await axios.get("/posts");
      commit(Mutations.SET_POSTS, transformPosts(posts));
    } catch (error) {
      dispatch(Actions.HandleRequestError, error);
    }
  },
  [Actions.GetCurrentPost]: async ({ commit }, id: string) => {
    const { data: post }: { data: IRawPost } = await axios.get(`/posts/${id}`);
    commit(Mutations.SET_CURRENT_POST, transformPost(post));
  },
  [Actions.SetCurrentPost]: ({ commit, dispatch, state }, id: string | null) => {
    if (!id) {
      commit(Mutations.SET_CURRENT_POST, null);
      return undefined;
    }

    const _id = id.split("__")[1];
    const post = state.posts.find((_post: IPost) => _post.id === _id);

    if (!post) {
      dispatch(Actions.GetCurrentPost, _id);
      return undefined;
    }

    commit(Mutations.SET_CURRENT_POST, post);
  },
  [Actions.HandleRequestError]: ({ dispatch }, error) => {
    console.log("SOMETHING FAILED");
  }
};

const mutations: MutationTree<IPostModuleState> = {
  [Mutations.SET_POSTS]: (state: IPostModuleState, posts: IPost[]) => {
    state.posts = posts;
  },
  [Mutations.SET_CURRENT_POST]: (state: IPostModuleState, post: IPost) => {
    state.currentPost = post;
  }
};

const getters: GetterTree<IPostModuleState, IRootState> = {
  [Getters.POSTS]: (state: IPostModuleState) => state.posts,
  [Getters.CURRENT_POST]: (state: IPostModuleState) => state.currentPost
};

export const PostModule: Module<IPostModuleState, IRootState> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: postModuleState
};
