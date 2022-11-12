import { GetStaticProps, GetStaticPaths } from "next";

export default function BlogPost() {
  return <></>;
}

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [], fallback: false };
};

export const getStaticProps: GetStaticProps = () => {
  return { props: {} };
};
