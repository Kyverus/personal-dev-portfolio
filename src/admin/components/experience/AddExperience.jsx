import React, { useState } from "react";
import { useExperienceContext } from "../../../_contexts/ExperienceContextProvider";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TechnologySelect from "../TechnologySelect";
import toast from "react-hot-toast";

export default function AddExperience() {
  const navigate = useNavigate();
  const { createExperience } = useExperienceContext();
  const [formDetails, setFormDetails] = useState({
    jobTitle: "",
    companyName: "",
    description: "",
    technologies: "",
    tags: "",
    startDate: null,
    endDate: null,
  });

  const [loading, setLoading] = useState(false);

  function formChange(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  function techChange(value) {
    setFormDetails({ ...formDetails, technologies: value });
  }

  async function handleAddExperience(e) {
    e.preventDefault();
    setLoading(true);

    const res = await createExperience(formDetails);
    if (res.success) navigate("/admin/experience");
    setLoading(false);
  }
  return (
    <div className="xl:w-[1280px] mx-auto rounded-xl p-4">
      <form
        encType="multipart/form-data"
        className="w-full text-xl flex flex-col space-y-10"
      >
        <div className="flex flex-col space-y-3">
          <label className="text-light-green" htmlFor="jobTitle">
            Job Title:
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-light-green" htmlFor="companyName">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-light-green" htmlFor="description">
            Description:
          </label>
          <textarea
            rows="3"
            type="text"
            id="description"
            name="description"
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-light-green" htmlFor="technologies">
            Technologies:
          </label>
          <TechnologySelect setTechnologies={techChange} />
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className="text-light-green flex items-center gap-2"
            htmlFor="startDate"
          >
            Start Date:
            <FaCalendarAlt />
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-light-green" htmlFor="tags">
            Tags:
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className="text-light-green flex items-center gap-2"
            htmlFor="startDate"
          >
            End Date:
            <FaCalendarAlt />
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={
              loading ||
              !(
                formDetails.jobTitle != "" &&
                formDetails.companyName != "" &&
                formDetails.description != "" &&
                formDetails.technologies != "" &&
                formDetails.tags != "" &&
                formDetails.startDate != ""
              )
            }
            onClick={handleAddExperience}
            className="bg-dark-green hover:bg-base-green mt-4 w-[400px] h-10 disabled:bg-gray-500"
          >
            ADD EXPERIENCE
          </button>
        </div>
      </form>
    </div>
  );
}
