import { styled } from "stitches.config";

const Container = styled("figure", {
  width: "100%",
  height: "200px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  "@bp2": {
    height: "300px",
  },
  "@bp3": {
    height: "400px",
  },
});

interface Props {
  title: string;
  cover: string;
}

export function PostHero({ cover, title }: Props) {
  return <Container css={{ backgroundImage: `url(/${cover})` }}></Container>;
}
