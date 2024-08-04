import React from "react";
import Separator from "../Separator";
import { FlexBox } from "../Flexbox";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="mt-8 reiative">
      <h5 className="font-poppins sm:text-lg font-extrabold tracking-tight text-foreground/85">
        About me
      </h5>
      <Separator />
      <FlexBox className="w-1/2 border">rex</FlexBox>
    </section>
  );
};

export default About;
