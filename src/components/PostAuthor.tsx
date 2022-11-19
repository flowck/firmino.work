import Image from "next/image";
import { CSSType, styled } from "stitches.config";

interface Props {
  css?: CSSType;
  type: "short" | "full";
}

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Avatar = styled("figure", {
  aspectRatio: "1/1",
  position: "relative",
  "> img": {
    borderRadius: "50%",
  },
});

const Name = styled("span", {
  text: "copy",
});

const Bio = styled("p", {
  text: "copy",
});

export function PostAuthor({ type, css }: Props) {
  return (
    <Container css={{ ...css, gap: type === "short" ? "$1" : "$5" }}>
      <Avatar css={{ width: type === "short" ? "50px" : "100px" }}>
        <Image src="/assets/img/me.webp" fill alt="Authored by Firmino Changani" />
      </Avatar>
      <div>
        <Name css={{ text: type === "short" ? "copy" : "body" }}>
          {type === "full" ? "Authored by " : ""}
          Firmino Changani
        </Name>
        {type === "full" && (
          <Bio>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor doloremque blanditiis excepturi ratione
            eligendi deserunt nemo omnis. Sunt molestiae veritatis inventore autem ab quas illum facilis veniam
            voluptates deserunt?
          </Bio>
        )}
      </div>
    </Container>
  );
}
