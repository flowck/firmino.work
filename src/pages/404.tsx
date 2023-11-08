import { Link } from "components/Link";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { styled } from "stitches.config";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <>
      <Heading>
        Hmmm, sorry but Firmino {"hasn't"} built {router.asPath} just yet. Return <Link href="/">home</Link>
      </Heading>
    </>
  );
}

const Heading = styled("h1", {
  subHeading: "1",
  marginBottom: "$3",
});

export const getStaticProps: GetStaticProps = () => {
  return { props: {} };
};
