"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import CommonViewSection from "../common/CommonViewSection";
import CommonVerticalCard from "../common/CommonVerticalCard";
import RecommendedSectionData from "../content/homePageData/recommendedSectionData";
import Link from "next/link";

const RecommendedSection: FC = () => {
  const router = useRouter();
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
      const totalItems = RecommendedSectionData.length;
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

  const handleViewAll = (category: string) => {
    const url = `/viewall?category=${category}`;
    router.push(url);
  };

  return (
    <div className="h-[480px] custom-container">
      <CommonViewSection
        sliderRef={sliderRef}
        cartTitle="Recommended For YOU"
        ViewAll={handleViewAll}
        cardSlideCarouselButton={showArrowButtons}
        searchShowSlideViewAllButton={true}
      />
      <Slider ref={sliderRef} {...settings}>
        {RecommendedSectionData.map((item) => (
          <Link key={item.id} href={`/movie/${item.id}/${item.title}`}>
            <CommonVerticalCard
              img={item.img}
              title={item.title}
              // releaseDate={""}
              description={`${new Date(item.releaseDate)
                .getFullYear()
                .toString()} | ${item.language} | ${item.genre}`}
              description2={`${item.duration} | ${item.age_restriction} | ${item.quality}`}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};
export default RecommendedSection;
