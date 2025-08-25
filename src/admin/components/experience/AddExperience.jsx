import React, { useState } from "react";
import { useExperienceContext } from "../../../_contexts/ExperienceContextProvider";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TechnologySelect from "../TechnologySelect";

export default function AddExperience() {
  const navigate = useNavigate();
  const { createExperience } = useExperienceContext();
  const [formDetails, setFormDetails] = useState({
    jobTitle: "",
    companyName: "",
    description: "",
    technologies: "",
    startDate: null,
    endDate: null,
  });

  const [loading, setLoading] = useState(false);

  function formChange(e) {
    if (e.target.name == "image") {
      setFormDetails({ ...formDetails, image: e.target.files[0] });
    } else {
      setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    }
  }

  function techChange(value) {
    setFormDetails({ ...formDetails, technologies: value });
  }

  async function handleAddExperience(e) {
    e.preventDefault();
    setLoading(true);

    console.log({ ...formDetails });

    const formData = new FormData();
    formData.append("jobTitle", formDetails.jobTitle);
    formData.append("companyName", formDetails.companyName);
    formData.append("description", formDetails.description);
    formData.append("technologies", formDetails.technologies);
    formData.append("startDate", formDetails.startDate);
    formData.append("endDate", formDetails.endDate);

    const res = await createExperience(formData);

    if (res.success) {
      navigate("/admin/projects");
    } else {
      console.log(res.errors);
    }

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
          <input
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
