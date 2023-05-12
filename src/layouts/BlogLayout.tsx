import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ReactNode } from "react";
import { styled } from "stitches.config";

interface Props {
  children: ReactNode | ReactNode[];
}

export function BlogLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

const Content = styled("section", {
  minHeight: `calc(100vh - (82px + 201px))`,
});
