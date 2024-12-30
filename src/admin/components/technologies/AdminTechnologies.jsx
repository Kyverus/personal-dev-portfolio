import React from "react";
import AdminTechnologyList from "./AdminTechnologyList";
import { useNavigate } from "react-router-dom";

export default function AdminTechnologies() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row-reverse">
        <button
          className="bg-base-green px-5"
          onClick={() => navigate("/admin/technologies/add")}
        >
          Add Technology
        </button>
      </div>
      <div>Technologies</div>
      <AdminTechnologyList />
    </div>
  );
}
