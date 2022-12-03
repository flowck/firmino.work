import { CSSType, styled } from "stitches.config";

/* eslint-disable @next/next/no-img-element */

interface Props {
  css?: CSSType;
  className?: string;
}

const Container = styled("figure", {
  width: "40px",
  aspectRatio: "1/1",
  position: "relative",
  borderRadius: "50%",
  transition: "border 0.25s",
  border: "2px solid $primary900",

  img: {
    width: "100%",
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