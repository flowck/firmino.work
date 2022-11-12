import { Meta } from "components/Meta";
import { getAllBlogPosts, PostMetadata } from "lib/posts";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  posts: { content: string; metadata: PostMetadata; slug: string }[];
}

export default function Blog({ posts }: Props) {
  return (
    <>
      <Meta title="Blog" description="Ideas worth writing about" />

      {posts.map((post) => (
        <article key={post.metadata.title}>
          <h1>
            <Link href={`/${post.slug}`}>{post.metadata.title}</Link>
          </h1>
        </article>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllBlogPosts();

  return { props: { posts } };
};
