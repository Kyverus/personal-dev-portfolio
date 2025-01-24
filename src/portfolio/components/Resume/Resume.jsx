import React from "react";
import { IoIosBrowsers } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import resumeFile from "../../assets/data/PACIBE-KIRLIAN-RESUME.pdf";

export function Resume() {
  return (
    <div
      className="page-section pt-36 pb-8 text-dark-primary dark:text-light-primary"
      id="resume"
    >
      <div className="text-2xl xs:text-3xl font-bold text-center px-2 py-8 text-dark-green dark:text-light-green">
        DOWNLOAD RESUME
      </div>

      <div className="xl:w-[1280px] mx-auto rounded-xl p-4 space-y-10">
        <div className="indent-10 px-10 text-sm xs:text-base">
          A Web Developer seeking an entry-level position in a company whose
          values and goals align with my own values and skill set. I wish to be
          a part of a growing organization to achieve the goals of the company
          while expanding my skills and knowledge.
        </div>

        <div className="lg:flex justify-center items-center gap-4">
          <div className="font-bold text-md xs:text-lg text-center lg:text-left my-4">
            PACIBE-KIRLIAN-RESUME.PDF
          </div>
          <div className="xs:flex justify-center items-center gap-4 text-sm xs:text-base">
            <a
              href={resumeFile}
              target="_blank"
              className="flex justify-center items-center gap-3 group px-4 py-2 my-4 border-4 rounded-xl border-light-green dark:border-dark-green hover:border-base-green dark:hover:border-base-green active:border-base-cyan dark:active:border-base-cyan"
            >
              <span>OPEN IN A NEW TAB</span>
              <IoIosBrowsers className="size-8 text-light-green dark:text-dark-green group-hover:text-base-green group-active:text-base-cyan " />
            </a>
            <a
              href={resumeFile}
              download={true}
              className="flex justify-center items-center gap-3 group px-4 py-2 my-4 border-4 rounded-xl border-light-green dark:border-dark-green hover:border-base-green dark:hover:border-base-green active:border-base-cyan dark:active:border-base-cyan"
            >
              <span>DOWNLOAD</span>
              <FaDownload className="size-7 text-light-green dark:text-dark-green group-hover:text-base-green group-active:text-base-cyan" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
