import { BannerDetails } from "./BannerDetails";
import { TechList } from "./TechList";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";
import headerImg from "../../assets/images/header-picture.jpg";
import { DashboardStats } from "./DashboardStats";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useDarkContext } from "../../../_contexts/DarkContextProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export function About() {
  const { dark, darkModeHandler } = useDarkContext();
  const { technologies } = useTechnologyContext();
  return (
    <div
      className="page-section min-h-dvh space-y-4 text-dark-primary dark:text-light-primary pt-40"
      id="about"
    >
      <div className="text-center text-6xl md:text-8xl xl:text-9xl font-bold bg-gradient-to-b from-base-green to-dark-green dark:from-base-green dark:to-light-green bg-clip-text text-transparent">KIRLIAN PACIBE</div>
      <div className="xl:w-[1280px] mx-auto px-4 flex flex-col xl:flex-row-reverse gap-3">
          <div className="xl:w-1/3 py-6 px-4 flex flex-col justify-center items-center bg-white dark:bg-dark-secondary shadow-green-dark dark:shadow-none relative">
            <div className="w-full flex justify-end">
                <button className="mx-2" onClick={() => darkModeHandler()}>
                  {dark ? (
                    <SunIcon className="size-8 xs:size-9 text-base-green hover:text-light-green active:text-base-cyan" />
                  ) : (
                    <MoonIcon className="size-8 xs:size-9 text-base-green hover:text-dark-green active:text-base-cyan" />
                  )}
                </button>
            </div>
            <img
              className="size-[350px] rounded-full object-cover filter dark:brightness-[0.9] border-4 border-light-green dark:border-dark-green"
              src={headerImg}
            />

            <div className="space-y-2 py-4">
              <div className="flex items-center gap-2">
                <FaLinkedin className="size-7 hover:text-base-green active:text-base-cyan" />
                <a href="https://www.linkedin.com/in/kirlianpacibe12" target="_blank" className="text-sm text-dark-green dark:text-light-green">
                  https://www.linkedin.com/in/kirlianpacibe12
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub className="size-7 hover:text-base-green active:text-base-cyan" />
                <a href="https://github.com/kyverus" target="_blank" className="text-sm text-dark-green dark:text-light-green">
                  https://github.com/kyverus
                </a>
              </div>
            </div>

          </div>
          <div className="xl:w-2/3 flex flex-col justify-center gap-3">
            <div className={"xl:min-h-[250px] gap-3" + (technologies.length > 0 ? " flex flex-col xl:flex-row" : " flex flex-col") }>
              <div className={"p-6 space-y-8 bg-white dark:bg-dark-secondary shadow-green-dark dark:shadow-none" + (technologies.length > 0 ? " xl:w-2/3" : "") }>
                <BannerDetails id="banner"/>
              </div>
              <div className={"xl:min-h-[250px] p-6 flex flex-col gap-3 bg-white dark:bg-dark-secondary shadow-green-dark dark:shadow-none" + (technologies.length > 0 ? " xl:w-1/3" : "")}>
                <DashboardStats id="dashboard_stats" />
              </div>
            </div>
            
            {(technologies.length > 0) && (
              <div className="px-4 space-y-8 bg-white dark:bg-dark-secondary shadow-green-dark dark:shadow-none">
                <TechList technologies={technologies} />
              </div>
            )}
          </div>
        </div>
    </div>
  );
}
