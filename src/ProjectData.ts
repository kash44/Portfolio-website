// import * as eCom from './Assets/E-commerce1.png';
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
      "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    image: HomePage,
    tags: ["Typescript", "Tailwind", "React", "Node"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 0,
  },
  {
    title: "WeTour API",
    description:
      "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: weTour,
    tags: ["React", "JavaScript"],
    source: "https://github.com/kash44/WeTour-API",
    visit: "https://github.com/kash44/WeTour-API",
    id: 1,
  },
  {
    title: "E-Commerce App",
    description:
      "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
    image: eCommerce,
    tags: ["React", "WebRTC", "Full-stack"],
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
