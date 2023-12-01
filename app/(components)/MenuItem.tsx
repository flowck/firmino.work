import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href: string;
  className?: string;
}

export function MenuItem({ children, className = "", href }: Props) {
  return (
    <li>
      <Link
        href={href}
        className={`px-4 py-2 rounded-md hover:bg-slate-800 transition-colors duration-500 ${className}`}
      >
        {children}
      </Link>
    </li>
  );
}
