import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTechnologyContext } from "../../../_contexts/TechnologyContextProvider";
import CustomDropdown from "../CustomDropdown";
import Loading from "../Loading";

export default function UpdateTechnology() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchTechnology, updateTechnology } = useTechnologyContext();
  const [technology, setTechnology] = useState(null);
  const [formDetails, setFormDetails] = useState({});

  const [loading, setLoading] = useState(false);
  const [loadScreen, setLoadScreen] = useState(true);

  useEffect(() => {
    setLoadScreen(true);
    async function getTech() {
      const res = await fetchTechnology(id);
      if (res.success) {
        setTechnology(res.data);
      } else {
        navigate("/admin/technologies");
      }
      setLoadScreen(false);
    }

    getTech();
  }, []);

  function formChange(e) {
    if (e.target.name == "image") {
      setFormDetails({ ...formDetails, image: e.target.files[0] });
    } else {
      if (e.target.value != technology[e.target.name]) {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
      } else {
        const temp = { ...formDetails };
        delete temp[e.target.name];
        setFormDetails(temp);
      }
    }
  }

  function selectProficiency(value) {
    if (value != technology.proficiency) {
      setFormDetails({ ...formDetails, proficiency: value });
    } else {
      const temp = { ...formDetails };
      delete temp.proficiency;
      setFormDetails(temp);
    }
  }

  async function handleUpdateTechnology(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    if (formDetails.title) {
      formData.append("title", formDetails.title);
    }
    if (formDetails.tags) {
      formData.append("tags", formDetails.tags);
    }
    if (formDetails.proficiency) {
      formData.append("proficiency", formDetails.proficiency);
    }
    if (formDetails.image != null) {
      formData.append("tech-image", formDetails.image);
    }

    const res = await updateTechnology(formData, technology._id);

    if (res.success) navigate("/admin/technologies");

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
        <div className="flex flex-col space-y-3 text-light-primary">
          <label className="text-light-green" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formDetails.title ? formDetails.title : technology.title}
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
            value={formDetails.tags ? formDetails.tags : technology.tags}
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-light-green" htmlFor="proficiency">
            Proficiency:
          </label>
          <CustomDropdown
            value={
              formDetails.proficiency
                ? formDetails.proficiency
                : technology.proficiency
            }
          >
            <div onClick={() => selectProficiency("beginner")}>Beginner</div>
            <div onClick={() => selectProficiency("intermediate")}>
              Intermediate
            </div>
            <div onClick={() => selectProficiency("proficient")}>
              Proficient
            </div>
          </CustomDropdown>
        </div>
        <div className="flex flex-col space-y-5">
          <label
            className="text-light-green pointer-events-none"
            htmlFor="image"
          >
            Tech Image:
          </label>
          <div className="w-[200px]">
            <img
              src={
                formDetails.image
                  ? URL.createObjectURL(formDetails.image)
                  : technology.imgURL
              }
              alt=""
            />
          </div>
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
            disabled={loading || Object.keys(formDetails).length == 0}
            onClick={handleUpdateTechnology}
            className="bg-dark-green hover:bg-base-green mt-4 w-[400px] h-10 disabled:bg-gray-500"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
}
