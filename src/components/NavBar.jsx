import { useState, useEffect, useContext } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  CloseButton,
} from "@headlessui/react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CustomLink } from "./CustomLink";
import { DarkContext } from "../App";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import resumeFile from "../assets/data/pacibe-resume.pdf";
import profilePic from "../assets/images/profile-picture.jpg";

export function NavBar({ onClickToggle }) {
  const dark = useContext(DarkContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="navbar"
      className={
        "fixed top-0 z-50 left-[50%] translate-x-[-50%] transition-width duration-300" +
        (scrolled ? " w-full" : " w-full 2xl:w-[1536px] px-5")
      }
    >
      <Disclosure
        id="navbar-main"
        as="nav"
        className={
          "transition-[all,_height] duration-700 origin-center w-full" +
          (scrolled
            ? " bg-light-secondary dark:bg-dark-secondary md:bg-light-secondary/80 md:dark:bg-dark-secondary/80 py-0 text-dark-green dark:text-light-green"
            : " mt-5 py-2 rounded-xl bg-light-green dark:bg-dark-green")
        }
      >
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
          <div className="relative flex h-24 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-300 hover:text-black dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="w-40 flex justify-center">
              <img
                src={profilePic}
                alt=""
                className="size-14 md:size-16 rounded-full"
              />
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="hidden md:mx-auto md:flex items-center">
                <div className="flex space-x-4">
                  <CustomLink path={"#about"}>About</CustomLink>
                  <CustomLink path={"#projects"}>Projects</CustomLink>
                  <CustomLink path={resumeFile} target={"_blank"}>
                    Resume
                  </CustomLink>
                </div>
              </div>
            </div>
            <div className="flex w-40 mx-auto items-center justify-center">
              <a
                className="mx-2"
                href="https://www.linkedin.com/in/kirlianpacibe12"
                target="_blank"
              >
                <FaLinkedin
                  fill={dark ? "#ffffff" : "#000000"}
                  className="size-9"
                />
              </a>
              <a
                className="mx-2"
                href="https://github.com/kyverus"
                target="_blank"
              >
                <FaGithub
                  fill={dark ? "#ffffff" : "#000000"}
                  className="size-9"
                />
              </a>
              <button className="size-9 mx-2" onClick={() => onClickToggle()}>
                {dark ? (
                  <SunIcon color="#ffffff" />
                ) : (
                  <MoonIcon color="#000000" />
                )}
              </button>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <CloseButton as={CustomLink} path={"#"}>
              Home
            </CloseButton>
            <CloseButton as={CustomLink} path={"#projects"}>
              Projects
            </CloseButton>
            <CloseButton as={CustomLink} path={"#contact"}>
              Contact
            </CloseButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
