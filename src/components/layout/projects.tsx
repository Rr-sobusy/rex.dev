"use client";

import React from "react";
import { InView } from "../InView";
import Slider from "react-slick";

type ProjectsProps = {};
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Projects = (ProjectsProps: ProjectsProps) => {
  return (
    <section className="min-h-screen mt-12 md:mt-0" id="Projects">
      <h1 className="font-poppins text-xl font-extrabold tracking-wide text-foreground/85 w-full border-b border-foreground/10">
        {"<Projects/>"}
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
        viewOptions={{ margin: "0px 0px -350px 0px", once: true }}
      >
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
          </Slider>
        </div>
      </InView>
    </section>
  );
};

export default Projects;
