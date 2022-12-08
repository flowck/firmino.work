import { test } from "@playwright/test";
import { BlogPage } from "./../page-objects/BlogPage";
import { HomePage } from "./../page-objects/HomePage";
import { PostPage } from "./../page-objects/PostPage";

test("Navigate to the blog from the home page and go back to home from the breadcrumb", async ({ page }) => {
  await page.goto("/");
  const homePage = new HomePage(page);
  const blogPage = new BlogPage(page);

  await homePage.openBlog();
  await blogPage.openHomeFromBreadcrumb();
});

test("Open blog post and return to the blog page", async ({ page }) => {
  const blogPage = new BlogPage(page);
  const postPage = new PostPage(page);

  await page.goto("/blog");
  await blogPage.openPost("HighlightPost_1");
  await postPage.openBlogPageFromBreadcrumb();
});
