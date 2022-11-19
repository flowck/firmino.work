import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";

export async function getContentFromMarkdown(page: string): Promise<string> {
  const content = await remark()
    .use(html, { sanitize: false })
    .use(prism, { plugins: ["line-numbers"] })
    .process(page);
  return content.toString();
}
