import React from "react";
import { useProjectContext } from "../../../_contexts/ProjectContextProvider";
import AdminProjectItem from "./AdminProjectItem";

export default function AdminProjectList() {
  const { projects } = useProjectContext();
  console.log(projects);
  const sortedProjects = projects.sort(function (a, b) {
    return b.complexity - a.complexity;
  });
  return (
    <div className="xl:w-[1280px] mx-auto flex flex-col overflow-x-hidden space-y-10 my-5">
      {sortedProjects &&
        sortedProjects.map((project) => {
          return <AdminProjectItem key={project._id} project={project} />;
        })}
    </div>
  );
}
