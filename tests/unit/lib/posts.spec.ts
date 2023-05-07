import { getBlogPaths, getBlogPostBySlug, getAllBlogPosts, BlogPost } from "lib/posts";

describe("original-posts/getBlogPaths", () => {
  test("expect to return a list of blog paths", async () => {
    const paths = await getBlogPaths();

    expect(Array.isArray(paths)).toBeTruthy();
    expect(paths.length > 0).toBeTruthy();
  });
});

describe("original-posts/getBlogPostBySlug", () => {
  test("expect to return blog content given the slug passed", async () => {
    const post = await getBlogPostBySlug("accessing-vue-global-filters-inside-component-methods-and-lifecycle-hooks");

    expect(post).toBeTruthy();
  });
});

describe("original-posts/getAllBlogPosts", () => {
  test("expect to return all blog original-posts available", async () => {
    const posts = await getAllBlogPosts();
    expect(posts.length > 0).toBeTruthy();

    posts.forEach((post) => {
      expect(post.metadata.title).toBeTruthy();
      expect(post.slug).toBeTruthy();
    });
  });
});
