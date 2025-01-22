"use client";
import Image from "next/image";
import footer_appstore_badge from "../../public/assets/footerAssets/footer_appstore_badge.png";
import footer_playstore_badge from "../../public/assets/footerAssets/footer_playstore_badge.png";
import instagram from "../../public/assets/footerAssets/instagram.svg";
import twitter from "../../public/assets/footerAssets/twitter.svg";
import facebook from "../../public/assets/footerAssets/facebook.svg";
import linkin from "../../public/assets/footerAssets/linkin.svg";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navTab } from "../constantData/navTabConst";
import { otherScreen } from "../constantData/otherSectionConst";

const FooterSection = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="bg-vividRed">
        <div className="flex custom-container px-2 py-2">
         
          <div className="flex items-center  flex-wrap mx-auto md:pl-4 lg:pl-0 text-white ">
            {navTab.map((link, index) => (
              <Link href={link.route} key={index} passHref>
                <span
                  key={index}
                  className={`relative text-h3 md:text-h4 2xl:text-h1 cursor-pointer  h-6 transition-colors duration-200 text-nowrap ${
                    pathname === link.route
                      ? "text-brightYellow"
                      : "hover:text-brightYellow"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-brightYellow transition-all duration-300 ease-in-out transform text-h3 md:text-h4 2xl:text-h1 ${
                      pathname === link.route ? "w-full" : "w-0"
                    }`}
                  ></span>
                </span>
                {index < navTab.length - 1 && (
                  <span className="text-white font-bold mx-3 md:mx-6 text-h3 md:text-h4 2xl:text-h1">|</span>
                )}
              </Link>
            ))}
           
          </div>
        </div>
      </div>

      <div className="text-white p-6 flex flex-col  ">
        <div className="flex flex-col md:flex-row w-full gap-2 2xl:justify-between">
          {/* Links and Copyright Section */}
          <div className=" py-2 flex flex-col gap-5  ">
            <div className="flex flex-wrap justify-center gap-2  ">
              {otherScreen.map((Link, index) => (
                <React.Fragment key={Link.label}>
                  <p
                    key={index}
                    className="hover:text-chineseSilver cursor-pointer text-h3 md:text-h4 2xl:text-h1"
                  >
                    {Link.label}
                  </p>

                  {index < otherScreen.length - 1 && (
                    <span className="text-white 2xl:mx-5 text-h3 md:text-h4 2xl:text-h1">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className=" text-chineseSilver sm:px-2 flex flex-col gap-2 text-h3 md:text-h4 2xl:text-h1   lg:flex">
              <div className="text-center">
                Copyright &copy; {new Date().getFullYear()} Sun NXT, all related
                channels, content, movies, images, visuals, clips, logos,
                programs, and music, are property of Sun TV Network Ltd. All
                rights reserved.
              </div>

              <div className="text-center text-h3 md:text-h4 2xl:text-h1 text-chineseSilver ">
                Version 1.14.2.0
              </div>
            </div>
          </div>

          <div className=" items-start justify-center px-4 hidden 2xl:flex">
              <div className="text-center p-2">
                <span className="block mb-2 text-nowrap text-h3 md:text-h4 2xl:text-h1">Download the App</span>
                <div className="flex flex-row md:flex-col lg:flex-row lg:w-60 xl:flex-row gap-4">
                  <span className="cursor-pointer  w-full flex justify-center items-center hover:scale-105">
                    <Image src={footer_appstore_badge} alt="App Store" />
                  </span>
                  <span className="cursor-pointer w-full flex justify-center items-center hover:scale-105 ">
                    <Image src={footer_playstore_badge} alt="Google Play" />
                  </span>
                </div>
              </div>
            </div>

          <div className="flex flex-col lg:flex-row   gap-2 justify-center text-white">
            {/* Social Media and Download Section */}
            <div className="flex items-start justify-center px-4 2xl:hidden">
              <div className="text-center p-2">
                <span className="block mb-2 text-nowrap text-h3 md:text-h4 2xl:text-h1">Download the App</span>
                <div className="flex flex-row lg:flex-row lg:w-60 xl:flex-row gap-4">
                  <span className="cursor-pointer  w-full flex justify-center items-center hover:scale-105">
                    <Image src={footer_appstore_badge} alt="App Store" />
                  </span>
                  <span className="cursor-pointer w-full flex justify-center items-center hover:scale-105 ">
                    <Image src={footer_playstore_badge} alt="Google Play" />
                  </span>
                </div>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="flex items-start justify-center px-4 ">
              <div className="text-center p-2">
                <span className="block mb-2 text-h3 md:text-h4 2xl:text-h1">Connect With Us</span>
                <div className="flex gap-4 items-center justify-center ">
                  <span className="cursor-pointer w-10 hover:scale-105  hover:filter hover:brightness-0 hover:invert">
                    <Image src={instagram} alt="Instagram" />
                  </span>
                  <span className="cursor-pointer  w-10  hover:scale-105  hover:filter hover:brightness-0 hover:invert">
                    <Image src={facebook} alt="Facebook" />
                  </span>
                  <span className="cursor-pointer w-10 hover:scale-105  hover:filter hover:brightness-0 hover:invert">
                    <Image src={twitter} alt="Twitter" />
                  </span>
                  <span className="cursor-pointer  w-10  hover:scale-105  hover:filter hover:brightness-0 hover:invert">
                    <Image src={linkin} alt="Linked In" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="text-h3 md:text-h4 2xl:text-h1 text-chineseSilver sm:px-2  flex-col gap-2 mt-5 hidden lg:hidden">
          <div className="text-center">
            Copyright &copy; {new Date().getFullYear()} Sun NXT, all related
            channels, content, movies, images, visuals, clips, logos, programs,
            and music, are property of Sun TV Network Ltd. All rights reserved.
          </div>

          <div className="text-center text-h3 md:text-h4 2xl:text-h1 text-chineseSilver ">
            Version 1.14.2.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
