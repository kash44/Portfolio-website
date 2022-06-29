import { Project, projects } from "../../ProjectData";


type Props = {
  // toggleSidebar: (project: Project) => void;
  toggleSidebar(): void;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
};

const Projects = ({ toggleSidebar, setSelectedProject }: Props) => {
  return (
    <div className="container flex flex-col px-5 mx-auto mt-20 md:mt-36 md:h-screen xl:max-w-screen-lg">
      <h1 className="mb-10 text-5xl font-bold text-white">Projects</h1>
      <section className="grid mt-8 gap-x-3 gap-y-10 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              console.log('project component', project);
              setSelectedProject(project)
              toggleSidebar()
              // toggleSidebar(project)
            }}
            className="block cursor-pointer rounded-xl text-center shadow-[3px_3px_20px_0_rgba(80,78,78,0.5)] transition duration-300 ease-in-out hover:shadow-[3px_3px_30px_0_rgb(21,205,252)]"
          >
            <div className="object-cover place-items-center">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-screen h-fit rounded-2xl p-7"
              />
            </div>
            <div className="z-20 w-full text-center">
              <h1 className="text-xl font-medium text-white">{project.title}</h1>
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
};

export default Projects;
