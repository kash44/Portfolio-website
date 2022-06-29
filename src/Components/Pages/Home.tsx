import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="container h-screen px-5 mx-auto mt-20 md:mt-36 xl:max-w-screen-lg">
        <div className="flex gap-10 mx-auto">
          <div>
            <div className="text-white">
              <h1 className="pb-1 text-xl">
                Hello, my name is <br />
              </h1>
              <h1 className="pb-8 text-3xl">Kash Adesina</h1>
              <h1 className="pb-10 text-4xl font-bold"> FullStack Developer</h1>
              <p className="pb-10 font-semibold leading-8">
                Welcome to my portfolio website, a hub to showcase my projects,
                but to also document my journey and growth as a developer
              </p>
              <button className="rounded-full bg-sky-400 px-10 py-2 text-xl hover:bg-[#0E8FB0]">
                Explore
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 md:flex-none">
            <BackgroundAnimation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
