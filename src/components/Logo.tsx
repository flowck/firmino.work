import Image from "next/image";
import Link from "next/link";
import { styled } from "stitches.config";

const Container = styled("div", {
  ".logo-avatar": {
    borderRadius: "50%",
  },

  "> a": {
    gap: "$2",
    display: "flex",
    color: "$white",
    alignItems: "center",
    textDecoration: "none",
  },
});

export function Logo() {
  return (
    <Container>
      <Link href="/">
        <Image className="logo-avatar" src="/assets/img/me.jpg" width="40" height="40" alt="Firmino" />
        FIRMINO
      </Link>
    </Container>
  );
}
