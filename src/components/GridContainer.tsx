import { ReactNode } from "react";
import { CSSType, styled } from "stitches.config";

const Container = styled("div", {
  width: "90%",
  "@bp3": {
    // padding: "0 20.83%",
    padding: "0 5.5%",
  },
});

interface Props {
  css?: CSSType;
  type?: "content" | "large";
  children: ReactNode | ReactNode[];
}

export function GridContainer({ children, css }: Props) {
  return <Container css={css}>{children}</Container>;
}
