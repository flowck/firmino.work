import Link from "next/link";
import { styled } from "stitches.config";

const Menu = styled("ul", {
  display: "flex",

  "> li": {
    listStyle: "none",
    "> a": { color: "$white", textDecoration: "none", transition: "color 0.25s" },
    "> a:hover": { color: "$primary900", textDecoration: "none" },
  },
  "> li:not(:first-child)": {
    marginLeft: "56px",
  },
});

const Nav = styled("nav", {});

const menuItems = [
  {
    label: "Blog",
    path: "/blog",
  },
  // {
  //   label: "Projects",
  //   path: "/projects",
  // },
  // {
  //   label: "About",
  //   path: "/about",
  // },
];

export function Navigation() {
  return (
    <Nav>
      <Menu>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </Menu>
    </Nav>
  );
}
