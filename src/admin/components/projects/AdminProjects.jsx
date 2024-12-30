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
      <div>Projects</div>
      <AdminProjectList />
    </div>
  );
}
