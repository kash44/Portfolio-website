import Cube from "../CubeAnimation/Cube";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="container flex px-5 mx-auto mt-20 md:h-screen md:mt-36 xl:max-w-screen-lg">
      <div className="flex flex-col mx-auto md:flex-row md:gap-10">
        <div className="mb-20 text-white md:w-3/5">
          <h1 className="mb-10 text-5xl font-bold">ABOUT</h1>
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
            However, this focus has shifted to a new frontier, the digital world
            we live in today. I love learning about technology and what it means
            for the world of tomorrow. My interests are Web-development/security
            and Cloud engineering.
          </p>
          <br />
          <p>
            As a Software Engineer my aim is to write clean, readable code.
            Creating websites/web apps that provide value, have engaging
            frontends and a performant backend while adhering to best practices.
            Welcome on following me on this journey.
          </p>
        </div>
        <div className="hidden w-full h-40 pt-12 pl-48 sm:flex sm:h-80 md:pl-20 md:mt-40 md:w-2/5 ">
          <Cube />
        </div>
      </div>
    </div>
  );
};

export default About;