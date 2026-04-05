import headerImg from "../../../assets/images/header-picture.jpg";
import { BannerView } from "./BannerView";
import { GithubLink } from "../../Clickables/GithubLink";
import { LinkedinLink } from "../../Clickables/LinkedinLink";
import { DarkModeToggle } from "../../Clickables/DarkModeToggle";

export function ProfileView({ className }) {
  return (
    <BannerView className={"items-center" + (className ? " " + className : "")}>
      <div className="w-full flex justify-center xl:justify-end gap-4">
        <div className="text-center xl:hidden text-3xl md:text-7xl font-bold bg-gradient-to-b from-base-green to-dark-green dark:from-base-green dark:to-light-green bg-clip-text text-transparent">
          KIRLIAN PACIBE
        </div>
        <DarkModeToggle logoClass={"size-8 xs:size-9"} />
      </div>
      <img
        className="size-[200px] md:size-[350px] rounded-full object-cover filter dark:brightness-[0.9] border-4 border-light-green dark:border-dark-green"
        src={headerImg}
      />
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <LinkedinLink
            text="https://www.linkedin.com/in/kirlianpacibe12"
            logoClass={"size-6 xs:size-7"}
          />
        </div>
        <div className="flex items-center gap-2">
          <GithubLink
            text="https://github.com/kyverus"
            logoClass={"size-6 xs:size-7"}
          />
        </div>
      </div>
    </BannerView>
  );
}
