import { expect, Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async openBlog() {
    await this.page.getByTestId("Navigation_Blog").click();
    await this.page.waitForNavigation();
    expect(this.page.url()).toMatch(/blog/);
  }
}
