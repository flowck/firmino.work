import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { formatDate } from "./dates";

interface BlogPath {
  params: { slug: string };
}

export interface BlogPost {
  slug: string;
  content: string;
  metadata: PostMetadata;
}

export interface PostMetadata {
  date: Date;
  formattedDate: string;
  title: string;
  cover: string;
  tags: string[];
  description: string;
  isPublished?: boolean;
  isArchive: boolean;
}

export async function getBlogPaths(): Promise<BlogPath[]> {
  const fileNames = await fs.readdir(path.resolve(process.cwd(), "app/(blogging)/(posts)"));

  return fileNames.map((fileName) => {
    return { params: { slug: fileName.replace(".md", "") } };
  });
}

function getMetadata(meta: PostMetadata, tags: string): PostMetadata {
  return {
    ...meta,
    isPublished: meta.isPublished === undefined ? true : meta.isPublished,
    formattedDate: formatDate(meta.date),
    tags: tags ? tags.split(",") : [],
  };
}

export async function getBlogPostBySlug(slug: string, withContent = true): Promise<BlogPost> {
  const fileName = path.join(process.cwd(), "app/(blogging)/(posts)", `${slug}.md`);
  const content = await fs.readFile(fileName, { encoding: "utf8" });
  const { content: contentInMd, data: metadata } = matter(content);

  const meta = JSON.parse(JSON.stringify(metadata));

  const result = {
    content: contentInMd,
    slug,
    metadata: getMetadata(meta, meta.metatags),
  };

  if (withContent) {
    return result;
  }

  return { ...result, content: "" };
}

export async function getAllBlogPosts(withContent = true, archivedOnly = false) {
  const posts: BlogPost[] = [];
  const paths = await getBlogPaths();

  for (const item of paths) {
    const post = await getBlogPostBySlug(item.params.slug, withContent);
    const isPublished = post.metadata.isPublished;

    if (archivedOnly && isPublished && post.metadata.isArchive) {
      posts.push(post);
    }

    if (isPublished && !post.metadata.isArchive) {
      posts.push(post);
    }
  }

  return posts.sort((postA, postB) => (postA.metadata.date > postB.metadata.date ? -1 : 1));
}
