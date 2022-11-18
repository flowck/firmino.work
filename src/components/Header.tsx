import { styled } from "stitches.config";
import { GridContainer } from "./GridContainer";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

const Container = styled("header", {
  height: "82px",
  width: "100%",
  color: "$white",
  backgroundColor: "$shade900",
});

const gridOverride = { height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" };

export function Header() {
  return (
    <Container>
      <GridContainer css={gridOverride}>
        <Logo />
        <Navigation />
      </GridContainer>
    </Container>
  );
}
