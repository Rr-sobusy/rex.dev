"use client";

import React from "react";
import Separator from "../Separator";
import { FlexBox } from "../Flexbox";
import Image from "next/image";
import MyImage from "@/../public/rex_image.png";
import { BorderBeam } from "../BorderBeam";
import { Marquee } from "../Marque";
import { MarqueLogos } from "@/constants/Marque-Logos";
import GridPattern from "../GridPattern";
import { cn } from "@/lib/utils";
type Props = {};

const About = (props: Props) => {
  const Stacks = Object.entries(MarqueLogos).map(([_, ctx]) => ctx);
  return (
    <section id="About" className="mt-8 min-h-screen">
      <h1 className="font-poppins text-xl font-extrabold tracking-wide text-foreground/85 w-full transition-[ease] duration-[1]">
        {"<AboutMe />"}
      </h1>
      <Separator />
      <FlexBox
        alignItems="center"
        flexDirection="mdRow"
        className="max-w-4xl mx-3 md:mx-auto py-14 gap-4 md:gap-[4rem] relative"
      >
        <FlexBox className="max-w-[170px] md:max-w-[320px] mx-auto flex justify-center mt-4 relative rounded-full">
          <Image
            className="bg-foreground/5 rounded-full"
            placeholder="blur"
            priority
            src={MyImage}
            height={320}
            width={320}
            alt="myimage"
          />
          <BorderBeam borderWidth={2} size={70} duration={12} delay={9} />
        </FlexBox>
        <FlexBox flexDirection="col" className="md:w-full">
          <p className="font-poppins text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primaryAccent text-bold tracking-widest">
            Who am i?
          </p>
          <p className="font-poppins text-foreground/85 mt-3">
            Hi my name is Rex Randy Hernandez. An aspiring&nbsp;
            <strong>fullstack developer.</strong> I&apos;m driven by a desire to
            create <strong>innovative solutions</strong> that make a positive
            impact especially to businesses. I&apos;m a collaborative&nbsp;
            <strong>team player</strong> who thrives on solving complex problems
            and continuously learning new technologies. My goal is to contribute
            my expertise to a dynamic team and help them to build exceptional
            products.
          </p>
        </FlexBox>
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
            "inset-x-0 inset-y-[-30%] h-[185%] md:h-[190%] skew-y-12 fill-none"
          )}
        />
      </FlexBox>
      <div>
        <Marquee pauseOnHover className="[--duration:17s]">
          {Stacks.map((Content, index) => (
            <Content key={index} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default About;
