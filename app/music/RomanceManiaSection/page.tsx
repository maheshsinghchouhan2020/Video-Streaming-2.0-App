"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CommonHorizontalCard from "@/app/common/CommonHorizontalCard";
import CommonViewSection from "@/app/common/CommonViewSection";
import romanceManiaSectionData from "@/app/content/musicPageData/romanceManiaSectionData";
import Link from "next/link";

const RomanceManiaSection = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [showArrowButtons, setShowArrowButtons] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  useEffect(() => {
    const updateArrowButtonsVisibility = () => {
      const totalItems = romanceManiaSectionData.length;
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
        <CommonViewSection
          sliderRef={sliderRef}
          cartTitle="ROMANCE MANIA"
          ViewAll={handleViewAll}
          cardSlideCarouselButton={showArrowButtons}
          searchShowSlideViewAllButton={true}
        />
        <Slider ref={sliderRef} {...settings} className="h-60">
          {romanceManiaSectionData.map((item) => (
            <div key={item.id}>
              <Link href={`/music/${item.id}/${item.title}`}>
                <CommonHorizontalCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={`${item.language} | ${item.duration} | ${item.genre}`}
                  onButtonClick={() => console.log(`Playing ${item.title}`)}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default RomanceManiaSection;
