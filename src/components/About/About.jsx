import { Banner } from "./Banner";
import { TechList } from "./TechList";
import { technologies } from "../../assets/data/technology-list";

export function About() {
  return (
    <div
      className="min-h-dvh pt-44 space-y-4 text-dark-primary dark:text-light-primary"
      id="about"
    >
      <Banner />
      <TechList technologies={technologies} />
    </div>
  );
}
