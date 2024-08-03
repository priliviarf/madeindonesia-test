import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  children: ReactNode;
  isQuestionList?: boolean;
};
export function Card({
  children,
  className,
  isQuestionList = false,
}: CardProps & ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        className,
        `"shadow-md bg-white p-6 md:p-12 pb-9 rounded-2xl ${
          !!isQuestionList
            ? ""
            : "flex flex-col justify-between md:justify-center"
        }`
      )}
      style={{
        minHeight: !isQuestionList
          ? "calc(100svh - 4rem)"
          : "calc(100svh - 7rem - 64px)",
      }}
    >
      {children}
    </div>
  );
}
