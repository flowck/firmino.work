import { ReactNode } from "react";
import { CSSType, styled } from "stitches.config";

import { CSSProperties } from "@stitches/react";

const Container = styled("div", {
  width: "90%",
  margin: "0 auto",
  bp3: {
    padding: "0 $8",
  },
});

interface Props {
  children: ReactNode | ReactNode[];
  css?: CSSType;
}

export function GridContainer({ children, css }: Props) {
  return <Container css={css}>{children}</Container>;
}
