import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <div className="flex items-center w-40 h-12 place-content-center rounded-2xl bg-royalBlue">
      {children}
    </div>
  );
};

export default Button;
