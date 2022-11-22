import { CSSType, styled } from "stitches.config";
import { Avatar } from "./Avatar";

interface Props {
  css?: CSSType;
  type: "short" | "full";
}

const Container = styled("div", {
  display: "grid",
  alignItems: "center",
});

const Name = styled("span", {
  text: "copy",
});

const Bio = styled("p", {
  text: "copy",
});

export function PostAuthor({ type, css }: Props) {
  const gridTemplateColumns = type === "short" ? "50px auto" : "100px auto";
  return (
    <Container css={{ ...css, gap: type === "short" ? "$1" : "$5", gridTemplateColumns }}>
      <Avatar css={{ width: "100%", aspectRatio: "1/1" }} />
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
