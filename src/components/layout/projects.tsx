import React from "react";
import Separator from "../Separator";
import ProjectsContainer from "../ProjectsContainer";
import type { ProjectType } from "@/interfaces/ProjectType";

type ProjectsProps = {};

const projects: ProjectType[] = [
  {
    projectName: "Taskifier",
    projectDescription: "Taskifier",
    snapshotsUrl: [
      "/projects/taskifier/1-min.png",
      "/projects/taskifier/2-min.png",
      "/projects/taskifier/3-min.png",
      "/projects/taskifier/4-min.png"
    ],
    stacksUsed: ["Nextjs", "Reactjs"],
  },
];

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
        {projects.map((project) => (
          <ProjectsContainer project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
