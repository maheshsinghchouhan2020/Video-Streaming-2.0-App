"use client";

import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { RiInformationLine } from "react-icons/ri";
import PremiumModalCardSection from "./PremiumModalCardSection";
import { SiDolby } from "react-icons/si";

const PremiumSection = () => {
  const [selectedOption, setSelectedOption] = useState("mobile");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    heading: string;
    description: string;
  } | null>(null);

  const handleOptionChange = (option: string) => {
    console.log("Selected option:", option);
    setSelectedOption(option);
  };

  const isSelected = (option: string, isFeature: boolean = false) => {
    if (selectedOption === option) {
      if (isFeature) {
        return "bg-[#FFC900]/20 text-white border-2 border-b-0 border-yellow-500";
      }
      return "bg-[#FFC900] text-black border-2 border-t-0 border-yellow-500";
    }
    return "bg-transparent text-white";
  };

  const features = [
    {
      heading: "Number of logged in devices",
      description:
        "Number of device on which an account can stay logged in at the same time",
      options: ["1", "5", "5"],
    },
    {
      heading: "Watch on devices at the same time",
      description:
        "Number of devices on which a content can be watched at the same time (Mobile only pack users will be able to watch content only on mobile devices)",
      options: ["1", "2", "1"],
    },
    {
      heading: "Max Video Quality",
      description:
        "Video quality of any content will depend on your internet speed and device support (Not all content is available in all resolutions)",
      options: ["Upto 720p HD", "Upto 4K UHD", "Upto 4K UHD"],
    },
    {
      heading: "Max Audio Quality",
      description:
        "Audio quality of any content will depend on your device support (Not all content is available in all audio qualities)",
      options: ["Stereo", "Dolby Atmos", "Dolby Atmos"],
    },
    {
      heading: "Ad free experience",
      description:
        "Advertisements will be shown on Sports, Liv Exclusives and Reality Shows (Live and Recorded) & Interactivity",
      options: [
        "The free plan includes ads during playback. Upgrade to the subscription for an ad-free experience",
        "Except on Sports, Liv Exclusives, Reality Shows (Live & Recorded) and Interactivity",
        "Except on Sports, Liv Exclusives, Reality Shows (Live & Recorded) and Interactivity",
      ],
    },
  ];

  const columns = [
    { id: "mobile", label: "Free", price: "0", term: "Yearly" },
    {
      id: "premiumYearly",
      label: "Premium",
      price: "1499",
      term: "Yearly",
    },
    {
      id: "premiumMonthly",
      label: "Premium4K",
      price: "399",
      term: "Monthly",
    },
  ];

  useEffect(() => {
    if (isModalOpen) {
      // Disable body scrolling when the modal is open
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the modal is closed
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    // Cleanup for Next.js's SSR safety
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const openModal = (feature: { heading: string; description: string }) => {
    setModalContent(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollTable = (direction: "left" | "right") => {
    const container = document.getElementById("scrollable-table-container");
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-900 2xl:min-h-[75vh] flex flex-col items-center 2xl:justify-center py-6 2xl:py-24 px-6">
      <div className="text-white text-xl sm:text-2xl 2xl:text-5xl  font-normal text-center">
        Subscribe to watch all content on Visto App
      </div>

      <div className="w-full flex flex-col items-center py-6 2xl:py-14 ">
        {/* Scrollable Table */}
        <div
          id="scrollable-table-container"
          className="w-full overflow-x-auto flex justify-start sm:justify-center items-center"
        >
          <table className="w-[85%] 2xl:h-[60vh] border-collapse border border-gray-200 text-white">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-start w-[280px]">
                  <span className="text-lg sm:text-xl 2xl:text-4xl text-nowrap  font-normal text-brightYellow">
                    Access All Content
                  </span>
                  <p className="text-xs sm:text-sm font-normal 2xl:text-2xl text-nowrap">
                    Movies, Originals, and Live Sports
                  </p>
                </th>
                {columns.map(({ id, label, price, term }) => (
                  <th
                    key={id}
                    className={`border border-gray-300 px-4 py-2 cursor-pointer  ${isSelected(
                      id
                    )}`}
                    onClick={() => handleOptionChange(id)}
                  >
                    <div className="flex items-center justify-center flex-col">
                      <input
                        type="radio"
                        id={id}
                        name="pricingOption"
                        checked={selectedOption === id}
                        onChange={() => handleOptionChange(id)}
                        className="form-radio appearance-none w-4 h-4 border-2 border-white rounded-full bg-transparent checked:bg-black checked:border-black focus:outline-none cursor-pointer"
                      />
                      <label
                        htmlFor={id}
                        className="text-xs sm:text-sm 2xl:text-4xl font-normal pt-3"
                      >
                        {label}
                      </label>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-2">
                      <span
                        className={`text-xl sm:text-2xl 2xl:text-4xl ${
                          selectedOption === id
                            ? "text-black"
                            : "text-brightYellow"
                        }`}
                      >
                        <FaIndianRupeeSign />
                      </span>
                      <span
                        className={`text-xl sm:text-2xl 2xl:text-4xl ${
                          selectedOption === id
                            ? "text-black"
                            : "text-brightYellow"
                        }`}
                      >
                        {price}
                      </span>
                      <span className="text-xs sm:text-sm font-normal 2xl:text-4xl ml-1">
                        {term}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 px-4 py-4 ">
                    <div className="flex items-center gap-[6px] 2xl:gap-3">
                      <span className="text-xs sm:text-sm 2xl:text-4xl font-normal">
                        {feature.heading}
                      </span>
                      <div
                        className="text-brightYellow cursor-pointer 2xl:text-4xl"
                        onClick={() => openModal(feature)}
                      >
                        <RiInformationLine />
                      </div>
                    </div>
                  </td>
                  {feature.options.map((option: string, index: number) => (
                    <td
                      key={index}
                      className={`border border-gray-300 text-center text-xs sm:text-sm 2xl:text-4xl font-normal px-4 py-2  cursor-pointer ${isSelected(
                        columns[index].id,
                        true
                      )}`}
                      onClick={() => handleOptionChange(columns[index].id)}
                    >
                      {option === "Dolby Atmos" ? (
                        <span className="flex items-center justify-center">
                          <SiDolby className="mr-1" /> {option}
                        </span>
                      ) : (
                        option
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scroll Controls */}
        <div className="w-full flex justify-between items-center mt-4 sm:hidden">
          <button
            className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            onClick={() => scrollTable("left")}
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            onClick={() => scrollTable("right")}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <PremiumModalCardSection
          content={modalContent}
          closeModal={closeModal}
        />
      )}

      <div className="transition-transform transform hover:scale-105 cursor-pointer">
        <h2 className="text-white text-sm font-normal 2xl:text-5xl  ">
          Select a promo code
        </h2>
        <div className="border-b-2 border-dotted border-yellow-500 mt-1"></div>
      </div>

      <div className="py-6 2xl:py-10 ">
        <button className="w-full md:w-[400px] lg:w-[500px] px-9 bg-white rounded-lg py-4 flex flex-row text-center items-center justify-center transition-transform transform hover:scale-105 2xl:text-3xl ">
          <span className="mr-2 font-bold">Pay</span> <FaIndianRupeeSign />
          <span className="font-bold">
            {selectedOption === "premiumMonthly"
              ? "399"
              : selectedOption === "premiumYearly"
              ? "1499"
              : "699"}
          </span>
        </button>
      </div>

      <div className="text-white text-sm font-normal flex items-center gap-3 2xl:text-4xl ">
        <span className="hover:border-b-2 hover:border-white cursor-pointer">
          Terms and Conditions
        </span>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <span className="hover:border-b-2 hover:border-white cursor-pointer">
          Privacy Policy
        </span>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <span className="hover:border-b-2 hover:border-white cursor-pointer">
          FAQ
        </span>
      </div>
    </div>
  );
};

export default PremiumSection;
