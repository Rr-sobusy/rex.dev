"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FlexBox } from "../Flexbox";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  const toggleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className={cn("w-full py-3 h-[55px] fixed max-w-6xl mx-auto", className)}>
      <FlexBox justifyContent="between" alignItems="center" flexDirection="row">
        <h5 className="text-2xl bg-clip-text bg-gradient-to-r text-transparent to-primary from-[#42BFC7] font-extrabold font-poppins">
          rex.dev
        </h5>
        <FlexBox alignItems="center" className="gap-2">
          <FlexBox
            justifyContent="evenly"
            alignItems="center"
            className="gap-7 font-medium hidden md:flex"
          >
            <p className="font-poppins text-foreground/85">About</p>
            <p className="font-poppins text-foreground/85">Projects</p>
            <p className="font-poppins text-foreground/85">About</p>
            <button className="bg-primary/90 hover:bg-primary py-2 px-5 text-sm font-poppins flex items-center rounded-2xl text-background">
              Dm me
            </button>
          </FlexBox>
          <span
            onClick={toggleThemeChange}
            className="px-2 py-2 hover:bg-backgroundAccent rounded-lg"
          >
            <Sun size={20} />
          </span>
        </FlexBox>
      </FlexBox>
    </header>
  );
};

export default Header;
