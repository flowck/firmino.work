import Link from "next/link";
import { styled } from "stitches.config";

/* eslint-disable @next/next/no-img-element */

const Container = styled("article", {
  position: "relative",
  paddingBottom: "$4",
  a: {
    color: "initial",
    textDecoration: "none",
  },
  "&::before": {
    content: " ",
    bottom: "0px",
    width: "100%",
    height: "4px",
    borderRadius: "2px",
    position: "absolute",
    backgroundColor: "$shade900",
    transition: "background-color 0.25s",
  },
  "&:hover::before": {
    backgroundColor: "$primary900",
  },
});

const Cover = styled("figure", {
  width: "100%",
  marginBottom: "$5",
  aspectRatio: "16/9",
  overflow: "hidden",
  position: "relative",
  borderRadius: "$postCover",
  backgroundColor: "$shade700",

  "> img": {
    width: "100%",
    height: "100%",
    borderRadius: "$postCover",
  },
});

const PublicationDate = styled("span", {
  text: "copy",
  display: "block",
  marginBottom: "$2",
  color: "$shade500",
});

const Heading = styled("h1", {
  subHeading: "3",
  color: "$white",
});

interface Props {
  path: string;
  title: string;
  cover: string;
  publicationDate: string;
}

export function Post({ path, title, cover, publicationDate, ...props }: Props) {
  return (
    <Container {...props}>
      <Link aria-label={title} href={`/${path}`}>
        <Cover>{cover && <img loading="lazy" alt={title} src={`/${cover}`} />}</Cover>
      </Link>
      <PublicationDate>{publicationDate}</PublicationDate>
      <Link aria-label={title} href={`/${path}`}>
        <Heading>{title}</Heading>
      </Link>
    </Container>
  );
}
