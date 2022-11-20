import ChevronRight from "icons/chevron-right.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CSSType, styled } from "stitches.config";

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

export interface Props {
  css?: CSSType;
  queryParams?: Record<string, string>;
}

/**
 * Breadcrumb with support to only two levels of hierachy counting from the home page: /blog/[slug]
 */
export default function Breadcrumb({ css, queryParams = {} }: Props) {
  const router = useRouter();
  const subPaths = router.pathname.split("/").filter((item) => item);

  return (
    <Container css={css}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        {subPaths.map((item, idx) => (
          <React.Fragment key={idx}>
            <li>
              <ChevronRight />
            </li>

            {idx === subPaths.length - 1 ? (
              <li>{queryParams[item] || item}</li>
            ) : (
              <li>
                <Link href={`/${item}`}>{queryParams[item] || item}</Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </Container>
  );
}