// Enter all your details in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profilo.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png"
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import ts from "./assets/techstack/ts.png";
import angular from "./assets/techstack/angular.png";
import reactNative from "./assets/techstack/reactNative.png";
// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";


// Logos
export const logos: { [key: string]: string } = {
  logogradient,
  logo,
};

// Enter your Personal Details here
export interface PersonalDetails {
  name: string;
  tagline: string;
  img: string;
  about: string;
}

export const personalDetails: PersonalDetails = {
  name: "Vincenzo Busalacchi",
  tagline: "I build things for web",
  img: profile,
  about: `I'm a Frontend Developer based in Palermo, Italy. I have a passion for web development and love to create web applications. I have experience in building web applications using modern technologies like React, Redux,Tailwind CSS, Angular etc.... I am currently working at Stdout as a Frontend Developer. I am also a Coursera Meta Frontend Developer. I am always open to learning new technologies and frameworks.`,
};

// Enter your Social Media URLs here
export interface SocialMediaUrls {
  linkdein: string;
  github: string;
  twitter: string;
  instagram: string;
}

export const socialMediaUrl: SocialMediaUrls = {
  linkdein: "https://www.linkedin.com/in/vincenzo-busalacchi-6936b6221/",
  github: "https://github.com/vincibusa",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export interface WorkDetails {
  Position: string;
  Company: string;
  Location: string;
  Type: string;
  Duration: string;
}

export const workDetails: WorkDetails[] = [
  {
    Position: "Frontend Web Developer",
    Company: `Stdout`,
    Location: "Palermo",
    Type: "Full Time",
    Duration: "Sep 2023 - Present",
  },
 
];

// Enter your Education Details here
export interface EduDetails {
  Position: string;
  Company: string;
  Location: string;
  Type: string;
  Duration: string;
}

export const eduDetails: EduDetails[] = [
  {
    Position: "Meta Frontend Developer",
    Company: "Coursera, Meta",
    Location: "Online",
    Type: "Full Time",
    Duration: "2022",
  },
 
];

// Tech Stack and Tools
export const techStackDetails: { [key: string]: string } = {
  html,
  css,
  js,
  ts,
  angular,
  reactNative,
  react,
  redux,
  sass,
  tailwind,
  bootstrap,
  vscode,
  postman,
  npm,
  git,
  github,
  figma,
};

// Enter your Project Details here
export interface ProjectDetails {
  title: string;
  image: string;
  description: string;
  techstack: string; // techstack is a string, not an array of strings
  previewLink: string;
  githubLink: string;
}

export const projectDetails: ProjectDetails[] = [
  {
    title: "Project title 1",
    image: projectImage1,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 2",
    image: projectImage2,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 4",
    image: projectImage4,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export interface ContactDetails {
  email: string;
  phone: string;
}

export const contactDetails: ContactDetails = {
  email: "vincibusa@gmail.com",
  phone: "+39 351 979 2793",
};
