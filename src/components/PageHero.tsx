import { styled } from "stitches.config";

interface Props {
  title: string;
  description?: string;
}

const Container = styled("section", {
  height: "400px",
  display: "flex",
  color: "$white",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$shade900",
});

export function PageHero({ title, description }: Props) {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </Container>
  );
}
