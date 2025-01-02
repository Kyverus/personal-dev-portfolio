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
      <div className="text-3xl font-bold text-center text-dark-green dark:text-light-green">
        TECHNOLOGIES
      </div>
      <AdminTechnologyList />
    </div>
  );
}
