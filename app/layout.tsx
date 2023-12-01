import "@@/assets/globals.css";
import "@@/assets/prism.css";
import { PropsWithChildren } from "react";
import { Footer } from "./(components)/Footer";
import { Header } from "./(components)/Header";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="bg-white dark:bg-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
