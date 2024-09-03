"use client"

import React from "react";
import Separator from "../Separator";
import { FlexBox } from "../Flexbox";
import Image from "next/image";
import MyImage from "@/../public/my_image.png"
import Button from "../Button";
import { MovingBorder } from "../MovingBorder";
import { cn } from "@/lib/utils";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="About" className="mt-8 min-h-screen">
        <h1 className="font-poppins text-xl font-extrabold tracking-wide text-foreground/85 w-full transition-[ease] duration-[1]">
        {"<AboutMe />"}
      </h1>
      <Separator />
      <FlexBox className="w-1/2 mt-4">
        <p className="font-poppins text-base text-primary tracking-widest">Who am i?</p>
        <Image className="rounded-xl shadow-xl shadow-primary" placeholder="blur" src={MyImage} height={450} width={380} alt="myimage" />

        
      </FlexBox>
      <Button className="relative" variant="outlined">
      <MovingBorder  rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
           
            )}
          />
        </MovingBorder>
        Button</Button>
    </section>
  );
};

export default About;
