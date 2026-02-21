import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";
import CustomDropdown from "../CustomDropdown";

export default function AddTechnology() {
  const navigate = useNavigate();
  const { createTechnology } = useTechnologyContext();
  const [formDetails, setFormDetails] = useState({
    title: "",
    tags: "",
    proficiency: "beginner",
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

  function selectProficiency(value) {
    setFormDetails({ ...formDetails, proficiency: value });
  }

  async function handleAddTechnology(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", formDetails.title);
    formData.append("tags", formDetails.tags);
    formData.append("proficiency", formDetails.proficiency);
    formData.append("tech-image", formDetails.image);

    const res = await createTechnology(formData);
    if (res.success) navigate("/admin/technologies");

    setLoading(false);
  }
  return (
    <div className="xl:w-[1280px] mx-auto rounded-xl p-4">
      <form
        encType="multipart/form-data"
        className="w-full text-xl flex flex-col space-y-10"
      >
        <div className="flex flex-col space-y-3 text-light-primary">
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
          <label className="text-light-green" htmlFor="proficiency">
            Proficiency:
          </label>
          <CustomDropdown value={formDetails.proficiency}>
            <div onClick={() => selectProficiency("beginner")}>Beginner</div>
            <div onClick={() => selectProficiency("intermediate")}>
              Intermediate
            </div>
            <div onClick={() => selectProficiency("proficient")}>
              Proficient
            </div>
          </CustomDropdown>
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className="text-light-green pointer-events-none"
            htmlFor="image"
          >
            Tech Image:
          </label>
          {formDetails.image && (
            <div className="w-[200px]">
              <img src={URL.createObjectURL(formDetails.image)} alt="" />
            </div>
          )}
          <div>
            <input
              type="file"
              id="image"
              name="image"
              onChange={formChange}
              className="text-light-green file:mr-4 file:p-1 file:bg-dark-green file:border-none file:hover:bg-base-green file:text-light-primary file:rounded-md file:pointer-events-auto pointer-events-none"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={
              loading ||
              !(
                formDetails.title != "" &&
                formDetails.tags != "" &&
                formDetails.image != null
              )
            }
            onClick={handleAddTechnology}
            className="bg-dark-green hover:bg-base-green mt-4 w-[400px] h-10 disabled:bg-gray-500"
          >
            ADD TECHNOLOGY
          </button>
        </div>
      </form>
    </div>
  );
}
