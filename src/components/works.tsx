import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { github } from "../assets";
import { styles } from "../styles";
import { PROJECTS } from "../constants";
import { textVariant, staggerContainer, fadeIn } from "../utils/motion";

type Project = { name: string; description: string; tags: readonly { name: string; color: string }[]; image: string; source_code_link: string; live_site_link: string };

const ProjectModal = ({ project, onClose }: { project: Project, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-tertiary border border-white/10 rounded-2xl p-6 md:p-8 max-w-3xl w-full max-h-[95vh] overflow-y-auto shadow-2xl scrollbar-hide"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-white font-bold text-[28px]">{project.name}</h3>
            <p className="text-secondary mt-1">Proprietary Source Code Request</p>
          </div>
          <button onClick={onClose} className="text-secondary hover:text-white text-2xl bg-black-200 w-10 h-10 rounded-full flex items-center justify-center transition-colors">&times;</button>
        </div>



        <div className="bg-black-100 rounded-xl p-5 mb-6 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#915EFF]"></div>
          <p className="text-white text-[15px] leading-relaxed">
            The complete source code for <span className="font-bold text-[#915EFF]">{project.name}</span> is hosted in a private repository to protect proprietary architecture and algorithms. 
          </p>
          <p className="text-secondary text-[14px] leading-relaxed mt-3">
            If you are a recruiter, hiring manager, or technical interviewer, you may request secure read-only access to evaluate the codebase.
          </p>
        </div>

        <div className="flex justify-end gap-3 md:gap-4 flex-wrap">
          <button onClick={onClose} className="px-6 py-3 rounded-xl bg-black-200 text-white font-medium hover:bg-black-100 transition-colors w-full md:w-auto">
            Cancel
          </button>
          <a 
            href="#contact"
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-[#915EFF] text-white font-bold hover:bg-[#804dee] shadow-lg shadow-[#915EFF]/20 transition-all w-full md:w-auto text-center"
          >
            Message Me for Access
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ index, project, onCodeClick }: { index: number, project: Project, onCodeClick: (p: Project) => void }) => {
  const publicProjects = ["Enterprise Networking Simulation", "OS Memory Simulator", "Customer Trends ETL", "E-Commerce Sales Analysis", "HR Analytics Dashboard"];
  const isPublic = publicProjects.includes(project.name);

  return (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    layout
  >
    <Tilt options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col justify-between">
      <div>
        <div className="relative w-full h-[230px]">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div onClick={() => isPublic ? window.open(project.source_code_link, "_blank") : onCodeClick(project)}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform group relative"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              {/* Tooltip for the github icon */}
              <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black-200 text-white text-xs py-1 px-2 rounded-md whitespace-nowrap">
                {isPublic ? "Source Code" : "Request Code"}
              </div>
            </div>
            {project.live_site_link !== project.source_code_link && (
              <div onClick={() => window.open(project.live_site_link, "_blank")}
                className="bg-[#915EFF] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform group relative"
              >
                <span className="text-white text-xs font-bold">↗</span>
                <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-[#915EFF] text-white text-xs py-1 px-2 rounded-md whitespace-nowrap shadow-lg">
                  Live Demo
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] leading-tight">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">{project.description}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}
      </div>
    </Tilt>
  </motion.div>
  );
};

const Works = () => {
  const [activeTab, setActiveTab] = useState("Artificial Intelligence & ML");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const tabs = ["Artificial Intelligence & ML", "Compiler Engineering", "Data & Business Intelligence", "Software Architecture"];

  const getProjects = () => {
    return PROJECTS.filter(project => project.category === activeTab);
  };

  return (
    <>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id="work"
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mt-3">
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-secondary text-[17px] max-w-2xl leading-[30px]">
            20 builds. 5 flagship. Here they are. Every project built from scratch — not assembled from tutorials. 
            Each one represents a real engineering challenge I solved with production-quality code.
          </motion.p>

          <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)} className="flex bg-tertiary p-2 rounded-2xl shadow-card w-full lg:w-auto overflow-x-auto gap-2 z-10 border border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2.5 px-5 rounded-xl text-[15px] font-bold transition-all duration-300 whitespace-nowrap flex-1 lg:flex-none ${
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

        <div className="mt-14 flex flex-wrap gap-7 min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {getProjects().map((project, i) => (
              <ProjectCard 
                key={`${activeTab}-${project.name}`} 
                index={i} 
                project={project} 
                onCodeClick={(p) => setSelectedProject(p)} 
              />
            ))}
          </AnimatePresence>
        </div>
      </motion.section>
    </>
  );
};

export { Works };
