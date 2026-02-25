import React, { useContext, createContext, useEffect, useState } from "react";
import { axiosPrivate } from "../_api/axios.js";
import { useAPIRequestHandler } from "../_hooks/useAPIRequestHandler.js";
import { useAPIErrorHandler } from "../_hooks/useAPIErrorHandler.js";
import { toast } from "react-toastify";

const AppSettingContext = createContext([]);

export function useAppSettingContext() {
  const context = useContext(AppSettingContext);

  if (context === undefined) {
    throw new Error(
      "useAppSettingContext must be used within a useAppSettingContext",
    );
  }
  return context;
}

export function AppSettingContextProvider({ children }) {
  const [settings, setAppSettings] = useState([]);
  const { handleAPIRequest } = useAPIRequestHandler();
  const { handleAPIErrors } = useAPIErrorHandler();

  useEffect(() => {
    fetchAppSettings();
  }, []);

  async function fetchAppSettings() {
    const response = await handleAPIRequest(() =>
      axiosPrivate.get("/api/app-settings/", {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = await handleAPIErrors(response);

    if (success) setAppSettings(response.data);
    return { success };
  }

  async function fetchAppSetting(settingId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.get(`/api/app-settings/${settingId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = await handleAPIErrors(response);
    return success ? { success, data: response.data } : { success };
  }

  async function createAppSetting(settingForm) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.post("/api/app-settings", settingForm, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = await handleAPIErrors(response);
    if (success) {
      toast.success("Successfully Created!");
      fetchAppSettings();
    }
    return { success };
  }

  async function updateAppSetting(settingForm, settingId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.put(`/api/app-settings/${settingId}`, settingForm, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = await handleAPIErrors(response);
    if (success) {
      toast.success("Successfully Updated!");
      fetchAppSettings();
    }
    return { success };
  }

  async function deleteAppSetting(settingId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.delete(`/api/app-settings/${settingId}`),
    );

    const success = await handleAPIErrors(response);
    if (success) {
      toast.success("Successfully Deleted!");
      fetchAppSettings();
    }
    return { success };
  }

  return (
    <AppSettingContext.Provider
      value={{
        settings,
        fetchAppSettings,
        fetchAppSetting,
        createAppSetting,
        updateAppSetting,
        deleteAppSetting,
      }}
    >
      {children}
    </AppSettingContext.Provider>
  );
}
