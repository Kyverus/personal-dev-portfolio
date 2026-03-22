import { BannerDetails } from "./BannerDetails";
import { TechList } from "./TechList";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";
import headerImg from "../../assets/images/header-picture.jpg";
import { DashboardStats } from "./DashboardStats";

export function About() {
  const { technologies } = useTechnologyContext();
  return (
    <div
      className="page-section min-h-dvh space-y-4 text-dark-primary dark:text-light-primary pt-48 bg-gradient-to-b from-base-green/60 via-light-green/60 to-light-primary/60 dark:from-base-green/60 from-[0%] dark:via-dark-green/60 via-[30%] dark:to-dark-primary/60 to-[100%]"
      id="about"
    >
      <div className="xl:w-[1280px] mx-auto rounded-xl py-6 px-4 flex flex-col xl:flex-row-reverse gap-4">
          <div className="xl:w-1/3 py-6 px-4 flex justify-center items-center bg-white/30 dark:bg-black/60 rounded-2xl animate-shadowPulse dark:animate-glowPulse relative">
            <img
              className="h-[400px] xl:h-[500px] object-scale-down rounded-full filter dark:brightness-[0.9]"
              src={headerImg}
            />
          </div>
          <div className="xl:w-2/3 flex flex-col justify-center gap-4">
            <div className={"xl:min-h-[250px] gap-4" + (technologies.length > 0 ? " flex flex-col xl:flex-row" : " flex flex-col") }>
              <div className={"rounded-2xl p-6 space-y-8 bg-white/30 dark:bg-black/60 animate-shadowPulse dark:animate-glowPulse" + (technologies.length > 0 ? " xl:w-2/3" : "") }>
                <BannerDetails id="banner"/>
              </div>
              <div className={"xl:min-h-[250px] rounded-2xl p-6 flex flex-col gap-4 bg-white/30 dark:bg-black/60 animate-shadowPulse dark:animate-glowPulse" + (technologies.length > 0 ? " xl:w-1/3" : "")}>
                <DashboardStats id="dashboard_stats" />
              </div>
            </div>
            
            {(technologies.length > 0) && (
              <div className="rounded-2xl px-4 space-y-8 bg-white/30 dark:bg-black/60 animate-shadowPulse dark:animate-glowPulse">
                <TechList technologies={technologies} />
              </div>
            )}
          </div>
        </div>
    </div>
  );
}
