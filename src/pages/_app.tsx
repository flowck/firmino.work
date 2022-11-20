// import "../styles/globals.css";
import { Open_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import { globalStyles } from "stitches.config";
import "../../public/assets/css/prism.css";

const openSans = Open_Sans({ subsets: ["latin"] });
const Noop = ({ children }: { children: ReactNode }) => children;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head>
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.png" />
        <link rel="manifest" href="/assets/site.webmanifest" />
      </Head>
      <style jsx global>{`
        html,
        body {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      {globalStyles()}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
