import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProjectContext } from "../../../_contexts/ProjectContextProvider";
import TechnologySelect from "../TechnologySelect";
import Loading from "../Loading";

export default function UpdateExperience() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchProject, updateProject } = useProjectContext();
  const [project, setProject] = useState(null);
  const [formDetails, setFormDetails] = useState({});

  const [loading, setLoading] = useState(false);
  const [loadScreen, setLoadScreen] = useState(true);

  useEffect(() => {
    setLoadScreen(true);
    async function getProject() {
      const res = await fetchProject(id);
      if (res.success) {
        setProject(res.data);
      } else {
        console.log(res.errors);
        navigate("/admin/projects");
      }
      setLoadScreen(false);
    }

    getProject();
  }, []);

  function formChange(e) {
    if (e.target.name == "image") {
      setFormDetails({ ...formDetails, image: e.target.files[0] });
    } else {
      if (e.target.value != project[e.target.name]) {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
      } else {
        const temp = { ...formDetails };
        delete temp[e.target.name];
        setFormDetails(temp);
      }
    }
  }

  function techChange(value) {
    if (value != project.technologies) {
      setFormDetails({ ...formDetails, technologies: value });
    } else {
      const temp = { ...formDetails };
      delete temp.technologies;
      setFormDetails(temp);
    }
  }

  async function handleUpdateProject(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    if (formDetails.title) {
      formData.append("title", formDetails.title);
    }
    if (formDetails.tags) {
      formData.append("tags", formDetails.tags);
    }
    if (formDetails.description) {
      formData.append("description", formDetails.description);
    }
    if (formDetails.complexity) {
      formData.append("complexity", formDetails.complexity);
    }
    if (formDetails.technologies) {
      formData.append("technologies", formDetails.technologies);
    }
    if (formDetails.siteURL) {
      formData.append("siteURL", formDetails.siteURL);
    }
    if (formDetails.image != null) {
      formData.append("project-image", formDetails.image);
    }

    const res = await updateProject(formData, project._id);

    if (res.success) {
      navigate("/admin/projects");
    } else {
      console.log(res.errors);
    }

    setLoading(false);
  }

  if (loadScreen) {
    return <Loading />;
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
            value={formDetails.title ? formDetails.title : project.title}
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
            value={formDetails.tags ? formDetails.tags : project.tags}
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
            value={
              formDetails.description
                ? formDetails.description
                : project.description
            }
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
            value={
              formDetails.complexity
                ? formDetails.complexity
                : project.complexity
            }
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-light-green" htmlFor="technologies">
            Technologies:
          </label>
          <TechnologySelect
            setTechnologies={techChange}
            initialValue={project.technologies.split(",")}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-light-green" htmlFor="siteURL">
            Site URL:
          </label>
          <input
            type="text"
            id="siteURL"
            name="siteURL"
            value={formDetails.siteURL ? formDetails.siteURL : project.siteURL}
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
              <img
                src={
                  formDetails.image
                    ? URL.createObjectURL(formDetails.image)
                    : project.imgURL
                }
                alt=""
              />
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
            disabled={loading || Object.keys(formDetails).length == 0}
            onClick={handleUpdateProject}
            className="bg-dark-green hover:bg-base-green mt-4 w-[400px] h-10 disabled:bg-gray-500"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
}
