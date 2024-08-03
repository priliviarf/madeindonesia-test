import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};
export function Card({ children }: CardProps) {
  return <div className="shadow-md bg-white p-4 rounded-2xl">{children}</div>;
}
