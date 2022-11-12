import { getBlogPaths, getBlogPostBySlug } from "lib/posts";

describe("posts/getBlogPaths", () => {
  test("expect to return a list of blog paths", async () => {
    const paths = await getBlogPaths();

    expect(Array.isArray(paths)).toBeTruthy();
    expect(paths.length > 0).toBeTruthy();
  });
});

describe("posts/getBlogPostBySlug", () => {
  test("expect to return blog content given the slug passed", async () => {
    const post = await getBlogPostBySlug("accessing-vue-global-filters-inside-component-methods-and-lifecycle-hooks");

    expect(post).toBeTruthy();
  });
});
