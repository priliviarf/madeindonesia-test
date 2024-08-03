import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { Link, LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  ["transition-colors", "rounded-full", "px-6", "py-3", "font-medium"],
  {
    variants: {
      variant: {
        default: ["bg-primary", "hover:bg-primary-light", "text-white"],
        ghost: ["bg-white hover:bg-gray-100"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
// const bu = <button className="rounded-full font-"></button>;

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;
export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant }), className)}
    />
  );
}

type ButtonLinkProps = VariantProps<typeof buttonStyles> & LinkProps;
export function ButtonLink({ className, variant, ...props }: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={twMerge(buttonStyles({ variant }), className)}
    />
  );
}
