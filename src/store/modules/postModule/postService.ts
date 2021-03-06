import { Order } from "@/store/contants";
import { decode } from "html-entities";
import { IPost, IRawPost, IPostsPerYear, TAggregationOrder } from "./IPost";

/**
 * getPostCoverUrl
 * @param post - Post object from the API
 * @returns {string} - Post cover url or an empty string
 */
function getPostCoverUrl(post: IRawPost): string {
  const { _embedded } = post;
  return _embedded && _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "";
}

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
    cover: getPostCoverUrl(post),
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    title: decode(post.title.rendered)
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

/**
 * aggreatePostsPerYear
 * @param posts - A list of posts
 */
export function aggreatePostsPerYear(posts: IPost[]): IPostsPerYear[] {
  const aggreation: { [key: string]: IPostsPerYear } = {};

  posts.forEach((post: IPost) => {
    const year = post.createdAt.getFullYear();
    if (aggreation[year]) {
      aggreation[year].posts.push(post);
    } else {
      aggreation[year] = { year, posts: [post] };
    }
  });

  return Object.keys(aggreation).map(key => aggreation[key]);
}

/**
 * sortPostsAggregationPerYear
 * @param postsPerYear - An aggregation of posts per year
 * @param order - The sorting order
 * @returns {IPostsPerYear[]} - An aggregation of posts per year sorted in ASC or DESC
 */
export function sortPostsAggregationPerYear(postsPerYear: IPostsPerYear[], order: TAggregationOrder = Order.DESC) {
  if (order === Order.ASC) {
    return [...postsPerYear].sort(({ year: yearA }, { year: yearB }) => {
      return yearA - yearB;
    });
  }

  if (order === Order.DESC) {
    return [...postsPerYear].sort(({ year: yearA }, { year: yearB }) => {
      return yearB - yearA;
    });
  }

  return postsPerYear;
}
