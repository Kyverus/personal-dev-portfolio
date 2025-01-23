import { NavBar } from "./components/NavBar";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Resume } from "./components/Resume/Resume";

import bgPatternLight from "./assets/images/graph-paper-light.svg";
import bgPatternDark from "./assets/images/graph-paper-dark.svg";
import { useDarkContext } from "../_contexts/DarkContextProvider";

export default function PortfolioPage() {
  const { dark } = useDarkContext();
  return (
    <div
      style={{
        backgroundImage: `url("${dark ? bgPatternDark : bgPatternLight}")`,
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <NavBar />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
