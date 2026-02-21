import { useDarkContext } from "../../../../_contexts/DarkContextProvider";
import { useTechnologyContext } from "../../../../_contexts/TechnologyContextProvider";
import ExperienceTechList from "./ExperienceTechList";

export function ExperienceListItem({ exp, className }) {
  const { dark } = useDarkContext();
  const { technologies } = useTechnologyContext();

  const expTechs = technologies.filter((technology) => {
    const techs = exp.technologies;
    return techs.includes(technology.title);
  });

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const expStartDate = new Date(exp.startDate);
  const expEndDate = new Date(exp.endDate);

  const descriptionList = exp.description.split(/\r\n|\r|\n/);

  return (
    <div className={"w-full py-2 px-5" + (className ? " " + className : "")}>
      <hr className="border-t-2 border-dark-green dark:border-light-green my-5" />
      <div className="md:flex justify-between">
        <div>
          <div className="flex space-x-2">
            <span className="font-bold">{exp.jobTitle}</span>
            <span>|</span>
            <span className="text-dark-green dark:text-light-green">
              {exp.companyName}
            </span>
          </div>
          <div className="flex space-x-2">
            <span>
              {monthNames[expStartDate.getMonth()] +
                " " +
                expStartDate.getFullYear()}
            </span>
            <span>-</span>
            <span>
              {exp.endDate
                ? monthNames[expEndDate.getMonth()] +
                  " " +
                  expEndDate.getFullYear()
                : "Present"}
            </span>
          </div>
        </div>

        <div>
          <ExperienceTechList technologies={expTechs} ltr={true} />
        </div>
      </div>
      <ul className="list-disc list-inside p-2">
        {descriptionList.map((desc, index) => {
          return <li key={`desc-${index}`}>{desc}</li>;
        })}
      </ul>
      <hr className="border-t-2 border-dark-green dark:border-light-green my-5" />
    </div>
  );
}
