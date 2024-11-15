import React from "react";

export default function ProjectTechList({ technologies, ltr = true }) {
  return (
    <div
      className={
        "flex flex-wrap gap-4 justify-center" +
        (ltr ? " xs:justify-start" : " xs:justify-end")
      }
    >
      {technologies.map((tech) => {
        return (
          <div className="size-8" key={tech.id}>
            <img src={tech.imgUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
}
