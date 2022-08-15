const HomePage = require('./Assets/Homepage.png');
const weTour = require('./Assets/Waterfall.jpeg');
const eCommerce = require('./Assets/E-commerce1.png');

export type Project = {
  title: string;
  description: string;
  tags: Array<string>;
  source: string;
  visit: string;
  id: number;
  image: any;
}

export const projects: Array<Project> = [
  {
    title: "Portfolio website",
    description:
      "A place to let you know more about myself and to showcase my completed projects. This website is a frontend Typescript + react project styled with tailwindcss. ",
    image: HomePage,
    tags: ["Typescript", "TailwindCSS", "React", "React-hooks", "Frontend"],
    source: "https://google.com",
    visit: "https://github.com/kash44/Portfolio-website",
    id: 0,
  },
  {
    title: "WeTour API",
    description:
      "A backend API for a touring website. Where users can sign up, login, change passwords and perform CRUD operations with server side authentication .",
    image: weTour,
    tags: ["Node.js", "JavaScript", "MVC", "Backend"],
    source: "https://github.com/kash44/WeTour-API",
    visit: "https://github.com/kash44/WeTour-API",
    id: 1,
  },
  {
    title: "E-Commerce App",
    description:
      "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
    image: eCommerce,
    tags: ["React", "Redux", "Full-stack", "Styled-components", "Typescript", "Nodejs"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
  // {
  //   title: "API",
  //   description:
  //     "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  //   image: pic,
  //   tags: ["React", "ChatEngine", "Firebase"],
  //   source: "https://google.com",
  //   visit: "https://google.com",
  //   id: 3,
  // },
];
