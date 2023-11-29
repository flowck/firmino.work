import Link from "next/link";
import { MenuItem } from "./MenuItem";

export function Header() {
  return (
    <header className="flex justify-between px-4 py-4 md:px-10 md:py-8 lg:px-0 lg:w-830 mx-auto my-0">
      <h1 className="font-bold text-lg px-2 py-1 rounded-md hover:bg-slate-800 transition-colors duration-500">
        <Link href="/">Firmino Changani</Link>
      </h1>
      <nav className="flex items-center">
        <ul className="flex gap-3 text-sm  md:text-base">
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/blog">Blog</MenuItem>
        </ul>
      </nav>
    </header>
  );
}
