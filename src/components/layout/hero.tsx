"use client";

import React from "react";
import { FlexBox } from "../Flexbox";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

type HeroProps = {};

const Hero = ({ ...props }: HeroProps) => {
  return (
    <section {...props}>
      <FlexBox className="md:mt-14 mt-5 flex flex-col md:flex-row md:gap-12">
        <FlexBox className="flex-1" flexDirection="col">
          <h5 className="font-poppins text-base text-foreground/85">
            Hi there, I'm
          </h5>
          <h1 className="text-3xl md:text-4xl font-extrabold font-poppins tracking-tight text-foreground/85 h-[5rem]">
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
          <h5 className="font-poppins text-base text-foreground/70 tracking-tight mt-1">
            My hobby is bringing up the concepts and idealogy of technology to
            build a something reluctant. I have a strong passion for creating a
            neat and readable sets of code while following the principles of
            UI/UX design systems.
          </h5>
        </FlexBox>
        <FlexBox className="justify-center">
          <Image
            className=""
            height={200}
            width={300}
            alt="heroimage"
            src="/hero-image.png"
          />
        </FlexBox>
      </FlexBox>
    </section>
  );
};

export default Hero;
