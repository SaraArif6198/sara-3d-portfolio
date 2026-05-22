import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, staggerContainer, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const TechContent = () => {
  const categories = ["Languages", "Data & Analytics", "Frameworks & AI", "Tools & Cloud"];
  const [activeTab, setActiveTab] = useState("Languages");

  const filteredTech = TECHNOLOGIES.filter((tech) => tech.category === activeTab);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      id="tech"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Tech Stack</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mt-5">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-secondary text-[17px] max-w-2xl leading-[30px]">
          Hover or drag the spheres to interact with my core engineering stack. I specialize in the intersection of data engineering, artificial intelligence, and robust software architecture.
        </motion.p>
        
        <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)} className="flex bg-tertiary p-2 rounded-2xl shadow-card w-full md:w-auto overflow-x-auto gap-2 z-10 border border-white/5">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2.5 px-5 rounded-xl text-[14px] font-bold transition-all duration-300 whitespace-nowrap flex-1 md:flex-none ${
                activeTab === tab
                  ? "bg-[#915EFF] text-white shadow-lg scale-100"
                  : "bg-transparent text-secondary hover:text-white hover:bg-white/5 scale-95"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="mt-14 flex flex-wrap gap-10 min-h-[150px] justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-row flex-wrap justify-center gap-10 w-full"
          >
            {filteredTech.map((technology) => (
              <div className="w-28 h-28 flex flex-col items-center gap-2" key={`${activeTab}-${technology.name}`}>
                <BallCanvas icon={technology.icon} />
                <p className="text-secondary text-sm font-semibold">{technology.name}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export const Tech = TechContent as React.ComponentType;
