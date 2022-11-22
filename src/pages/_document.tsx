import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { getCssText } from "../stitches.config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body className="line-numbers">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
