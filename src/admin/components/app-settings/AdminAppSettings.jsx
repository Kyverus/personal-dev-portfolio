import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminAppSettingList from "./AdminAppSettingList";
import AppSettingModal from "./AppSettingModal";
import { useAppSettingContext } from "../../../_contexts/AppSettingContextProvider";

export default function AdminAppSettings() {
  const navigate = useNavigate();
  const { createAppSetting, updateAppSetting, deleteAppSetting } =
    useAppSettingContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState(null);

  async function handleSubmitAppSetting(formDetails) {
    let res;
    if (selectedSetting) {
      console.log(formDetails);

      const submitData = {
        settingName: formDetails.settingName,
        settingValue: formDetails.settingValue,
      };
      res = await updateAppSetting(submitData, selectedSetting._id);
    } else {
      res = await createAppSetting(formDetails);
    }

    if (res.success) navigate("/admin/app-settings");
  }

  async function handleEditAppSetting(setting) {
    setSelectedSetting(setting);
    setIsModalOpen(true);
  }

  async function handleDeleteAppSetting(settingId) {
    if (window.confirm("Are you sure you want to delete this?")) {
      const res = await deleteAppSetting(settingId);
    }
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
      <AdminAppSettingList
        onEdit={handleEditAppSetting}
        onDelete={handleDeleteAppSetting}
      />
      <AppSettingModal
        isOpen={isModalOpen}
        onClose={() => {
          setSelectedSetting(null);
          setIsModalOpen(false);
        }}
        onSubmit={handleSubmitAppSetting}
        initialData={selectedSetting}
      />
    </div>
  );
}
