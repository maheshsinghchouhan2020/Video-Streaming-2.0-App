import React from "react";
import { FaPlay } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

interface CommonHorizontalCardProps {
  img: string | StaticImageData;
  title: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  episode?: string;
}

const CommonHorizontalCard: React.FC<CommonHorizontalCardProps> = ({
  img,
  title,
  description,
  buttonLabel = "Play",
  onButtonClick = () => {},
  episode,
}) => {
  return (
    <>
      <div className="flex py-6 hover:py-0 hover:transition-all divide-gray-700 rounded-lg ">
        <div className="movie-card relative px-2 flex flex-col items-center rounded-lg shadow-lg overflow-hidden  group hover:h-60  w-full">
          {/* Image */}
          <div className="relative w-full h-full cursor-pointer" onClick={onButtonClick} >
            <Image
              src={typeof img === "string" ? img : img.src}
              alt={title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gradient1 via-gradient2  to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 p-4 flex flex-col justify-end rounded-lg ">
              <div className="h2 text-white">{title}</div>
              <div className="h2 text-white">
                {episode && (
                  <p>{episode}</p>
                )}
              </div>
              <p className="h3 text-chineseSilver truncate w-full">
                {description}
              </p>
              <div className="flex items-center">
                <button
                  className="flex items-center bg-black text-white px-3 hover:bg-pink-800 transition-all duration-300 rounded-full h7 border border-white mt-2"
                  // onClick={onButtonClick}
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

export default CommonHorizontalCard;
