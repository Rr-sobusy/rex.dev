"use client";

import React from "react";
import { InView } from "../InView";
import Separator from "../Separator";
import ProjectsContainer from "../ProjectsContainer";

type ProjectsProps = {};
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
};
const Projects = (ProjectsProps: ProjectsProps) => {
  return (
    <section className="min-h-screen mt-12 md:mt-0" id="Projects">
      <h1 className="font-poppins text-xl font-extrabold tracking-wide text-foreground/85 w-full">
        {"<Projects />"}
      </h1>
      <h5 className="font-poppins text-base text-foreground/75">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryAccent to-primary">
          Showcasing
        </span>{" "}
        every project that i have built.
      </h5>
      <Separator />
      <div className="slider-container flex flex-col gap-8">
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
          <ProjectsContainer key={2} />
        </InView>
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
          <ProjectsContainer key={2} />
        </InView>
      </div>
    </section>
  );
};

export default Projects;
