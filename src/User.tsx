import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import chatApp from "./assets/project-images/chat.png";
import regenItek from "./assets/project-images/regen-itek.jpg";
import dashboard from "./assets/project-images/dashboard.png";
import youtube from "./assets/project-images/youtube.jpg";
import google from "./assets/project-images/google.jpg";
// import text from "./assets/project-images/text.png";
import extension from "./assets/project-images/extension.jpg";
import newsMonkey from "./assets/project-images/news-monkey.jpg";
import guido from "./assets/project-images/guido.jpg";

// Skills
import HTML from "./assets/icons/HTML.png";
import CSS from "./assets/icons/CSS.png";
import SASS from "./assets/icons/SASS.png";
import JavaScript from "./assets/icons/JavaScript.png";
import ReactJS from "./assets/icons/ReactJS.png";
import Redux from "./assets/icons/Redux.png";
import TailwindCSS from "./assets/icons/TailwindCSS.png";
import GSAP from "./assets/icons/GSAP.png";
import MaterialUI from "./assets/icons/MaterialUI.png";
import Bootstrap from "./assets/icons/Bootstrap.png";
import NodeJS from "./assets/icons/NodeJS.png";
import ExpressJS from "./assets/icons/ExpressJS.png";
import MySQL from "./assets/icons/MySQL.png";
import MongoDB from "./assets/icons/MongoDB.png";
import C from "./assets/icons/C.png";
import Cpp from "./assets/icons/Cpp.png";
import Java from "./assets/icons/Java.png";
import TypeScript from "./assets/icons/TypeScript.png";
import Git from "./assets/icons/Git.png";
import Github from "./assets/icons/Github.png";
import VSCode from "./assets/icons/VSCode.png";
import Postman from "./assets/icons/Postman.png";
import MongoDBCompass from "./assets/icons/MongoDBCompass.png";
import Firebase from "./assets/icons/Firebase.png";
import FramerMotion from "./assets/icons/FramerMotion.png";

import NewowlAI from "./assets/icons/Company.jpeg";
import Storylinez from "./assets/icons/Storylinez.png";
import SyncInterns from "./assets/icons/SyncInterns.png";


const Info = {
    name: "Aaryan Pinto",
    stack: ["Frontend Developer", "Full Stack Developer", "Software Engineer",],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}

const ProjectInfo = [
    {
        title: "Chat Application",
        desc: "Snappy is a real-time chat application developed and styled using React and the styled-components library. It utilizes Node.js and Express.js to build a seamless server-side architecture for effective client-side communication. The application implements socket communication for real-time messaging and updates. Additionally, MongoDB is employed for efficient storage and retrieval of chat messages.",
        image: chatApp,
        live: true,
        technologies: ["React", "Node.js", "Socket.IO", "Express.js", "MongoDB", "Styled Components"],
        link: "https://snappy-chat-application.netlify.app/",
        github: "https://github.com/Code-Mars/Ekart/"
    },
    {
        title: "Regen ITEK",
        desc: "Regen ITEK is a staffing and recruitment firm for which I freelanced the development of a modern, responsive website using Next.js, TypeScript, and Tailwind CSS. The site features smooth UI transitions and animations powered by Framer Motion, enhancing the overall user experience. I integrated Calendly for seamless meeting scheduling and used Resend to manage email services efficiently.",
        image: regenItek,
        live: true,
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://regenitek.com",
        github: "https://github.com/Code-Mars/Ekart/"
    },
    {
        title: "Admin Dashboard",
        desc: "Built a ReactJS admin dashboard with four core pages: Dashboard, Interactive Calendar, Kanban Board, and User Table. Utilized Zustand for state management and React ECharts for custom, dynamic data visualizations and analytics. Additionally, integrated FullCalendar.io and a Kanban Board for seamless scheduling, event updates, and task management.",
        image: dashboard,
        live: true,
        technologies: ["React", "Zustand", "React ECharts", "Material UI"],
        link: "https://admin-dashboard-aaryan.netlify.app/",
        github: "https://github.com/Aaryan-02/Admin-Dashboard"
    },
    {
        title: "YouTube Clone",
        desc: "Developed a YouTube Clone using ReactJS and YouTube API that provides users with a familiar and intuitive interface similar to the popular video-sharing platform, YouTube. By integrating the YouTube API, the clone fetches and displays real-time data from YouTube's vast collection of videos.",
        image: youtube,
        live: true,
        technologies: ["React", "Context API", "Tailwind CSS"],
        link: "https://aaryan-pinto-youtube-clone.netlify.app/",
        github: "https://github.com/Code-Mars/Spotify-Clone"
    },
    {
        title: "Guido",
        desc: "Developed and deployed a responsive tourism website for Guido, a Mumbai-based travel company, enhancing user  experience for both local and international travelers. Integrated an AI chatbot to guide users, boosting engagement and support efficiency. Managed end-to-end deployment on GoDaddy, including domain setup, hosting, and SSL configuration.",
        image: guido,
        live: true,
        technologies: ["JavaScript", "jQuery", "Bootstrap", "HTML"],
        link: "https://guido.co.in/",
        github: "https://github.com/Code-Mars/Travel-Tracker"
    },
    {
        title: "Google Clone",
        desc: "Developed a Google Clone using ReactJS, Tailwind CSS and the Google API that closely resembles the layout and design of the original Google search page. The clone is also responsive and adapts to different screen sizes, ensuring a seamless experience across devices.",
        image: google,
        live: true,
        technologies:  ["React", "Context API", "Tailwind CSS"],
        link: "https://aaryan-pinto-google-search-app.netlify.app/",
        github: "https://github.com/Code-Mars/Instagram-Clone"
    },
    {
        title: "News Monkey",
        desc: "Designed with ReactJS, the News Application features a modern and intuitive user interface that allows users to easily navigate and access news articles. Users can explore news articles across different categories such as business, technology, sports, and more.",
        image: newsMonkey,
        live: false,
        technologies: ["React", "CSS", "News API"],
        link: "https://github.com/Aaryan-02/NewsMonkey",
        github: "https://github.com/Code-Mars/CodeX"
    },
    {
        title: "Chrome extension",
        desc: "The Social Media Blocker extension is developed using Manifest V3, CSS and JavaScript, ensuring enhanced security and optimal performance. It empowers users with a solution to minimize distractions and boost productivity through the effective blocking of social media platforms.",
        image: extension,
        live: false,
        technologies: ["Manifest V3", "CSS", "JavaScript", "HTML"],
        link: "https://github.com/Aaryan-02/Social-Media-Blocker-Extension",
        github: "https://github.com/Code-Mars/CodeX"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", image: HTML },
            { name: "CSS", image: CSS },
            { name: "SASS", image: SASS },
            { name: "JavaScript", image: JavaScript },
            { name: "React JS", image: ReactJS },
            { name: "Redux", image: Redux },
            { name: "Framer Motion", image: FramerMotion },
            { name: "Tailwind CSS", image: TailwindCSS },
            { name: "Material UI", image: MaterialUI },
            { name: "Bootstrap", image: Bootstrap },
            { name: "GSAP", image: GSAP },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node JS", image: NodeJS },
            { name: "Express JS", image: ExpressJS },
            { name: "MySQL", image: MySQL },
            { name: "MongoDB", image: MongoDB },
            { name: "Firebase", image: Firebase },
        ]
    },
    {
        title: "Languages",
        skills: [
            { name: "C", image: C },
            { name: "C++", image: Cpp },
            { name: "Java", image: Java },
            { name: "JavaScript", image: JavaScript },
            { name: "TypeScript", image: TypeScript }
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", image: Git },
            { name: "Github", image: Github },
            { name: "VS Code", image: VSCode },
            { name: "Postman", image: Postman },
            { name: "MongoDB Compass", image: MongoDBCompass },
        ]
    }
];


const socialLinks = [
    { link: "https://github.com/Aaryan-02", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/aryan-pinto   ", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/aryan_p_02/", icon: IconBrandInstagram }, 
    { link: "https://www.geeksforgeeks.org/user/imaryan32/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Software Engineer(Frontend)",
        company: "Storylinez",
        image: Storylinez,
        date: "Jan 2025 - Apr 2025",
        desc: "Developed a performant AI Video Ad Production platform using ReactJS, Tailwind CSS and Shadcn contributing to  onboarding 20-25 clients. Implemented Redux with Redux Persist for state management and session persistence. Integrated Clerk for social authentication,reducing user onboarding time by 30%. Collaborated with backend and AI/ML teams, accelerating feature delivery by 40%. Deployed production builds via AWS S3, ensuring scalability and uptime. Boosted performance by 50% through image optimization, lazy loading, and debouncing.",
        skills: ["React JS", "Tailwind CSS", "Shadcn", "Redux", "Git", "Clerk", "Recharts", "Curl"]
    },
    {
        role: "Frontend Developer",
        company: "NewOwl AI",
        image: NewowlAI,
        date: "July 2024 - Nov 2024",
        desc: "Crafted complex user interfaces using ReactJS, CSS, Material UI, and Recharts, with a strong focus on design consistency, responsiveness, and a seamless user experience. Collaborated with cross-functional teams to translate Figma designs into pixel-perfect ReactJS code, authoring over 50 reusable components and pages. Integrated RESTful APIs and implemented React Tanstack Query to enhance data fetching efficiency and overall application performance. Utilized Git for version control, collaborating with a team of five developers to manage codebase changes and ensure a smooth project workflow.",
        skills: ["React JS", "Material UI", "Postman", "Git", "Recharts", "React Tanstack Query"]
    },
    {
        role: "SDE Intern",
        company: "Sync Intern's",
        image: SyncInterns,
        date: "Mar 2023 - Apr 2023",
        desc: "Developed and deployed a responsive tourism website for Guido(https://guido.co.in), a Mumbai-based travel company, enhancing user experience for both local and international travelers. Integrated an AI chatbot to guide users, boosting engagement and support efficiency. Managed end-to-end deployment on GoDaddy, including domain setup, hosting, and SSL configuration.",
        skills: ["Bootstrap", "JavaScript", "jQuery" ]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "mongodb",
    // "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };