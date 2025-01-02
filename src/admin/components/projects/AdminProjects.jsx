import React from "react";
import AdminProjectList from "./AdminProjectList";
import { useNavigate } from "react-router-dom";

export default function AdminProjects() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row-reverse">
        <button
          className="bg-base-green px-5"
          onClick={() => navigate("/admin/projects/add")}
        >
          Add Project
        </button>
      </div>
      <div className="text-3xl font-bold text-center text-dark-green dark:text-light-green">
        PROJECTS
      </div>
      <AdminProjectList />
    </div>
  );
}
