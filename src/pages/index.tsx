import { Avatar } from "components/Avatar";
import { GridContainer } from "components/GridContainer";
import { Meta } from "components/Meta";
import { Navigation } from "components/Navigation";
import type { NextPage } from "next";
import { styled } from "stitches.config";

const About = styled("article", {
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

const Bio = styled("div", {
  gap: "$7",
  display: "flex",
  flexDirection: "column",

  "@bp2": {},

  h1: {
    title: "3",
  },

  p: {
    subHeading: "3",
  },
});

const avatarStyles = {
  width: "100px",
  margin: "0 auto",

  "@bp2": {
    margin: 0,
  },
};

const Home: NextPage = () => {
  return (
    <main>
      <Meta
        isHome
        description="Firmino Changani - A Software Engineer whose career has been spent working on Frontend Web Applications for both small and large enterprise."
      />

      <GridContainer
        type="content"
        css={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <About>
          <Avatar css={avatarStyles} />
          <Bio>
            <h1>Firmino Changani</h1>
            <p>
              Software Engineer passionate about building Web Applications and
              experimenting with old and new technologies.
            </p>
            <Navigation
              css={{ text: "copy", margin: "0 auto", "@bp2": { margin: 0 } }}
            />
          </Bio>
        </About>
      </GridContainer>
    </main>
  );
};

export default Home;
