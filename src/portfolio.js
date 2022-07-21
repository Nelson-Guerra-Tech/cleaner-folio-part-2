import { FaReact } from 'react-icons/fa';

import {
  SiFirebase,
  SiNetlify,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMaterialui,
  SiGit,
  SiTailwindcss,
} from 'react-icons/si';

const reactIcon = <FaReact className='project-icon react rotate' />;
const firebaseIcon = <SiFirebase className='project-icon firebase' />;
const netlifyIcon = <SiNetlify className='project-icon netlify' />;
const cssIcon = <SiCss3 className='project-icon css' />;
const htmlIcon = <SiHtml5 className='project-icon html' />;
const javascriptIcon = <SiJavascript className='project-icon javascript' />;
const tailwindtIcon = <SiTailwindcss className='project-icon tailwind' />;
const materialIcon = <SiMaterialui className='project-icon material-ui' />;
const gitIcon = <SiGit className='project-icon git' />;

const header = {
  homepage: 'https://github.com/Nelson-Guerra-Tech/cleaner-portfolio',
  title: 'NG.',
};

const about = {
  name: 'Nelson Guerra',
  role: 'Front End Developer',
  description: `An Army Veteran & Web Developer with a passion for
              technology. Based out of Georgia 🌎 I consider myself a 'forever student' eager to both
              build on my academic foundations in web development. Focused on designing & programming front-end applications.`,
  resume: 'https://1drv.ms/b/s!ArPqeXXG-P85f8KkvguCJ7r_LZY',
  social: {
    linkedin: 'https://www.linkedin.com/in/nelson-guerra-7075b413a/',
    github: 'https://github.com/Nelson-Guerra-Tech',
  },
};

const projects = [
  {
    name: 'React-Wordle-Clone',
    image:
      'https://github.com/Nelson-Guerra-Tech/wordle-clone/raw/main/public/social-image.png',
    description:
      '🔎 It is a Wordle game clone, made with React. The goal of this project is to practice basic React fundamentals using useEffect, useState, and creating custom hooks. The game uses random words API and axios to fetch data.',
    stack: ['React', reactIcon],
    sourceCode: 'https://github.com/Nelson-Guerra-Tech/wordle-clone',
    livePreview: 'https://react-wordle-updated-clone.netlify.app/',
  },
  {
    name: 'Milky-Way-Dev',
    image:
      'https://github.com/Nelson-Guerra-Tech/andromeda-management/raw/main/public/social-image.png',
    description:
      '🪐 🚀 It is a React application for developers to manage project with groups or a team. The app uses Firebase as a backend for user authentication. The user can add a project, comment on projects, mark project as complete, and see users online/offline.',
    stack: ['React', reactIcon, ' | ', 'Firebase', firebaseIcon],
    sourceCode: 'https://github.com/Nelson-Guerra-Tech/andromeda-management',
    livePreview: 'https://andromeda-management.web.app/login',
  },
  {
    name: 'Expense-Tracker',
    image:
      'https://github.com/Nelson-Guerra-Tech/Finance-Tracker/raw/main/public/social-image.png',
    description:
      '🌎 💰 It is a React application for users to track their expenses. The expense tracker uses Firebase as the backend and allows users to create their own account by email and password, that way each user can privately track expenses.',
    stack: ['React', reactIcon, ' | ', 'Firebase', firebaseIcon],
    sourceCode: 'https://github.com/Nelson-Guerra-Tech/Finance-Tracker',
    livePreview: 'https://expense-tracker-3fa3a.web.app/login',
  },
  {
    name: 'Netflix-Clone-App',
    image:
      'https://user-images.githubusercontent.com/62409790/177017120-d05b5081-1b00-44a5-a4f6-5af3fc665031.png',
    description:
      '🍿 This app was built using the TMDB API & React to recreate a modern version of Netflix. The user can also click on a movie or show image and watch the trailer. This app was build using React and styled components.',
    stack: ['React', reactIcon],
    sourceCode:
      'https://github.com/Nelson-Guerra-Tech/React-Movie-App/tree/main/react-movie-app',
    livePreview: 'https://netflix-react-api-clone.netlify.app/',
  },
  {
    name: 'Tesla-Update-Design',
    image:
      'https://user-images.githubusercontent.com/62409790/177016945-ccfd4041-d724-4109-9e67-fa396db347df.png',
    description:
      '⚡️ 🚘 🔋 This is an updated version of the Tesla site, built using React, Redux for car information, and animation on scroll. The goal for this application was design and build a modern website using modern web technologies and techniques.',
    stack: ['React', reactIcon],
    sourceCode:
      'https://github.com/Nelson-Guerra-Tech/Tesla-Redesign-App/tree/main/tesla-clone',
    livePreview: 'https://react-tesla-updated-design.netlify.app/#model3',
  },
  {
    name: 'Github-Finder-API',
    image:
      'https://github.com/Nelson-Guerra-Tech/Github-API-Project/raw/main/public/social-image.png',
    description:
      '🔎 Github Finder is an application that uses the Github API to find github users and has user authentication. The user is able to sign-in using their github or google account. It was build using React, Axios for fetching data from the API, and styled components.',
    stack: ['React', reactIcon],
    sourceCode:
      'https://github.com/Nelson-Guerra-Tech/Github-API-Project/tree/main',
    livePreview: 'https://react-github-finder-api.netlify.app/login',
  },
];

const skills = [
  {
    icon: htmlIcon,
    space: ' - ',
    name: 'HTML',
  },
  {
    icon: cssIcon,
    space: ' - ',
    name: 'CSS',
  },
  {
    icon: javascriptIcon,
    space: ' - ',
    name: 'JavaScript',
  },
  {
    icon: reactIcon,
    space: ' - ',
    name: 'React',
  },
  {
    icon: tailwindtIcon,
    space: ' - ',
    name: 'Tailwind CSS',
  },
  {
    icon: materialIcon,
    space: ' - ',
    name: 'Material UI',
  },
  {
    icon: firebaseIcon,
    space: ' - ',
    name: 'Firebase',
  },
  {
    icon: gitIcon,
    space: ' - ',
    name: 'Git',
  },
];

const contact = {
  email: 'nelsonguerra.tech@outlook.com',
};

export { header, about, projects, skills, contact };
