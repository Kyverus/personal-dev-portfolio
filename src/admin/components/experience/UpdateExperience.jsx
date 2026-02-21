import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useExperienceContext } from "../../../_contexts/ExperienceContextProvider";
import { FaCalendarAlt } from "react-icons/fa";
import TechnologySelect from "../TechnologySelect";
import Loading from "../Loading";

export default function UpdateExperience() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchExperience, updateExperience } = useExperienceContext();
  const [experience, setExperience] = useState(null);
  const [formDetails, setFormDetails] = useState({});

  const [loading, setLoading] = useState(false);
  const [loadScreen, setLoadScreen] = useState(true);

  useEffect(() => {
    setLoadScreen(true);
    async function getExperience() {
      const res = await fetchExperience(id);
      if (res.success) {
        setExperience(res.data);
      } else {
        navigate("/admin/experience");
      }
      setLoadScreen(false);
    }

    getExperience();
  }, []);

  function formChange(e) {
    if (e.target.value != experience[e.target.name]) {
      setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    } else {
      const temp = { ...formDetails };
      delete temp[e.target.name];
      setFormDetails(temp);
    }
  }

  function techChange(value) {
    if (value != experience.technologies) {
      setFormDetails({ ...formDetails, technologies: value });
    } else {
      const temp = { ...formDetails };
      delete temp.technologies;
      setFormDetails(temp);
    }
  }

  async function handleUpdateExperience(e) {
    e.preventDefault();
    setLoading(true);

    const res = await updateExperience(formDetails, experience._id);
    if (res.success) navigate("/admin/experience");

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
          <label className="text-light-green" htmlFor="jobTitle">
            Job Title:
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={
              formDetails.jobTitle ? formDetails.jobTitle : experience.jobTitle
            }
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-light-green" htmlFor="tags">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={
              formDetails.companyName
                ? formDetails.companyName
                : experience.companyName
            }
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className="text-light-green whitespace-pre-wrap"
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            rows="3"
            type="text"
            id="description"
            name="description"
            value={
              formDetails.description
                ? formDetails.description
                : experience.description
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
            initialValue={experience.technologies.split(",")}
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
            value={formDetails.tags ? formDetails.tags : experience.tags}
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className="text-light-green flex items-center gap-2"
            htmlFor="siteURL"
          >
            Start Date:
            <FaCalendarAlt />
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={
              formDetails.startDate
                ? formDetails.startDate.slice(0, 10)
                : experience.startDate
                  ? experience.startDate.slice(0, 10)
                  : ""
            }
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label
            className="text-light-green flex items-center gap-2"
            htmlFor="siteURL"
          >
            End Date:
            <FaCalendarAlt />
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={
              formDetails.endDate
                ? formDetails.endDate.slice(0, 10)
                : experience.endDate
                  ? experience.endDate.slice(0, 10)
                  : ""
            }
            onChange={formChange}
            className="rounded-md px-2 py-1 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={loading || Object.keys(formDetails).length == 0}
            onClick={handleUpdateExperience}
            className="bg-dark-green hover:bg-base-green mt-4 w-[400px] h-10 disabled:bg-gray-500"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
}
