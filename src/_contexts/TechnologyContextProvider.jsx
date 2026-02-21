import React, { useContext, createContext, useEffect, useState } from "react";
import { axiosPrivate } from "../_api/axios.js";
import { useAPIRequestHandler } from "../_hooks/useAPIRequestHandler.js";
import { useAPIErrorHandler } from "../_hooks/useAPIErrorHandler.js";
import { toast } from "react-toastify";

const TechnologyContext = createContext([]);

export function useTechnologyContext() {
  const context = useContext(TechnologyContext);

  if (context === undefined) {
    throw new Error(
      "useTechnologyContext must be used within a useTechnologyContext",
    );
  }
  return context;
}

export function TechnologyContextProvider({ children }) {
  const [technologies, setTechnologies] = useState([]);
  const { handleAPIRequest } = useAPIRequestHandler();
  const { handleAPIErrors } = useAPIErrorHandler();

  useEffect(() => {
    fetchTechnologies();
  }, []);

  async function fetchTechnologies() {
    const response = await handleAPIRequest(() =>
      axiosPrivate.get("/api/technologies/", {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = await handleAPIErrors(response);

    if (success) setTechnologies(response.data);
    return { success };
  }

  async function fetchTechnology(techId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.get(`/api/technologies/${techId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = handleAPIErrors(response);
    return success ? { success, data: response.data } : { success };
  }

  async function createTechnology(technologyForm) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.post("/api/technologies", technologyForm, {
        headers: {
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
          "Content-Type": "multipart/form-data",
        },
      }),
    );

    const success = handleAPIErrors(response);
    if (success) {
      toast.success("Successfully Created!");
      fetchTechnologies();
    }
    return { success };
  }

  async function updateTechnology(technologyForm, techId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.put(`/api/technologies/${techId}`, technologyForm, {
        headers: {
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
          "Content-Type": "multipart/form-data",
        },
      }),
    );

    const success = handleAPIErrors(response);
    if (success) {
      toast.success("Successfully Updated!");
      fetchTechnologies();
    }
    return { success };
  }

  async function deleteTechnology(techId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.delete(`/api/technologies/${techId}`),
    );

    const success = handleAPIErrors(response);
    if (success) {
      toast.success("Successfully Deleted!");
      fetchTechnologies();
    }
    return { success };
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
