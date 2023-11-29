import Link from "next/link";
import { Container } from "./Container";
import { MenuItem } from "./MenuItem";

export function Footer() {
  return (
    <Container as="footer" className="w-full">
      <nav className="w-full flex justify-center">
        <ul className="flex gap-10 py-2 text-gray-500">
          <MenuItem className="hover:text-white" href="/about">
            About
          </MenuItem>
          <MenuItem className="hover:text-white" href="/blog">
            Blog
          </MenuItem>
          <MenuItem className="hover:text-white" href="https://github.com/flowck">
            GitHub
          </MenuItem>
          <MenuItem className="hover:text-white" href="https://linkedin.com/in/firminochangani">
            LinkedIn
          </MenuItem>
        </ul>
      </nav>
    </Container>
  );
}
