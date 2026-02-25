import React from "react";
import { useAppSettingContext } from "../../../_contexts/AppSettingContextProvider";

export default function AdminAppSettingList() {
  const { settings } = useAppSettingContext();

  return (
    <div className="xl:w-[1280px] mx-auto flex flex-col overflow-x-hidden space-y-10 my-5">
      {settings &&
        settings.map((setting) => {
          return (
            <div key={setting._id}>
              <span>{setting.settingName}</span> :
              <span>{setting.settingValue}</span>
            </div>
          );
        })}
    </div>
  );
}
