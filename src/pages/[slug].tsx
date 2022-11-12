import { getBlogPaths, getBlogPostBySlug, PostMetadata } from "lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";

interface Props {
  content: string;
  metadata: PostMetadata;
}

export default function BlogPost({ metadata, content }: Props) {
  return (
    <>
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
