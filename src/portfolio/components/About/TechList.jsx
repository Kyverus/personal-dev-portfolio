import { useState } from "react";
import { TechItem } from "./TechItem";
import TechFilter from "./TechFilter";
import { BannerTitle } from "../Responsive/BannerTitle";

export function TechList({ technologies, imgClass, labelHidden }) {
  const [tag, setTag] = useState("main");

  const mainTechnologies = technologies.filter((technology) => {
    const tags = technology.tags;
    return tags.includes(tag);
  });
  return (
    <div
      id="technology-list"
      className={`xl:container mx-auto rounded-xl py-4 px-4 space-y-4 ${
        technologies.length === 0 ? "hidden" : ""
      }`}
    >
      <BannerTitle className="text-left">
        {tag == "main"
          ? "MAIN TECHNOLOGIES"
          : `TECHNOLOGIES (${tag.toUpperCase()})`}
      </BannerTitle>
      <div>
        <TechFilter tag={tag} setTag={setTag} />
      </div>
      <div className="flex flex-row flex-wrap justify-start">
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
