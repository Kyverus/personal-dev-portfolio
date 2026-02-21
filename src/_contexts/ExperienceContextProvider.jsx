import { useContext, createContext, useEffect, useState } from "react";
import { axiosPrivate } from "../_api/axios.js";
import { useAPIRequestHandler } from "../_hooks/useAPIRequestHandler.js";
import { useAPIErrorHandler } from "../_hooks/useAPIErrorHandler.js";
import { toast } from "react-toastify";

const ExperienceContext = createContext([]);

export function useExperienceContext() {
  const context = useContext(ExperienceContext);

  if (context === undefined) {
    throw new Error(
      "useExperienceContext must be used within a useExperienceContext",
    );
  }
  return context;
}

export function ExperienceContextProvider({ children }) {
  const [experiences, setExperiences] = useState([]);
  const { handleAPIRequest } = useAPIRequestHandler();
  const { handleAPIErrors } = useAPIErrorHandler();

  useEffect(() => {
    fetchExperiences();
  }, []);

  async function fetchExperiences() {
    const response = await handleAPIRequest(() =>
      axiosPrivate.get("/api/experiences/", {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = await handleAPIErrors(response);

    if (success) {
      setExperiences(response.data);
    }

    return { success };
  }

  async function fetchExperience(expId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.get(`/api/experiences/${expId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = handleAPIErrors(response);
    return success ? { success, data: response.data } : { success };
  }

  async function createExperience(experienceForm) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.post("/api/experiences", experienceForm, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = handleAPIErrors(response);
    if (success) {
      toast.success("Successfully Created!");
      fetchExperiences();
    }
    return { success };
  }

  async function updateExperience(experienceForm, expId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.put(`/api/experiences/${expId}`, experienceForm, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = handleAPIErrors(response);
    if (success) {
      toast.success("Successfully Updated!");
      fetchExperiences();
    }
    return { success };
  }

  async function deleteExperience(expId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.delete(`/api/experiences/${expId}`),
    );
    const success = handleAPIErrors(response);
    if (success) {
      toast.success("Successfully Deleted!");
      fetchExperiences();
    }
    return { success };
  }
  return (
    <ExperienceContext.Provider
      value={{
        experiences,
        fetchExperiences,
        fetchExperience,
        createExperience,
        updateExperience,
        deleteExperience,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}
