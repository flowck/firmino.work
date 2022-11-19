import { styled } from "stitches.config";

interface Props {
  content: string;
}

const Container = styled("article", {
  "p, ul, ol": {
    text: "body",
    marginBottom: "$5",
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
