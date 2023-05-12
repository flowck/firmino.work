import { Breadcrumb } from "components/Breadcrumb";
import { GridContainer } from "components/GridContainer";
import { Meta } from "components/Meta";
import { PageHero } from "components/PageHero";
import { Post } from "components/Post";
import { PostListGrid } from "components/PostListGrid";
import { BlogLayout } from "layouts/BlogLayout";
import { getAllBlogPosts, PostMetadata } from "lib/posts";
import { GetStaticProps } from "next";

interface Post {
  slug: string;
  content: string;
  metadata: PostMetadata;
}

interface Props {
  posts: Post[];
}

function Blog({ posts }: Props) {
  return (
    <>
      <Meta path="blog" title="Blog" description="Firmino's personal blog about Programming and Software Engineering" />
      <PageHero title="Blog" description="Curated ideas and experiments" />
      <GridContainer css={{ marginTop: "$8", marginBottom: "$8" }}>
        <Breadcrumb css={{ marginBottom: "$8" }} />

        <PostListGrid>
          {posts.map((post, idx) => (
            <Post
              key={post.metadata.title}
              path={`blog/${post.slug}`}
              data-testid={`Post_${idx}`}
              cover={post.metadata.cover}
              title={post.metadata.title}
              publicationDate={post.metadata.formattedDate}
            />
          ))}
        </PostListGrid>
      </GridContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllBlogPosts(false, false);
  return { props: { posts } };
};

Blog.Layout = BlogLayout;

export default Blog;
