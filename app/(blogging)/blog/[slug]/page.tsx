import { Container } from "@@/app/(components)/Container";
import { appConfig } from "@@/app/config";
import { Metadata, ResolvingMetadata } from "next";
import { formatDate } from "../../(lib)/dates";
import { getContentFromMarkdown } from "../../(lib)/markdown";
import { getBlogPaths, getBlogPostBySlug } from "../../(lib)/posts";

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function PostPage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug);
  const content = await getContentFromMarkdown(post.content);

  return (
    <Container as="section">
      <div className="px-2">
        <h1 className="font-bold text-3xl">{post.metadata.title}</h1>
        <span className="text-gray-300 text-sm my-2 block">{formatDate(post.metadata.date)}</span>
        <div className="flex gap-1">
          {post.metadata.tags.map((tag) => (
            <span className="uppercase bg-slate-700 px-1 py-1 rounded-md text-xs" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="px-2 mt-10 prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </Container>
  );
}

export async function generateStaticParams() {
  const paths = await getBlogPaths();
  return paths;
}

export const dynamic = "force-static";

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  return {
    title: post.metadata.title,
    creator: appConfig.siteName,
    publisher: appConfig.siteName,
    applicationName: appConfig.siteName,
    description: post.metadata.description,
    metadataBase: new URL("https://firmino.work"),
    robots: {
      index: !post.metadata.isArchive,
      follow: !post.metadata.isArchive,
    },
    authors: [{ url: "https://firmino.work", name: appConfig.siteName }],
    openGraph: {
      type: "article",
      tags: post.metadata.tags,
      authors: appConfig.siteName,
      publishedTime: `${post.metadata.date}`,
      images: [`https://firmino.work/${post.metadata.cover}`],
    },
  };
}
