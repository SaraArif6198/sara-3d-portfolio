import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ContactContent = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    import("@emailjs/browser").then((emailjs) => {
      emailjs
        .send(
          "service_gqfvpw4", // EmailJS service ID
          "template_xcxgzhj", // EmailJS template ID
          {
            from_name: form.name,
            to_name: "Sara",
            from_email: form.email,
            to_email: "saraariff2005@gmail.com",
            message: form.message,
          },
          "JpGw_0s9ylYt7ypuV" // EmailJS public key
        )
        .then(
          () => {
            setLoading(false);
            toast.success("Message received! I'll get back to you soon.");
            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            toast.error("Ahh, something went wrong. Please try again.");
          }
        );
    });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <button type="submit" disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-colors">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="mt-8 flex flex-col gap-2">
          <p className="text-secondary text-sm">Or reach me directly:</p>
          <a href="mailto:saraarif6198@gmail.com" className="text-[#915EFF] hover:text-white transition-colors">saraarif6198@gmail.com</a>
          <a href="https://github.com/SaraArif6198" target="_blank" rel="noopener noreferrer" className="text-[#915EFF] hover:text-white transition-colors">github.com/SaraArif6198</a>
          <a href="https://linkedin.com/in/sara-arif-792p" target="_blank" rel="noopener noreferrer" className="text-[#915EFF] hover:text-white transition-colors">linkedin.com/in/sara-arif-792p</a>
        </div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] hidden md:block">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export const Contact = SectionWrapper(ContactContent, "contact") as React.ComponentType;
