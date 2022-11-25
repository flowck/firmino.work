import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

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
  title: string;
  cover: string;
  tags: string[];
  description: string;
  isPublished?: boolean;
}

export async function getBlogPaths(): Promise<BlogPath[]> {
  const fileNames = await fs.readdir(path.resolve(process.cwd(), "src/posts"));
  const blogPaths = fileNames.map((fileName) => {
    return { params: { slug: fileName.replace(".md", "") } };
  });

  return blogPaths;
}

export async function getBlogPostBySlug(slug: string, withContent = true): Promise<BlogPost> {
  const fileName = path.join(process.cwd(), "src/posts", `${slug}.md`);
  const content = await fs.readFile(fileName, { encoding: "utf8" });
  const { content: contentInMd, data: metadata } = matter(content);

  const meta = JSON.parse(JSON.stringify(metadata));

  if (withContent) {
    return {
      content: contentInMd,
      slug,
      metadata: {
        ...meta,
        tags: meta.metatags ? meta.metatags.split(",") : [],
      },
    };
  }

  return {
    content: "",
    slug,
    metadata: { ...meta, tags: meta.metatags ? meta.metatags.split(",") : [] },
  };
}

export async function getAllBlogPosts(withContent = true) {
  const posts: BlogPost[] = [];
  const paths = await getBlogPaths();

  for (const item of paths) {
    const post = await getBlogPostBySlug(item.params.slug, withContent);
    if (post.metadata.isPublished === undefined || post.metadata.isPublished) {
      posts.push(post);
    }
  }

  return posts.sort((postA, postB) => (postA.metadata.date > postB.metadata.date ? -1 : 1));
}
