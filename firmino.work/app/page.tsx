import Link from "next/link";
import { formatDate } from "./(blogging)/(lib)/dates";
import { getAllBlogPosts } from "./(blogging)/(lib)/posts";

export default async function Home() {
  const posts = await getAllBlogPosts(false, false);

  return (
    <main>
      <section>
        <div className="flex">
          <h1>Latest articles</h1>
          <button className="btn">View all</button>
        </div>

        <div>
          {posts.map((post) => (
            <article key={post.slug} className="flex">
              <span>{formatDate(post.metadata.date)}</span>
              <h1>
                <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
              </h1>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
