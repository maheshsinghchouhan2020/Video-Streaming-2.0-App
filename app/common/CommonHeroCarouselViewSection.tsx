'use client'
import React, { FC, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

interface ArrowProps {
  onClick: () => void;
}

const CustomPrevArrow: FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10  p-2 rounded-full text-white hover:text-brightYellow hover:bg-white"
  >
    <BsChevronDoubleLeft className="text-sm  md:text-4xl" />
  </button>
);

const CustomNextArrow: FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10  p-2 rounded-full text-white hover:text-brightYellow hover:bg-white"
  >
    <BsChevronDoubleRight className="text-sm  md:text-4xl" />
  </button>
);

interface Movie {
  id: number;
  img: string | StaticImageData;
  title: string;
  language: string;
  genre: string;
  duration: string;
  releaseYear: string;
  quality: string;
  ageRestriction: string;
}

interface CommonHeroCarouselViewSectionProps {
  homeBanner: Movie[];
  page: string; // New prop to differentiate between sections
}

const CommonHeroCarouselViewSection: FC<CommonHeroCarouselViewSectionProps> = ({
  homeBanner,
  page, // Receive category as a prop
}) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const centerPadding = (() => {
    if (windowWidth === null) return "0px";
    if (windowWidth >= 2560) return "300px";
    if (windowWidth >= 1024) return "200px";
    if (windowWidth >= 768) return "100px";
    return "0px";
  })();

  if (windowWidth === null) {
    return (
      <div className="slider-container py-12">
        <Loader />
      </div>
    );
  }

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding,
    nextArrow: (
      <CustomNextArrow
        onClick={() => setActiveSlide((prev) => (prev + 1) % homeBanner.length)}
      />
    ),
    prevArrow: (
      <CustomPrevArrow
        onClick={() =>
          setActiveSlide((prev) =>
            prev === 0 ? homeBanner.length - 1 : prev - 1
          )
        }
      />
    ),
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 660,
        settings: { dots: false },
      },
      {
        breakpoint: 661,
        settings: { dots: true },
      },
    ],
  };

  const handleClick = (title: string, id: number) => {
    const encodedTitle = encodeURIComponent(title);
    router.push(`/detail?page=${page}&title=${encodedTitle}&id=${id}`);
  };

  return (
    <div className="slider-container py-12">
      <Slider {...settings}>
        {homeBanner.map((movie, index) => {
          const isActive = index === activeSlide;
          const isLeft =
            index === (activeSlide - 1 + homeBanner.length) % homeBanner.length;
          const isRight = index === (activeSlide + 1) % homeBanner.length;
          return (
            <div
              key={movie.id}
              className={`slide flex justify-center items-center relative transition-transform duration-500 ${
                isActive
                  ? "scale-110 z-20"
                  : isLeft || isRight
                  ? "scale-90 z-10"
                  : "scale-75"
              }`}
            >
              <div className="relative flex justify-center items-center w-full" onClick={() => handleClick(movie.title, movie.id)}>
                <Image
                  src={movie.img}
                  alt={movie.title}
                  width={1280}
                  height={720}
                  className="object-cover w-[95%] cursor-pointer"
                  priority
                />

                {isActive && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 bg-gradient-to-t from-black/80 to-transparent w-[95%] p-9 2xl:pb-20 hidden md:block cursor-pointer">
                    <h1 className="text-lg font-extrabold text-white md:text-2xl lg:text-4xl">
                      {movie.title}
                    </h1>
                    <h2 className="h3 text-white">
                      {movie.language} | {movie.genre} | {movie.duration} | {movie.releaseYear}
                    </h2>
                    <h3 className="h3 text-white">
                      Quality: {movie.quality} | Age: {movie.ageRestriction}
                    </h3>
                    <div className="flex flex-row gap-2 pt-2">
                      <button className="flex flex-row items-center border border-white hover:border-transparent rounded-full w-max px-3 gap-2 bg-black hover:bg-[#A80929] hover:text-white text-white h7">
                        <FaPlay size={10} />
                        <span>Play</span>
                      </button>
                      <button className="flex flex-row items-center border border-white hover:border-transparent rounded-full w-max px-3 gap-2 bg-black hover:bg-[#A80929] hover:text-white text-white h7">
                        <RiPlayListAddLine size={10} />
                        <span>Watchlist</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CommonHeroCarouselViewSection;
