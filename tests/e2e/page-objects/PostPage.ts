import { expect, Page } from "@playwright/test";

export class PostPage {
  constructor(private page: Page) {}

  async openBlogPageFromBreadcrumb() {
    await this.page.getByTestId("Breadcrumb_blog").click();
    await this.page.waitForNavigation();
    expect(this.page.url()).toMatch(/blog/);
  }
}
