'use client'
import { FaPlay, FaCrown } from "react-icons/fa";
import { IoMdAdd, IoIosArrowDown } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";
import { RxDotFilled } from "react-icons/rx";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { ReactNode, useState } from "react";
import Link from "next/link";

interface CommonCardDetailViewProps {
  img: string | StaticImageData;
  title: string;
  description: string;
  rating: number;
  language: string;
  year: string;
  genre: string[] | string;
  subtitles: string[];
  director: string;
  producer: string;
  type: string;
  duration: string;
  age: string;
  trailer: string;
  onButtonClick?: () => void;
  heading: ReactNode;
}

const CommonCardDetailView: React.FC<CommonCardDetailViewProps> = ({
  heading,
  img,
  title,
  description,
  rating,
  language,
  year,
  genre,
  subtitles,
  director,
  producer,
  age,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="sm:relative w-full  flex flex-col sm:flex-row  text-white bg-zinc-800 ">
        <div className="h-[200px] w-full sm:hidden">
          <Image
            src={typeof img === "string" ? img : img.src}
            alt="Series Poster"
            objectFit="cover"
            height={1000}
            width={1000}
            className="h-full w-full "
          />
        </div>

        <div className="w-full h-full sm:w-fit text-sm">
          <div className="px-4 py-1 bg-gray-500 bg-opacity-50 text-white  shadow-md transition duration-300 flex gap-2 items-center justify-center hover:scale-105 w-full sm:hidden ">
            <span className="flex flex-col text-start text-white ">
              <span className="text-wrap ">
                Stream Live Sports and Ad-Free Originals
              </span>
            </span>
            <span className="flex items-center justify-center bg-yellow-500 rounded-lg px-2 py-1">
              <FaCrown className="text-white  ml-1 mr-4" size={24} />
              <span className="text-wrap text-start">Subscribe Now</span>
            </span>
          </div>
          <div className="px-4 py-1 sm:hidden">
            <div className="flex py-2 text-gray-400">
              <h1 className="underline ">Home</h1>{" "}
              <span className="px-2">/</span>{" "}
              <h1 className="underline">{heading}</h1>{" "}
              <span className="px-2">/</span>
              <h1 className=" text-white">{title}</h1>
            </div>
            <div className="text-xl font-bold ">{title}</div>
            <div className="mt-4 flex gap-3 text-sm  text-gray-400">
              <span className="flex flex-wrap items-center gap-1">
                IMDB{" "}
                <span className="bg-gray-600 rounded-sm px-2  ">{rating}</span>{" "}
                <RxDotFilled className="text-yellow-400" />
                {language} <RxDotFilled className="text-yellow-400" />
                {new Date(year).getFullYear().toString()}{" "}
                <RxDotFilled className="text-yellow-400" />
                {age} <RxDotFilled className="text-yellow-400" />3 season{" "}
                <RxDotFilled className="text-yellow-400" />
                176 Episode <RxDotFilled className="text-yellow-400" />
                {genre}
              </span>
            </div>

            <div className="w-full flex flex-col justify-center ">
              <button className="px-4 py-2 my-4 pr-14 bg-white text-white rounded-md shadow-md transition duration-300 flex gap-2 items-center hover:scale-105 w-full ">
                <FaPlay className="text-black mr-1" size={16} />
                <span className="flex flex-col text-start text-black ">
                  <span className="text-nowrap">Watch Free Preview</span>
                  <span className="text-nowrap">Yesterday</span>
                </span>
              </button>

              <div className="text-sm md:text-base flex flex-row relative">
                <span className={`${isExpanded ? "" : "line-clamp-2 pr-2"}`}>
                  {description}
                </span>
                <span
                  className={`text-yellow-400 flex items-end  cursor-pointer ${
                    isExpanded ? "absolute -bottom-[270px] right-0 " : ""
                  }`}
                  onClick={toggleDescription}
                >
                  {isExpanded ? "Less" : "More"}{" "}
                  <IoIosArrowDown
                    className={`transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </span>
              </div>
              <div className={`${isExpanded ? "" : "hidden"}`}>
                <div className="mt-6 text-sm ">
                  <p className="flex flex-col text-gray-400 gap-2">
                    <span>
                      Host: <span className="text-white">Amitabh Bachchan</span>
                    </span>
                    <span>
                      Director: <span className="text-white">{director}</span>
                    </span>
                    <span>
                      Producer: <span className="text-white">{producer}</span>
                    </span>
                    <span>
                      Language: <span className="text-white">{language}</span>
                    </span>
                    <span>
                      Release Year:{" "}
                      <span className="text-white">
                        {new Date(year).getFullYear().toString()}
                      </span>
                    </span>
                    <span>
                      Genres: <span className="text-white">{genre}</span>
                    </span>
                    <span>
                      Age Rating: <span className="text-white">{age}</span>
                    </span>
                    <span>
                      Audio Language: <span className="text-white">Hindi</span>
                    </span>
                    <span>
                      Subtitles: <span className="text-white">{subtitles}</span>
                    </span>
                  </p>
                </div>
                <div className="mt-4 text-sm ">
                  <p className="flex flex-col text-gray-400"></p>
                </div>
              </div>
            </div>

            <div className="my-4 flex items-center justify-center gap-2 px-4  ">
              <div className="flex items-center justify-center rounded-lg bg-transparent text-white border-gray-400 border py-2 px-2 gap-2 hover:scale-105 cursor-pointer w-full">
                <IoMdAdd /> <span className="text-nowrap">My List</span>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-transparent text-white border-gray-400 border py-2 px-2 gap-2 hover:scale-105 cursor-pointer  w-full">
                <PiShareFat /> <span className="text-nowrap">Share</span>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-transparent text-white border-gray-400 border py-2 px-2 gap-2 hover:scale-105 cursor-pointer w-full">
                <FaPlay /> <span className="text-nowrap"> Download</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block text-end">
          <Image
            src={typeof img === "string" ? img : img.src}
            alt="Series Poster"
            className="h-auto w-full"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="z-10 bg-gradient-to-tr  from-black via-black via-30% to-transparent  w-full  h-auto py-12  px-10 hidden sm:block">
          <div>
            <div className="flex py-2 text-gray-400">
              <Link href="/">
                <h1 className="underline hover:text-white">Home</h1>{" "}
              </Link>
              {heading !== "" ? (
                <>
                  <span className="px-2">/</span>{" "}
                  <h1 className="underline">{heading}</h1>
                </>
              ) : (
                ""
              )}
              <span className="px-2">/</span>
              <h1 className=" text-white">{title}</h1>
            </div>{" "}
            <h1 className="text-4xl font-bold mt-8">{title}</h1>
          </div>
          <div className="mt-4 flex gap-3 text-sm  text-gray-400">
            <span className="flex items-center gap-1">
              IMDB{" "}
              <span className="bg-gray-600 rounded-sm px-2  ">{rating}</span>{" "}
              <RxDotFilled className="text-yellow-400" />
              {language} <RxDotFilled className="text-yellow-400" />
              {new Date(year).getFullYear().toString()}{" "}
              <RxDotFilled className="text-yellow-400" />
              {age}3 season{" "}
              <RxDotFilled className="text-yellow-400" />
              176 Episode <RxDotFilled className="text-yellow-400" />
              {genre}
            </span>
          </div>
          <div className="mt-8 text-sm md:text-base flex flex-row relative sm:w-[70%] md:w-[60%] xl:w-[45%]">
            <span className={`${isExpanded ? "" : "line-clamp-2 pr-2"}`}>
              {description}
            </span>
            <span
              className={`text-yellow-400 flex items-end cursor-pointer ${
                isExpanded ? "absolute -bottom-36 right-0 " : ""
              }`}
              onClick={toggleDescription}
            >
              {isExpanded ? "Less" : "More"}{" "}
              <IoIosArrowDown
                className={`transform ${isExpanded ? "rotate-180" : ""}`}
              />
            </span>
          </div>
          <div className="mt-6 text-sm ">
            <p className="flex flex-col text-gray-400">
              <span>
                SubTitles: <span className="text-white">{subtitles}</span>
              </span>
              <span>
                Audio Language: <span className="text-white">Hindi</span>
              </span>
            </p>
          </div>
          <div className={`${isExpanded ? "" : "hidden"}`}>
            <div className="mt-4 text-sm ">
              <p className="flex flex-col text-gray-400">
                <span>
                  Host: <span className="text-white">Amitabh Bachchan</span>
                </span>
                <span>
                  Director: <span className="text-white">{director}</span>
                </span>
                <span>
                  Producer: <span className="text-white">{producer}</span>
                </span>
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-8">
            <button className="px-4 py-2 pr-14 bg-white text-white rounded-md shadow-md transition duration-300 flex gap-2 items-center hover:scale-105">
              <FaPlay className="text-black mr-1" size={16} />
              <span className="flex flex-col text-start text-black ">
                <span className="text-nowrap">Watch Free Preview</span>
                <span className="text-nowrap">Yesterday</span>
              </span>
            </button>
            <button className="px-4 py-3 bg-gray-500 bg-opacity-50 text-white rounded-md shadow-md transition duration-300 flex gap-2 items-center hover:scale-105  ">
              <span className="flex items-center justify-center bg-yellow-500 rounded-lg px-4 py-3">
                <FaCrown className="text-white mr-4" size={20} />
                <span className="text-nowrap">Subscribe Now</span>
              </span>
              <span className="flex flex-col text-start text-white ">
                <span className=" line-clamp-2 ">
                  Stream Live Sports and Ad-Free Originals
                </span>
              </span>
            </button>
          </div>
          <div className="mt-5 flex gap-3">
            <div className="flex items-center justify-center rounded-lg bg-transparent text-white border-gray-400 border py-2 px-4 gap-2 hover:scale-105 cursor-pointer">
              <IoMdAdd /> <span>My List</span>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-transparent text-white border-gray-400 border py-2 px-4 gap-2 hover:scale-105 cursor-pointer">
              <PiShareFat /> <span>Share</span>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-transparent text-white border-gray-400 border py-2 px-4 gap-2 hover:scale-105 cursor-pointer">
              <FaPlay /> <span>Trailer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonCardDetailView;
