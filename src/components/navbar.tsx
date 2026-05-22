import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { NAV_LINKS } from "../constants";
import { logo, menu, close } from "../assets";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Navbar = ({ hide: _hide }: { hide?: boolean }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Sara Arif &nbsp;<span className="sm:block hidden">| CS Student & AI Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => { if (!link.link) setActive(link.title); }}>
              {link.link ? (
                <a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id} className={`font-poppins font-medium cursor-pointer text-[16px] ${active === link.title ? "text-white" : "text-secondary"}`}
                  onClick={() => { if (!link.link) { setToggle(!toggle); setActive(link.title); } }}>
                  {link.link ? (
                    <a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
