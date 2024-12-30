import React from "react";
import { useProjectContext } from "../../../_contexts/ProjectContextProvider";
import AdminProjectItem from "./AdminProjectItem";

export default function AdminProjectList() {
  const { projects } = useProjectContext();
  console.log(projects);
  return (
    <>
      <div>AdminProjectList</div>
      {projects &&
        projects.map((project) => {
          return <AdminProjectItem key={project._id} project={project} />;
        })}
    </>
  );
}
