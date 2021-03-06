import axios from "axios";
import { IRootState } from "./../../IRootState";
import { Actions, Getters } from "../../contants";
import { IPost, IRawPost, IPostsPerYear } from "./IPost";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { transformPosts, transformPost, aggreatePostsPerYear, sortPostsAggregationPerYear } from "./postService";

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
  /**
   * getPosts
   * @param perPage - Posts per page
   */
  [Actions.GetPosts]: async ({ commit, dispatch }, perPage?: number) => {
    dispatch(Actions.SetLoading, true, { root: true });
    try {
      const options = { params: { ["per_page"]: perPage, _embed: "" } };
      const { data: posts }: { data: IRawPost[] } = await axios.get("/posts", options);
      commit(Mutations.SET_POSTS, transformPosts(posts));
    } catch (error) {
      dispatch(Actions.HandleRequestError, error);
    }
    dispatch(Actions.SetLoading, false, { root: true });
  },
  /**
   * getPost
   * @param id - Post id
   */
  [Actions.GetCurrentPost]: async ({ commit, dispatch }, id: string) => {
    dispatch(Actions.SetLoading, true, { root: true });
    try {
      const options = { params: { _embed: "" } };
      const { data: post }: { data: IRawPost } = await axios.get(`/posts/${id}`, options);
      commit(Mutations.SET_CURRENT_POST, transformPost(post));
    } catch (error) {
      dispatch(Actions.HandleRequestError, error);
    }
    dispatch(Actions.SetLoading, false, { root: true });
  },
  /**
   * setCurrentPost
   * @param id - Post id
   */
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
  /**
   * handleRequestError
   */
  [Actions.HandleRequestError]: (context, error) => {
    console.log("SOMETHING FAILED");
    console.log(error);
  },
  /**
   * cleanPosts
   */
  [Actions.CleanPosts]: ({ commit }) => {
    commit(Mutations.SET_POSTS, []);
  }
};

const mutations: MutationTree<IPostModuleState> = {
  /**
   * SET_POST
   */
  [Mutations.SET_POSTS]: (state: IPostModuleState, posts: IPost[]) => {
    state.posts = posts;
  },
  /**
   * SET_CURRENT_POST
   */
  [Mutations.SET_CURRENT_POST]: (state: IPostModuleState, post: IPost) => {
    state.currentPost = post;
  }
};

const getters: GetterTree<IPostModuleState, IRootState> = {
  /**
   * posts
   * @returns {IPost[]} - Posts
   */
  [Getters.POSTS]: (state: IPostModuleState) => state.posts,
  /**
   * currentPost
   * @returns {IPost|null} - Selected post
   */
  [Getters.CURRENT_POST]: (state: IPostModuleState): IPost | null => state.currentPost,
  /**
   * postsPerYear: Aggregates posts per year
   * @returns {IPostsPerYear[]} - A list of posts grouped per year
   */
  [Getters.POSTS_PER_YEAR]: (state: IPostModuleState): IPostsPerYear[] => {
    const groups = aggreatePostsPerYear(state.posts);
    return sortPostsAggregationPerYear(groups);
  }
};

export const PostModule: Module<IPostModuleState, IRootState> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: postModuleState
};
