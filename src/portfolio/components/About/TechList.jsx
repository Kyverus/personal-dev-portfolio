import { useState } from "react";
import { TechItem } from "./TechItem";
import TechFilter from "./TechFilter";

export function TechList({ technologies, imgClass, labelHidden }) {
  const [tag, setTag] = useState("main");

  const mainTechnologies = technologies.filter((technology) => {
    const tags = technology.tags;
    return tags.includes(tag);
  });
  return (
    <div
      id="technology-list"
      className="xl:container mx-auto rounded-xl py-4 space-y-4"
    >
      <div className="text-3xl font-bold text-center text-dark-green dark:text-light-green">
        {tag == "main"
          ? "MAIN TECHNOLOGIES"
          : `TECHNOLOGIES (${tag.toUpperCase()})`}
      </div>
      <div className="pb-4">
        <TechFilter tag={tag} setTag={setTag} />
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {mainTechnologies.map((technology) => {
          return (
            <TechItem
              key={technology._id}
              techName={technology.title}
              techSrc={technology.imgURL}
              labelHidden={labelHidden}
            />
          );
        })}
      </div>
    </div>
  );
}
