import React, { useState } from "react";
import { useProjectContext } from "../../../_contexts/ProjectContextProvider";
import { useNavigate } from "react-router-dom";
import TechnologySelect from "./TechnologySelect";

export default function AddProject() {
  const navigate = useNavigate();
  const { createProject } = useProjectContext();
  const [formDetails, setFormDetails] = useState({
    title: "",
    type: "",
    description: "",
    complexity: 1,
    technologies: "",
    siteURL: "",
    image: null,
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

  async function handleAddProject(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", formDetails.title);
    formData.append("type", formDetails.type);
    formData.append("description", formDetails.description);
    formData.append("complexity", formDetails.complexity);
    formData.append("technologies", formDetails.technologies);
    formData.append("siteURL", formDetails.siteURL);
    formData.append("project-image", formDetails.image);

    const res = await createProject(formData);

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
          <label className="text-light-green" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-light-green" htmlFor="type">
            Type:
          </label>
          <input
            type="text"
            id="type"
            name="type"
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
          <label className="text-light-green" htmlFor="complexity">
            Complexity:
          </label>
          <input
            type="number"
            min="1"
            max="10"
            id="complexity"
            name="complexity"
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
          <label className="text-light-green" htmlFor="siteURL">
            Site URL:
          </label>
          <input
            type="text"
            id="siteURL"
            name="siteURL"
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className="text-light-green pointer-events-none"
            htmlFor="image"
          >
            Project Image:
          </label>
          {formDetails.image && (
            <div className="w-[200px]">
              <img src={URL.createObjectURL(formDetails.image)} alt="" />
            </div>
          )}
          <input
            type="file"
            id="image"
            name="image"
            onChange={formChange}
            className="text-light-green file:mr-4 file:p-1 file:bg-dark-green file:border-none file:hover:bg-base-green file:text-light-primary file:rounded-md file:pointer-events-auto pointer-events-none"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={
              loading ||
              !(
                formDetails.title != "" &&
                formDetails.type != "" &&
                formDetails.description != "" &&
                formDetails.complexity != "" &&
                formDetails.technologies != "" &&
                formDetails.siteURL != "" &&
                formDetails.image != null
              )
            }
            onClick={handleAddProject}
            className="bg-dark-green hover:bg-base-green mt-4 w-[400px] h-10 disabled:bg-gray-500"
          >
            ADD PROJECT
          </button>
        </div>
      </form>
    </div>
  );
}
