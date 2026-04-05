import { DetailsView } from "./Views/DetailsView";
import { TechList } from "./TechList";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";
import { StatsView } from "./Views/StatsView";
import { ProfileView } from "./Views/ProfileView";
import { SkillsView } from "./Views/SkillsView";

export function About() {
  const { technologies } = useTechnologyContext();
  return (
    <div
      className="page-section min-h-dvh space-y-4 text-dark-primary dark:text-light-primary pt-36 md:pt-40"
      id="about"
    >
      <div className="text-center hidden xl:block text-9xl font-bold bg-gradient-to-b from-base-green to-dark-green dark:from-base-green dark:to-light-green bg-clip-text text-transparent">
        KIRLIAN PACIBE
      </div>
      <div className="xl:w-[1280px] mx-auto px-4 flex flex-col xl:flex-row-reverse gap-3">
        <ProfileView className={"xl:w-1/3"} />

        <div className="xl:w-2/3 flex flex-col justify-center gap-3">
          <div
            className={
              "xl:min-h-[250px] gap-3" +
              (technologies.length > 0
                ? " flex flex-col xl:flex-row"
                : " flex flex-col")
            }
          >
            <DetailsView
              className={technologies.length > 0 ? "xl:w-2/3" : ""}
            />
            <StatsView
              id="stats"
              className={technologies.length > 0 ? "xl:w-1/3" : ""}
            />
          </div>

          <SkillsView id="skills" />
        </div>
      </div>
    </div>
  );
}
