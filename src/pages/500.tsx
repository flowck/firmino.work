import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { styled } from "stitches.config";

export default function InternalServerErrorPage() {
  const router = useRouter();

  return (
    <>
      <Heading>
        Yikes, something {"ins't"} working properly. Please try to{" "}
        <Button onClick={() => router.reload()}>hard refresh</Button>
      </Heading>
    </>
  );
}

const Button = styled("button", {
  border: "none",
  padding: "$1",
  subHeading: "1",
  cursor: "pointer",
  borderRadius: "$codeSnippet",

  "&:hover": {
    backgroundColor: "$primary700",
  },
});

const Heading = styled("h1", {
  subHeading: "1",
  marginBottom: "$3",
});

export const getStaticProps: GetStaticProps = () => {
  return { props: {} };
};
