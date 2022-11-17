import Link from "next/link";
import { styled } from "stitches.config";
import { GridContainer } from "./GridContainer";
import { Logo } from "./Logo";

const Container = styled("header", {
  width: "100%",
  color: "$white",
  height: "82px",
  backgroundColor: "$shade900",
});

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
const gridOverride = { height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" };

const menuItems = [
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "About",
    path: "/about",
  },
];

export function Header() {
  return (
    <Container>
      <GridContainer css={gridOverride}>
        <Logo />
        <Nav>
          <Menu>
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </Menu>
        </Nav>
      </GridContainer>
    </Container>
  );
}
