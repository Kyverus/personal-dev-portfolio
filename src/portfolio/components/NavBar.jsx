import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  CloseButton,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CustomLink } from "./Clickables/CustomLink";
import profilePic from "../assets/images/profile-picture.jpg";
import { useScrollContext } from "../../_contexts/ScrollContextProvider";
import { useDarkContext } from "../../_contexts/DarkContextProvider";
import { PortfolioLogo } from "./PortfolioLogo";
import { LinkedinLink } from "./Clickables/LinkedinLink";
import { GithubLink } from "./Clickables/GithubLink";
import { DarkModeToggle } from "./Clickables/DarkModeToggle";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { activeSection } = useScrollContext();

  const navigationMenus = [
    {
      menuname: "about",
      menutitle: "About",
      path: "#about",
    },
    {
      menuname: "projects",
      menutitle: "Projects",
      path: "#projects",
    },
    {
      menuname: "experience",
      menutitle: "Experience",
      path: "#experience",
    },
    {
      menuname: "contact",
      menutitle: "Contact",
      path: "#contact",
    },
  ];

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
      className="fixed top-0 z-50 w-full"
    >
      <Disclosure
        id="navbar-main"
        as="nav"
        className={
          "transition-[margin,_padding] duration-500 origin-center w-full" +
          (scrolled
            ? " mt-0 py-0 bg-white dark:bg-dark-secondary shadow-[0_0_2px_1px_rgb(0,0,0,0.3)] md:shadow-none md:bg-white/80 md:dark:bg-dark-secondary/80 text-dark-green dark:text-light-green"
            : " mt-8 py-2 bg-white dark:bg-dark-secondary")
        }
      >
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton
                className={
                  "group relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none hover:text-base-green focus:text-base-cyan"
                }
              >
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
              <PortfolioLogo
                linkClass={
                  "transition-opacity duration-500" +
                  (activeSection == "about"
                    ? " opacity-0 pointer-events-none"
                    : " opacity-100 pointer-events-auto")
                }
                logoClass={
                  "size-10 transition-colors duration-500" +
                  (scrolled
                    ? " fill-dark-green dark:fill-light-green"
                    : " fill-dark-primary dark:fill-light-primary")
                }
              />
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div className="hidden md:mx-auto md:flex items-center">
                <div className="flex space-x-4">
                  {navigationMenus.map((menu) => {
                    return (
                      <CustomLink
                        key={`wide-${menu.menuname}`}
                        path={menu.path}
                        className={
                          activeSection == menu.menuname ? "text-base-cyan" : ""
                        }
                      >
                        {menu.menutitle}
                      </CustomLink>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              className={
                "flex w-40 mx-2 items-center justify-center transition-opacity duration-500" +
                (activeSection == "about"
                  ? " opacity-100 md:opacity-0 pointer-events-none"
                  : " opacity-100 pointer-events-auto")
              }
            >
              <PortfolioLogo
                linkClass={
                  "transition-opacity duration-500" +
                  (activeSection == "about"
                    ? " opacity-0 pointer-events-none"
                    : " opacity-100 md:opacity-0 pointer-events-auto md:pointer-events-none")
                }
                logoClass={
                  "size-7 transition-colors duration-500" +
                  (scrolled
                    ? " fill-dark-green dark:fill-light-green"
                    : " fill-dark-primary dark:fill-light-primary")
                }
              />
              <LinkedinLink logoClass={"size-8 xs:size-9"} />
              <GithubLink logoClass={"size-8 xs:size-9"} />
              <DarkModeToggle logoClass={"size-8 xs:size-9"} />
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigationMenus.map((menu) => {
              return (
                <CloseButton
                  key={`slim-${menu.menuname}`}
                  as={CustomLink}
                  path={menu.path}
                  className={
                    activeSection == menu.menuname ? "text-base-cyan" : ""
                  }
                >
                  {menu.menutitle}
                </CloseButton>
              );
            })}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
