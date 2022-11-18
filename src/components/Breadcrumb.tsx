import ChevronRight from "icons/chevron-right.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { styled } from "stitches.config";

const Container = styled("nav", {
  textTransform: "capitalize",

  "> ul li a": {
    color: "$shade700",
  },

  "> ul": {
    display: "flex",
  },
  "> ul li": {
    listStyle: "none",
    marginRight: "$5",
  },
});

export interface Props {}
export default function Breadcrumb({}: Props) {
  const router = useRouter();

  useEffect(() => {
    console.log(router.basePath, router.pathname);
  });

  return (
    <Container>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <ChevronRight />
        </li>
        <li>{router.pathname.replace("/", "")}</li>
      </ul>
    </Container>
  );
}
