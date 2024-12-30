import { Route, Routes, BrowserRouter } from "react-router-dom";

import { DarkContextProvider } from "./_contexts/DarkContextProvider";
import { ScrollContextProvider } from "./_contexts/ScrollContextProvider";
import { ProjectContextProvider } from "./_contexts/ProjectContextProvider";
import { TechnologyContextProvider } from "./_contexts/TechnologyContextProvider";

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
import Test from "./Test";

function App() {
  return (
    <BrowserRouter>
      <ScrollContextProvider>
        <DarkContextProvider>
          <TechnologyContextProvider>
            <ProjectContextProvider>
              <div
                className="text-black bg-light-primary dark:text-white dark:bg-dark-primary box-border"
                id="app"
              >
                <Routes>
                  <Route path="/" element={<PortfolioPage />} />
                  <Route path="/testing" element={<Test />} />
                  <Route element={<AuthContextLayout />}>
                    <Route element={<AuthRouteHandler />}>
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="projects">
                          <Route index element={<AdminProjects />} />
                          <Route path="add" element={<AddProject />} />
                        </Route>
                        <Route path="technologies">
                          <Route index element={<AdminTechnologies />} />
                          <Route path="add" element={<AddTechnology />} />
                        </Route>
                      </Route>
                    </Route>
                  </Route>
                </Routes>
              </div>
            </ProjectContextProvider>
          </TechnologyContextProvider>
        </DarkContextProvider>
      </ScrollContextProvider>
    </BrowserRouter>
  );
}

export default App;
