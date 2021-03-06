export enum Actions {
  GetPosts = "getPosts",
  SetLoading = "setLoading",
  CleanPosts = "cleanPosts",
  SetCurrentPost = "setCurrentPost",
  GetCurrentPost = "getCurrentPost",
  HandleRequestError = "handleRequestError"
}

export enum Modules {
  POST_MODULE = "postModule"
}

export enum Getters {
  POSTS = "posts",
  IS_LOADING = "isLoading",
  CURRENT_POST = "currentPost",
  POSTS_PER_YEAR = "postsPerYear"
}

export enum Mutations {
  SET_LOADING = "SET_LOADING"
}

export enum Order {
  ASC = "ASC",
  DESC = "DESC"
}
