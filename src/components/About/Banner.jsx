import { useState, useEffect } from "react";
import headerImg from "../../assets/images/header-picture.jpg";

export function Banner() {
  return (
    <div id="banner" className="xl:container mx-auto xl:px-28">
      <div className="lg:flex py-10 px-10">
        <div className="lg:w-2/3">
          <div className="rounded-2xl p-6 space-y-8">
            <div className="mt-10 text-5xl font-bold text-left text-dark-green dark:text-light-green">
              Web Developer
            </div>
            <div className="text-md text-justify indent-12 tracking-wider">
              Hello, I'm Kirlian Pacibe, I have fundamental knowledge in
              building simple and functional websites and applications. I have
              made personal projects regarding web and desktop applications
              futher showcased below.
            </div>
            <div className="text-lg font-bold">
              <a href="#contact">Contact Me</a>
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
