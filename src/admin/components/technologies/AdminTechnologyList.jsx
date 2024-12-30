import React from "react";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";
import AdminTechnologyItem from "./AdminTechnologyItem";

export default function AdminTechnologyList() {
  const { technologies } = useTechnologyContext();
  console.log(technologies);
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {technologies &&
          technologies.map((technology) => {
            return (
              <AdminTechnologyItem
                key={technology._id}
                technology={technology}
              />
            );
          })}
      </div>
    </>
  );
}
