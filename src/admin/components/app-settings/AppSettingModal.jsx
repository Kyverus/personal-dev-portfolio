import React, { useEffect, useState } from "react";

export default function AddAppSettingModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    settingName: "",
    settingValue: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormDetails(initialData); // edit mode
    } else {
      setFormDetails({ settingName: "", settingValue: "" }); // create mode
    }
  }, [initialData]);

  if (!isOpen) return null;

  function formChange(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(formDetails);
    setFormDetails({
      settingName: "",
      settingValue: "",
    });
    onClose();
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg w-96 p-6 z-10">
        <h2 className="text-xl font-bold mb-4 text-center">Add App Setting</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              className="block mb-1 font-medium text-light-green"
              htmlFor="settingName"
            >
              Name:
            </label>
            <input
              type="text"
              id="settingName"
              name="settingName"
              value={formDetails.settingName}
              className="w-full rounded-md px-3 py-2 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
              onChange={formChange}
              required
            />
          </div>

          <div>
            <label
              className="block mb-1 font-medium text-light-green"
              htmlFor="settingValue"
            >
              Value
            </label>
            <input
              type="text"
              id="settingValue"
              name="settingValue"
              value={formDetails.settingValue}
              className="w-full rounded-md px-3 py-2 border-[1px] border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green"
              onChange={formChange}
              required
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-400 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-dark-green hover:bg-base-green disabled:bg-gray-500"
              disabled={
                loading ||
                !(
                  formDetails.settingName != "" &&
                  formDetails.settingValue != ""
                )
              }
            >
              {initialData ? "Update Changes" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
