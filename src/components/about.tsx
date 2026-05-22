import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SERVICES } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

type ServiceCardProps = { index: number; title: string; icon: string };

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ backgroundImage: "radial-gradient(ellipse at top, #1d1836, #050816)" }}>
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const AboutContent = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I am a versatile Data Scientist and Software Engineer who bridges the gap between raw data and deployed AI solutions. 
      From engineering LangGraph-powered AI agents and training robust machine learning models, to designing enterprise-grade 
      Power BI dashboards and building full-stack applications, I architect systems that drive real business value. 
      Backed by global certifications from IBM, Google, and Microsoft, and armed with a deep understanding of compiler 
      theory and software architecture, I don't just analyze data — <span className="text-[#915EFF] font-semibold">I build the infrastructure that makes it actionable</span>.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {SERVICES.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export const About = SectionWrapper(AboutContent, "about") as React.ComponentType;
