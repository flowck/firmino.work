import Link from "next/link";
import { Icon } from "./Icon";

export function MenuList() {
  return (
    <>
      {menuItems.map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            aria-label={item.label}
            data-testid={`Navigation_${item.label}`}
            target={item.isExternal ? "_blank" : "_parent"}
          >
            {item.label}
            {item.isExternal && <Icon css={{ marginLeft: "$1" }} className="ri-external-link-line" />}
          </Link>
        </li>
      ))}
    </>
  );
}

const menuItems = [
  {
    label: "Blog",
    path: "/blog",
    isExternal: false,
  },
  {
    label: "GitHub",
    path: "https://github.com/flowck",
    isExternal: true,
  },
  {
    label: "LinkedIn",
    path: "https://linkedin.com/in/firminochangani",
    isExternal: true,
  },
];
