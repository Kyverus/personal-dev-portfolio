import { FaLinkedin } from "react-icons/fa6";

export function LinkedinLink({ logoClass, textClass, text = "" }) {
  return (
    <a
      className="flex items-center mx-2 gap-2"
      href="https://www.linkedin.com/in/kirlianpacibe12"
      target="_blank"
    >
      <FaLinkedin
        className={
          "hover:text-base-green active:text-base-cyan" +
          (logoClass ? " " + logoClass : "")
        }
      ></FaLinkedin>
      <span
        className={
          text != ""
            ? "text-sm text-dark-green dark:text-light-green" +
              (textClass ? " " + textClass : "")
            : "hidden"
        }
      >
        {text}
      </span>
    </a>
  );
}
