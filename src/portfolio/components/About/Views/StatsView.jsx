import { FaBriefcase, FaFilePdf } from "react-icons/fa6";
import { BannerView } from "./BannerView";
import { BannerTitle } from "../../Responsive/BannerTitle";

export function StatsView({ className }) {
  return (
    <BannerView
      className={"p-4 space-y-4" + (className ? " " + className : "")}
    >
      <BannerTitle className="text-left">STATS</BannerTitle>
      <div className="flex flex-col flex-1">
        <div className="flex">
          <div className="w-40 font-bold xl:text-left text-dark-green dark:text-light-green">
            Work Projects:
          </div>
          <div className="text-sm xs:text-base text-dark-secondary dark:text-light-secondary text-justify indent-12 tracking-wider">
            02
          </div>
        </div>
        <div className="flex">
          <div className="w-40 font-bold xl:text-left text-dark-green dark:text-light-green">
            Personal Projects:
          </div>
          <div className="text-sm xs:text-base text-dark-secondary dark:text-light-secondary text-justify indent-12 tracking-wider">
            05
          </div>
        </div>
        <div className="flex">
          <div className="w-40 font-bold xl:text-left text-dark-green dark:text-light-green">
            Years of Experience:
          </div>
          <div className="text-sm xs:text-base text-dark-secondary dark:text-light-secondary text-justify indent-12 tracking-wider">
            01
          </div>
        </div>
      </div>
      <div className="flex text-md font-bold">
        <a
          href="#experience"
          className="flex items-center gap-3 group text-dark-green dark:text-base-green"
        >
          <span className="group-hover:text-base-cyan">Career Timeline</span>
          <FaBriefcase className="size-5 group-hover:text-base-cyan" />
        </a>
      </div>
    </BannerView>
  );
}
