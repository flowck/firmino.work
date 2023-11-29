import Link from "next/link";
import { formatDate } from "../(blogging)/(lib)/dates";

interface Props {
  date: Date;
  href: string;
  title: string;
}

export function PostItem({ title, href, date }: Props) {
  return (
    <article className="grid grid-cols-[120px_auto] mb-5 items-center">
      <span className="text-sm">{formatDate(date)}</span>
      <h1 className="">
        <Link href={href}>{title}</Link>
      </h1>
    </article>
  );
}
