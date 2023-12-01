import { MetadataRoute } from "next";
import { getAllBlogPosts } from "./(blogging)/(lib)/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts(false);
  const postMaps: any = posts
    .filter((post) => !post.metadata.isArchive)
    .map((post) => ({
      priority: 0.5,
      lastModified: new Date(),
      changeFrequency: "weekly",
      url: `https://firmino.work/blog/${post.slug}`,
    }));

  return [
    {
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: "https://firmino.work",
    },
    ...postMaps,
  ];
}
