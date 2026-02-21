import React, { useContext, createContext, useEffect, useState } from "react";
import { axiosPrivate } from "../_api/axios.js";
import { isAxiosError } from "axios";
import { useAPIRequestHandler } from "../_hooks/useAPIRequestHandler.js";
import { useAPIErrorHandler } from "../_hooks/useAPIErrorHandler.js";
import { toast } from "react-toastify";

const ProjectContext = createContext([]);

export function useProjectContext() {
  const context = useContext(ProjectContext);

  if (context === undefined) {
    throw new Error(
      "useProjectContext must be used within a useProjectContext",
    );
  }
  return context;
}

export function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const { handleAPIRequest } = useAPIRequestHandler();
  const { handleAPIErrors } = useAPIErrorHandler();

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const response = await handleAPIRequest(() =>
      axiosPrivate.get("/api/projects/", {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    const success = await handleAPIErrors(response);

    if (success) setProjects(response.data);
    return { success };
  }

  async function fetchProject(projectId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.get(`/api/projects/${projectId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    console.log(response.data);

    const success = handleAPIErrors(response);
    return success ? { success, data: response.data } : { success };
  }

  async function createProject(projectForm) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.post("/api/projects", projectForm, {
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
      fetchProjects();
    }
    return { success };
  }

  async function updateProject(projectForm, projectId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.put(`/api/projects/${projectId}`, projectForm, {
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
      fetchProjects();
    }
    return { success };
  }

  async function deleteProject(projectId) {
    const response = await handleAPIRequest(() =>
      axiosPrivate.delete(`/api/projects/${projectId}`),
    );

    const success = handleAPIErrors(response);
    if (success) {
      toast.success("Successfully Deleted!");
      fetchProjects();
    }
    return { success };
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        fetchProjects,
        fetchProject,
        createProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
