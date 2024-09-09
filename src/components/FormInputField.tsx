"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { UseFormRegister, FieldError } from "react-hook-form";
import type { contactFormType } from "@/interfaces/ContactFormType";

interface FormInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  as?: "input" | "textarea";
  register: UseFormRegister<contactFormType>;
  name: "email" | "subject" | "message";
  error: FieldError | undefined;
}

const FormInputField = ({
  type,
  placeholder,
  className,
  name,
  register,
  error,
  as = "input",
  ...props
}: FormInputFieldProps) => {
  const Comp = as;
  return (
    <>
      <Comp
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={cn(
          "py-3 w-full font-sans text-sm outline-background px-3 rounded-lg bg-foreground/5",
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 ml-1 text-sm">{error.message}</p>}
    </>
  );
};

export default FormInputField;
