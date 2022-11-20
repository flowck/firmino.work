import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  title?: string;
  cover?: string;
  isHome?: boolean;
  description: string;
  path?: string;
  children?: ReactNode | ReactNode[];
}

const BASE_TITLE = "Firmino Changani";

export function Meta({ isHome = false, title, path, description, cover, children }: Props) {
  const _title = isHome ? `${BASE_TITLE} — Software Developer` : `${title} — ${BASE_TITLE}`;
  const _path = path ? `https://changani.me/${path}` : "https://changani.me";
  const _cover = `https://changani.me/${cover ? cover : "assets/img/changani.me.png"}`;

  return (
    <Head>
      <title>{_title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={_path} />
      <meta property="og:image" content={_cover} />
      {children}
    </Head>
  );
}
