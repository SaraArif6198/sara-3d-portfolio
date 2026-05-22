import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { CERTIFICATIONS } from "../constants";

const CertificationCard = ({ index, title, issuer, date, category, link, image }: { index: number, title: string, issuer: string, date: string, category: string, link: string, image?: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    layout
  >
    <Tilt options={{ max: 15, scale: 1, speed: 450 }} className="w-full">
      <div className="bg-tertiary border border-[#915EFF]/20 rounded-2xl p-6 sm:w-[350px] w-full flex flex-col justify-between h-full min-h-[380px]">
        <div>
          {image && (
            <div className="relative w-full h-[180px] mb-5">
              <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
            </div>
          )}
          <div className="flex justify-between items-start mb-4">
            <span className={`text-[12px] font-bold px-3 py-1 rounded-full ${
              category === 'Awards & Honors' ? 'bg-[#915EFF]/20 text-[#915EFF]' : 
              category === 'Artificial Intelligence' || category === 'Machine Learning' ? 'bg-green-500/20 text-green-400' : 
              category === 'Data Engineering' || category === 'Data Analytics' ? 'bg-blue-500/20 text-blue-400' :
              'bg-orange-500/20 text-orange-400'
            }`}>
              {category}
            </span>
            <p className="text-secondary text-[12px]">{date}</p>
          </div>
          <h3 className="text-white font-bold text-[20px] leading-tight">{title}</h3>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <p className="text-secondary text-[14px] font-semibold">{issuer}</p>
          <a href={link} target="_blank" rel="noreferrer" 
             className="text-[#915EFF] text-[14px] hover:underline cursor-pointer">
            Verify ↗
          </a>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Certifications = () => {
  const categories = ["All", "Awards & Honors", "Artificial Intelligence", "Machine Learning", "Data Analytics", "Data Engineering"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCerts = activeCategory === "All" 
    ? CERTIFICATIONS 
    : CERTIFICATIONS.filter(cert => cert.category === activeCategory);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      id="certifications"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Global Benchmarks</p>
        <h2 className={styles.sectionHeadText}>Certifications & Awards.</h2>
      </motion.div>

      <div className="w-full flex flex-col mt-5">
        <motion.div variants={fadeIn("up", "spring", 0.1, 0.75)} className="flex flex-wrap bg-tertiary p-2 rounded-2xl shadow-card w-full gap-2 z-10 border border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`py-2 px-4 rounded-xl text-[14px] font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#915EFF] text-white shadow-lg scale-100"
                  : "bg-transparent text-secondary hover:text-white hover:bg-white/5 scale-95"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 flex flex-wrap gap-7 min-h-[250px]">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert, index) => (
            <CertificationCard key={`cert-${activeCategory}-${cert.title}`} index={index} {...cert} />
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export { Certifications };
