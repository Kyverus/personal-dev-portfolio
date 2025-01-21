import { useState, useEffect } from "react";
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
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/images/profile-picture.jpg";
import { useScrollContext } from "../../_contexts/ScrollContextProvider";
import { useDarkContext } from "../../_contexts/DarkContextProvider";

export function NavBar() {
  const { dark, darkModeHandler } = useDarkContext();
  const [scrolled, setScrolled] = useState(false);
  const { activeSection } = useScrollContext();

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
            ? " bg-white dark:bg-dark-secondary shadow-[0_0_2px_1px_rgb(0,0,0,0.3)] md:shadow-none md:bg-white/80 md:dark:bg-dark-secondary/80 py-0 text-dark-green dark:text-light-green"
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
            <div className="w-40 hidden md:flex justify-center">
              <img
                src={profilePic}
                className="size-14 md:size-16 rounded-full"
              />
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="hidden md:mx-auto md:flex items-center">
                <div className="flex space-x-4">
                  <CustomLink
                    path={"#about"}
                    className={activeSection == "about" ? "text-base-cyan" : ""}
                  >
                    About
                  </CustomLink>
                  <CustomLink
                    path={"#projects"}
                    className={
                      activeSection == "projects" ? "text-base-cyan" : ""
                    }
                  >
                    Projects
                  </CustomLink>
                  <CustomLink
                    path={"#contact"}
                    className={
                      activeSection == "contact" ? "text-base-cyan" : ""
                    }
                  >
                    Contact
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
                <FaLinkedin className="size-9 hover:text-base-green active:text-base-cyan" />
              </a>
              <a
                className="mx-2"
                href="https://github.com/kyverus"
                target="_blank"
              >
                <FaGithub className="size-9 hover:text-base-green active:text-base-cyan" />
              </a>
              <button className="mx-2" onClick={() => darkModeHandler()}>
                {dark ? (
                  <SunIcon className="size-9 hover:text-base-green active:text-base-cyan" />
                ) : (
                  <MoonIcon className="size-9 hover:text-base-green active:text-base-cyan" />
                )}
              </button>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <CloseButton
              as={CustomLink}
              path={"#about"}
              className={activeSection == "about" ? "text-base-cyan" : ""}
            >
              About
            </CloseButton>
            <CloseButton
              as={CustomLink}
              path={"#projects"}
              className={activeSection == "projects" ? "text-base-cyan" : ""}
            >
              Projects
            </CloseButton>
            <CloseButton
              as={CustomLink}
              path={"#contact"}
              className={activeSection == "contact" ? "text-base-cyan" : ""}
            >
              Contact
            </CloseButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
