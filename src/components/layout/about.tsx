"use client";

import React from "react";
import Separator from "../Separator";
import { FlexBox } from "../Flexbox";
import Image from "next/image";
import MyImage from "@/../public/rex_image.png";
import { BorderBeam } from "../BorderBeam";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="About" className="mt-8 min-h-screen">
      <h1 className="font-poppins text-xl font-extrabold tracking-wide text-foreground/85 w-full transition-[ease] duration-[1]">
        {"<AboutMe />"}
      </h1>
      <Separator />
      <FlexBox
        alignItems="center"
        flexDirection="mdRow"
        className="max-w-4xl mx-auto py-14 gap-4 md:gap-[4rem]"
      >
        <FlexBox className="max-w-[320px] mx-auto flex justify-center mt-4 relative rounded-full">
          <Image
            className="bg-foreground/5 rounded-full w-full"
            placeholder="blur"
            priority
            src={MyImage}
            height={320}
            width={320}
            alt="myimage"
          />
          <BorderBeam borderWidth={2} size={170} duration={12} delay={9} />
        </FlexBox>
        <FlexBox flexDirection="col" className="md:w-full">
          <p className="font-poppins text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primaryAccent text-bold tracking-widest">
            Who am i?
          </p>
          <p className="font-poppins text-foreground/85 mt-3">
            Hi my name is Rex Randy Hernandez. An aspiring{" "}
            <strong>fullstack developer.</strong>I'm driven by a desire to
            create innovative solutions that make a positive impact especially
            to businesses. I'm a collaborative team player who thrives on
            solving complex problems and continuously learning new technologies.
            My goal is to contribute my expertise to a dynamic team and help
            build exceptional products.
          </p>
        </FlexBox>
      </FlexBox>
    </section>
  );
};

export default About;
