import React, { forwardRef } from "react";
import { Project } from "../../ProjectData";
import SidebarMenu from './SidebarMenu';

type SibebarProps = {
  isOpen: boolean;
  project?: Project;
  // toggleSidebar: (project?: Project | undefined) => void
};

const Sidebar = forwardRef<HTMLDivElement, SibebarProps>(({ isOpen, project }, ref) => {
  return (
    <>
      <div
        className={
          `fixed inset-0 backdrop-blur transition-opacity duration-200 z-30 ` +
          (isOpen ? " opacity-100" : " pointer-events-none opacity-0")
        }
      />

      <div
        ref={ref}
        className={
          `fixed top-0 right-0 z-40 h-full w-[60vw] md:w-[30vw] bg-black p-10 transition-transform duration-200 ease-in-out` +
          (isOpen ? " translate-x-0" : " translate-x-full")
        }
      >
        {/* { project?.title ? <h2 className="text-2xl text-white">{project.title}</h2> : <SidebarMenu /> } */}
        { project ? <SidebarMenu /> : <SidebarMenu /> }
      </div>
    </>
  );
});

export default Sidebar;
