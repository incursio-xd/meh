import {motion} from "framer-motion";
import {TABS} from "lib/constants";
import {useEffect} from "react";
import {useState} from "react";
import {useActiveIndex} from "src/contexts/ActiveIndexContextProvider";

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      type: "spring",
    },
  },
};

const slideInX = {
  hidden: {opacity: 0, x: 200},
  show: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.9, type: "spring", bounce: 0.2},
  },
};

const Menu = () => {
  const {activeIndex} = useActiveIndex();

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{once: true}}
      className="items-center justify-center
                hidden lg:flex
                gap-6 
                font-medium tracking-wide
                select-none"
    >
      {TABS.map((tab, index) => {
        const {title, id} = tab;
        return (
          <motion.li
            variants={slideInX}
            key={title}
            className="relative cursor-pointer hover:text-black text-tertiary dark:text-gray-300 dark:hover:text-white"
          >
            <a href={`#${id}`} className="flex gap-2 justify-center items-center p-2">
              {activeIndex === index && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-[#5143432b] dark:bg-white mix-blend-exclusion"
                  style={{borderRadius: 9999}}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                />
              )}

              <tab.icon className="text-xl" />
              <span>{title}</span>
            </a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default Menu;
