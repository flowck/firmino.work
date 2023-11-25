import Link from "next/link";

export function Header() {
  return (
    <header>
      <div>Firmino Changani</div>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
