import { SOCIALS } from "../constants";

const Footer = () => (
  <footer className="flex flex-col gap-7 w-full items-center sm:py-12 py-8 border-t border-[#aaa6c3]/20">
    <p className="font-medium text-[16px] text-center text-white">
      © Sara Arif {new Date().getFullYear()}. All rights reserved.
    </p>
    <div className="flex items-center gap-5">
      {SOCIALS.map((social) => (
        <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" title={social.name}>
          <img src={social.icon} alt={social.name} className="w-[25px] h-[25px] object-contain cursor-pointer hover:opacity-70 transition-opacity" />
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
