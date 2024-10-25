import React from "react";

export default function ProjectTechList({ technologies, ltr = true }) {
  return (
    <div className={"flex gap-4" + (ltr ? " justify-start" : " justify-end")}>
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
