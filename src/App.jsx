import { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { createContext } from "react";
import { Contact } from "./components/Contact/Contact";
import { ScrollContextProvider } from "./ScrollContextProvider";
import { Resume } from "./components/Resume/Resume";

export const DarkContext = createContext(false);

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div
      className="text-black bg-light-primary dark:text-white dark:bg-dark-primary box-border"
      id="app"
    >
      <ScrollContextProvider>
        <DarkContext.Provider value={dark}>
          <NavBar onClickToggle={darkModeHandler} />
          <About />
          <Resume />
          <Projects />
          <Contact />
        </DarkContext.Provider>
      </ScrollContextProvider>
    </div>
  );
}

export default App;
