import {
  CloseButton,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { Logout } from "../auth/Logout";

export default function AdminNav() {
  const location = useLocation();

  const navigationMenus = [
    {
      menuname: "projects",
      menutitle: "Projects",
      path: "/admin/projects",
    },
    {
      menuname: "experience",
      menutitle: "Experience",
      path: "/admin/experience",
    },
    {
      menuname: "technologies",
      menutitle: "Technologies",
      path: "/admin/technologies",
    },
    {
      menuname: "app-settings",
      menutitle: "Settings",
      path: "/admin/app-settings",
    },
  ];

  return (
    <Disclosure
      id="navbar-admin"
      as="nav"
      className="w-full bg-dark-green flex flex-col relative"
    >
      <div className="h-16 p-2 flex items-center justify-start md:justify-center relative">
        <div className="flex items-center md:hidden">
          {/* Mobile menu button*/}
          <DisclosureButton
            className={
              "group relative inline-flex items-center justify-center rounded-md focus:outline-none hover:text-base-green focus:text-base-cyan"
            }
          >
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
        <div className="hidden md:flex items-center space-x-2 absolute left-2">
          <Link to="/">
            <CgWebsite />
          </Link>
          <Link to="/admin">
            <div className="font-bold">DASHBOARD</div>
          </Link>
        </div>
        <div className="hidden md:flex">
          <div className="flex space-x-4">
            {navigationMenus.map((menu) => {
              return (
                <Link
                  key={`wide-${menu.menuname}`}
                  to={menu.path}
                  className={
                    "rounded-md px-3 py-2 md:text-lg block md:inline font-medium" +
                    (location.pathname == menu.path
                      ? " text-base-cyan"
                      : " hover:text-dark-green hover:brightness-200")
                  }
                >
                  {menu.menutitle}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="items-center absolute right-2">
          <Logout />
        </div>
      </div>

      <DisclosurePanel className="md:hidden absolute top-16 bg-dark-green w-full">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <CloseButton
            to="/"
            as={Link}
            className="rounded-md px-3 py-2 md:text-lg block md:inline font-medium hover:text-dark-green hover:brightness-200"
          >
            Portfolio
          </CloseButton>
          <CloseButton
            to="/admin"
            as={Link}
            className={
              "rounded-md px-3 py-2 md:text-lg block md:inline font-medium" +
              (location.pathname == "/admin"
                ? " text-base-cyan"
                : " hover:text-dark-green hover:brightness-200")
            }
          >
            Dashboard
          </CloseButton>
          {navigationMenus.map((menu) => {
            return (
              <CloseButton
                key={`slim-${menu.menuname}`}
                as={Link}
                to={menu.path}
                className={
                  "rounded-md px-3 py-2 md:text-lg block md:inline font-medium" +
                  (location.pathname == menu.path
                    ? " text-base-cyan"
                    : " hover:text-dark-green hover:brightness-200")
                }
              >
                {menu.menutitle}
              </CloseButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
