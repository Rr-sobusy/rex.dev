import React from "react";
import { cn } from "@/lib/utils";
import { FlexBox } from "../Flexbox";
import { LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import HeaderNav from "./header-nav";
import { TbMenu2 } from "react-icons/tb";
import { Spiral as Hamburger } from "hamburger-react";

type HeaderProps = {
  className?: string;
  isSideNavShown: boolean;
  sideNavToggler: () => void;
};

const Header = ({ className, sideNavToggler, isSideNavShown }: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  const toggleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header
      className={cn(
        "py-3 h-[55px] fixed max-w-6xl top-0 w-full translate-x-[-50%] left-1/2 bg-background opacity-95 px-3 lg:px-0 mx-auto z-40",
        className
      )}
    >
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
            {["Home", "Projects", "About"].map((content) => (
              <HeaderNav
                key={content}
                offset={-70}
                className="relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:rounded-xl after:bg-primary after:h-[3px] after:w-0 after:duration-300 after:hover:w-full font-poppins"
                to={content}
              >
                {content}
              </HeaderNav>
            ))}
            <button className="bg-primary/90 hover:bg-primary py-2 px-5 text-sm font-poppins flex items-center rounded-2xl text-background">
              Dm me
            </button>
          </FlexBox>

          <span
            onClick={toggleThemeChange}
            className="px-2 py-2 hover:bg-backgroundAccent rounded-lg"
          >
            <LuSun size={20} />
          </span>
          <span className="block md:hidden">
            <Hamburger
              toggled={isSideNavShown}
              onToggle={sideNavToggler}
              size={24}
            />
          </span>
        </FlexBox>
      </FlexBox>
    </header>
  );
};

export default Header;
