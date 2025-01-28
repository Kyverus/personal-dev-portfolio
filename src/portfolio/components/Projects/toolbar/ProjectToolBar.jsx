import ProjectSearchBar from "./ProjectSearchBar";
import { MdGridView, MdListAlt } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { PiDotsThreeCircle } from "react-icons/pi";

export default function ProjectToolBar({
  view,
  tag,
  setView,
  setSearch,
  setTag,
}) {
  return (
    <div className="px-2">
      <div className="container mx-auto xl:w-[800px] px-4 py-2 flex space-x-2 rounded-3xl bg-light-green dark:bg-dark-secondary">
        <ProjectSearchBar setSearch={setSearch} />
        <div className="flex items-center justify-center">
          <div
            className={
              "w-7 flex justify-center group" +
              (view == "grid" ? "  inline-block" : " hidden")
            }
          >
            <MdListAlt
              title="List View"
              className={
                "dark:text-light-green group-hover:text-base-cyan size-7"
              }
              onClick={() => setView("list")}
            />
          </div>

          <div
            className={
              "w-7 flex justify-center group" +
              (view == "list" ? "  inline-block" : " hidden")
            }
          >
            <MdGridView
              title="Grid View"
              className={
                "dark:text-light-green group-hover:text-base-cyan size-7"
              }
              onClick={() => setView("grid")}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className={
              "w-7 flex justify-center group" +
              (tag == "" ? "  inline-block" : " hidden")
            }
          >
            <FaRegStar
              title="Main Projects"
              className={
                "dark:text-light-green group-hover:text-base-cyan size-7"
              }
              onClick={() => setTag("main")}
            />
          </div>

          <div
            className={
              "w-7 flex justify-center group" +
              (tag == "main" ? "  inline-block" : " hidden")
            }
          >
            <PiDotsThreeCircle
              title="Extra Projects"
              className={
                "dark:text-light-green group-hover:text-base-cyan size-7"
              }
              onClick={() => setTag("")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
