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

const Home: NextPage = () => {
  return (
    <main>
      <Meta
        isHome
        description="Firmino Changani - A Software Engineer whose career has been spent working on Frontend Web Applications for both small and large enterprise."
      />

      <GridContainer type="content" css={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <About>
          <Avatar css={{ width: "100px", margin: "0 auto", "@bp2": { margin: 0 } }} />
          <Bio>
            <h1>Welcome</h1>
            <p>
              Firmino is a world renowned speaker, teacher, and trainer and he is actively involved in the open source
              community as a maintainer and contributor of hundreds of popular npm packages
            </p>
            <Navigation css={{ margin: "0 auto", "@bp2": { margin: 0 } }} />
          </Bio>
        </About>
      </GridContainer>
    </main>
  );
};

export default Home;
