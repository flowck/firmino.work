import { styled } from "stitches.config";

interface Props {
  content: string;
}

const Container = styled("article", {
  "p, ul, ol": {
    text: "body",
    marginBottom: "$5",
  },
  "ul, ol": {
    marginLeft: "$7",
  },
  h1: {
    subHeading: "1",
  },
  h2: {
    subHeading: "2",
  },
  h3: {
    subHeading: "3",
  },
  "h1, h2, h3, h4, h5, h6": {
    marginBottom: "$5",
  },
  "p code": {
    padding: "4px $1",
    backgroundColor: "$shade800",
    borderRadius: "$codeSnippet",
  },
  a: {
    color: "$white",
    "&:hover": {
      color: "$primary900",
    },
  },
  ".remark-highlight": {
    display: "block",
    margin: "$7 0",
  },
  ".remark-highlight pre": {
    borderRadius: "$codeSnippet",
  },
  ".remark-highlight pre code": {
    fontSize: "13px",
  },
});

export function PostContent({ content }: Props) {
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Container>
  );
}
