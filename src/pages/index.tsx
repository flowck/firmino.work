import { Meta } from "components/Meta";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <Meta
        isHome
        description="Firmino Changani - A Software Engineer whose career has been spent working on Frontend Web Applications for both small and large enterprise."
      />
    </main>
  );
};

export default Home;
