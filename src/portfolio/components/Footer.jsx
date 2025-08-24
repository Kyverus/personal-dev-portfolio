import { useState, useEffect } from "react";

export function Footer() {
  const [scrolledEnd, setScrolledEnd] = useState(false);

  useEffect(() => {
    const onScrollEnd = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        setScrolledEnd(true);
        console.log("end");
      } else {
        setScrolledEnd(false);
      }
    };

    window.addEventListener("scroll", onScrollEnd);

    return () => window.removeEventListener("scroll", onScrollEnd);
  }, []);

  return (
    <div
      className={
        "fixed bottom-0 w-full min-h-12 text-dark-secondary dark:text-light-secondary bg-light-green dark:bg-dark-green md:flex md:items-center md:justify-center space-y-2 md:space-y-0 p-5 transition-opacity duration-300 shadow-lg" +
        (scrolledEnd ? " opacity-100" : " opacity-0")
      }
    >
      <div className="text-sm md:flex-1 md:flex md:space-x-5">
        <div className="font-bold">LINKS:</div>
        <a href="https://github.com/kyverus" target="_blank">
          <div className="hover:text-base-cyan">Github</div>
        </a>
        <a href="https://www.linkedin.com/in/kirlianpacibe12" target="_blank">
          <div className="hover:text-base-cyan">LinkedIn</div>
        </a>
      </div>
      <div className="text-sm md:flex-1 md:flex md:space-x-5">
        <div className="font-bold">EMAIL:</div>
        <div>pacibekirlian2000@gmail.com</div>
      </div>
    </div>
  );
}
