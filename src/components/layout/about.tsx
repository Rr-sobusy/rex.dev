"use client";

import React from "react";
import Separator from "../Separator";
import { FlexBox } from "../Flexbox";
import Image from "next/image";
import MyImage from "@/../public/rex_image.png";
import { BorderBeam } from "../BorderBeam";
import { Marquee } from "../Marque";
import { Logos } from "@/constants/Marque-Logos";
import { cn } from "@/lib/utils";

type Props = {};
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: `Im at a loss for words. This is amazing. I love it.`,
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
function ReviewCard({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
}
const firstRow = reviews.slice(0, reviews.length / 2);
const About = (props: Props) => {
  const arr = [Logos.tailwindcss, Logos.framer, Logos.nextjs, Logos.aws];
  return (
    <section id="About" className="mt-8 min-h-screen">
      <h1 className="font-poppins text-xl font-extrabold tracking-wide text-foreground/85 w-full transition-[ease] duration-[1]">
        {"<AboutMe />"}
      </h1>
      <Separator />
      <FlexBox
        alignItems="center"
        flexDirection="mdRow"
        className="max-w-4xl mx-3 md:mx-auto py-14 gap-4 md:gap-[4rem]"
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
      </FlexBox>
      <div>
        {/* <Marquee pauseOnHover className="[--duration:15s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee> */}
      </div>
    </section>
  );
};

export default About;
