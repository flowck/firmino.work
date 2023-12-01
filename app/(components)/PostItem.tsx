import Link from "next/link";
import { formatDate } from "../(blogging)/(lib)/dates";

interface Props {
  date: Date;
  href: string;
  title: string;
}

export function PostItem({ title, href, date }: Props) {
  return (
    <article className="sm:grid grid-cols-[120px_auto] mb-2 items-center hover:bg-slate-800 transition-colors duration-300 px-2 py-2 rounded-md">
      <span className="text-sm text-gray-300">{formatDate(date)}</span>
      <h1>
        <Link className="w-full block" href={href}>
          {title}
        </Link>
      </h1>
    </article>
  );
}
