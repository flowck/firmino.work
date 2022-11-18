import { styled } from "stitches.config";

export const PostListGrid = styled("div", {
  // gap: "$5",
  columnGap: "$5",
  rowGap: "$8",
  display: "grid",
  gridTemplateColumns: "repeat(3, 3fr)",
});
