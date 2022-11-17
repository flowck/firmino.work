// import "../styles/globals.css";
import "../../public/assets/css/prism.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import { Open_Sans } from "@next/font/google";
import { globalStyles } from "stitches.config";

const openSans = Open_Sans({ subsets: ["latin"] });
const Noop = ({ children }: { children: ReactNode }) => children;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head>
        <link rel="icon" href="/assets/img/favicon.png" />
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
