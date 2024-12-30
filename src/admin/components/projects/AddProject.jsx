import React, { useState } from "react";
import { useProjectContext } from "../../../_contexts/ProjectContextProvider";
import { useNavigate } from "react-router-dom";

export default function AddProject() {
  const navigate = useNavigate();
  const { createProject } = useProjectContext();
  const [formDetails, setFormDetails] = useState({
    title: "",
    type: "",
    description: "",
    technologies: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);

  function formChange(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  function projectImageChange(e) {
    setFormDetails({ ...formDetails, image: e.target.files[0] });
  }

  async function handleAddProject(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", formDetails.title);
    formData.append("type", formDetails.type);
    formData.append("description", formDetails.description);
    formData.append("technologies", formDetails.technologies);
    formData.append("siteURL", formDetails.siteURL);
    formData.append("project-image", formDetails.image);

    const res = await createProject(formData);

    if (res.success) {
      navigate("/admin/projects");
    } else {
      console.log(res.errors);
    }
  }
  return (
    <>
      <form encType="multipart/form-data">
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formChange}
            className="text-black "
          />
        </div>
        <div>
          <label htmlFor="type">Type: </label>
          <input
            type="text"
            id="type"
            name="type"
            onChange={formChange}
            className="text-black "
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={formChange}
            className="text-black "
          />
        </div>
        <div>
          <label htmlFor="technologies">Technologies: </label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            onChange={formChange}
            className="text-black "
          />
        </div>
        <div>
          <label htmlFor="siteURL">Site URL: </label>
          <input
            type="text"
            id="siteURL"
            name="siteURL"
            onChange={formChange}
            className="text-black "
          />
        </div>
        <div>
          <label htmlFor="image">Project Image: </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={projectImageChange}
            className="text-black "
          />
        </div>
        <button type="submit" disabled={loading} onClick={handleAddProject}>
          ADD PROJECT
        </button>
      </form>
    </>
  );
}
