import { FaGithub } from "react-icons/fa6";

export function GithubLink({ logoClass, textClass, text = "" }) {
  return (
    <a
      className="flex items-center mx-2 gap-2"
      href="https://github.com/kyverus"
      target="_blank"
    >
      <FaGithub
        className={
          "hover:text-base-green active:text-base-cyan" +
          (logoClass ? " " + logoClass : "")
        }
      ></FaGithub>
      <span
        className={
          "text-sm text-dark-green dark:text-light-green" +
          (textClass ? " " + textClass : "")
        }
      >
        {text}
      </span>
    </a>
  );
}
