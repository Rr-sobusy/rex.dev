import React from "react";
import { Link, LinkProps } from "react-scroll";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  to: string;
  children: string | React.ReactNode;
  offset?: number;
  className?: string;
};

const HeaderNav = ({ to, children, offset, className }: NavLinkProps) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
      className={cn(
        "relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:rounded-xl after:bg-primary after:h-[3px] after:w-0 after:duration-300 after:hover:w-full",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default HeaderNav;
