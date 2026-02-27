import React from "react";
import { useAppSettingContext } from "../../../_contexts/AppSettingContextProvider";

export default function AdminAppSettingList({ onEdit, onDelete }) {
  const { settings } = useAppSettingContext();

  return (
    <div className="md:w-[720px] mx-auto flex flex-col overflow-x-hidden space-y-10 my-5">
      {settings &&
        settings.map((setting) => {
          return (
            <div
              key={setting._id}
              className="rounded-sm bg-dark-tertiary flex justify-between px-4 py-2"
            >
              <div className="flex flex-col  p-2">
                <div className="flex">
                  <div className="w-14 text-light-green">Name</div>
                  <div className="flex-1">: {setting.settingName}</div>
                </div>
                <div className="flex">
                  <div className="w-14 text-light-green">Value</div>
                  <div className="flex-1">: {setting.settingValue}</div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <button
                  className="bg-blue-500 px-2"
                  onClick={() => onEdit(setting)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 px-2"
                  onClick={() => onDelete(setting._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
