import React from "react";
import { FlexBox } from "../Flexbox";
import Image from "next/image";
import Button from "../Button";
import { TextEffect } from "../TextEffect";
import { InView } from "../InView";
import GridPattern from "../GridPattern";
import { cn } from "@/lib/utils";
import { PiReadCvLogoLight } from "react-icons/pi";
import { LiaGithub } from "react-icons/lia";

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
        transition={{ duration: 0.9, ease: "easeInOut", once: true }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <FlexBox className="md:mt-14  flex flex-col lg:flex-row gap-12 lg:gap-0 min-h-[calc(100vh-52px)] pt-[4rem] md:pt-[2rem] lg:pt-[8rem] w-full relative">
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [5, 3],
              [5, 5],
              [10, 10],
              [12, 15],
              [15, 10],
              [10, 15],
              [15, 10],
            ]}
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[185%] md:h-[190%] skew-y-12"
            )}
          />
          <FlexBox
            className="flex-1 sm:mt-5 gap-2"
            justifyContent="center"
            flexDirection="col"
          >
            <h5 className="font-poppins text-base text-foreground/85">
              Hi there &#128075;, I&apos;m
            </h5>
            <h1 className="text-3xl md:text-4xl font-extrabold font-poppins tracking-tight text-foreground/85">
              Rex Randy, an{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-tr z-10 from-primaryAccent to-primary relative after:absolute after:left-0 after:bottom-[8px] after:z-0 after:rounded-sm after:bg-gradient-to-r after:from-primaryAccent after:to-primary after:h-[4px] after:w-full">
                aspiring&nbsp;
              </span>
              Fullstack Developer.
            </h1>
            <TextEffect
              className="font-poppins text-foreground/70 mt-1"
              per="word"
              preset="fade"
            >
              My hobby is to bring up the concepts and edges of technology to
              build a something significant.I have a strong passion for creating
              a neat and readable sets of code while following the principles of
              UI/UX design systems.
            </TextEffect>
            <FlexBox className="mt-3 gap-3">
              <Button className="flex gap-2 items-center" variant="contained">
                <span>
                  <PiReadCvLogoLight size={22} />
                </span>
                Download C.V
              </Button>
              <Button className="flex gap-2 items-center" variant="outlined">
                <span>
                  <LiaGithub size={22} />
                </span>
                Github Profile
              </Button>
            </FlexBox>
          </FlexBox>
          <FlexBox className="flex-1 sm:w-3/4 mx-auto md:w-2/3">
            <Image
              className="w-[330px] h-[250px] sm:w-[450px] sm:h-[320px] lg:w-auto lg:h-auto"
              width={800}
              height={600}
              alt="heroimage"
              src="/main-hero.png"
            />
          </FlexBox>
        </FlexBox>
      </InView>
    </section>
  );
};

export default Hero;
