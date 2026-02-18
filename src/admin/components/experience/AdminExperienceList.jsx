import React from "react";
import { useExperienceContext } from "../../../_contexts/ExperienceContextProvider";
import AdminExperienceItem from "./AdminExperienceItem";

export default function AdminExperienceList() {
  const { experiences } = useExperienceContext();
  const sortedExperiences = experiences.sort(function (a, b) {
    return new Date(b.startDate) - new Date(a.startDate);
  });
  return (
    <div className="xl:w-[1280px] mx-auto flex flex-col overflow-x-hidden space-y-10 my-5">
      {sortedExperiences &&
        sortedExperiences.map((experience) => {
          return (
            <AdminExperienceItem key={experience._id} experience={experience} />
          );
        })}
    </div>
  );
}
