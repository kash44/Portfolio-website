type Props = {};

const titles = ["Home", "About", "Projects", "Contact"];

const SidebarMenu = (props: Props) => {
  const beforeClass = `before:content-[attr(data-name)] before:bg-black before:absolute md:before:left-[-20px] md:before:h-9 before:left-[-10px] before:h-6 before:duration-200 before:transition-all before:top-0 before:ease-in before:pl-2.5 md:before:pl-5 before:overflow-hidden`;
  const hoverBeforeClass = `hover:before:top-[-3px] hover:before:left-[0px] hover:before:text-royalBlue `;
  const afterClass = `after:content-[""] after:h-0.5 md:after:h-1 after:w-0 after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:transition-all after:duration-200 after:ease-in after:bg-royalBlue after:outline-black`;
  const hoverAfterClass = `hover:after:w-[120%] hover:after:outline-4 hover:after:outline hover:after:outline-black `;

  return (
    <div className="mt-20 grid flex-col items-center justify-center overflow-hidden text-[32px] font-medium text-white md:text-6xl">
      {titles.map((title) => (
        <h1
          key={title}
          className={`relative mb-5 w-fit cursor-pointer uppercase transition-all duration-200 ease-in hover:skew-x-[10deg] ${beforeClass} ${afterClass} ${hoverBeforeClass} ${hoverAfterClass}`}
          data-name={title}
        >
          {title}
        </h1>
      ))}
    </div>
  );
};

export default SidebarMenu;