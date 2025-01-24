import React, { useState } from "react";
import ProjectSearchBar from "./ProjectSearchBar";
import { MdGridView, MdListAlt } from "react-icons/md";

export default function ProjectToolBar({ setView, view, setSearch }) {
  return (
    <div className="px-2">
      <div className="container mx-auto xl:w-[800px] px-4 py-3 flex space-x-2 rounded-3xl bg-light-green dark:bg-dark-secondary">
        <ProjectSearchBar setSearch={setSearch} />
        <div className="flex space-x-1 items-center justify-center">
          <div
            className={
              view == "grid" ? "  inline-block" : " hidden xs:inline-block"
            }
          >
            <MdListAlt
              className={
                "size-7" +
                (view == "list"
                  ? " text-base-cyan size-8"
                  : " dark:text-light-green")
              }
              onClick={() => setView("list")}
            />
          </div>

          <div
            className={
              view == "list" ? "  inline-block" : " hidden xs:inline-block"
            }
          >
            <MdGridView
              className={
                "size-7" +
                (view == "grid"
                  ? " text-base-cyan size-8"
                  : " dark:text-light-green")
              }
              onClick={() => setView("grid")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
