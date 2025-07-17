import {
  SiOpenai,
  SiTailwindcss,
  FaCss3,
  AiOutlineEdit,
  SiFirebase,
  SiCodemirror,
  FaAws,
  FaReact,
  TbBrandThreejs,
  AiOutlineMail,
  SiFramer,
  SiNextdotjs,
  TbGridDots,
  SiRazorpay,
} from "src/components/icons";

import convexLogo from "src/assets/convex-logo.svg";
import clerkLogo from "src/assets/clerk.svg";
import {cn} from "lib/utils/cn";

export const Convex = ({className = "w-6 h-6"}) => {
  return <img alt="Convex logo" src={convexLogo} className={cn("grayscale", className)} />;
};

export const Clerk = ({className = "w-6 h-6"}) => {
  return <img alt="Clerk logo" src={clerkLogo} className={cn("grayscale", className)} />;
};

export const PROJECTS = [
  {
    title: "VaultX",
    description: `A secure, role-savvy digital bank with Spring-powered armor.`,
    techStack: [
      {name: "Java", icon: <SiNextdotjs className="text-xl" />},
      {name: "SpringBoot", icon: <SiTailwindcss className="text-xl" />},
      {name: "SQL", icon: <SiOpenai className="text-xl" />},
      {name: "JPA", icon: <Convex />},
      {name: "JWT", icon: <Clerk />},
    ],
  },
  {
    title: "SympTrack AI",
    description: `An ML-powered symptom whisperer for early disease prediction.`,
    techStack: [
      {name: "Python", icon: <SiNextdotjs className="text-xl" />},
      {name: "Streamlit", icon: <SiTailwindcss className="text-xl" />},
      {name: "ML", icon: <SiOpenai className="text-xl" />},
    ],
  },
  {
    title: "Chainlytics",
    description: `Turning messy supply data into clean decisions.`,
    techStack: [
      {name: "Excel", icon: <FaReact className="text-xl" />},
      {name: "Tableau", icon: <FaCss3 className="text-xl" />},
      {name: "Data Analysis", icon: <AiOutlineEdit className="text-xl" />},
    ],
  },
  {
    title: "MallMaster 360",
    description: `Your all-in-one mall universe — powered by Java`,
    techStack: [
      {name: "Java", icon: <TbBrandThreejs className="text-xl" />},
      {name: "Swing", icon: <FaReact className="text-xl" />},
      {name: "SQL", icon: <SiTailwindcss className="text-xl" />},
    ],
  },
];
