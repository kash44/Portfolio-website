type headerProps = {
  children: string;
};

const Headers = ({ children }: headerProps) => {
  const beforeClass = `before:content-[attr(data-name)] before:bg-deepBlue before:absolute before:left-[-20px] before:h-9 before:duration-200 before:transition-all before:top-0 before:ease-in before:pl-5 before:overflow-hidden`;
  const hoverBeforeClass = `hover:before:top-[-3px] hover:before:left-[0px] hover:before:text-royalBlue `;
  const afterClass = `after:content-[""] after:h-1 after:w-0 after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:transition-all after:duration-200 after:ease-in after:bg-royalBlue after:outline-black`;
  const hoverAfterClass = `hover:after:w-[120%] hover:after:outline-4 hover:after:outline hover:after:outline-deepBlue `;

  return (
    <div className="grid flex-col items-center mb-5 overflow-hidden text-6xl font-medium text-white md:mb-10">
      <h1
        className={`relative md:mb-5 w-fit cursor-pointer uppercase transition-all duration-200 ease-in hover:skew-x-[10deg] ${beforeClass} ${afterClass} ${hoverBeforeClass} ${hoverAfterClass}`}
        data-name={children}
      >
        {children}
      </h1>
    </div>
  );
};

export default Headers;
