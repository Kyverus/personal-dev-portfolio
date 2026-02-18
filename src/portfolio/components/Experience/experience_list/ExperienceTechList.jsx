import React from "react";

export default function ExperienceTechList({ technologies, ltr = true }) {
  return (
    <div
      className={
        "flex flex-wrap gap-4 bg-dark-green/25 dark:bg-light-green/25 p-2 md:rounded-lg" +
        (ltr ? " justify-start" : " justify-end")
      }
    >
      {technologies.map((tech) => {
        return (
          <div className="size-8" key={tech._id}>
            <img src={tech.imgURL} alt="" />
          </div>
        );
      })}
    </div>
  );
}
