import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>
            <Link href="https://github.com/flowck">GitHub</Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/firminochangani">LinkedIn</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
