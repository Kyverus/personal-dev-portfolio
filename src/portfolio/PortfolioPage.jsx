import { NavBar } from "./components/NavBar";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Resume } from "./components/Resume/Resume";
import { Footer } from "./components/Footer";

import { useDarkContext } from "../_contexts/DarkContextProvider";

export default function PortfolioPage() {
  const { bgPattern } = useDarkContext();
  return (
    <div
      style={{
        backgroundImage: `url("${bgPattern}")`,
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <NavBar />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
