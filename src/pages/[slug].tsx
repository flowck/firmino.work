import { Meta } from "components/Meta";
import { getBlogPaths, getBlogPostBySlug, PostMetadata } from "lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  content: string;
  metadata: PostMetadata;
}

export default function BlogPost({ metadata, content }: Props) {
  return (
    <>
      <Meta title={metadata.title} description={metadata.description} cover={metadata.cover} />
      {JSON.stringify(metadata)}

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getBlogPaths();
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const { content, metadata } = await getBlogPostBySlug(slug as string);
  return { props: { content, metadata } };
};
