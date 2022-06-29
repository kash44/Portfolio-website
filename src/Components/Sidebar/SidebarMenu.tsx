import React from "react";

type Props = {};

const SidebarMenu = (props: Props) => {
  const beforeClass = `before:content-[attr(data-name)] before:bg-black before:absolute before:left-[-20px] before:h-9 before:duration-200 before:transition-all before:top-0 before:ease-in before:pl-5 before:overflow-hidden`;
//   const hoverBeforeClass = `hover:before:top-[-3px] hover:before:left-[0px] hover:before:text-blue-500 `;
  const afterClass = `after:content-[] after:h-1 after:w-0 after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:transition-all after:duration-200 after:ease-in after:bg-blue-500 after:outline-black`;
  const hoverAfterClass = `hover:after:w-[120%] hover:after:outline-4 hover:after:outline hover:after:outline-black hover:after:text-blue-500`;

  return (
    <div className="grid flex-col items-center justify-center mt-20 overflow-hidden text-6xl font-medium text-white ">
      <h1
        className={
          ` flex relative mb-5 w-fit cursor-pointer transition-all ease-in duration-200 hover:skew-x-[10deg] uppercase hover:before:top-[-3px] hover:before:left-[0px] hover:before:text-royalBlue hover:after:w-[120%] hover:after:outline-4 hover:after:outline hover:after:outline-black hover:after:text-blue-500` 
          + beforeClass + afterClass
        }
        data-name="Home" 
      >
        Home
      </h1>
      <h1 className="relative mb-5">About</h1>
      <h1 className="relative mb-5">Projects</h1>
      <h1 className="relative mb-5">Contact</h1>
    </div>
  );
};

export default SidebarMenu;

// hover:after:w-[120%] hover:after:outline-4 hover:after:outline hover:after:outline-black hover:after:text-blue-500