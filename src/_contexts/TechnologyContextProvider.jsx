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

  async function fetchTechnology(techId) {
    try {
      const response = await axiosPrivate.get(`/api/technologies/${techId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("get technology: ", response.data);
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

  async function updateTechnology(technologyForm, techId) {
    console.log([...technologyForm]);
    try {
      const response = await axiosPrivate.put(
        `/api/technologies/${techId}`,
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
        console.log("update technology: ", response.data);
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

  async function deleteTechnology(techId) {
    try {
      const response = await axiosPrivate.delete(`/api/technologies/${techId}`);

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
        fetchTechnology,
        createTechnology,
        updateTechnology,
        deleteTechnology,
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
}
