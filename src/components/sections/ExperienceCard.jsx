import { motion } from "framer-motion";
import clsx from "clsx";

const ExperienceCard = ({ experience, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row w-full">
      {/* CARD SIDE */}
      <div
        className={clsx(
          "w-full md:w-1/2 px-4 mb-8 flex",
          isLeft ? "justify-end" : "justify-start md:ml-[50%]"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={clsx(
            "bg-white dark:bg-[#1e1e1e] p-4 md:p-6 rounded-lg shadow-lg border-2 border-tertiary max-w-md",
            isLeft ? "border-l-4" : "border-r-4 text-right"
          )}
        >
          <h3 className="text-lg font-bold text-tertiary">{experience.title}</h3>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
            {experience.company}
          </p>
          <p className="text-xs text-gray-400 mb-2">{experience.date}</p>
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {experience.description}
          </p>
        </motion.div>
      </div>

      {/* TIMELINE DOT */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-tertiary rounded-full z-10 border-4 border-white dark:border-[#1e1e1e] top-4 md:top-[36px]" />
    </div>
  );
};

export default ExperienceCard;
