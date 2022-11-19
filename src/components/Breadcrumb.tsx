import ChevronRight from "icons/chevron-right.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { styled } from "stitches.config";

const Container = styled("nav", {
  text: "copy",
  color: "$shade700",
  textTransform: "capitalize",

  "> ul li a": {
    color: "$shade500",
  },

  "> ul": {
    display: "flex",
    alignItems: "center",
  },
  "> ul li": {
    display: "flex",
    listStyle: "none",
    marginRight: "$5",
    alignItems: "center",
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
