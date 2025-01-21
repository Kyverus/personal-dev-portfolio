import { useState } from "react";
import { useProjectContext } from "../../../_contexts/ProjectContextProvider";
import { ProjectsList } from "./project_list/ProjectsList";
import ProjectToolBar from "./toolbar/ProjectToolBar";
import ProjectGrid from "./project_grid/ProjectGrid";

export function Projects() {
  const { projects } = useProjectContext();
  const [projectView, setProjectView] = useState("list");
  const [search, setSearch] = useState("");

  const sortedProjects = projects.sort(function (a, b) {
    return b.complexity - a.complexity;
  });
  const searchedProjects =
    search != ""
      ? sortedProjects.filter((project) => filterFunc(project, search))
      : projects;

  function filterFunc(project, searchInput) {
    //To be improved
    if (project.title.toLowerCase().includes(searchInput.toLowerCase()))
      return true;
    if (project.type.toLowerCase().includes(searchInput.toLowerCase()))
      return true;
    if (project.description.toLowerCase().includes(searchInput.toLowerCase()))
      return true;
    if (project.technologies.toLowerCase().includes(searchInput.toLowerCase()))
      return true;

    return false;
  }
  return (
    <div
      className="page-section min-h-dvh pt-36 pb-8 space-y-10 text-black dark:text-white"
      id="projects"
    >
      <div className="text-3xl font-bold text-center px-2 text-dark-green dark:text-light-green">
        PROJECTS
      </div>
      <ProjectToolBar
        view={projectView}
        setView={setProjectView}
        setSearch={setSearch}
      />
      {projectView == "list" && <ProjectsList projects={searchedProjects} />}
      {projectView == "grid" && <ProjectGrid projects={searchedProjects} />}
    </div>
  );
}
