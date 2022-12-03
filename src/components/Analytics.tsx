import Script from "next/script";

const script = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-151333822-1');`;

export function Analytics() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-151333822-1"></Script>
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
