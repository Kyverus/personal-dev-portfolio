import React from "react";
import { useExperienceContext } from "../../../_contexts/ExperienceContextProvider";
import { Link } from "react-router-dom";

export default function AdminExperienceItem({ experience }) {
  const { deleteExperience } = useExperienceContext();

  async function handleExperienceDelete(experienceId) {
    const res = await deleteExperience(experienceId);
  }

  return (
    <div className="flex justify-between bg-dark-tertiary rounded-md p-5 ">
      <div className="flex space-x-5">
        <div className="space-y-4">
          <div>
            <div className="text-light-green font-bold">
              {experience.startDate.slice(0, 10) +
                " - " +
                (experience.endDate
                  ? experience.endDate.slice(0, 10)
                  : "Present")}
            </div>
            <div>Job Title: {experience.jobTitle}</div>
            <div>Company Name: {experience.companyName}</div>
            <div>Description: {experience.description}</div>
            <div>Technologies: {experience.technologies}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Link
          to={`/admin/experience/update/${experience._id}`}
          className="bg-blue-500 px-5"
        >
          UPDATE
        </Link>
        <button
          onClick={() => handleExperienceDelete(experience._id)}
          className="bg-red-500 px-5"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
