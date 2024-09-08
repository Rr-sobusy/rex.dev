import React from "react";
import { Link, LinkProps } from "react-scroll";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  to: string;
  children: string | React.ReactNode;
  offset?: number;
  className?: string;
  clickHandler?: () => void;
};

const HeaderNav = ({
  to,
  children,
  offset,
  className,
  clickHandler,
}: NavLinkProps) => {
  return (
    <Link
      onClick={clickHandler}
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
      className={cn(
        "text-foreground/90 cursor-pointer font-poppins",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default HeaderNav;
