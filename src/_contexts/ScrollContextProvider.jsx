import React, { useContext, createContext, useEffect, useState } from "react";

const ScrollContext = createContext([]);

export function useScrollContext() {
  const context = useContext(ScrollContext);

  if (context === undefined) {
    throw new Error("useScrollContext must be used within a useScrollContext");
  }
  return context;
}

export function ScrollContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, "", `/#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0% -50% 0%",
        threshold: 0,
      }
    );

    document.querySelectorAll(".page-section").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".page-section").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ activeSection }}>
      {children}
    </ScrollContext.Provider>
  );
}
