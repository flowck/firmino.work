import { formatDate } from "lib/dates";
import Link from "next/link";
import { styled } from "stitches.config";

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
  aspectRatio: "16/9",
  marginBottom: "$5",
  position: "relative",
  borderRadius: "$postCover",
  // border: "1px solid red",
  backgroundColor: "$shade700",

  "> img": {
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
  publicationDate: Date;
}

export function Post({ path, title, cover, publicationDate }: Props) {
  return (
    <Container>
      {/* <Cover>{cover && <Image alt={title} src={`/${cover}`} fill />}</Cover> */}
      <Link aria-label={title} href={`/${path}`}>
        <Cover />
      </Link>
      <PublicationDate>{formatDate(publicationDate)}</PublicationDate>
      <Link aria-label={title} href={`/${path}`}>
        <Heading>{title}</Heading>
      </Link>
    </Container>
  );
}
