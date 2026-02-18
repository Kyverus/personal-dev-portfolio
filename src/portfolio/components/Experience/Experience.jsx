import { useExperienceContext } from "../../../_contexts/ExperienceContextProvider";
import { ExperienceList } from "./experience_list/ExperienceList";

export function Experience() {
  const { experiences } = useExperienceContext();

  const visible_experiences = experiences.filter((experience) => {
    const tags = experience.tags;
    return !tags.includes("hidden");
  });

  const sortedExperiences = visible_experiences.sort(function (a, b) {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  return (
    visible_experiences.length > 0 && (
      <div
        className="page-section min-h-dvh pt-36 pb-8 space-y-10 text-black dark:text-white"
        id="experience"
      >
        <div className="text-2xl xs:text-3xl font-bold text-center px-2 text-dark-green dark:text-light-green">
          EXPERIENCE
        </div>
        <ExperienceList experiences={sortedExperiences} />
      </div>
    )
  );
}
