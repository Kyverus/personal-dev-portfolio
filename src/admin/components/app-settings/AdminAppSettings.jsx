import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAppSettings() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row-reverse">
        <button
          className="bg-base-green px-5"
          onClick={() => navigate("/admin/experience/add")}
        >
          Add AppSettings
        </button>
      </div>
      <div className="text-3xl font-bold text-center text-dark-green dark:text-light-green">
        APP SETTINGS
      </div>
    </div>
  );
}
