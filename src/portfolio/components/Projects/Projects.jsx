import { useState } from "react";
import { useProjectContext } from "../../../_contexts/ProjectContextProvider";
import { ProjectsList } from "./project_list/ProjectsList";
import ProjectToolBar from "./toolbar/ProjectToolBar";
import ProjectGrid from "./project_grid/ProjectGrid";

export function Projects() {
  const { projects } = useProjectContext();
  const [projectView, setProjectView] = useState("list");
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("main");

  const mainProjects = projects.filter((project) => {
    const tags = project.tags;

    if (tags.includes("hidden")) return false;

    if (tag == "main") {
      return tags.includes(tag);
    } else {
      return !tags.includes("main");
    }
  });

  const sortedProjects = mainProjects.sort(function (a, b) {
    return b.complexity - a.complexity;
  });

  const searchedProjects =
    search != ""
      ? sortedProjects.filter((project) => filterFunc(project, search))
      : sortedProjects;

  function filterFunc(project, searchInput) {
    //To be improved
    if (project.title.toLowerCase().includes(searchInput.toLowerCase()))
      return true;
    if (project.tags.toLowerCase().includes(searchInput.toLowerCase()))
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
      <div className="text-2xl xs:text-3xl font-bold text-center px-2 text-dark-green dark:text-light-green">
        {tag == "main" ? "MAIN PROJECTS" : "OTHER PROJECTS"}
      </div>
      <ProjectToolBar
        view={projectView}
        tag={tag}
        setView={setProjectView}
        setSearch={setSearch}
        setTag={setTag}
      />
      {projectView == "list" && <ProjectsList projects={searchedProjects} />}
      {projectView == "grid" && <ProjectGrid projects={searchedProjects} />}
    </div>
  );
}
