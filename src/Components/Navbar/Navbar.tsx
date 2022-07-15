import { forwardRef } from "react";
import { Project } from "../../ProjectData";
import { Refs } from "../../types";
import HamburgerButton from "../HamburgerIcon/HamburgerButton";

type Props = {
  toggleSidebar: () => void;
  showSidebar: boolean;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
};

const Navbar = forwardRef<Refs, Props>(
  ({ toggleSidebar, showSidebar, setSelectedProject }, ref) => {
    const { aboutRef, projectsRef, contactRef, hamburgerRef } = (
      ref as React.MutableRefObject<Refs>
    )?.current;

    const handleClick = (
      ref: React.MutableRefObject<HTMLDivElement | HTMLButtonElement>
    ) => {
      window.scrollTo({
        top: ref.current.offsetTop - 120,
        behavior: "smooth",
      });
    };

    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <nav className="container sticky top-0 z-30 mx-auto bg-deep-blue xl:max-w-screen-lg">
        <div className="z-30 mx-auto flex h-16 max-w-[1240px] items-center justify-between justify-items-center px-4 text-white">
          <h1 className="text-3xl font-bold ">KASH.</h1>
          <ul className="items-center hidden md:flex">
            <li
              onClick={backToTop}
              className="px-10 text-xl transition ease-in-out cursor-pointer hover:text-royalBlue hover:ease-in-out hover:scale-150 active:text-royalBlue"
            >
              Home
            </li>
            <li
              onClick={() => handleClick(aboutRef)}
              className="px-10 text-xl transition ease-in-out cursor-pointer hover:text-royalBlue hover:ease-in-out hover:scale-150 active:text-royalBlue"
            >
              About
            </li>
            <li
              onClick={() => handleClick(projectsRef)}
              className="px-10 text-xl transition ease-in-out cursor-pointer hover:text-royalBlue hover:ease-in-out hover:scale-150 active:text-royalBlue"
            >
              Projects
            </li>
            <li
              onClick={() => handleClick(contactRef)}
              className="px-10 text-xl transition ease-in-out cursor-pointer hover:text-royalBlue hover:ease-in-out hover:scale-150 active:text-royalBlue"
            >
              Contact
            </li>
          </ul>
          <HamburgerButton
            isOpen={showSidebar}
            ref={hamburgerRef as React.MutableRefObject<HTMLButtonElement>}
            toggleSidebar={toggleSidebar}
            setSelectedProject={setSelectedProject}
          />
        </div>
      </nav>
    );
  }
);

export default Navbar;
