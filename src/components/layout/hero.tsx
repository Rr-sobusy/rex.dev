import React from "react";
import { FlexBox } from "../Flexbox";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "../Button";
import { TextEffect } from "../TextEffect";
import { InView } from "../InView";

type HeroProps = {};

const Hero = ({ ...props }: HeroProps) => {
  return (
    <section {...props}>
      <InView
        variants={{
          hidden: {
            opacity: 0,
            x: 100,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        transition={{ duration: .9, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <FlexBox className="md:mt-14 mt-10 flex flex-col lg:flex-row gap-16 lg:gap-0 lg:min-h-[calc(100vh-80px)] pt-14 md:pt-[2rem] lg:pt-[8rem] w-full relative">
          <FlexBox className="flex-1 sm:mt-5 gap-2" flexDirection="col">
            <h5 className="font-poppins text-base text-foreground/85">
              Hi there &#128075;, I'm
            </h5>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-poppins tracking-tight text-foreground/85">
              Rex Randy, an{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-primaryAccent to-primary">
                aspiring&nbsp;
              </span>
              Fullstack Developer.
            </h1>
            <TextEffect
              className="font-poppins text-foreground/70 mt-1"
              per="char"
              preset="fade"
            >
              My hobby is to bring up the concepts and edges of technology to
              build a something significant.I have a strong passion for creating
              a neat and readable sets of code while following the principles of
              UI/UX design systems.
            </TextEffect>
            <FlexBox className="mt-3 gap-3">
              <Button variant="contained">Download C.V</Button>
              <Button variant="outlined">Github Profile</Button>
            </FlexBox>
          </FlexBox>
          <FlexBox className="flex-1">
            <Image
              width={800}
              height={700}
              alt="heroimage"
              src="/Untitled_1.png"
            />
          </FlexBox>
        </FlexBox>
      </InView>
    </section>
  );
};

export default Hero;
