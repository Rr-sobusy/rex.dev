"use client";

import React from "react";
import { FlexBox } from "./Flexbox";
import Slider from "react-slick";
import Image from "next/image";
import { InView } from "./InView";
import type { ProjectType } from "@/interfaces/ProjectType";
import CarouselDots from "./CarouselDots";
import { FaGithub } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import CarouselArrows from "./CarouselArrows";

type ProjectContainerProps = {
  project: ProjectType;
};

const ProjectsContainer = ({ project }: ProjectContainerProps) => {
  const [currentActiveDots, setCurrentActiveDots] = React.useState<number>(0);

  const CarouselRef = React.useRef<Slider | null>(null);
  const settings = {
    className: "flex",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 1000,
    afterChange: (e: number) => setCurrentActiveDots(e),
    arrows: false,
  };

  function carouselDotsClick(index: number) {
    CarouselRef.current?.slickGoTo(index);
  }
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
      <FlexBox
        display="flex"
        className="mt-11 max-w-4xl mx-auto gap-5 md:gap-3"
        flexDirection="mdRow"
      >
        <div className="md:w-3/6 w-full">
          <Slider ref={CarouselRef} {...settings}>
            {project.snapshotsUrl.map((url) => (
              <div className="pr-2">
                <Image
                  className="rounded-lg border border-foreground/10"
                  alt=""
                  width={600}
                  height={500}
                  src={url}
                />
              </div>
            ))}
          </Slider>
          <FlexBox
            className="max-h-10"
            alignItems="center"
            justifyContent="between"
          >
            <CarouselDots
              clickHandler={carouselDotsClick}
              lists={project.snapshotsUrl}
              active={currentActiveDots}
              className="mt-2"
            />
            <CarouselArrows
              handlePrev={() => CarouselRef.current?.slickPrev()}
              handleNext={() => CarouselRef.current?.slickNext()}
            />
          </FlexBox>
        </div>
        <div className="md:w-2/4 w-full px-3 flex flex-col gap-3 justify-center">
          <h5 className="font-extrabold font-poppins text-foreground/85 tracking-wide text-center uppercase text-base">
            {project.projectName}
          </h5>
          <p className="text-center font-poppins text-foreground/80">
            {project.projectDescription}
          </p>
          <div className="flex flex-wrap gap-2 px-3">
            {project.stacksUsed.map((stack) => (
              <p className="font-poppins text-base px-3 py-2 bg-backgroundAccent/40 text-foreground/85 rounded-lg font-medium">
                {stack}
              </p>
            ))}
          </div>
          <div className="flex gap-3 px-3 font-poppins font-medium text-sm">
            <a
              className="px-3 py-2 border border-foreground/10 rounded-lg flex items-center gap-2 text-foreground/90"
              href={project.codeComp.codeRepo}
              target="_blank"
            >
              <span>
                <FaGithub size={15} />
              </span>
              Github repo
            </a>
            <a
              className="px-3 py-2 border border-foreground/10 rounded-lg flex items-center gap-2 text-foreground/90"
              href={project.codeComp.liveSite}
              target="_blank"
            >
              <span>
                <AiOutlineProduct size={15} />
              </span>
              Live site
            </a>
          </div>
        </div>
      </FlexBox>
    </InView>
  );
};

export default ProjectsContainer;
