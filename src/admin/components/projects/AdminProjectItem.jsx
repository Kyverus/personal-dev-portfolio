import React from "react";
import { useProjectContext } from "../../../_contexts/ProjectContextProvider";

export default function AdminProjectItem({ project }) {
  const { deleteProject } = useProjectContext();

  async function handleProjectDelete(projectId) {
    const res = await deleteProject(projectId);

    if (res.success) {
      console.log("Project deleted successfully");
    } else {
      console.log(res.errors);
    }
  }

  return (
    <div className="flex">
      <div>
        <img src={project.imgURL} className="w-[500px]" alt="" />
      </div>
      <div>
        <div>{project._id}</div>
        <div>{project.title}</div>
        <div>{project.description}</div>
        <button
          onClick={() => handleProjectDelete(project._id)}
          className="bg-red-500 px-5"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
