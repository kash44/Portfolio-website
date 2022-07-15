import { forwardRef } from "react";
import { Project } from "../../ProjectData";

type hamburgerProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
};

const HamburgerButton = forwardRef<HTMLButtonElement, hamburgerProps>(
  ({ isOpen, toggleSidebar, setSelectedProject }, ref) => {
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 z-50`;

    return (
      <button
        ref={ref}
        className="z-50 flex flex-col items-center justify-center w-12 h-12 rounded group md:hidden"
        onClick={() => {
          toggleSidebar();
          setSelectedProject({} as Project);
        }}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "opacity-50 translate-y-3 rotate-45 group-hover:opacity-100 z-50"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "opacity-50 -translate-y-3 -rotate-45 group-hover:opacity-100 z-50"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    );
  }
);

export default HamburgerButton;
