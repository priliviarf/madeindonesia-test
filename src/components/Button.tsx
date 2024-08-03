import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { Link, LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(
  [
    "transition-colors",
    "rounded-full",
    "px-9",
    "py-3",
    "font-medium",
    "w-full",
    "md:w-auto",
    "inline-block",
    "text-center",
  ],
  {
    variants: {
      variant: {
        default: ["bg-primary", "hover:bg-primary-hover", "text-white"],
        ghost: ["bg-gray-100 hover:bg-gray-300"],
        disabled: [
          "bg-primary-disabled",
          "cursor-not-allowed",
          "text-gray-600",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
// const bu = <button className="p-9 "></button>;

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
