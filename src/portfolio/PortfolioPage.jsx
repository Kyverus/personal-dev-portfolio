import { NavBar } from "./components/NavBar";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Resume } from "./components/Resume/Resume";

export default function Portfolio() {
  return (
    <>
      <NavBar />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}
