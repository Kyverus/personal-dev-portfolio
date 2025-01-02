import { useState, Children } from "react";
import { capitalize } from "../../_helpers/capitalize";

export default function CustomDropdown({ value, children }) {
  const [dropdownToggle, setDrowpdownToggle] = useState(false);

  function closeDropdown() {
    setDrowpdownToggle(false);
  }

  function openDropdown() {
    setDrowpdownToggle(true);
  }

  return (
    <div
      className="flex flex-col group"
      onFocus={openDropdown}
      onBlur={closeDropdown}
      tabIndex="0"
    >
      <div className="flex flex-col relative">
        <input
          readOnly
          value={capitalize(value)}
          className="rounded-md border-light-primary hover:border-base-green  caret-light-green bg-transparent focus:outline-light-green px-2 py-1 border-[1px] h-[38px]"
        ></input>
        <div className="bg-red-200 relative">
          <div
            className={
              "absolute right-0 left-0 p-2 bg-light-green/85" +
              (dropdownToggle ? " " : " hidden")
            }
          >
            {Children.map(children, (child) => (
              <div
                className="hover:bg-base-green text-dark-primary font-semibold"
                onClick={closeDropdown}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
