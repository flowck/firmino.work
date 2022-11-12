import matter from "gray-matter";
import { marked } from "marked";

interface MarkdownDocument<T> {
  content: string;
  metadata: T;
}

export async function getContentFromMarkdown<T>(page: string): Promise<MarkdownDocument<T>> {
  const { content: contentInMd, data: metadata } = matter(page);
  const content = marked.parse(contentInMd);

  return { content, metadata: JSON.parse(JSON.stringify(metadata)) };
}
