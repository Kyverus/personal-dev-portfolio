import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, CloseButton} from '@headlessui/react'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'    
import { CustomLink } from './CustomLink';
import linkedinLogoLight from '../assets/icons/darkmode/linkedin-light-icon.svg';
import githubLogoLight from '../assets/icons/darkmode/github-light-icon.svg';
import linkedinLogoDark from '../assets/icons/darkmode/linkedin-dark-icon.svg';
import githubLogoDark from '../assets/icons/darkmode/github-dark-icon.svg';

export function NavBar ({dark, onClickToggle}){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const onScroll = () => {
          if(window.scrollY > 50){
              setScrolled(true);
          }else{
              setScrolled(false);
          }
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Disclosure as="nav" className={(scrolled ? "bg-light-secondary dark:bg-dark-secondary/75 py-0 " : "py-2 ") + "w-full fixed top-0 z-50 transition-all duration-700 bg-light-secondary dark:bg-dark-secondary md:bg-transparent md:dark:bg-transparent"}>
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-300 hover:text-black dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden"/>
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block"/>
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="hidden md:mx-auto md:flex items-center">
              <div className="flex space-x-4">
                <CustomLink path={'#about'}>Home</CustomLink>
                <CustomLink path={'#projects'}>Projects</CustomLink>
                <CustomLink path={'#contact'}>Contact</CustomLink>
              </div>
            </div>
          </div>
          <div className="flex w-40 -ml-40 mx-auto items-center justify-center">
            <a className="size-9 mx-2" href='https://www.linkedin.com/in/kirlianpacibe12' target='_blank'>
              <img src={dark ? linkedinLogoLight : linkedinLogoDark} alt = "linkedin logo" />
            </a>
            <a className="size-9 mx-2" href='https://github.com/kyverus' target='_blank'>
              <img src={dark ? githubLogoLight : githubLogoDark} alt = "github logo" />
              </a>
            <button className='size-9 mx-2' onClick={()=> onClickToggle()}>
              {
                  dark ? <SunIcon color='#ffffff' /> : <MoonIcon color='#000000'/>
              }
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <CloseButton as={CustomLink} path={'#'}>
            Home
          </CloseButton>
          <CloseButton as={CustomLink} path={'#projects'}>
            Projects
          </CloseButton>
          <CloseButton as={CustomLink} path={'#contact'}>
            Contact
          </CloseButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}