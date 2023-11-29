import Link from "next/link";
import { formatDate } from "./(blogging)/(lib)/dates";
import { getAllBlogPosts } from "./(blogging)/(lib)/posts";
import { Container } from "./(components)/Container";
import { PostItem } from "./(components)/PostItem";

export default async function Home() {
  const posts = await getAllBlogPosts(false, false);

  return (
    <main>
      <Container>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid animi quas dolores !</div>
        <div className="flex gap-5 my-5">
          <h1 className="font-bold text-2xl">Latest articles</h1>
          <button className="btn">View all</button>
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
