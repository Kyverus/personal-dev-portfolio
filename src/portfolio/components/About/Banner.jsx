
import { FaFilePdf } from "react-icons/fa6";

export function Banner() {
  const banner_details = {
    title: "Web Developer",
    motto: "Hello, I'm Kirlian Pacibe, A web developer with fundamental knowledge in building simple and functional websites and applications. I have developed several personal and work projects regarding web and desktop applications futher showcased below.", 
  }
  return (
    <div className="rounded-2xl py-6 xs:px-6 space-y-8" id="banner">
      <div className="mt-10 text-4xl xs:text-5xl font-bold text-center xs:text-left text-dark-green dark:text-light-green">
        {banner_details.title}
      </div>
      <div className="text-sm xs:text-base text-dark-secondary dark:text-light-secondary text-justify indent-12 tracking-wider">
        {banner_details.motto}
      </div>
      <div className="flex text-lg font-bold">
        <a
          href="#resume"
          className="flex items-center gap-3 group text-base-green"
        >
          <span className="group-hover:text-base-cyan">
            Check Out My Resume
          </span>
          <FaFilePdf className="size-5 group-hover:text-base-cyan" />
        </a>
      </div>
    </div>
  );
}
