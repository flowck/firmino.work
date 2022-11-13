import html from "remark-html";
import { remark } from "remark";
import prism from "remark-prism";

export async function getContentFromMarkdown(page: string): Promise<string> {
  const content = await remark().use(html, { sanitize: false }).use(prism).process(page);
  return content.toString();
}
