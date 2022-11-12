import fs from "fs/promises";
import path from "path";
import { getContentFromMarkdown } from "./markdown";

interface BlogPath {
  params: { slug: string };
}

export interface BlogPost {
  slug: string;
  content: string;
  metadata: PostMetadata;
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

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const fileName = path.join(process.cwd(), "src/posts", `${slug}.md`);
  const postFile = await fs.readFile(fileName, { encoding: "utf8" });
  const post = await getContentFromMarkdown<PostMetadata>(postFile);

  return { ...post, slug };
}

export async function getAllBlogPosts() {
  const paths = await getBlogPaths();
  const postAsyncCalls = [];

  for (const item of paths) {
    postAsyncCalls.push(getBlogPostBySlug(item.params.slug));
  }

  const posts = await Promise.all(postAsyncCalls);
  return posts.sort((postA, postB) => (postA.metadata.date > postB.metadata.date ? -1 : 1));
}
