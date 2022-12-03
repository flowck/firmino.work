import { CSSType, styled } from "stitches.config";

/* eslint-disable @next/next/no-img-element */

interface Props {
  css?: CSSType;
  className?: string;
}

const Container = styled("figure", {
  width: "40px",
  height: "40px",
  position: "relative",
  borderRadius: "50%",
  transition: "border 0.25s",
  border: "2px solid $primary900",

  img: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
});

export function Avatar({ css, className }: Props) {
  return (
    <Container className={className} css={css}>
      <img src="/assets/img/me.webp" alt="Firmino" />
    </Container>
  );
}
