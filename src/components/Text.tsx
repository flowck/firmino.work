import { styled } from "stitches.config";

export const Text = styled("span", {
  variants: {
    variant: {
      caption: {
        fontSize: "$1",
      },
      copy: {
        fontSize: "$2",
      },
      body: {
        fontSize: "$3",
      },
    },
  },
});
