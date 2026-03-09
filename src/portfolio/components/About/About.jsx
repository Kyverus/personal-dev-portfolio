import { Banner } from "./Banner";
import { TechList } from "./TechList";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";

export function About() {
 
  return (
    <div
      className="page-section min-h-dvh space-y-4 text-dark-primary dark:text-light-primary pt-44 bg-gradient-to-b from-base-cyan to-light-primary dark:from-base-cyan dark:to-dark-primary"
      id="about"
    >
      <Banner />
    </div>
  );
}
