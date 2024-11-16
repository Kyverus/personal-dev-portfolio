import headerImg from "../../assets/images/header-picture.jpg";
import { FaFilePdf } from "react-icons/fa6";

export function Banner() {
  return (
    <div id="banner" className="xl:container mx-auto xl:px-28">
      <div className="lg:flex py-10 px-5 xs:px-10">
        <div className="lg:w-2/3">
          <div className="rounded-2xl py-6 xs:px-6 space-y-8">
            <div className="mt-10 text-5xl font-bold text-center xs:text-left text-dark-green dark:text-light-green">
              Full-Stack Web Developer
            </div>
            <div className="text-sm xs:text-base text- text-justify indent-12 tracking-wider">
              Hello, I'm Kirlian Pacibe, I have fundamental knowledge in
              building simple and functional websites and applications. I have
              made personal projects regarding web and desktop applications
              futher showcased below.
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
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <img
            className="animate-updown size-[350px] object-scale-down rounded-3xl"
            src={headerImg}
          />
        </div>
      </div>
    </div>
  );
}
