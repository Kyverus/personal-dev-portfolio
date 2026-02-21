import { DarkContextProvider } from "./DarkContextProvider";
import { ProjectContextProvider } from "./ProjectContextProvider";
import { TechnologyContextProvider } from "./TechnologyContextProvider";
import { ExperienceContextProvider } from "./ExperienceContextProvider";
import { ScrollContextProvider } from "./ScrollContextProvider";
import { Bounce, ToastContainer } from "react-toastify";

export default function AppProviders({ children }) {
  return (
    <ScrollContextProvider>
      <DarkContextProvider>
        <TechnologyContextProvider>
          <ProjectContextProvider>
            <ExperienceContextProvider>
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
              />
              {children}
            </ExperienceContextProvider>
          </ProjectContextProvider>
        </TechnologyContextProvider>
      </DarkContextProvider>
    </ScrollContextProvider>
  );
}
