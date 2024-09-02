import React from "react";
import HeaderNav from "./header-nav";
import Button from "../Button";

type SideNavProps = {
  isSideNavShown: boolean;
  clickHandler?: () => void;
};

const SideNavMobile = ({ isSideNavShown, clickHandler }: SideNavProps) => {
  return (
    <section
      className={`fixed right-0 h-screen ${
        isSideNavShown ? "w-full" : "w-0 hidden"
      } transition-all duration-1000 z-30 bg-background flex flex-col gap-6 justify-center text-center`}
    >
      {["Home", "Projects", "About"].map((content) => (
        <HeaderNav
          clickHandler={clickHandler}
          key={content}
          offset={-70}
          className="font-medium underline"
          to={content}
        >
          {content}
        </HeaderNav>
      ))}
      <Button className="w-48 place-self-center rounded-2xl" variant="contained">Dm me</Button>
    </section>
  );
};

export default SideNavMobile;
