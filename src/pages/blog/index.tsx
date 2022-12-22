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
  highlightPosts: [Post, Post];
}

function Blog({ posts, highlightPosts }: Props) {
  return (
    <>
      <Meta
        path="blog"
        title="Blog"
        description="This is the section where I share curated ideas about Programming and Software Engineering"
      />
      <PageHero title="Blog" description="Meticulously curated thoughts, ideas and experiments" />
      <GridContainer css={{ marginTop: "$8", marginBottom: "$8" }}>
        <Breadcrumb />

        <PostListGrid
          css={{
            margin: "$7 0 $6 0",
            "@bp2": {
              margin: "$7 0 $8 0",
              gridTemplateColumns: "repeat(2, 2fr)",
            },
          }}
        >
          {highlightPosts.map((post, idx) => (
            <Post
              key={post.metadata.title}
              path={`blog/${post.slug}`}
              cover={post.metadata.cover}
              title={post.metadata.title}
              data-testid={`HighlightPost_${idx}`}
              publicationDate={post.metadata.formattedDate}
            />
          ))}
        </PostListGrid>

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
  const posts = await getAllBlogPosts(false);

  const highlightPosts = [posts[0], posts[1]];

  return { props: { posts: posts.splice(2, posts.length), highlightPosts } };
};

Blog.Layout = BlogLayout;

export default Blog;
