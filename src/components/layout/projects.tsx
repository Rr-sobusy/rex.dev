import React from "react";
import Separator from "../Separator";
import ProjectsContainer from "../ProjectsContainer";
import { projects } from "@/constants/projects";

const Projects = () => {
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
        {projects.map((project, index) => (
          <ProjectsContainer index={index} key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
