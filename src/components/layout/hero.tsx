"use client";

import React from "react";
import { FlexBox } from "../Flexbox";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "../Button";
import FramerWrapper from "../FramerWrapper";

type HeroProps = {};

const Hero = ({ ...props }: HeroProps) => {
  return (
    <section {...props}>
        <FlexBox className="md:mt-14 mt-10 flex flex-col lg:flex-row min-h-[90vh] lg:min-h-[calc(100vh-55px)] pt-14 md:pt-[8rem] w-full relative">
          <FlexBox className="flex-1 sm:mt-5 gap-2 border" flexDirection="col">
            <h5 className="font-poppins text-base text-foreground/85">
              Hi there &#128075;, I'm
            </h5>
            <h1 className="text-4xl md:text-5xl font-extrabold font-poppins tracking-tight text-foreground/85">
              Rex Randy, an{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-primaryAccent to-primary">
                aspiring{" "}
              </span>
              <TypeAnimation
                sequence={[
                  "Fullstack Developer.",
                  5000,
                  "Tech Enthusiast.",
                  5000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <h5 className="font-poppins text-foreground/70 mt-1">
              My hobby is to bring up the concepts and edges of technology to
              build a something significant.I have a strong passion for creating
              a neat and readable sets of code while following the principles of
              UI/UX design systems.
            </h5>
            <FlexBox className="mt-3 gap-3">
              <Button variant="contained">Download C.V</Button>
              <Button variant="outlined">Github Profile</Button>
            </FlexBox>
          </FlexBox>
          <FlexBox className="flex-1 border">
            <Image
              width={800}
              height={700}
              alt="heroimage"
              src="/Untitled_1.png"
            />
          </FlexBox>
          <div className="absolute bottom-24 left-1/2 loader"></div>
        </FlexBox>
    </section>
  );
};

export default Hero;
