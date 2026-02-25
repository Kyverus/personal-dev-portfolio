import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminAppSettingList from "./AdminAppSettingList";
import AddAppSettingModal from "./AddAppSettingModal";
import { useAppSettingContext } from "../../../_contexts/AppSettingContextProvider";

export default function AdminAppSettings() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { createAppSetting } = useAppSettingContext();

  async function handleAddAppSetting(formDetails) {
    console.log(formDetails);
    const res = await createAppSetting(formDetails);
    if (res.success) navigate("/admin/app-settings");
  }

  return (
    <div>
      <div className="flex flex-row-reverse">
        <button
          className="bg-base-green px-5"
          onClick={() => setIsModalOpen(true)}
        >
          Add AppSettings
        </button>
      </div>
      <div className="text-3xl font-bold text-center text-dark-green dark:text-light-green">
        APP SETTINGS
      </div>
      <AdminAppSettingList />
      <AddAppSettingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddAppSetting}
      />
    </div>
  );
}
