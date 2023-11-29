import { getAllBlogPosts } from "./(blogging)/(lib)/posts";
import { ButtonLink } from "./(components)/ButtonLink";
import { Container } from "./(components)/Container";
import { PostItem } from "./(components)/PostItem";

export default async function Home() {
  const posts = await getAllBlogPosts(false, false);

  return (
    <main>
      <Container>
        <div className="px-2">Hi there 👋, welcome to my personal website and blog.</div>
        <div className="flex gap-5 my-5 px-2">
          <h1 className="font-bold text-2xl">Latest articles</h1>
          <ButtonLink href="/blog">View all</ButtonLink>
        </div>

        <div>
          {posts.map((post) => (
            <PostItem
              key={post.slug}
              date={post.metadata.date}
              href={`/blog/${post.slug}`}
              title={post.metadata.title}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
