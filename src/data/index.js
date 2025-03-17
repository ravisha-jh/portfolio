import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/mern.png";
import node from "../assets/skills/mevn.png";
import mongo from "../assets/skills/db.png";
import figma from "../assets/skills/figma.png";
import java from "../assets/skills/java.png";
import sb from "../assets/skills/spring.png";
import py from "../assets/skills/python.png";

import google from "../assets/history/VCE.png";

import project from "../assets/project.png";

export const skills = [
  {
    title: "HTML",
    imageSrc: html,
  },
  {
    title: "CSS",
    imageSrc: css,
  },
  {
    title: "MERN",
    imageSrc: react,
  },
  {
    title: "MVEN",
    imageSrc: node,
  },
  {
    title: "JAVA",
    imageSrc: java,
  },
  {
    title: "Spring Boot",
    imageSrc: sb,
  },
  {
    title: "SQL",
    imageSrc: mongo,
  },
 
  {
    title: "Python",
    imageSrc: py,
  },
  {
    title: "Figma",
    imageSrc: figma,
  },
];

export const history = [
  {
    role: "Intership",
    organisation: "Vardan Consulting Engineers",
    startDate: "March 2024 ",
    endDate: "May 2024",
    experiences: ["Analysis of case study of IMC, Indore in successfully managing MSW of Indore City."],
    imageSrc: google,
  },

];

export const projects = [
  {
    title: "BinScape: Advancing Sustainable Waste Management Through Smart Operations",
    imageSrc: project,
    description:"BinScape integrates smart bins with a user-friendly app and notifications for real-time fill level and location tracking.",
    skills: ["Flutter", "Firebase", "IOT"],
    demo: "",
    source: "#",
  },
  {
    title: "Sentimental analysis on KarnatakaElection2023 Twitter Dataset using Machine Learning",
    imageSrc: project,
    description:"Leveraging global user perspectives for insightful sentiment analysis on trending topics and discussions in social media.",
      skills: ["Pyhton", "ML"],
    demo: "https://www.example.com",
    source: "#",
  },
  {
    title: "File Security System",
    imageSrc: project,
    description:
      "In this project we worked with cryptography to secure file using AES 128 algorithm",
    skills: ["JAVA", "SQL", "Crypotography"],
    demo: "https://www.example.com",
    source: "#",
  },
];
