"use client";

import React from "react";
import { FlexBox } from "../Flexbox";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "../Button";

type HeroProps = {};

const Hero = ({ ...props }: HeroProps) => {
  return (
    <section {...props}>
      <FlexBox className="md:mt-14 mt-5 flex flex-col md:flex-row">
        <FlexBox className="flex-1" flexDirection="col">
          <h5 className="font-poppins text-base text-foreground/85">
            Hi there, I'm
          </h5>
          <h1 className="text-3xl md:text-5xl font-extrabold font-poppins tracking-tight text-foreground/85 h-[4.5rem] md:h-[6rem]">
            Rex Randy, an{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-primaryAccent to-primary">
              aspiring{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer.",
                2000,
                "Tech Enthusiast.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <h5 className="font-poppins text-sm text-foreground/70 mt-1">
            My bring up the concepts and edges of technology to build a
            something significant.I have a strong passion for creating a neat
            and readable sets of code while following the principles of UI/UX
            design systems.
          </h5>
          <FlexBox className="mt-3 gap-3">
            <Button variant="contained">Download C.V</Button>
            <Button variant="outlined">Github Profile</Button>
          </FlexBox>
        </FlexBox>
        <FlexBox className="flex-1 justify-start">
          <Image
            className=""
            height={550}
            width={700}
            alt="heroimage"
            src="/Untitled_1.png"
          />
        </FlexBox>
      </FlexBox>
    </section>
  );
};

export default Hero;
