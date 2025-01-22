"use client";
import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCrown } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { ImCross } from "react-icons/im";
import { HiLanguage } from "react-icons/hi2";

import { navTab } from "../constantData/navTabConst";
import { languageConst, LanguageProps } from "../constantData/languageConst";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [languages, setLanguages] = useState<LanguageProps[]>(languageConst);

  const handleNavigation = (route: string) => {
    router.push(route);
    toggleSidebar();
  };

  const toggleLanguage = (lang: string) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((language) =>
        language.label === lang
          ? { ...language, selected: !language.selected }
          : language
      )
    );
  };

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-80 z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={`lg:hidden fixed left-0 top-0 h-full bg-background z-50 transition-transform duration-300 w-64 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4">
          {/* Header */}
          <div className="flex justify-between text-white border-b-2 pb-2 border-b-brightYellow">
            <div
              className="cursor-pointer border-2 border-vividRed px-2 rounded-xl font-bold"
              onClick={() => router.push("/")}
            >
              Visto
            </div>
            <button
              onClick={toggleSidebar}
              className="text-white flex justify-end items-center"
            >
              <span className="text-white h1">
                <ImCross />
              </span>
            </button>
          </div>

          {/* Links */}
          <ul className="space-y-4 text-white mt-6">
            {navTab.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-yellow-400"
                onClick={() => handleNavigation(link.route)}
              >
                {index < navTab.length - 1 ? (
                  <>{link.label}</>
                ) : (
                  <>
                    <div className="flex flex-col gap-4 mt-4">
                      {/* Premium Button */}
                      <div onClick={() => handleNavigation("/premium")}>
                        <button className="flex flex-row items-center gap-2 border border-brightYellow rounded-full px-4 transition-transform py-[3px] duration-300 ease-in-out hover:scale-110">
                          <FaCrown color="gold" />
                          <span className="text-brightYellow ">
                            {link.label}
                          </span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}

            {/* Sidebar content */}
            <div className="flex flex-col gap-4 mt-4">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className={`flex items-center gap-1 border ${
                    isLanguageOpen
                      ? "bg-vividRed border-vividRed text-white rounded-2xl rounded-b-none"
                      : "border-white rounded-full"
                  } px-4 py-1 transition-colors duration-200`}
                >
                  <HiLanguage size={18} />
                  <span className="ml-1">Languages</span>
                  <span
                    className={`transition-transform duration-200 flex items-center ${
                      isLanguageOpen ? "rotate-180" : ""
                    }`}
                  >
                    <IoMdArrowDropdown size={22} />
                  </span>
                </button>

                {/* Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute top-full w-[165px] bg-vividRed shadow-lg rounded-b-2xl z-10">
                    <div className="p-2">
                      <ul className="space-y-1 overflow-y-scroll h-40">
                        {languages.map((lang) => (
                          <li
                            key={lang.label}
                            className="flex items-center gap-2 hover:bg-darkRed p-1 rounded"
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
                )}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
