import { CSSType, styled } from "stitches.config";
import { PostTag } from "./PostTag";

interface Props {
  css?: CSSType;
  tags: string[];
}

const List = styled("div", {
  gap: "$3",
  width: "100%",
  display: "flex",
});

export function PostTagList({ css, tags = [] }: Props) {
  return (
    <List css={css}>
      {tags.map((tag) => (
        <PostTag key={tag}>{tag}</PostTag>
      ))}
    </List>
  );
}
