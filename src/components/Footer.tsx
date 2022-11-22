import { styled } from "stitches.config";
import { GridContainer } from "./GridContainer";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

const Container = styled("footer", {
  width: "100%",
  color: "$white",
  padding: "$8 0",
  backgroundColor: "$shade900",
  borderTop: "1px solid $shade800",
});

const gridOverride = { height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" };

export function Footer() {
  return (
    <Container>
      <GridContainer css={gridOverride}>
        <Logo css={{ text: "copy" }} />
        <Navigation css={{ text: "copy" }} />
      </GridContainer>
    </Container>
  );
}
