import { Metadata } from "next";
import { getAllBlogPosts } from "./(blogging)/(lib)/posts";
import { Container } from "./(components)/Container";
import { PostItem } from "./(components)/PostItem";

export const metadata: Metadata = {
  title: "Firmino Changani",
  description: `My name is Firmino, I am a Software Engineer and have been work as such since 2014. Currently, I work for a startup in the skincare industry, and in my spare time I like to work on projects which are mostly available on GitHub.`,
};

export default async function Home() {
  const posts = await getAllBlogPosts(false, false);

  return (
    <main>
      <Container>
        <div className="px-2 mb-10">
          <p>
            Hi there 👋, <br /> my name is Firmino and welcome to my personal website and blog.
          </p>
        </div>

        <div className="my-5 px-2">
          <div className="flex gap-5">
            <h1 className="font-bold text-2xl">Latest posts</h1>
            {/* <ButtonLink href="/blog">View all</ButtonLink> */}
          </div>

          <button className="border-b-2 border-slate-800 w-full"></button>
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
