import { PostMetadata } from "lib/posts";
import { CSSType, styled } from "stitches.config";

interface Props {
  css?: CSSType;
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

const PublicationDate = styled("time", {
  text: "copy",
  color: "$shade700",
  display: "block",
});

export function PostHead({ metadata, css }: Props) {
  return (
    <Container css={css}>
      <Heading>{metadata.title}</Heading>

      <PublicationDate dateTime={metadata.date.toString()}>{metadata.formattedDate}</PublicationDate>
    </Container>
  );
}
