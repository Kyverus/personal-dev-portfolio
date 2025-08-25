import React, { useContext, createContext, useEffect, useState } from "react";
import { axiosPrivate } from "../_api/axios.js";
import { isAxiosError } from "axios";

const ExperienceContext = createContext([]);

export function useExperienceContext() {
  const context = useContext(ExperienceContext);

  if (context === undefined) {
    throw new Error(
      "useExperienceContext must be used within a useExperienceContext"
    );
  }
  return context;
}

export function ExperienceContextProvider({ children }) {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperiences();
  }, []);

  async function fetchExperiences() {
    try {
      const response = await axiosPrivate.get("/api/experiences/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log(response.data);
        setExperiences(response.data);
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  async function fetchExperience(expId) {
    try {
      const response = await axiosPrivate.get(`/api/experiences/${expId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        return { success: true, data: response.data };
      }
    } catch (error) {
      console.log(error.response?.data);
      if (isAxiosError(error)) {
        return { success: false, errors: error.response?.data };
      } else {
        return { success: false, errors: error };
      }
    }
  }

  async function createExperience(experienceForm) {
    try {
      const response = await axiosPrivate.post(
        "/api/experiences",
        experienceForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        fetchExperiences();
        return { success: true };
      }

      throw response;
    } catch (error) {
      console.log(error.response?.data);
      if (isAxiosError(error)) {
        return { success: false, errors: error.response?.data };
      } else {
        return { success: false, errors: error };
      }
    }
  }

  async function updateExperience(experienceForm, expId) {
    try {
      const response = await axiosPrivate.put(
        `/api/experiences/${expId}`,
        experienceForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        fetchExperiences();
        return { success: true };
      }
      throw response;
    } catch (error) {
      console.log(error.response?.data);
      if (isAxiosError(error)) {
        return { success: false, errors: error.response?.data };
      } else {
        return { success: false, errors: error };
      }
    }
  }

  async function deleteExperience(expId) {
    try {
      const response = await axiosPrivate.delete(`/api/experiences/${expId}`);

      if (response.status === 200) {
        fetchExperiences();
        return { success: true };
      }

      throw response;
    } catch (error) {
      console.log(error.response?.data);
      if (isAxiosError(error)) {
        return { success: false, errors: error.response?.data };
      } else {
        return { success: false, errors: error };
      }
    }
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
