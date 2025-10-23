import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const NAME = "Youssef"

export const HERO_CONTENT = "I am a passionate full-stack developer with a knack for building robust and scalable web applications. I have experience with front-end technologies like React and Next.js, as well as back-end technologies including Node.js, Laravel, MySQL, and MongoDB. My goal is to use my skills to create innovative solutions that drive business growth and deliver outstanding user experiences.";

export const ABOUT_TEXT = `I am a dedicated and versatile Full-Stack Developer with a passion for building efficient, modern, and user-friendly web applications. 
Over time, I have gained experience working with various technologies, including React, Next.js, Node.js, Laravel, MySQL, and MongoDB. 

My journey in web development started from a deep curiosity about how things work, which has grown into a strong desire to learn, create, and solve problems. 
I enjoy collaborating with others and tackling complex challenges to deliver high-quality and impactful solutions. 

Outside of coding, I like staying active, exploring new technologies, and contributing to open-source projects.`;


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Products Management App",
    image: project1,
    description:
      "A fully functional products management app with features like user authentication.",
    technologies: ["Laravel 12 Starter kit", "React.js", "TailwindCSS", "Inertia.js", "MySQL"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Morocco, Fes",
  phoneNo: "+212 628-038735",
  email: "youssefbelamine23@gmail.com",
};
