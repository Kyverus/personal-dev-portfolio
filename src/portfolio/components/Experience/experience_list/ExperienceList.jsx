import { useState } from "react";
import { ExperienceListItem } from "./ExperienceListItem";

export function ExperienceList({ experiences, className }) {
  return (
    <div
      className={
        "xl:w-[1280px] mx-auto flex flex-col overflow-x-hidden space-y-10" +
        (className ? " " + className : "")
      }
      id="experience-list"
    >
      {experiences.map((exp, i) => {
        return <ExperienceListItem exp={exp} key={i} className={""} />;
      })}
    </div>
  );
}
