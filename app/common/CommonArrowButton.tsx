import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CommonArrowButtonProps {
  direction: "prev" | "next"; 
  onClick: () => void;
}

const CommonArrowButton: React.FC<CommonArrowButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      className="text-white p-1 bg-transparent hover:bg-vividRed hover:border-vividRed border border-white rounded-full hidden sm:block"
      onClick={onClick}
    >
      {direction === "prev" ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </button>
  );
};

export default CommonArrowButton;