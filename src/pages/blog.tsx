import { Props as BreadcrumbProps } from "components/Breadcrumb";
import { GridContainer } from "components/GridContainer";
import { Meta } from "components/Meta";
import { PageHero } from "components/PageHero";
import { Post } from "components/Post";
import { PostListGrid } from "components/PostListGrid";
import { BlogLayout } from "layouts/BlogLayout";
import { getAllBlogPosts, PostMetadata } from "lib/posts";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

const Breadcrumb = dynamic<BreadcrumbProps>(() => import("components/Breadcrumb"), { suspense: true });

interface Props {
  posts: { content: string; metadata: PostMetadata; slug: string }[];
}

function Blog({ posts }: Props) {
  return (
    <>
      <Meta title="Blog" description="Ideas worth writing about" />
      <PageHero title="Blog" description="Our latest news, updates, and stories for developers" />
      <GridContainer css={{ marginTop: "$8", marginBottom: "$8" }}>
        <Breadcrumb />
        <PostListGrid>
          {posts.map((post) => (
            <Post
              path={post.slug}
              cover={post.metadata.cover}
              title={post.metadata.title}
              key={post.metadata.title}
              publicationDate={post.metadata.date}
            />
          ))}
        </PostListGrid>
      </GridContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllBlogPosts(false);

  return { props: { posts } };
};

Blog.Layout = BlogLayout;

export default Blog;
