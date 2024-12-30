import React, { useContext, createContext, useEffect, useState } from "react";
import { axiosPrivate } from "../_api/axios.js";
import { isAxiosError } from "axios";

const TechnologyContext = createContext([]);

export function useTechnologyContext() {
  const context = useContext(TechnologyContext);

  if (context === undefined) {
    throw new Error(
      "useTechnologyContext must be used within a useTechnologyContext"
    );
  }
  return context;
}

export function TechnologyContextProvider({ children }) {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetchTechnologies();
  }, []);

  async function fetchTechnologies() {
    try {
      const response = await axiosPrivate.get("/api/technologies/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("get technologies: ", response.data);
        setTechnologies(response.data);
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  async function createTechnology(technologyForm) {
    console.log([...technologyForm]);
    try {
      const response = await axiosPrivate.post(
        "/api/technologies",
        technologyForm,
        {
          headers: {
            Accept:
              "application/json, application/xml, text/plain, text/html, *.*",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("create technology: ", response.data);
        fetchTechnologies();
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

  async function deleteTechnology(projectId) {
    try {
      const response = await axiosPrivate.delete(
        `/api/technologies/${projectId}`
      );

      if (response.status === 200) {
        console.log("delete technology: ", response.data);
        fetchTechnologies();
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
    <TechnologyContext.Provider
      value={{
        technologies,
        fetchTechnologies,
        createTechnology,
        deleteTechnology,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
}
