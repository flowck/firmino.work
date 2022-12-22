import { PostMetadata } from "lib/posts";
import { ReactNode } from "react";
import { CSSType, styled } from "stitches.config";

interface Props {
  css?: CSSType;
  PostAuthor: ReactNode;
  metadata: PostMetadata;
}

const Container = styled("div", {
  paddingBottom: "$7",
  borderBottom: "1px solid $shade800",
});

const Heading = styled("h1", {
  subHeading: "1",
  marginBottom: "$3",
});

const Description = styled("p", {
  marginBottom: "$5",
  color: "$shade500",
});

const PublicationDate = styled("time", {
  text: "copy",
  color: "$shade700",
  display: "block",
  marginBottom: "$5",
});

export function PostHead({ metadata, PostAuthor, css }: Props) {
  return (
    <Container css={css}>
      <Heading>{metadata.title}</Heading>
      <Description>{metadata.description}</Description>

      <PublicationDate dateTime={metadata.date.toString()}>{metadata.formattedDate}</PublicationDate>
      {PostAuthor}
    </Container>
  );
}
