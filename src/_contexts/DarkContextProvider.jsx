import React, { useContext, createContext, useEffect, useState } from "react";

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
    <DarkContext.Provider value={{ dark, darkModeHandler }}>
      {children}
    </DarkContext.Provider>
  );
}
