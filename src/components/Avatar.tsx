import Image from "next/image";
import { CSSType, styled } from "stitches.config";

interface Props {
  css?: CSSType;
}

const Container = styled("figure", {
  position: "relative",
  borderRadius: "50%",
  transition: "border 0.25s",
  border: "2px solid $primary900",

  img: {
    borderRadius: "50%",
  },
});

export function Avatar({ css }: Props) {
  return (
    <Container css={css}>
      <Image src="/assets/img/me.webp" fill alt="Firmino" />
    </Container>
  );
}
