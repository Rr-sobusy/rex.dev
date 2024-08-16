import React from "react";
import { InView } from "../InView";

type ProjectsProps = {};

const Projects = (ProjectsProps: ProjectsProps) => {
  return (
    <section className="min-h-screen mt-8 md:mt-0" id="Projects">
      <h1 className="font-poppins text-2xl font-extrabold tracking-wide text-foreground/85 w-full border-b border-foreground/10">
        Projects built
      </h1>
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
        rex rnady
      </InView>
    </section>
  );
};

export default Projects;
