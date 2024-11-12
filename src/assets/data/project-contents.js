import personalDevImg from "../images/project-1.png";
import taskkaiserImg from "../images/project-2.png";
import tictactoeImg from "../images/project-3.png";
import shopsueyImg from "../images/project-4.png";
import animeabyssImg from "../images/project-5.png";
const projects = [
  {
    id: "project-personal-portfolio",
    title: "Personal Dev Portfolio",
    type: "Solo",
    description:
      "Website for showcasing technology skills and personal projects.",
    technologies: ["React.js", "Javascript", "Tailwind"],
    imgURL: personalDevImg,
    siteURL: "https://kirlian-dev-portfolio.netlify.app/",
  },
  {
    id: "project-task-kaiser",
    title: "Project: Taskkaiser",
    type: "Solo",
    description:
      "Task management web application for simple UI for completed, pending and dropped tasks.",
    technologies: ["PHP", "Javascript", "Bootstrap"],
    imgURL: taskkaiserImg,
    siteURL: "https://taskkaiser-website.vercel.app",
  },
  {
    id: "project-xoxo",
    title: "Project: Super Tic-Tac-Toe",
    type: "Team",
    description: "Ultimate Tic-tac-toe game developed using React js.",
    technologies: ["React.js", "Javascript", "Tailwind"],
    imgURL: tictactoeImg,
    siteURL: "https://s-tic-tac-toe.vercel.app/",
  },
  {
    id: "project-shopsuey",
    title: "Project: Shopsuey",
    type: "Team",
    description:
      "E-commerce Website developed using React.js with fakestore API",
    technologies: ["React.js", "Javascript", "Tailwind"],
    imgURL: shopsueyImg,
    siteURL: "https://shop-suey.vercel.app/",
  },
  {
    id: "anime-abyss",
    title: "Project: Anime Abyss (WIP)",
    type: "Solo",
    description:
      "An anime website for browsing and listing entries using Vue with its own backend API",
    technologies: [
      "Vue.js",
      "Typescript",
      "Tailwind",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    imgURL: animeabyssImg,
    siteURL: "https://animeabyss.vercel.app/",
  },
];

export default projects;
