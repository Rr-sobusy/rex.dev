import React from "react";
import { FlexBox } from "../Flexbox";

type HeroProps = {};

const Hero = ({ ...props }: HeroProps) => {
  return <section {...props}>
    <FlexBox className="mt-5" flexDirection="col">
       <h5 className="font-poppins text-lg">Hi there I'm</h5>
       <h1 className="text-3xl font-extrabold font-poppins tracking-tight">Rex Randy, an aspiring Fullstack Developer</h1>
    </FlexBox>
  </section>;
};

export default Hero;
