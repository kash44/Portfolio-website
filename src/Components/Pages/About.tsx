import { forwardRef } from "react";
import Cube from "../CubeAnimation/Cube";
import Headers from "../Headers/Headers";

type Props = {};

const About = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div
      id="About"
      ref={ref}
      className="container flex px-5 mx-auto mt-20 md:mt-36 md:h-screen xl:max-w-screen-lg"
    >
      <div className="flex flex-col mx-auto md:flex-row md:gap-10">
        <div className="mb-20 text-white md:w-3/5">
          <Headers>ABOUT</Headers>
          <p>
            Hello! My name is Kash Adesina, I'm a Full-Stack Developer with a
            passion for technology. I would describe myself as someone who is
            driven, curious and loves to learn.
          </p>
          <br />
          <p>
            I love learning about how things work and why they work. This
            curiosity was particularly about the physical world around me, which
            made me study Chemistry as the University of Nottingham.
          </p>
          <br />
          <p>
            However, this curiousity has shifted to the digital world we live in
            today. I love learning about technology and what it means for the
            world of tomorrow. My interests are end-to-end software-development
            and Blockchain technology.
          </p>
          <br />
          <p>
            As a Software Engineer my aim is to write clean, readable code. To
            Create websites/web apps that provide value, have engaging frontends
            and performant backends while adhering to best practices. Welcome
            following me on this journey.
          </p>
        </div>
        <div className="hidden w-full h-40 pt-12 pl-48 sm:flex sm:h-80 md:mt-40 md:w-2/5 md:pl-20 ">
          <Cube />
        </div>
      </div>
    </div>
  );
});

export default About;
