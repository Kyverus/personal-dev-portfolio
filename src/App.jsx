import { Route, Routes, BrowserRouter } from "react-router-dom";

import { DarkContextProvider } from "./_contexts/DarkContextProvider";
import { ScrollContextProvider } from "./_contexts/ScrollContextProvider";
import { ProjectContextProvider } from "./_contexts/ProjectContextProvider";
import { TechnologyContextProvider } from "./_contexts/TechnologyContextProvider";
import { ExperienceContextProvider } from "./_contexts/ExperienceContextProvider";

import PortfolioPage from "./portfolio/PortfolioPage";
import LoginPage from "./admin/auth/LoginPage";

import AuthRouteHandler from "./admin/auth/routes/AuthRouteHandler";
import AuthContextLayout from "./admin/auth/routes/AuthContextLayout";

import AdminProjects from "./admin/components/projects/AdminProjects";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/components/dashboard/AdminDashboard";

import AddProject from "./admin/components/projects/AddProject";
import AdminTechnologies from "./admin/components/technologies/AdminTechnologies";
import AddTechnology from "./admin/components/technologies/AddTechnology";
import UpdateTechnology from "./admin/components/technologies/UpdateTechnology";
import UpdateProject from "./admin/components/projects/UpdateProject";
import AdminExperience from "./admin/components/experience/AdminExperience";
import AddExperience from "./admin/components/experience/AddExperience";
import UpdateExperience from "./admin/components/experience/UpdateExperience";

function App() {
  return (
    <BrowserRouter>
      <ScrollContextProvider>
        <DarkContextProvider>
          <TechnologyContextProvider>
            <ProjectContextProvider>
              <ExperienceContextProvider>
                <div
                  className="text-black bg-light-primary dark:text-white dark:bg-dark-primary box-border"
                  id="app"
                >
                  <Routes>
                    <Route path="/" element={<PortfolioPage />} />
                    <Route element={<AuthContextLayout />}>
                      <Route element={<AuthRouteHandler />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/admin" element={<AdminLayout />}>
                          <Route index element={<AdminDashboard />} />
                          <Route path="projects">
                            <Route index element={<AdminProjects />} />
                            <Route path="add" element={<AddProject />} />
                            <Route
                              path="update/:id"
                              element={<UpdateProject />}
                            />
                          </Route>
                          <Route path="technologies">
                            <Route index element={<AdminTechnologies />} />
                            <Route path="add" element={<AddTechnology />} />
                            <Route
                              path="update/:id"
                              element={<UpdateTechnology />}
                            />
                          </Route>
                          <Route path="experience">
                            <Route index element={<AdminExperience />} />
                            <Route path="add" element={<AddExperience />} />
                            <Route
                              path="update/:id"
                              element={<UpdateExperience />}
                            />
                          </Route>
                        </Route>
                      </Route>
                    </Route>
                  </Routes>
                </div>
              </ExperienceContextProvider>
            </ProjectContextProvider>
          </TechnologyContextProvider>
        </DarkContextProvider>
      </ScrollContextProvider>
    </BrowserRouter>
  );
}

export default App;
