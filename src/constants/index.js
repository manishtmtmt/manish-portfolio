import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  pinaca,
  chatWave,
  threejs,
  nextjs,
  videoMeet,
  genius,
  alanAi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialMediaLinks = {
  github: "https://github.com/manishtmtmt",
  linkedin: "https://www.linkedin.com/in/wdmanisht/",
  gmail: "manisht.mt.mt@gmail.com",
  youtube: "https://www.youtube.com/@webdevyt",
  twitter: "twitter.com/manisht_mt",
  instagram: "https://www.instagram.com/manishtmtmt/",
  resume:
    "https://drive.google.com/file/d/15gYg7n4eV3aeQc-fc3c_MPMe2hzPnqxn/view?usp=sharing",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate SDE",
    company_name: "Actyv.ai",
    icon: "https://www.actyv.ai/images/logo.svg",
    iconBg: "#E6DEDD",
    date: "November 2022 - August 2023",
    points: [
      "Led development on key microservices such as Aadhaar verification, PAN verification, driving license verification, and GST verification, streamlining crucial identity and financial validation processes.",
      "Engineered a robust OCR (Optical Character Recognition) solution, enabling accurate extraction of data from images and PDFs, enhancing document processing efficiency.",
      "Successfully leveraged Java and Spring Boot for a project, showcasing adaptability and expanding my skill set beyond the primary tech stack.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Pinaca Technologies",
    icon: pinaca,
    iconBg: "#FFF",
    date: "November 2023 - Present",
    points: [
      "Lead the design and development efforts, using React and Redux Toolkit to create dynamic and responsive user interfaces.",
      "Utilize Node.js and Express.js to build scalable backend services, managing critical functionalities such as user authentication and data processing.",
      "Integrate Python and Flask for specific functionalities, enhancing the overall feature set and extending the capabilities of the platform.",
      "Actively participate in group discussions, collaborating with cross-functional teams to gather requirements and align development efforts with business objectives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Video HUB",
    description:
      "Enjoy crystal-clear video calls with multiple participants, engage in lively group chats, and effortlessly create or join meets for seamless connections anytime, anywhere. Elevate your online interactions with ease and simplicity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "100ms/live",
        color: "pink-text-gradient",
      },
    ],
    image: videoMeet,
    source_code_link: "https://github.com/manishtmtmt/video-meet",
  },
  {
    name: "Genius",
    description:
      "Genius is an AI-based application that offers various functionalities, including AI chat, image generation, video generation, music generation, and code generation. This user-friendly platform is designed to make these features accessible to users seamlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: genius,
    source_code_link: "https://github.com/manishtmtmt/ai-saas",
  },
  {
    name: "Chat Wave",
    description:
      "ChatWave is a real-time group chat app that allows users to send messages, share files, and see each other's online status. With its user-friendly features and secure authentication, ChatWave is the perfect platform for connecting with friends and family.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "context-api",
        color: "pink-text-gradient",
      },
    ],
    image: chatWave,
    source_code_link: "https://github.com/manishtmtmt/chat-app",
  },
  {
    name: "Alan AI News App",
    description:
      "The Alan AI News App is a platform that leverages AI technology to provide users with quick access to news from various categories. The integration of voice accessibility enhances user experience and convenience, making it possible to interact with the app using voice commands.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "alanai",
        color: "pink-text-gradient",
      },
    ],
    image: alanAi,
    source_code_link: "https://github.com/manishtmtmt/alan_ai_news_app",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMediaLinks,
};
