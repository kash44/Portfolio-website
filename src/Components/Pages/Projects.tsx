import { forwardRef } from "react";
import { Project, projects } from "../../ProjectData";
import Headers from "../Headers/Headers";

type Props = {
  toggleSidebar(): void;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
};

const Projects = forwardRef<HTMLDivElement, Props>(({ toggleSidebar, setSelectedProject }, ref) => {
  return (
    <div ref={ref} id="Projects" className="container flex flex-col px-5 mx-auto mt-20 md:mt-36 md:h-screen xl:max-w-screen-lg">
      <Headers>Projects</Headers>
      <section className="grid mt-8 gap-x-3 gap-y-10 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              setSelectedProject(project);
              toggleSidebar();
            }}
            className="block cursor-pointer rounded-xl text-center shadow-[3px_3px_20px_0_rgba(80,78,78,0.5)] transition duration-300 ease-in-out hover:shadow-[3px_3px_30px_0_rgb(21,205,252)]"
          >
            <div className="float-right object-cover md:w-full md:h-1/2 place-items-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl p-7"
              />
            </div>
              <div className="w-full text-center">
                <h1 className="text-xl font-medium text-white mb-14">
                  {project.title}
                </h1>
              </div>
              <ul className="flex justify-around p-0 my-10 list-none">
                <a
                  href={project.visit}
                  className="w-1/3 rounded-md bg-royalBlue p-3 text-base text-white hover:bg-[#0E8FB0]"
                >
                  Code
                </a>
                <a
                  href={project.source}
                  className="w-1/3 rounded-md bg-royalBlue p-3 text-base text-white hover:bg-[#0E8FB0]"
                >
                  Live
                </a>
              </ul>
          </div>
        ))}
      </section>
    </div>
  );
});

export default Projects;
