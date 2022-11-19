import { ReactNode } from "react";
import { CSSType, styled } from "stitches.config";

const Container = styled("div", {
  width: "90%",
  margin: "0 auto",
});

interface Props {
  css?: CSSType;
  type?: "content" | "large";
  children: ReactNode | ReactNode[];
}

export function GridContainer({ children, css, type }: Props) {
  return (
    <Container
      css={{
        ...css,
        "@bp3": {
          width: type === "content" ? "640px" : "960px",
        },
        "@bp4": {
          width: type === "content" ? "840px" : "1140px",
        },
      }}
    >
      {children}
    </Container>
  );
}
