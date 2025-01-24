import React, { useContext, createContext, useEffect, useState } from "react";
import bgPatternLight from "../portfolio/assets/images/graph-paper-light.svg";
import bgPatternDark from "../portfolio/assets/images/graph-paper-dark.svg";

const DarkContext = createContext([]);

export function useDarkContext() {
  const context = useContext(DarkContext);

  if (context === undefined) {
    throw new Error("useDarkContext must be used within a useDarkContext");
  }
  return context;
}

export function DarkContextProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [bgPattern, setBgPattern] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
      document.body.classList.add("dark");
    } else {
      setBgPattern(bgPatternLight);
    }
  }, []);

  useEffect(() => {
    if (dark) {
      setBgPattern(bgPatternDark);
    } else {
      setBgPattern(bgPatternLight);
    }
  }, [dark]);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
    setBgPattern(""); //reset bg pattern to smoothen transition
  };

  return (
    <DarkContext.Provider value={{ dark, darkModeHandler, bgPattern }}>
      {children}
    </DarkContext.Provider>
  );
}
