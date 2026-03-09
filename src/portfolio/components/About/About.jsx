import { Banner } from "./Banner";
import { TechList } from "./TechList";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";
import headerImg from "../../assets/images/header-picture.jpg";

export function About() {
  const { technologies } = useTechnologyContext();
  return (
    <div
      className="page-section min-h-dvh space-y-4 text-dark-primary dark:text-light-primary pt-44 bg-gradient-to-b from-base-cyan to-light-primary dark:from-base-cyan dark:to-dark-primary"
      id="about"
    >
      <div className="xl:container mx-auto xl:px-20 bg-white/40 dark:bg-black/40 rounded-xl">
        <div className="lg:flex py-10 px-5 xs:px-10">
          <div className="lg:w-2/3">
            <Banner />
            <div className="rounded-2xl py-6 xs:px-6 space-y-8">
              <TechList technologies={technologies} />
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center animate-updown">
            <img
              className="h-[450px] object-scale-down rounded-full dark:brightness-[0.9]"
              src={headerImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
