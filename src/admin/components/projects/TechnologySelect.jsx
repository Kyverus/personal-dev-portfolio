import { useState, Children, useEffect } from "react";
import { capitalize } from "../../../_helpers/capitalize";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";

export default function TechnologySelect({
  setTechnologies,
  initialValue = [],
}) {
  const [dropdownToggle, setDrowpdownToggle] = useState(false);
  const { technologies } = useTechnologyContext();

  const [techList, setTechList] = useState(initialValue);

  useEffect(() => {
    techList.forEach((tech) => {
      const tempTech = technologies.find(
        (technology) => technology.title == tech
      );
      const techOption = document.getElementById(`tech-${tempTech._id}`);
      techOption.classList.add("bg-base-cyan");
      techOption.classList.remove("bg-none");
    });
  }, []);

  function closeDropdown() {
    setDrowpdownToggle(false);
  }

  function openDropdown() {
    setDrowpdownToggle(true);
  }

  function toggleTechSelect(technology) {
    const techOption = document.getElementById(`tech-${technology._id}`);
    const tempTechList = [...techList];
    if (techList.includes(technology.title)) {
      const index = techList.indexOf(technology.title);
      tempTechList.splice(index, 1);
      techOption.classList.add("bg-none");
      techOption.classList.remove("bg-base-cyan");
    } else {
      tempTechList.push(technology.title);
      techOption.classList.add("bg-base-cyan");
      techOption.classList.remove("bg-none");
    }
    setTechList(tempTechList);
    setTechnologies(tempTechList.join(","));
  }
  return (
    <div
      className="flex flex-col group"
      onFocus={openDropdown}
      onBlur={closeDropdown}
      tabIndex="0"
    >
      <div className="flex flex-col relative">
        <input
          readOnly
          value={techList}
          className="rounded-md border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green px-2 py-1 border-[1px] h-[38px]"
        ></input>
        <div className="bg-red-200 relative">
          <div
            className={
              "absolute right-0 left-0 p-2 bg-light-green/85" +
              (dropdownToggle ? " " : " hidden")
            }
          >
            {technologies.map((technology) => {
              return (
                <div
                  id={`tech-${technology._id}`}
                  key={technology._id}
                  className="hover:bg-base-green text-dark-primary font-semibold flex items-center space-x-4"
                  onClick={() => toggleTechSelect(technology)}
                >
                  <img
                    src={technology.imgURL}
                    className="size-8 shadow-sm"
                    alt=""
                  />
                  <div>{technology.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
