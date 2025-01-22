"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCrown } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiLanguage } from "react-icons/hi2";
import { navTab } from "../constantData/navTabConst";
import { profileTab } from "../constantData/profileTabConst";
import { languageConst, LanguageProps } from "../constantData/languageConst";

const NavbarSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [authUser, setAuthUser] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [languages, setLanguages] = useState<LanguageProps[]>(languageConst);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Toggle language selection
  const toggleLanguage = (lang: string) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((language) =>
        language.label === lang
          ? { ...language, selected: !language.selected }
          : language
      )
    );
  };

  const handleSignIn = () => {
    setAuthUser(true);
    // router.push("/login")
  };
  // const handleSignOut = () => {
  //   setAuthUser(false);
  // };

  // Function to check if current path matches the dynamic route
  const isActive = (route: string) => {
    if (pathname === route) return true;
    // Handle dynamic routes here (e.g., `/user/:id`)
    const routeSegments = route.split("/").filter(Boolean);
    const pathSegments = pathname.split("/").filter(Boolean);

    if (routeSegments.length !== pathSegments.length) return false;

    return routeSegments.every((segment, index) => {
      // Check if a segment is dynamic (starts with ':')
      if (segment.startsWith(":")) return true;
      return segment === pathSegments[index];
    });
  };

  return (
    <div className="sticky top-0 z-20">
      <div className="bg-darkGray text-white flex p-4 justify-between gap-8 items-center top-0">
        {/* Logo */}
        <div
          className="cursor-pointer border-2 border-vividRed px-2 rounded-xl font-bold"
          onClick={() => router.push("/")}
        >
          Visto
        </div>

        {/* Tabs */}
        <div className="hidden lg:flex gap-8 flex-1 items-center">
          {navTab.map((link, index) => (
            <Link href={link.route} key={index} passHref>
              <span
                className={`relative cursor-pointer transition-colors duration-200 text-nowrap ${
                  isActive(link.route)
                    ? "text-brightYellow"
                    : "hover:text-brightYellow"
                }`}
              >
                {/* Hide Premium Text */}
                {index < navTab.length - 1 && link.label}
                {/* Smooth sliding underline */}
                {index < navTab.length - 1 && (
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-brightYellow transition-all duration-300 ease-in-out transform ${
                      isActive(link.route) ? "w-full" : "w-0"
                    }`}
                  ></span>
                )}
                {/* Premium Button */}
                {index < navTab.length - 1 ? (
                  ""
                ) : (
                  <div className="hidden lg:block">
                    <button className="flex flex-row items-center gap-2 border border-brightYellow rounded-full px-4 transition-transform py-[3px] duration-300 ease-in-out hover:scale-110">
                      <FaCrown color="gold" />
                      <span className="text-brightYellow">{link.label}</span>
                    </button>
                  </div>
                )}
              </span>
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 z-50">
          {/* Language Dropdown */}
          <div className="relative group hidden lg:block">
            <button className="flex items-center gap-1 border border-white rounded-full px-4 py-1 peer hover:bg-vividRed hover:border-vividRed group-hover:bg-vividRed group-hover:border-vividRed group-hover:text-white group-hover:rounded-2xl group-hover:rounded-b-none">
              <HiLanguage size={18} />
              <span className="ml-1">Languages</span>
              <span className="transition-transform duration-200 group-hover:rotate-180 flex items-center">
                <IoMdArrowDropdown size={22} />
              </span>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 top-full w-full bg-vividRed shadow-lg hidden group-hover:block peer-hover:block rounded-b-2xl">
              <div className="p-2">
                <ul className="space-y-1">
                  {languages.map((lang) => (
                    <li
                      key={lang.label}
                      className="flex items-center gap-2 hover:bg-darkRed p-1 rounded cursor-pointer"
                      onClick={() => toggleLanguage(lang.label)}
                    >
                      <input
                        type="checkbox"
                        className="accent-brightYellow"
                        id={lang.label}
                        checked={lang.selected}
                        onChange={() => toggleLanguage(lang.label)}
                      />
                      <label
                        htmlFor={lang.label}
                        className="cursor-pointer text-white h7"
                      >
                        {lang.label}
                      </label>
                    </li>
                  ))}
                </ul>
                <button className="block w-full px-4 py-1 bg-brightYellow text-black rounded-full mt-2 h7 text-center">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Search Icon */}
          <div
            className="border border-white rounded-full p-1"
            onClick={() => router.push("/searchnavbar")}
          >
            <IoIosSearch size={18} className="cursor-pointer" />
          </div>

          {/* Profile Icon */}
          <div className="relative group">
            <FaUserCircle size={27} className="cursor-pointer" />

            {/* Dropdown */}
            <div className="absolute right-0 top-7 bg-darkGray shadow-md hidden group-hover:block rounded-md">
              {authUser ? (
                <>
                  {profileTab.map((item, index) => (
                    <Link href={item.route} key={index} passHref>
                      <button className="text-left h7 text-nowrap w-full">
                        <div className="flex gap-2 items-center w-full h-full">
                          {index === 0 ? (
                            <div className="flex gap-2 items-center hover:rounded-t-md hover:bg-gray-500 w-full h-full px-4 py-2">
                              <div className="flex justify-center items-center text-h2">
                                {item.Icon}
                              </div>
                              <div className="flex justify-center items-center text-h7">
                                {item.label}
                              </div>
                              <div className="flex justify-center items-center text-h6 text-brightYellow">
                                {item.Icon2}
                              </div>
                            </div>
                          ) : (
                            <div className="flex gap-2 items-center hover:bg-gray-500 w-full h-full px-4 py-2">
                              <div className="flex justify-center items-center text-h2">
                                {item.Icon}
                              </div>
                              <div className="flex justify-center items-center text-h7">
                                {item.label}
                              </div>
                            </div>
                          )}
                        </div>
                      </button>
                    </Link>
                  ))}
                </>
              ) : (
                <button
                  className="text-left h7 text-nowrap px-6 py-2"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <GiHamburgerMenu
              size={30}
              className="cursor-pointer hover:text-brightYellow transition-colors duration-200"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>

      {/* Sidebar Component */}
      <div>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default NavbarSection;
