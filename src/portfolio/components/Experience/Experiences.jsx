import { useExperienceContext } from "../../../_contexts/ExperienceContextProvider";

export function Experiences() {
  const { experiences } = useExperienceContext();

  return (
    <div
      className="page-section min-h-dvh pt-36 pb-8 space-y-10 text-black dark:text-white"
      id="experience"
    ></div>
  );
}
