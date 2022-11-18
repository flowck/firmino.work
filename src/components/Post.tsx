import Image from "next/image";
import Link from "next/link";
import { styled } from "stitches.config";

const Container = styled("article", {
  a: {
    color: "initial",
    textDecoration: "none",
  },
  // border: "1px solid red",
});

const Cover = styled("figure", {
  width: "100%",
  aspectRatio: "5/3",
  marginBottom: "$5",
  position: "relative",
  // border: "1px solid red",

  "> img": {
    borderRadius: "$postCover",
  },
});

const PublicationDate = styled("span", {
  color: "$shade700",
  display: "block",
  marginBottom: "$2",
});

const Heading = styled("h1", {
  subHeading: "3",
});

interface Props {
  path: string;
  title: string;
  cover: string;
  publicationDate: Date;
}

export function Post({ path, title, cover, publicationDate }: Props) {
  const date = Intl.DateTimeFormat("en-GB", { month: "short", day: "2-digit", year: "numeric" }).format(
    new Date(publicationDate)
  );

  return (
    <Container>
      <Link href={`/${path}`}>
        <Cover>{cover && <Image alt={title} src={`/${cover}`} fill />}</Cover>
        <PublicationDate>{date}</PublicationDate>
        <Heading>{title}</Heading>
      </Link>
    </Container>
  );
}
