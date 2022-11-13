import { getContentFromMarkdown } from "lib/markdown";

const post = `---
title: Hello World
---

# My first post

Hello world
`;

describe("markdow/getContentFromMarkdown", () => {
  test("expect to return an object with the post content and the metadata", async () => {
    const { content, metadata } = await getContentFromMarkdown<{ title: string }>(post);

    expect(metadata).toBeTruthy();
    expect(content).toBeDefined();
    expect(metadata.title).toBe("Hello World");
  });
});
