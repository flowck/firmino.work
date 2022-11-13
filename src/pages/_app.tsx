import "../styles/globals.css";
import "../../public/assets/css/prism.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";

const Noop = ({ children }: { children: ReactNode }) => children;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head>
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
