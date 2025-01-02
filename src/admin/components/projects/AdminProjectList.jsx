import React from "react";
import { useProjectContext } from "../../../_contexts/ProjectContextProvider";
import AdminProjectItem from "./AdminProjectItem";

export default function AdminProjectList() {
  const { projects } = useProjectContext();
  console.log(projects);
  return (
    <div className="xl:w-[1280px] mx-auto flex flex-col overflow-x-hidden space-y-10 my-5">
      {projects &&
        projects.map((project) => {
          return <AdminProjectItem key={project._id} project={project} />;
        })}
    </div>
  );
}
