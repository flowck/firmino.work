import { useState } from "react";
import { CSSType, styled } from "stitches.config";
import { Icon } from "./Icon";
import { MenuList } from "./MenuList";

interface Props {
  css?: CSSType;
  enableMobileMenu?: boolean;
}

export function Navigation({ css, enableMobileMenu = false }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Nav css={css}>
      <Menu>
        <MenuList />
      </Menu>

      {enableMobileMenu && (
        <MobileMenuButton onClick={() => setMobileMenuOpen((value) => !value)}>
          <Icon className="ri-menu-fill" css={{ color: mobileMenuOpen ? "$primary700" : "$white" }} />
        </MobileMenuButton>
      )}

      {mobileMenuOpen && (
        <MobileMenu>
          <MobileMenuContainer>
            <MenuList />
          </MobileMenuContainer>
        </MobileMenu>
      )}
    </Nav>
  );
}

const MobileMenuButton = styled("button", {
  width: "40px",
  height: "30px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "transparent",

  "@bp2": {
    display: "none",
  },
});

const MobileMenu = styled("div", {
  zIndex: 99,
  left: "0",
  top: "82px",
  width: "100%",
  position: "absolute",
  height: "calc(100vh - 82px)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const MobileMenuContainer = styled("div", {
  padding: "20px 5%",
  backgroundColor: "#111",

  li: {
    listStyle: "none",
    marginBottom: "$4",
  },

  a: {
    color: "$white",
  },
});

const Menu = styled("ul", {
  display: "none",

  "@bp2": {
    display: "flex",
  },

  "> li": {
    fontSize: "$2",
    listStyle: "none",

    "> a": {
      color: "$white",
      textDecoration: "none",
      transition: "color 0.25s",
    },

    "> a:hover": {
      color: "$primary900",
      textDecoration: "none",
    },
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
    isExternal: false,
  },
  {
    label: "GitHub",
    path: "https://github.com/flowck",
    isExternal: true,
  },
  {
    label: "LinkedIn",
    path: "https://linkedin.com/in/firminochangani",
    isExternal: true,
  },
];
