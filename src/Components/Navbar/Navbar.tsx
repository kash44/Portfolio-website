import { forwardRef } from 'react';
import { Project } from '../../ProjectData';
import HamburgerButton from "../HamburgerIcon/HamburgerButton";

type Props = {
  toggleSidebar: () => void;
  showSidebar: boolean;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
};

const Navbar = forwardRef<HTMLButtonElement, Props>(({ toggleSidebar, showSidebar, setSelectedProject }, hamburgerRef) => {
  return (
    <nav className="container sticky top-0 mx-auto bg-deep-blue xl:max-w-screen-lg">
      <div className="z-30 mx-auto flex h-16 max-w-[1240px] items-center justify-between justify-items-center px-4 text-white">
        <h1 className="z-[100] text-3xl font-bold">KASH.</h1>
        <ul className="items-center hidden md:flex">
          <li className="px-10 text-xl transition ease-in-out cursor-pointer hover:text-royalBlue active:text-royalBlue hover:ease-in-out hover:scale-150">
            Home
          </li>
          <li className="px-10 text-xl transition ease-in-out cursor-pointer hover:text-royalBlue active:text-royalBlue hover:ease-in-out hover:scale-150">
            About
          </li>
          <li className="px-10 text-xl transition ease-in-out cursor-pointer hover:text-royalBlue active:text-royalBlue hover:ease-in-out hover:scale-150">
            Projects
          </li>
          <li className="px-10 text-xl transition ease-in-out cursor-pointer hover:text-royalBlue active:text-royalBlue hover:ease-in-out hover:scale-150">
            Contact
          </li>
        </ul>
        <HamburgerButton isOpen={showSidebar} ref={hamburgerRef} toggleSidebar={toggleSidebar} setSelectedProject={setSelectedProject} />
      </div>
    </nav>
  );
});

export default Navbar;
