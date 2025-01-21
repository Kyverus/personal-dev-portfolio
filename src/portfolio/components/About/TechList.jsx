import { TechItem } from "./TechItem";

export function TechList({ technologies, imgClass, labelHidden }) {
  const mainTechnologies = technologies.filter((technology) => {
    const tags = technology.tags;
    return tags.includes("main");
  });
  return (
    <div
      id="technology-list"
      className="xl:container mx-auto rounded-xl py-4 space-y-4"
    >
      <div className="text-3xl font-bold text-center text-dark-green dark:text-light-green">
        MAIN TECHNOLOGIES
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
