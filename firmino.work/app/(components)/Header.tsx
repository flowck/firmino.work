import Link from "next/link";
import { PropsWithChildren } from "react";

export function Header() {
  return (
    <header className="flex justify-between px-4 py-4 md:px-10 md:py-8 lg:px-0 lg:w-830 mx-auto my-0">
      <h1 className="font-bold text-lg px-2 py-1 rounded-md hover:bg-slate-800 transition-colors duration-500">
        <Link href="/">Firmino Changani</Link>
      </h1>
      <nav>
        <ul className="flex gap-3">
          <li>
            <MenuItem href="/about">About</MenuItem>
          </li>
          <li>
            <MenuItem href="/blog">Blog</MenuItem>
          </li>
        </ul>
      </nav>
    </header>
  );
}

interface Props extends PropsWithChildren {
  href: string;
}

function MenuItem({ children, href }: Props) {
  return (
    <li>
      <Link className="px-4 py-1 rounded-md hover:bg-slate-800 transition-colors duration-500" href={href}>
        {children}
      </Link>
    </li>
  );
}
