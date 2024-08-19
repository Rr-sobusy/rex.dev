import React from "react";
import { FlexBox } from "./Flexbox";
import Slider from "react-slick";
import Image from "next/image";

type Props = {};
const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 500,
};
const ProjectsContainer = (props: Props) => {
  return (
    <FlexBox
      display="flex"
      className="mt-11 max-w-4xl mx-auto"
      flexDirection="mdRow"
    >
      <div className="md:w-3/6 w-full">
        <Slider {...settings}>
          <Image
            className="rounded-xl"
            alt=""
            width={600}
            height={500}
            src="/projects/coursespace/courses.png"
          />

          <div className="bg-blue-200 border">
            <h3>2</h3>
          </div>
          <div className="bg-blue-200 border">
            <h3>3</h3>
          </div>
          <div className="bg-blue-200 border">
            <h3>5</h3>
          </div>
          <div className="bg-blue-200 border">
            <h3>5</h3>
          </div>
        </Slider>
      </div>
      <div className="md:w-2/4 w-full px-3 flex flex-col gap-3 justify-center">
        <h5 className="font-extrabold font-poppins text-foreground/85 tracking-wide text-center uppercase text-base">
          Taskifier
        </h5>
        <p className="text-center font-poppins text-foreground/75">
          Taskifier is web app that minifies the tidiness of managing tasks.
          Taskifier is web app that minifies the tidiness of managing tasks.
          Taskifier is web app that minifies the tidiness of managing tasks.
        </p>
        <div className="flex flex-wrap gap-2 px-3">
          <p className="font-poppins text-base px-3 py-2 bg-backgroundAccent/40 rounded-lg font-medium">T#ailwindcss</p>
          <p className="font-poppins text-base px-3 py-2 bg-backgroundAccent/40 rounded-lg font-medium">#React</p>
          <p className="font-poppins text-base px-3 py-2 bg-backgroundAccent/40 rounded-lg font-medium">#Nextjs</p>
          <p className="font-poppins text-base px-3 py-2 bg-backgroundAccent/40 rounded-lg font-medium">#Shadcn-ui</p>
          <p className="font-poppins text-base px-3 py-2 bg-backgroundAccent/40 rounded-lg font-medium">#Shadcn-ui</p>
          <p className="font-poppins text-base px-3 py-2 bg-backgroundAccent/40 rounded-lg font-medium">#Shadcn-ui</p>
        </div>
      </div>
    </FlexBox>
  );
};

export default ProjectsContainer;
