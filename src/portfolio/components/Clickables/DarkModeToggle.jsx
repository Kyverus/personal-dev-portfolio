import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useDarkContext } from "../../../_contexts/DarkContextProvider";

export function DarkModeToggle({ logoClass, buttonClass }) {
  const { dark, darkModeHandler } = useDarkContext();

  return (
    <button
      className={buttonClass ? " " + buttonClass : ""}
      onClick={() => darkModeHandler()}
    >
      {dark ? (
        <SunIcon
          className={
            "hover:text-base-green active:text-base-cyan" +
            (logoClass ? " " + logoClass : "")
          }
        />
      ) : (
        <MoonIcon
          className={
            "hover:text-base-green active:text-base-cyan" +
            (logoClass ? " " + logoClass : "")
          }
        />
      )}
    </button>
  );
}
