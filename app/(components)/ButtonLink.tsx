import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href: string;
}

export function ButtonLink({ children, href }: Props) {
  return (
    <Link
      className="btn flex items-center rounded-md px-2 text-sm bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
      href={href}
    >
      {children}
    </Link>
  );
}
