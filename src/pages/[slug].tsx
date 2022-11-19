import { GridContainer } from "components/GridContainer";
import { Meta } from "components/Meta";
import { PostContent } from "components/PostContent";
import { PostHero } from "components/PostHero";
import { PostLayout } from "layouts/PostLayout";
import { getContentFromMarkdown } from "lib/markdown";
import { getBlogPaths, getBlogPostBySlug, PostMetadata } from "lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  content: string;
  metadata: PostMetadata;
}

function BlogPost({ metadata, content }: Props) {
  return (
    <>
      <Meta title={metadata.title} description={metadata.description} cover={metadata.cover} />
      <PostHero cover={metadata.cover} title={metadata.title} />

      <GridContainer type="content" css={{ marginBottom: "$8", marginTop: "$8" }}>
        <PostContent content={content} />
      </GridContainer>
    </>
  );
}

BlogPost.Layout = PostLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getBlogPaths();
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const { content, metadata } = await getBlogPostBySlug(slug as string);
  const html = await getContentFromMarkdown(content);
  return { props: { content: html, metadata } };
};

export default BlogPost;
