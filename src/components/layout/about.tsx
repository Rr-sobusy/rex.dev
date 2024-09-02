import React from "react";
import Separator from "../Separator";
import { FlexBox } from "../Flexbox";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="About" className="mt-8 min-h-screen">
        <h1 className="font-poppins text-xl font-extrabold tracking-wide text-foreground/85 w-full">
        {"<AboutMe />"}
      </h1>
      <Separator />
      <FlexBox className="w-1/2 border mt-4">rex</FlexBox>
    </section>
  );
};

export default About;
