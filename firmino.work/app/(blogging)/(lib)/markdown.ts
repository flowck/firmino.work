import rehypePrism from "@mapbox/rehype-prism";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

import { unified } from "unified";

export async function getContentFromMarkdown(page: string): Promise<string> {
  const content = await unified()
    .use(remarkParse) // Parse markdown content to a syntax tree
    .use(remarkRehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
    .use(rehypePrism as any)
    .use(rehypeStringify) // Serialize HTML syntax tree
    .process(page);

  return content.toString();
}
