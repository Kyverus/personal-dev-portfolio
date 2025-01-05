import { Banner } from "./Banner";
import { TechList } from "./TechList";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";

export function About() {
  const { technologies } = useTechnologyContext();
  return (
    <div
      className="page-section min-h-dvh pt-44 space-y-4 text-dark-primary dark:text-light-primary"
      id="about"
    >
      <Banner />
      <TechList technologies={technologies} />
    </div>
  );
}
