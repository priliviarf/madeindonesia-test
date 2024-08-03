import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { Link, LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  ["transition-colors", "rounded-full", "px-6", "py-3", "font-medium"],
  {
    variants: {
      variant: {
        default: ["bg-primary", "hover:bg-primary-hover", "text-white"],
        ghost: ["bg-white hover:bg-gray-100"],
        disabled: [
          "bg-primary-disabled",
          "cursor-not-allowed",
          "text-gray-700",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
// const bu = <button className="rounded-full text-gray-700"></button>;

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
    <div className="py-3">
      <Link
        {...props}
        className={twMerge(buttonStyles({ variant }), className)}
      />
    </div>
  );
}
