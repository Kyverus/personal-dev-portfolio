import React from "react";
import ProjectGridItem from "./ProjectGridItem";

export default function ProjectGrid({ projects }) {
  return (
    <div
      className={
        "xl:w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 animate-appear px-4"
      }
      id="projects-grid"
    >
      {projects.map((project, i) => {
        return <ProjectGridItem project={project} key={i} />;
      })}
    </div>
  );
}
