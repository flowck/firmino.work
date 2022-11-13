import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

export function BlogLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
