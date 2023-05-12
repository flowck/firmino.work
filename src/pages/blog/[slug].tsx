import { Breadcrumb } from "components/Breadcrumb";
import { GridContainer } from "components/GridContainer";
import { Meta } from "components/Meta";
import { PostContent } from "components/PostContent";
import { PostHead } from "components/PostHead";
import { PostTagList } from "components/PostTagList";
import { PostLayout } from "layouts/PostLayout";
import { getContentFromMarkdown } from "lib/markdown";
import { getBlogPaths, getBlogPostBySlug, PostMetadata } from "lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  slug: string;
  content: string;
  metadata: PostMetadata;
}

function BlogPost({ metadata, content, slug }: Props) {
  return (
    <>
      <Meta path={`blog/${slug}`} title={metadata.title} cover={metadata.cover} description={metadata.description} />

      <GridContainer type="content" css={{ marginBottom: "$8", marginTop: "$8" }}>
        <Breadcrumb queryParams={{ "[slug]": metadata.title }} css={{ marginBottom: "$7" }} />
        <PostHead css={{ marginBottom: "$7" }} metadata={metadata} />
        <PostContent content={content} />
        <PostTagList css={{ marginTop: "$7" }} tags={metadata.tags} />
      </GridContainer>
    </>
  );
}

BlogPost.Layout = PostLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getBlogPaths();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const { content, metadata } = await getBlogPostBySlug(slug as string);
  const html = await getContentFromMarkdown(content);
  return { props: { content: html, metadata, slug } };
};

export default BlogPost;
