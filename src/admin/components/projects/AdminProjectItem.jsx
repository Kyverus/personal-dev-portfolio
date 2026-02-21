import React from "react";
import { useProjectContext } from "../../../_contexts/ProjectContextProvider";
import { Link } from "react-router-dom";

export default function AdminProjectItem({ project }) {
  const { deleteProject } = useProjectContext();

  async function handleProjectDelete(projectId) {
    const res = await deleteProject(projectId);
  }

  return (
    <div className="flex justify-between bg-dark-tertiary rounded-md p-5 ">
      <div className="flex space-x-5">
        <div>
          <img src={project.imgURL} className="w-56 h-36" />
        </div>
        <div className="space-y-4">
          <div>
            <div className="text-light-green font-bold">{project.title}</div>
            <div>Complexity: {project.complexity}</div>
            <div>{project.description}</div>
            <div>{project.technologies}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Link
          to={`/admin/projects/update/${project._id}`}
          className="bg-blue-500 px-5"
        >
          UPDATE
        </Link>
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
