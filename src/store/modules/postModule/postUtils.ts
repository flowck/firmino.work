import { IPost, IRawPost } from "./IPost";

/**
 * transformPost: It maps all the fields needed to render the post inside the app
 * @param {IRawPost} post - Post object from API
 * @returns {IPost}
 */
export function transformPost(post: IRawPost): IPost {
  return {
    id: String(post.id),
    slug: post.slug,
    createdAt: new Date(post.date),
    cover: "",
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    title: post.title.rendered
  };
}

/**
 * transformPosts: Maps a list of posts from the API to the format needed by the app
 * @param {IRawPost[]} posts - A list of posts from API
 * @returns {IPost[]}
 */
export function transformPosts(posts: IRawPost[]): IPost[] {
  return posts.map((post: IRawPost) => transformPost(post));
}
