import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";
import prism from "remark-prism";

interface MarkdownDocument<T> {
  content: string;
  metadata: T;
}

export async function getContentFromMarkdown<T>(page: string): Promise<MarkdownDocument<T>> {
  const { content: contentInMd, data: metadata } = matter(page);

  const content = await remark().use(html, { sanitize: false }).use(prism).process(contentInMd);
  return { content: content.toString(), metadata: JSON.parse(JSON.stringify(metadata)) };
}
