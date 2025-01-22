"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CommonVerticalCard from "../../common/CommonVerticalCard";
import CommonViewSection from "../../common/CommonViewSection";
import Link from "next/link";
import musicLatestSongsSectionData from "../../content/musicPageData/musicLatestSongsSectionData";

const MusicLatestSongsSection = () => {
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
      const totalItems = musicLatestSongsSectionData.length;
      const { slidesToShow } =
        settings.responsive.find(
          (breakpoint) => window.innerWidth <= breakpoint.breakpoint
        )?.settings || { slidesToShow: 5 };
      setShowArrowButtons(totalItems > slidesToShow);
    };

    updateArrowButtonsVisibility();
    window.addEventListener("resize", updateArrowButtonsVisibility);
    return () => window.removeEventListener("resize", updateArrowButtonsVisibility);
  }, [settings.responsive]);

  return (
    <div className="h-[480px] custom-container">
      <CommonViewSection
        sliderRef={sliderRef}
        cartTitle="Recommended For YOU"
        ViewAll={() => console.log("View All")}
        cardSlideCarouselButton={showArrowButtons}
        searchShowSlideViewAllButton={true}
      />
      <Slider ref={sliderRef} {...settings}>
        {musicLatestSongsSectionData.map((item) => (
          <div key={item.id}>
            <Link href={`/music/${item.id}/${item.title}`}>
              <CommonVerticalCard
                img={item.img}
                title={item.title}
                description={`${item.releaseYear} | ${item.language} | ${item.genre}`}
                description2={`${item.duration} | ${item.ageRestriction} | ${item.quality}`}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MusicLatestSongsSection;
