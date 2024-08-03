import React from "react";
import { cn } from "@/lib/utils";

type SeparatorProps = {
  className?: string;
};

const Separator = ({ className, ...props }: SeparatorProps) => {
  const Comp = "hr";
  return (
    <Comp
      className={cn("border-b-[.50px] border-slate-100 dark:border-slate-800 w-full", className)}
      {...props}
    />
  );
};

export default Separator;
