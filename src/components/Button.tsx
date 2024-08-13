import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva("px-5 py-2 font-poppins font-medium text-sm hover:shadow-md", {
  variants: {
    variant: {
      outlined: "rounded-2xl border border-primary text-primary",
      contained: "rounded-2xl bg-primary text-background/90"
    },
  },
});

const Button = ({ variant, className, ...props }: ButtonProps) => {
  const Comp = "button";
  return <Comp className={cn(buttonVariants({className, variant}), className)} {...props} />;
};

export default Button;
