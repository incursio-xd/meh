import {
  FaAws,
  FaNodeJs,
  FaReact,
  GiInfo,
  GiSkills,
  GrProjects,
  MdArchitecture,
  MdOutlineContactEmergency,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiGraphql,
  SiTailwindcss,
  TbBrandMongodb,
  TbBrandTypescript,
  VscFeedback,
} from "components/icons";
import {Clerk, Convex} from "lib/constants/projectList";
import {FaCss3, FaHtml5} from "react-icons/fa";

export const colors = ["#002B5B", "#87e3fa", "#2962d6", "#FFFFFF", "#232323", "#9fb0d2"];

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const TABS = [
  // {
  //   id: "summary",
  //   title: "Who I Am",
  //   icon: <FcPortraitMode className="text-xl" />,
  // },
  {
    id: "skills",
    title: "Skills",
    icon: GiSkills,
  },
  {
    id: "aboutme",
    title: "About Me",
    icon: GiInfo,
  },
  {
    id: "projects",
    title: "Projects",
    icon: GrProjects,
  },
  {
    id: "experience",
    title: "Experience",
    icon: GrProjects,
  },
  {
    id: "contactme",
    title: "Contact",
    icon: MdOutlineContactEmergency,
  },
];

export const SKILLS = [
  {
    title: "HTML",
    icon: FaHtml5,
    animationDelay: "0.2",
  },
  {
    title: "CSS",
    icon: FaCss3,
    animationDelay: "0.2",
  },
  {
    title: "Typescript",
    icon: TbBrandTypescript,
    animationDelay: "0.6",
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    animationDelay: "0.8",
  },
  {
    title: "React.js",
    icon: FaReact,
    animationDelay: "0.2",
  },
  {
    title: "Node.js",
    icon: FaNodeJs,
    animationDelay: "0.4",
  },

  {
    title: "SQL",
    icon: TbBrandMongodb,
    animationDelay: "1",
  },

  {
    title: "Java",
    icon: SiFirebase,
    animationDelay: "1.2",
  },

  {
    title: "Python",
    icon: SiGraphql,
    animationDelay: "1.4",
  },

  {
    title: "C/C++",
    icon: SiDotnet,
    animationDelay: "1.6",
  },

  {
    title: "Swing",
    icon: SiDocker,
    animationDelay: "1.8",
  },

  {
    title: "SpringBoot",
    icon: FaAws,
    animationDelay: "1.8",
  },
  {
    title: "System Design",
    icon: MdArchitecture,
    animationDelay: "1.8",
  },
  {
    title: "Figma",
    icon: Convex,
    animationDelay: "1.8",
  },
  {
    title: "Tableau",
    icon: Clerk,
    animationDelay: "1.8",
  },
];


