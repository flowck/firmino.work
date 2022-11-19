import { styled } from "stitches.config";

interface Props {
  title: string;
  description?: string;
}

const Container = styled("section", {
  minHeight: "200px",
  display: "flex",
  color: "$white",
  padding: "0 $5",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$shade900",
  borderBottom: "1px solid $shade800",
  "@bp2": {
    height: "300px",
  },
  "@bp3": {
    height: "400px",
  },
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
