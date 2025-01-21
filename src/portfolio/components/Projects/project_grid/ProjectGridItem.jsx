import React from "react";
import { useTechnologyContext } from "../../../../_contexts/TechnologyContextProvider";

export default function ProjectGridItem({ project }) {
  const { technologies } = useTechnologyContext();

  const projectTechs = technologies.filter((technology) => {
    const techs = project.technologies.split(",");
    return techs.includes(technology.title);
  });

  return (
    <div className="bg-white dark:bg-dark-secondary rounded-md flex flex-col space-y-2 shadow-[0_0_10px_5px_rgb(0,0,0,0.3)] hover:shadow-base-green/75  overflow-hidden">
      <img className="h-1/2" src={project.imgURL} alt="project image" />
      <div className="flex flex-col grow justify-between p-2">
        <div className="font-bold text-dark-green dark:text-light-green">
          {project.title}
        </div>
        <div className="flex flex-wrap items-center justify-start my-2">
          {projectTechs.map((tech) => {
            return (
              <div className="size-6 mx-1" key={tech._id}>
                <img src={tech.imgURL} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
