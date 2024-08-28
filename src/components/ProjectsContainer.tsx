"use client";

import React from "react";
import { FlexBox } from "./Flexbox";
import Slider from "react-slick";
import Image from "next/image";
import { InView } from "./InView";
import type { ProjectType } from "@/interfaces/ProjectType";
import CarouselDots from "./CarouselDots";

type ProjectContainerProps = {
  project: ProjectType;
};

const ProjectsContainer = ({ project }: ProjectContainerProps) => {
  const [currentActiveDots, setCurrentActiveDots] = React.useState<number>(0);

  const CarouselRef = React.useRef<Slider | null>(null);
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 800,
    autoplay: true,
    autoplayspeed: 4000,
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
        className="mt-11 max-w-4xl mx-auto"
        flexDirection="mdRow"
      >
        <div className="md:w-3/6 w-full">
          <Slider ref={CarouselRef} {...settings}>
            {project.snapshotsUrl.map((url) => (
              <Image
                className="rounded-lg border border-foreground/10"
                alt=""
                width={600}
                height={500}
                src={url}
              />
            ))}
          </Slider>
          <CarouselDots
            clickHandler={carouselDotsClick}
            lists={project.snapshotsUrl}
            active={currentActiveDots}
            className="mt-2"
          />
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
        </div>
      </FlexBox>
    </InView>
  );
};

export default ProjectsContainer;
