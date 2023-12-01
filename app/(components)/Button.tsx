import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export function Button({ children }: Props) {
  return <button>{children}</button>;
}
