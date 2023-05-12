import { styled } from "stitches.config";

interface Props {
  content: string;
}

const Container = styled("article", {
  "p, ul, ol": {
    text: "body",
    marginBottom: "$5",
    wordBreak: "break-all",
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
    margin: "$7 0 $5 0",
  },

  "p code, ol code": {
    padding: "4px $1",
    backgroundColor: "$shade800",
    borderRadius: "$codeSnippet",
  },

  "img, p img": {
    display: "block",
    maxWidth: "100%",
    margin: "0 auto",
  },

  a: {
    color: "$white",
    "&:hover": {
      color: "$primary900",
    },
  },

  ".remark-highlight": {
    margin: "$7 0",
    display: "block",
    fontSize: "14px",
  },

  ".remark-highlight pre": {
    borderRadius: "$codeSnippet",
  },

  ".line-numbers .line-numbers-rows": {
    borderRight: "none",
  },
});

export function PostContent({ content }: Props) {
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Container>
  );
}
