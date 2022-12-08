import { getContentFromMarkdown } from "lib/markdown";

const post = `---
title: Hello World
---

# My first post

Hello world
`;

describe("markdow/getContentFromMarkdown", () => {
  test("expect to return an object with the post content and the metadata", async () => {
    const content = await getContentFromMarkdown(post);
    expect(content).toBeDefined();
  });
});
