import Link from "next/link";
import { CSSType, styled } from "stitches.config";
import { Avatar } from "./Avatar";

interface Props {
  css?: CSSType;
}

const Container = styled("div", {
  ".logo-avatar": {
    borderRadius: "50%",
    transition: "border 0.25s",
    border: "2px solid $primary900",
  },

  "&:hover .logo-avatar": {
    border: "2px solid $primary700",
  },

  "> a": {
    gap: "$2",
    display: "flex",
    color: "$white",
    alignItems: "center",
    textDecoration: "none",
  },
});

export function Logo({ css }: Props) {
  return (
    <Container css={css}>
      <Link href="/">
        <Avatar css={{ width: "40px", height: "40px" }} />
        FIRMINO
      </Link>
    </Container>
  );
}
