import { ProjectItem } from "./ProjectItem";
import { useEffect } from "react";

export function ProjectsList({ projects, className }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("project-left")) {
              entry.target.classList.remove("opacity-0", "-translate-x-8");
            } else {
              entry.target.classList.remove("opacity-0", "translate-x-8");
            }

            entry.target.classList.add("opacity-100", "translate-x-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    document.querySelectorAll(".project-item").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".project-item").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [projects]);

  return (
    <div
      className={
        "xl:w-[1280px] mx-auto flex flex-col overflow-x-hidden space-y-10" +
        (className ? " " + className : "")
      }
      id="projects-list"
    >
      {projects.map((project, i) => {
        return (
          <ProjectItem
            project={project}
            key={i}
            index={i}
            className={
              "project-item opacity-0 transition-all ease-in-out duration-300"
            }
          />
        );
      })}
    </div>
  );
}
