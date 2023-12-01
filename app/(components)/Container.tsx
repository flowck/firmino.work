import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "footer" | "header";
}

export function Container({ as: Comp = "div", children, className = "", ...props }: Props) {
  return (
    <Comp className={`px-4 py-4 md:px-10 md:py-8 lg:px-0 lg:w-830 mx-auto my-0 ${className}`} {...props}>
      {children}
    </Comp>
  );
}
