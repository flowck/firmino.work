import { Container } from "./Container";
import { MenuItem } from "./MenuItem";

export function Footer() {
  return (
    <Container as="footer" className="w-full">
      <nav className="w-full flex justify-center">
        <ul className="flex md:gap-10 py-2 text-gray-500 text-sm">
          {menuItems.map((item) => (
            <MenuItem key={item.href} className="hover:text-white" href={item.href}>
              {item.label}
            </MenuItem>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

const menuItems = [
  // {
  //   href: "/about",
  //   label: "About",
  // },
  // {
  //   href: "/blog",
  //   label: "Blog",
  // },
  {
    href: "https://github.com/flowck",
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/firminochangani",
    label: "LinkedIn",
  },
];
