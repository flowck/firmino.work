import { Meta } from "components/Meta";
import { PageHero } from "components/PageHero";
import { BlogLayout } from "layouts/BlogLayout";
import { getAllBlogPosts, PostMetadata } from "lib/posts";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  posts: { content: string; metadata: PostMetadata; slug: string }[];
}

function Blog({ posts }: Props) {
  return (
    <>
      <Meta title="Blog" description="Ideas worth writing about" />
      <PageHero title="Blog" description="Our latest news, updates, and stories for developers" />

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
  const posts = await getAllBlogPosts(false);

  return { props: { posts } };
};

Blog.Layout = BlogLayout;

export default Blog;
