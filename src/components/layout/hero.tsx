import React from "react";
import { FlexBox } from "../Flexbox";
import Image from "next/image";
import Button from "../Button";
import { TextEffect } from "../TextEffect";
import { InView } from "../InView";

type HeroProps = {};

const Hero = ({ ...props }: HeroProps) => {
  return (
    <section className="" id="Home" {...props}>
      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <FlexBox className="md:mt-14 flex flex-col lg:flex-row gap-8 lg:gap-0 min-h-[calc(100vh-52px)] pt-[6rem] md:pt-[2rem] lg:pt-[8rem] w-full relative">
          <FlexBox
            className="flex-1 sm:mt-5 gap-2 border"
            justifyContent="center"
            flexDirection="col"
          >
            <h5 className="font-poppins text-base text-foreground/85">
              Hi there &#128075;, I&apos;m
            </h5>
            <h1 className="text-4xl font-extrabold font-poppins tracking-tight text-foreground/85">
              Rex Randy, an{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-tr z-10 from-primaryAccent to-primary relative after:absolute after:left-0 after:bottom-[8px] after:z-0 after:rounded-sm after:bg-gradient-to-r after:from-primaryAccent after:to-primary after:h-[4px] after:w-full">
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
          <FlexBox className="flex-1 sm:w-3/4 mx-auto md:w-2/3 border">
            <Image
              className="scale-110 md:scale-105 lg:scale-100"
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
