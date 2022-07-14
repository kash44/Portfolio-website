import React, { forwardRef } from "react";
import { Project } from "../../ProjectData";
import { Refs } from "../../types";
import SidebarMenu from "./SidebarMenu";
// import ProjectInfo from './ProjectInfo';

type SibebarProps = {
  isOpen: boolean;
  project?: Project;
};

const Sidebar = forwardRef<Refs, SibebarProps>(({ isOpen, project }, ref) => {
  const { sidebarRef } = (ref as React.MutableRefObject<Refs>)?.current;

  return (
    <>
      <div
        className={
          `fixed inset-0 z-30 backdrop-blur transition-opacity duration-200 ` +
          (isOpen ? " opacity-100" : " pointer-events-none opacity-0")
        }
      />

      <div
        ref={sidebarRef as React.MutableRefObject<HTMLDivElement>}
        className={
          `fixed top-0 right-0 z-40 h-full w-[60vw] bg-black p-10 transition-transform duration-200 ease-in-out md:w-[30vw]` +
          (isOpen ? " translate-x-0" : " translate-x-full")
        }
      >
        {project?.title ? (
          <div className="h-full text-white">
            <h1 className="text-2xl mb-14">{project.title}</h1>
            <img
              className="mb-10 rounded-lg"
              src={project.image}
              alt={project.title}
            />
            <div>
              <h2 className="text-lg">Description:</h2>
              <p className="pt-4 text-lg">{project.description}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center pt-6 ">
              {project.tags.map((tags) => (
                <button className="items-center p-2 mb-3 ml-2 border-solid rounded-md place-items-center bg-royalBlue">
                  {tags}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <SidebarMenu ref={ref} />
        )}
        {/* pass in title, image etc as props and the child component can use it  */}
        {/* { project?.title ? <ProjectInfo currentProject={project} /> : <SidebarMenu /> } */}
        {/* Pass the project.id in as a prop and if project.id == project.id then conditionally render at that iteration */}
      </div>
    </>
  );
});

export default Sidebar;
