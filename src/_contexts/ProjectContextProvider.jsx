import React, { useContext, createContext, useEffect, useState } from "react";
import { axiosPrivate } from "../_api/axios.js";
import { isAxiosError } from "axios";

const ProjectContext = createContext([]);

export function useProjectContext() {
  const context = useContext(ProjectContext);

  if (context === undefined) {
    throw new Error(
      "useProjectContext must be used within a useProjectContext"
    );
  }
  return context;
}

export function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const response = await axiosPrivate.get("/api/projects/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("get projects: ", response.data);
        setProjects(response.data);
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  }

  async function fetchProject(projectId) {
    try {
      const response = await axiosPrivate.get(`/api/projects/${projectId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("get project: ", response.data);
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

  async function createProject(projectForm) {
    console.log([...projectForm]);
    try {
      const response = await axiosPrivate.post("/api/projects", projectForm, {
        headers: {
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("create project: ", response.data);
        fetchProjects();
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

  async function updateProject(projectForm, projectId) {
    console.log([...projectForm]);
    try {
      const response = await axiosPrivate.put(
        `/api/projects/${projectId}`,
        projectForm,
        {
          headers: {
            Accept:
              "application/json, application/xml, text/plain, text/html, *.*",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("update project: ", response.data);
        fetchProjects();
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

  async function deleteProject(projectId) {
    try {
      const response = await axiosPrivate.delete(`/api/projects/${projectId}`);

      if (response.status === 200) {
        console.log("delete project: ", response.data);
        fetchProjects();
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
