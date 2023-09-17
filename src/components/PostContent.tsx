import { styled } from "stitches.config";

interface Props {
  content: string;
}

export function PostContent({ content }: Props) {
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Container>
  );
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
    margin: "$7 0 $5 0",
  },

  "p code, ol code, ul code": {
    padding: "4px $1",
    backgroundColor: "$shade800",
    borderRadius: "$codeSnippet",
  },

  blockquote: {
    padding: "$5 $4 $1 $4",
    backgroundColor: "$shade800",
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

  figure: {
    margin: "0 auto",

    img: {
      marginBottom: "$1",
    },

    figcaption: {
      fontSize: "$2",
      textAlign: "center",
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
