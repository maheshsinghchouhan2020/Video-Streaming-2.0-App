import React from "react";
import { FaPlay } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

interface CommonVerticalCardProps {
  img: string | StaticImageData; 
  title: string;
  description: string;
  description2: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const CommonVerticalCard: React.FC<CommonVerticalCardProps> = ({
  img,
  title,
  description,
  description2,
  buttonLabel = "Play",
  onButtonClick = () => {},
}) => {
  return (
    <>
      <div className="flex py-6 hover:py-0 hover:transition-all  divide-gray-700  rounded-lg ">
        <div className="movie-card relative px-2 flex flex-col items-center rounded-lg shadow-lg overflow-hidden transform group hover:h-[430px]  w-full ">
          {/* Image */}
          <div className="relative w-full h-full cursor-pointer" onClick={onButtonClick}>
            <Image
              src={typeof img === "string" ? img : img.src} 
              width={300}
              height={100}
              alt={title}
              className="w-full h-96 object-cover rounded-lg  "
            />

            {/* Overlay with gradient and text (visible on hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-gradient1 via-gradient2  to-transparent opacity-0 group-hover:opacity-100 transition-opacity  z-10 p-4 flex flex-col justify-end rounded-lg">
              <div className="h2 text-white">{title}</div>
              <p className="h3 text-chineseSilver truncate w-full">
                {description}
              </p>
              <p className="h3 text-chineseSilver truncate w-full">
                {description2}
              </p>
              <div className="flex items-center">
                <button
                  className="flex items-center bg-black text-white px-3 hover:bg-pink-800 transition-all rounded-full h7 border border-white mt-2"
                  onClick={onButtonClick}
                  aria-label={`Play ${title}`}
                >
                  <FaPlay className="mr-2" size={10} />
                  {buttonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonVerticalCard;
