import { useTechnologyContext } from "../../../../_contexts/TechnologyContextProvider";
import { TechList } from "../TechList";
import { BannerView } from "./BannerView";

export function SkillsView({ className }) {
  const { technologies } = useTechnologyContext();
  return (
    <>
      {technologies.length > 0 && (
        <BannerView className={className ? " " + className : ""}>
          <div className="space-y-8">
            <TechList technologies={technologies} />
          </div>
        </BannerView>
      )}
    </>
  );
}
