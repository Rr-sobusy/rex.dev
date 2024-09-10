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
import { InView } from "../InView";
import { cn } from "@/lib/utils";
import FormInputField from "../FormInputField";
import Button from "../Button";
import { Socials } from "@/constants/SocialLinks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormType, ContactFormType } from "@/interfaces/ContactFormType";

const About = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<contactFormType>({ resolver: zodResolver(ContactFormType) });

  const Stacks = Object.entries(MarqueLogos).map(([_, ctx]) => ctx);

  const submitHandler = async (data: contactFormType) => {
    const res = await fetch("/api/mailer", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      alert("Message successfully sent!");
    }
  };

  return (
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
      viewOptions={{ margin: "0px 0px -350px 0px", once: true }}
    >
      {" "}
      <section id="About" className="mt-8 min-h-screen">
        <h1 className="font-poppins text-xl font-extrabold tracking-wide text-foreground/85 w-full transition-[ease] duration-[1]">
          {"<AboutMe />"}
        </h1>
        <Separator />
        <FlexBox
          alignItems="center"
          flexDirection="mdRow"
          className="max-w-4xl mx-5 md:mx-auto py-14 gap-4 md:gap-[4rem] relative"
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
            <p className="font-poppins text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primaryAccent font-medium tracking-widest">
              Who am i?
            </p>
            <p className="font-poppins text-foreground/85 mt-3">
              Hi my name is Rex Randy Hernandez. An aspiring&nbsp;
              <strong>fullstack developer.</strong> I&apos;m driven by a desire
              to create <strong>innovative solutions</strong> that make a
              positive impact especially to businesses. I&apos;m a
              collaborative&nbsp;
              <strong>team player</strong> who thrives on solving complex
              problems and continuously learning new technologies. My goal is
              to&nbsp;
              <strong>contribute </strong>
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
          <Marquee pauseOnHover className="[--duration:20s]">
            {Stacks.map((Content, index) => (
              <Content key={index} />
            ))}
          </Marquee>
        </div>
        <FlexBox
          flexDirection="mdRow"
          className="mt-[5rem] gap-5 md:gap-12 mx-5 md:mx-0"
        >
          <FlexBox flexDirection="col" className="flex-1 gap-1">
            <h2 className="font-poppins bg-clip-text text-transparent bg-gradient-to-r from-primary to-primaryAccent text-2xl font-extrabold tracking-tight">
              Get in touch with me.
            </h2>
            <h5 className="font-poppins text-foreground/85 md:w-3/4 ">
              Im always looking for opportunity that nurture me as a better
              digital product developer. Let&apos;s talk about your hits with me
              whether is it full-time or freelance works.
            </h5>
            <FlexBox className="gap-3">
              {Socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    target="_blank"
                    href={social.link}
                    className="px-2 py-2 rounded-md hover:bg-foreground/5"
                  >
                    <Icon size={35} />
                  </a>
                );
              })}
            </FlexBox>
          </FlexBox>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex-1 gap-5 flex flex-col"
          >
            <div className="flex flex-col w-full">
              <label className="font-poppins text-sm font-semibold tracking-tight text-foreground/85 ml-2">
                Email address
              </label>
              <FormInputField
                register={register}
                error={errors.email}
                name="email"
                className=""
                type="email"
                placeholder="sample-email@provider.com"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-poppins text-sm font-semibold tracking-tight text-foreground/85 ml-2">
                Subject
              </label>
              <FormInputField
                register={register}
                error={errors.subject}
                name="subject"
                className=""
                type="text"
                placeholder="Project Collaboration"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-poppins text-sm font-semibold tracking-tight text-foreground/85 ml-2">
                Your message
              </label>
              <FormInputField
                register={register}
                error={errors.message}
                name="message"
                className="min-h-24"
                as="textarea"
                type="text"
                placeholder="Hi Good day Mr...."
              />
            </div>
            <Button
              type="submit"
              className={`${
                isSubmitting
                  ? "bg-green-200"
                  : "bg-gradient-to-r to-primary from-primaryAccent"
              } bg py-3`}
              variant="contained"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending message..." : "Send message"}
            </Button>
          </form>
        </FlexBox>
        <Separator className="mt-8" />
      </section>
    </InView>
  );
};

export default About;
