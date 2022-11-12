import { getBlogPaths } from "lib/posts";

describe("posts/getBlogPaths", () => {
  test("expect to return a list of blog paths", async () => {
    const paths = await getBlogPaths();

    expect(Array.isArray(paths)).toBeTruthy();
    expect(paths.length > 0).toBeTruthy();
  });
});
