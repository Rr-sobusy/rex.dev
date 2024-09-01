import React from "react";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

type CarouselArrowsProps = {
  handlePrev: () => void;
  handleNext: () => void;
};

const CarouselArrows = ({ handlePrev, handleNext }: CarouselArrowsProps) => {
  return (
    <ul className="flex gap-3">
      <li onClick={handlePrev} className="w-9 h-9 border border-foreground/15 text-foreground/90 hover:bg-primary hover:text-background hover:border-none  rounded-full flex items-center justify-center cursor-pointer">
        <GoArrowLeft size={18} />
      </li>
      <li onClick={handleNext} className="w-9 h-9 border border-foreground/15 text-foreground/90 hover:bg-primary hover:text-background hover:border-none  rounded-full flex items-center justify-center cursor-pointer">
        <GoArrowRight size={18} />
      </li>
    </ul>
  );
};

export default CarouselArrows;
