import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

export const Hero = () => (
  <section className="relative w-full h-screen mx-auto">
    <div className={`absolute inset-0 top-[90px] z-10 pointer-events-none max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          <span className="text-[#915EFF]">Sara Arif</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I build intelligent data pipelines, AI agents, <br className="sm:block hidden" />
          and production-grade software architectures.
        </p>
        <div className="flex flex-wrap gap-4 mt-8 pointer-events-auto z-50">
          <a
            href="/Sara_Arif_CV.pdf"
            download="Sara_Arif_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all hover:bg-white hover:text-[#915EFF] active:scale-95 flex items-center gap-2 text-sm md:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            CV
          </a>
        </div>
      </div>
    </div>

    <ComputersCanvas />

    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  </section>
);
