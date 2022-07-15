import React, { forwardRef } from "react";
import { Refs } from "../../types";

const SidebarMenu = forwardRef<Refs>((Props, ref) => {
  const { aboutRef, projectsRef, contactRef } = (
    ref as React.MutableRefObject<Refs>
  )?.current;

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (
    ref: React.MutableRefObject<HTMLDivElement | HTMLButtonElement>
  ) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  const beforeClass = `before:content-[attr(data-name)] before:bg-black before:absolute md:before:left-[-20px] md:before:h-9 before:left-[-10px] before:h-6 before:duration-200 before:transition-all before:top-0 before:ease-in before:pl-2.5 md:before:pl-5 before:overflow-hidden`;
  const hoverBeforeClass = `hover:before:top-[-3px] hover:before:left-[0px] hover:before:text-royalBlue `;
  const afterClass = `after:content-[""] after:h-0.5 md:after:h-1 after:w-0 after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:transition-all after:duration-200 after:ease-in after:bg-royalBlue after:outline-black`;
  const hoverAfterClass = `hover:after:w-[120%] hover:after:outline-4 hover:after:outline hover:after:outline-black `;

  return (
    <div className="absolute mt-20 grid flex-col items-center justify-center overflow-hidden text-[32px] font-medium text-white md:text-6xl ">
      <div className="items-center justify-center w-full h-full">
        <ul className="flex flex-col">
          <li
            className={`relative mb-5 w-fit cursor-pointer uppercase transition-all duration-200 ease-in hover:skew-x-[10deg] ${beforeClass} ${afterClass} ${hoverBeforeClass} ${hoverAfterClass}`}
            data-name="Home"
            onClick={backToTop}
          >
            Home
          </li>
          <li
            className={`relative mb-5 w-fit cursor-pointer uppercase transition-all duration-200 ease-in hover:skew-x-[10deg] ${beforeClass} ${afterClass} ${hoverBeforeClass} ${hoverAfterClass}`}
            data-name="About"
            onClick={() => handleClick(aboutRef)}
          >
            About
          </li>
          <li
            className={`relative mb-5 w-fit cursor-pointer uppercase transition-all duration-200 ease-in hover:skew-x-[10deg] ${beforeClass} ${afterClass} ${hoverBeforeClass} ${hoverAfterClass}`}
            data-name="Projects"
            onClick={() => handleClick(projectsRef)}
          >
            Projects
          </li>
          <li
            className={`relative mb-5 w-fit cursor-pointer uppercase transition-all duration-200 ease-in hover:skew-x-[10deg] ${beforeClass} ${afterClass} ${hoverBeforeClass} ${hoverAfterClass}`}
            data-name="Contact"
            onClick={() => handleClick(contactRef)}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
});

export default SidebarMenu;
