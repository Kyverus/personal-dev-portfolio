import ProjectTechList from "./ProjectTechList";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FiLink } from "react-icons/fi";
import { useDarkContext } from "../../../../_contexts/DarkContextProvider";
import { useTechnologyContext } from "../../../../_contexts/TechnologyContextProvider";

export function ProjectListItem({ project, className, index }) {
  const { dark } = useDarkContext();
  const { technologies } = useTechnologyContext();

  const projectTechs = technologies.filter((technology) => {
    const techs = project.technologies;
    return techs.includes(technology.title);
  });

  return (
    <div
      className={
        "block lg:flex px-5 w-full py-2" +
        (className ? " " + className : "") +
        (index % 2 == 0
          ? "  project-left -translate-x-8 self-start "
          : "  project-right translate-x-8 self-end flex-row-reverse")
      }
    >
      <div className="lg:w-1/2 lg:shadow-light-tertiary lg:dark:shadow-base-green lg:shadow-[0_0_5px_1px_rgb(0,0,0,0.3)]">
        <img src={project.imgURL} alt="" />
      </div>

      <div
        className={
          "flex flex-col justify-between self-end mb-5 bg-white/90 dark:bg-dark-secondary/90 lg:w-1/2 lg:h-auto lg:rounded-xl relative z-10 p-5" +
          (index % 2 == 0 ? " lg:-translate-x-8" : " lg:translate-x-8")
        }
      >
        <div className="text-center text-2xl xs:text-3xl font-bold mb-2 text-dark-green dark:text-light-green">
          {project.title}
        </div>
        <div className="py-2">
          <div className="min-h-20 text-sm xs:text-base">
            {project.description}
          </div>
          <div
            className={
              "xs:flex justify-between items-start gap-3" +
              (index % 2 == 0 ? "" : " flex-row-reverse")
            }
          >
            <div className="hidden xs:block">
              <a
                href={project.siteURL}
                target="_blank"
                className="text-base-green flex gap-2 group hover:text-base-cyan font-bold"
              >
                LINK
                <ArrowTopRightOnSquareIcon className="size-6 group-hover:text-base-cyan" />
              </a>
            </div>

            <div className="xs:hidden my-4 text-center flex items-center justify-center">
              <a
                href={project.siteURL}
                target="_blank"
                className="text-base-green hover:text-base-cyan flex gap-1 items-center"
              >
                <FiLink className="size-4" />
                <span>Project Link</span>
              </a>
            </div>

            <ProjectTechList technologies={projectTechs} ltr={index % 2 == 0} />
          </div>
        </div>
      </div>
    </div>
  );
}
