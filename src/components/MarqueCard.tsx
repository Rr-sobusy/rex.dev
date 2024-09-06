import React from "react";
import type { StacksType } from "@/interfaces/StacksType";
import Image from "next/image";

type MarqueCardProps = {
  stack: StacksType;
};

const MarqueCard = ({ stack, ...props }: MarqueCardProps) => {
  return (
    <div {...props} className="flex gap-3 min-w-64 min-h-[150px] items-center">
      <Image
        className="text-primary"
        height={100}
        width={100}
        alt="MarqueImage"
        src={stack.imgUrl}
      />
      <h1 className="font-sans font-extrabold tracking-wider text-xl text-foreground/95">
        {stack.stackName}
      </h1>
    </div>
  );
};

export default MarqueCard;
