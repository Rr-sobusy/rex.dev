import React from "react";
import { cn } from "@/lib/utils";

interface FormInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  as?: "input" | "textarea";
}

const FormInputField = ({
  type,
  placeholder,
  className,
  as = "input",
  ...props
}: FormInputFieldProps) => {
  const Comp = as;
  return (
    <Comp
      type={type}
      placeholder={placeholder}
      className={cn(
        "py-3 w-full font-sans text-sm outline-background px-3 rounded-lg bg-foreground/5",
        className
      )}
      {...props}
    />
  );
};

export default FormInputField;
