"use client"
import React, { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";

import CommonViewSection from "../common/CommonViewSection";

import actorsImages from "../content/navbarSearchPageData/actorsSectionData";

interface CastMember {
  actor: string;
  role: string;
}

interface Item {
  age: string;
  id: string;
  title: string;
  description?: string;
  language?: string;
  duration?: string;
  genre?: string | string[];
  releaseDate: string;
  quality?: string;
  ageRestriction: string | number;
  cast?: CastMember[];
  director?: string;
  production_company?: string;
  subtitles?: string[];
  episode?: string;
  rating?: number;
  type?: string;
  video: string;
  img: string | StaticImageData;
  trailer: string;
}

interface SearchComponentProps {
  SearchProps?: boolean;
  SearchCartTitle: string;
  SearchCardData: Item[];
}

const ActorsSection: FC<SearchComponentProps> = ({
  SearchProps,
  SearchCartTitle,
  SearchCardData,
}) => {
  const [showArrowButtons, setShowArrowButtons] = useState(false);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          centerPadding: "25px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "5px",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  useEffect(() => {
    const updateArrowButtonsVisibility = () => {
      const totalItems = actorsImages.length;
      const { slidesToShow } = settings.responsive.find(
        (breakpoint) => window.innerWidth <= breakpoint.breakpoint
      )?.settings || { slidesToShow: 5 };
      setShowArrowButtons(totalItems > slidesToShow);
    };
    updateArrowButtonsVisibility();
    window.addEventListener("resize", updateArrowButtonsVisibility);
    return () =>
      window.removeEventListener("resize", updateArrowButtonsVisibility);
  }, [settings.responsive]);

  const handleViewAll = () => {
    console.log("View All");
  };

  return (
    <>
      <div className="custom-container">
        {SearchProps ? (
          <>
            <CommonViewSection
              sliderRef={sliderRef}
              cartTitle={SearchCartTitle}
              ViewAll={handleViewAll}
              cardSlideCarouselButton={showArrowButtons}
              searchShowSlideViewAllButton={true}
              artistViewAllButtonHide={true}
            />
            <Slider ref={sliderRef} {...settings} className="h-52">
              {SearchCardData.map((item) => (
                <div key={item.id} className="flex justify-center items-center">
                  <div className=" flex justify-center items-center flex-col py-2">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="h-36 w-36 object-contain rounded-full bg-white"
                    />
                    <div className="text-white mt-2">{item.title}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </>
        ) : (
          <>
            <CommonViewSection
              sliderRef={sliderRef}
              cartTitle="Artists"
              ViewAll={handleViewAll}
              searchShowSlideViewAllButton={true}
            />
            <Slider ref={sliderRef} {...settings}>
              {actorsImages.map((item) => (
                <div key={item.id} className="flex justify-center items-center">
                  <div className=" flex justify-center items-center flex-col py-2">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="h-36 w-36 object-contain rounded-full bg-white"
                    />
                    <div className="text-white mt-2">{item.title}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </>
        )}
      </div>
    </>
  );
};

export default ActorsSection;
