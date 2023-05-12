import { styled } from "stitches.config";

export const PostListGrid = styled("div", {
  rowGap: "$6",
  columnGap: "$3",
  display: "flex",
  flexDirection: "column",
  gridTemplateColumns: "repeat(1, 1fr)",
  "@bp2": {
    rowGap: "$8",
    columnGap: "$5",
    gridTemplateColumns: "repeat(2, 2fr)",
  },
  "@bp3": {
    gap: "$3",
    gridTemplateColumns: "repeat(3, 3fr)",
  },
});
