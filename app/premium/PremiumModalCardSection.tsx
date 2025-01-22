import React from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  content: { heading: string; description: string } | null;
  closeModal: () => void;
}

const PremiumModalCardSection: React.FC<ModalProps> = ({
  content,
  closeModal,
}) => {
  if (!content) {
    return null;
  }

  // Split the description by commas to create individual bullet points
  const bulletPoints = content.description.split(",");

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-[#1F1F1F] p-6 border border-white rounded-lg w-[80%] max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl shadow-lg">
          <h2 className="text-2xl 2xl:text-5xl text-brightYellow font-normal">
            {content.heading}
          </h2>
          <ul className="mt-4 text-white text-sm 2xl:text-4xl list-disc pl-5">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point.trim()}</li>
            ))}
          </ul>
          <div className="mt-6 2xl:mt-11 flex justify-end">
            <button
              onClick={closeModal}
              className="text-white 2xl:text-5xl hover:text-red-600 transform hover:scale-125 transition-all"
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumModalCardSection;
