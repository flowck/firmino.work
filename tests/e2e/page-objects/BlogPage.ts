import { expect, Page } from "@playwright/test";

export class BlogPage {
  constructor(private page: Page) {}

  async openHomeFromBreadcrumb() {
    await this.page.getByTestId("Breadcrumb_Home").click();
    await this.page.waitForNavigation();
    expect(this.page.url()).toMatch(/\//);
  }

  async openPost(testId: string) {
    await this.page.getByTestId(testId).locator("a").first().click();
  }
}
