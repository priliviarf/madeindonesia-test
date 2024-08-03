import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  children: ReactNode;
  className?: string;
};
export function Card({ children, className }: CardProps) {
  return (
    <div className={twMerge(className, "shadow-md bg-white p-6 rounded-2xl")}>
      {children}
    </div>
  );
}
