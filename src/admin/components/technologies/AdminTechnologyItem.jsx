import React from "react";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";
import { capitalize } from "../../../_helpers/capitalize";

export default function AdminTechnologyItem({ technology }) {
  const { deleteTechnology } = useTechnologyContext();

  async function handleTechnologyDelete(techId) {
    const res = await deleteTechnology(techId);

    if (res.success) {
      console.log("Technology deleted successfully");
    } else {
      console.log(res.errors);
    }
  }

  return (
    <div className="flex items-center space-x-2 bg-light-green/70">
      <div>
        <img src={technology.imgURL} className="size-20" alt="" />
      </div>
      <div>
        <div>{technology.title}</div>
        <div>{technology.category}</div>
        <div>{capitalize(technology.proficiency)}</div>
        <button
          onClick={() => handleTechnologyDelete(technology._id)}
          className="bg-red-500 px-5"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
