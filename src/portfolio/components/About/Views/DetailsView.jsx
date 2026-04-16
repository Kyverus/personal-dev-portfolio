import { FaFilePdf } from "react-icons/fa6";
import { BannerView } from "./BannerView";
import { BannerTitle } from "../../Responsive/BannerTitle";

export function DetailsView({ className }) {
  const banner_details = {
    title: "WEB DEVELOPER",
    motto:
      "Hello, I'm Kirlian Pacibe, A web developer with fundamental knowledge in building simple and functional websites and applications. I have developed several personal and work projects regarding web and desktop applications futher showcased below.",
  };
  return (
    <BannerView
      className={"p-6 space-y-6" + (className ? " " + className : "")}
    >
      <div className="space-y-4">
        <BannerTitle className="text-left">{banner_details.title}</BannerTitle>
        <div className="text-base text-dark-secondary dark:text-light-secondary text-justify indent-12 tracking-wide px-4">
          {banner_details.motto}
        </div>
      </div>
      <div className="flex text-md font-bold">
        <a
          href="#resume"
          className="flex items-center gap-3 group text-dark-green dark:text-base-green"
        >
          <span className="group-hover:text-base-cyan">
            Check Out My Resume
          </span>
          <FaFilePdf className="size-5 group-hover:text-base-cyan" />
        </a>
      </div>
    </BannerView>
  );
}
