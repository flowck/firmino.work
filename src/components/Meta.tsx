import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  title?: string;
  cover?: string;
  isHome?: boolean;
  description: string;
  children?: ReactNode | ReactNode[];
}

const BASE_TITLE = "Firmino Changani";

export function Meta({ isHome = false, title, description, cover, children }: Props) {
  return (
    <Head>
      <title>{isHome ? `${BASE_TITLE} — Software Developer` : `${title} — ${BASE_TITLE}`}</title>
      <meta name="description" content={description} />
      {children}
    </Head>
  );
}
