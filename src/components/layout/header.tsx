import React from "react";
import { cn } from "@/lib/utils";
import { FlexBox } from "../Flexbox";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full py-3 h-[55px]", className)}>
      <FlexBox justifyContent="between" alignItems="center" flexDirection="row">
        <h5 className="text-2xl bg-clip-text bg-gradient-to-r text-transparent to-primary from-[#42BFC7] font-extrabold font-poppins">
          rex.dev
        </h5>
        <FlexBox className="gap-2">
          <FlexBox
            justifyContent="evenly"
            alignItems="center"
            className="gap-7"
          >
            <p className="font-poppins text-foreground/90">About</p>
            <p className="font-poppins text-foreground/90">Projects</p>
            <p className="font-poppins text-foreground/90">About</p>
            <button className="bg-primary/90 hover:bg-primary py-2 px-5 text-sm font-poppins flex items-center rounded-2xl text-foreground">
              Dm me
            </button>
          </FlexBox>
          <button>rex</button>
        </FlexBox>
      </FlexBox>
    </header>
  );
};

export default Header;
