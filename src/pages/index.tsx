import { Avatar } from "components/Avatar";
import { Link } from "components/Link";
import { MenuList } from "components/MenuList";
import { Meta } from "components/Meta";
import { Text } from "components/Text";
import { styled } from "stitches.config";

export default function Home() {
  return (
    <main>
      <Meta isHome description="Firmino Changani - Computer programmer passionate about systems" />

      <About>
        <Avatar css={avatarStyles} />
        <Intro>
          <h1>Firmino Changani</h1>
          <Text>
            Senior Software Engineer at <Link href="https://getharley.com">GetHarley</Link>
          </Text>

          <Menu>
            <MenuList />
          </Menu>
        </Intro>
      </About>
    </main>
  );
}

const Menu = styled("ul", {
  gap: "$5",
  display: "flex",
  // border: "1px solid red",
  justifyContent: "space-between",

  li: {
    listStyle: "none",
  },

  a: {
    fontSize: "$2",
    color: "$white",
    textDecoration: "none",
  },
});

const About = styled("article", {
  top: "50%",
  left: "50%",
  maxWidth: "700px",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  gap: "$7",
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  "@bp2": {
    display: "grid",
    textAlign: "left",
    alignItems: "center",
    gridTemplateColumns: "100px auto",
  },
});

const Intro = styled("div", {
  gap: "$2",
  display: "flex",
  flexDirection: "column",

  h1: {
    title: "4",
  },
});

const avatarStyles = {
  width: "100px",
  height: "100px",
  margin: "0 auto",

  "@bp2": {
    margin: 0,
  },
};
