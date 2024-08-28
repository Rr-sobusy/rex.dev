import React from "react";
import { cn } from "@/lib/utils";

type CarouselDotsProps = {
  className: string;
  lists: string[];
  active?: number;
  clickHandler: (e: number) => void;
};

const CarouselDots = ({
  lists = [],
  active,
  clickHandler,
  className,
}: CarouselDotsProps) => {
  return (
    <ul className={cn("flex flex-row gap-3", className)}>
      {lists.map((_, index) => (
        <li
          onClick={() => clickHandler(index)}
          className={`w-2 h-2 rounded-full cursor-pointer ${
            index === active ? "bg-primary" : "bg-foreground/10"
          } `}
        ></li>
      ))}
    </ul>
  );
};

export default CarouselDots;
