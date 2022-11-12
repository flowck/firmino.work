import fs from "fs/promises";
import path from "path";
import { getContentFromMarkdown } from "./markdown";

interface BlogPath {
  params: { slug: string };
}

export interface PostMetadata {
  title: string;
  date: Date;
  metatags: string;
  description: string;
  cover: string;
}

export async function getBlogPaths(): Promise<BlogPath[]> {
  const fileNames = await fs.readdir(path.resolve(process.cwd(), "src/posts"));
  const blogPaths = fileNames.map((fileName) => {
    return { params: { slug: fileName.replace(".md", "") } };
  });

  return blogPaths;
}

export async function getBlogPostBySlug(slug: string) {
  const fileName = path.join(process.cwd(), "src/posts", `${slug}.md`);
  const postFile = await fs.readFile(fileName, { encoding: "utf8" });

  return getContentFromMarkdown<PostMetadata>(postFile);
}
