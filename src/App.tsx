import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About, Contact, Experience, Certifications,
  Hero, Navbar, Tech, Works, StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";

const App = () => {
  const [hide, setHide] = useState(false);

  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Certifications />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
