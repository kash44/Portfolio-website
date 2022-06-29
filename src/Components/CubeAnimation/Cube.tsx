import React from "react";

type Props = {};

const Cube = (props: Props) => {
  const cubeFace = ` z-10 absolute w-52 h-52 border border-chineseSilver bg-chineseSilver text-4xl flex justify-center items-center shadow-[0_0_20px_0_rgba(255,225,224,0.5)]`;

  return (
    <div className="flex w-6/12 mb-28 ">
      {/* <div className="top-0 right-0 w-full h-full ml-0"> */}
      <div
        className="relative z-10 block animate-spin-cube"
        style={{
          transformStyle: `preserve-3d`,
          transformOrigin: `100px 100px 0`,
        }}
      >
        <div
          className={`${cubeFace}`}
          style={{ transform: `translateZ(100px)` }}
        >
          Driven
        </div>
        <div
          className={`${cubeFace}`}
          style={{ transform: `rotateY(90deg) translateZ(100px)` }}
        >
          Curious
        </div>
        <div
          className={`${cubeFace}`}
          style={{
            transform: `rotateY(90deg) rotateX(90deg) translateZ(100px)`,
          }}
        >
          Self-learner
        </div>
        <div
          className={`${cubeFace}`}
          style={{
            transform: `rotateY(180deg) rotateZ(90deg) translateZ(100px)`,
          }}
        >
          Ambitious
        </div>
        <div
          className={`${cubeFace}`}
          style={{
            transform: `rotateY(-90deg) rotateZ(90deg) translateZ(100px)`,
          }}
        >
          Adaptable
        </div>
        <div
          className={`${cubeFace}`}
          style={{
            transform: `rotateY(-90deg) rotateX(-90deg) translateZ(100px)`,
          }}
        >
          Analytical
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Cube;
