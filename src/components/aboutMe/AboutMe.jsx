import {forwardRef} from "react";
import {motion} from "framer-motion";

import SectionTitle from "src/components/common/SectionTitle";
import SectionWrapper from "src/hoc/SectionWrapper";

import bnwPic from "src/assets/meh.jpg";
import pic from "src/assets/meh.jpg";

import {slideIn} from "lib/constants/motion";

const AboutMe = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="aboutme"
      className="bg-secondary/20 pt-24 md:pt-0 flex gap-5 flex-col min-h-screen md:min-h-max md:h-screen justify-center items-center bg-white text-tertiary dark:bg-black dark:text-white"
    >
      <div className="my-20 md:my-0 z-10 flex gap-10 flex-col justify-start items-center w-full">
        <SectionTitle title="About Me" />
        <motion.div
          variants={slideIn("down", "", 0, 1)}
          initial={"hidden"}
          whileInView={"show"}
          className="z-10 bg-white relative dark:bg-[#232323] dark:text-white w-[70%] portrait:w-[90%]
                     lg:w-[80%] mx-auto translate-y-24 shadow-lg dark:shadow-[#232323] rounded-xl 
                     flex flex-col lg:flex-row justify-center items-center md:drop-shadow-lg"
        >
          <div className="flex justify-center items-end md:items-center md:justify-start p-5">
            <img
              src={pic}
              className="block dark:hidden lg:w-72 md:w-64 w-44 aspect-auto rounded-xl"
            />
            <img
              src={bnwPic}
              className="hidden dark:block lg:w-72 md:w-64 w-44 aspect-auto rounded-xl"
            />
          </div>
          <div className="p-5 md:w-full">
            <div className="text-lg leading-9  text-black dark:text-white">
              Hey there! I'm someone who loves creating, building, and constantly learning new things. I'm curious by nature and always excited to explore how things work—whether it's in tech or everyday life. I enjoy solving problems, taking on challenges, and turning ideas into something real. When I'm not working on projects, you'll probably find me experimenting with something new or planning what to build next. This portfolio is where I share a bit of that journey.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default SectionWrapper(AboutMe);
