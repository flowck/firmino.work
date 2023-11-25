import "@@/assets/globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Footer } from "./(components)/Footer";
import { Header } from "./(components)/Header";
import { appConfig } from "./config";

export const metadata: Metadata = {
  title: "Firmino Changani",
  description: `Firmino Changani is a ${appConfig.currentTitle} at ${appConfig.currentCompany}.`,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
