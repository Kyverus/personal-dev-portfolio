import { DetailsView } from "./Views/DetailsView";
import { TechList } from "./TechList";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";
import { StatsView } from "./Views/StatsView";
import { ProfileView } from "./Views/ProfileView";
import { SkillsView } from "./Views/SkillsView";
import { useEffect } from "react";

export function About() {
  const { technologies, loading } = useTechnologyContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {

            entry.target.style.transitionDelay = `${index * 100}ms`;

            entry.target.classList.remove(
              "opacity-0",
              "translate-x-8",
              "-translate-x-8",
              "translate-y-8",
              "-translate-y-8"
            );

            entry.target.classList.add("opacity-100", "translate-x-0", "translate-y-0");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    document.querySelectorAll(".banner-view").forEach((item) => {
      console.log("observing:", item);
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".banner-view").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [technologies]);

  return (
    <div
      className="page-section min-h-dvh space-y-4 text-dark-primary dark:text-light-primary pt-36"
      id="about"
    >
      {(!loading) && (
        <>
          <div className="text-center hidden xl:block text-9xl font-bold bg-gradient-to-b from-base-green to-dark-green dark:from-base-green dark:to-light-green bg-clip-text text-transparent drop-shadow-lg py-2">
            KIRLIAN PACIBE
          </div>
          <div className="xl:w-[1280px] mx-auto px-4 flex flex-col xl:flex-row gap-4">
            <ProfileView id="profile" className={"translate-x-8 opacity-0 transition-[transform,_opacity] ease-in-out duration-500 xl:w-1/3 xl:rounded-bl-xl"} />

            <div className="xl:w-2/3 flex flex-col justify-center gap-4">
              <div
                className={
                  "xl:min-h-[250px] gap-4" +
                  (technologies.length > 0
                    ? " flex flex-col xl:flex-row"
                    : " flex flex-col")
                }
              >
                <DetailsView
                  id="details"
                  className={"-translate-x-8 opacity-0 transition-[transform,_opacity] ease-in-out duration-500" + (technologies.length > 0 ? " xl:w-2/3" : " xl:rounded-tr-xl")}
                />
                <StatsView
                  id="stats"
                  className={"-translate-y-8 opacity-0 transition-[transform,_opacity] ease-in-out duration-500" + (technologies.length > 0 ? " xl:w-1/3 xl:rounded-tr-xl" : "")}
                />
              </div>

              <SkillsView id="skills" className={"-translate-x-8 opacity-0 transition-[transform,_opacity] ease-in-out duration-500"} />
            </div>
          </div>
        </>
      )
    }
    </div>
  );
}
