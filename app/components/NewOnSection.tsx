"use client"
import React, { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

import CommonViewSection from "../common/CommonViewSection";
import CommonHorizontalCard from "../common/CommonHorizontalCard";

import NewOnData from "../content/homePageData/newOnSectionData";
import Link from "next/link";

const NewOnSection: FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const router = useRouter();

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
      const totalItems = NewOnData.length;
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

  const handleViewAll = (category:string) => {
    const url = `/viewall?category=${(category)}`
    router.push(url)
  };

  return (
    <div className="custom-container">
      <CommonViewSection
        sliderRef={sliderRef}
        cartTitle="New On Visto"
        ViewAll={handleViewAll}
        cardSlideCarouselButton={showArrowButtons}
        searchShowSlideViewAllButton={true}
      />
      <Slider ref={sliderRef} {...settings} className="h-60">
        {NewOnData.map((item) => (
          <Link key={item.id} href={`/movie/${item.id}/${item.title}`}>
          <CommonHorizontalCard   
            img={item.img}
            title={item.title}
            description={`${item.language} | ${item.duration} | ${item.genre}`}
          />
           </Link>
        ))}
      </Slider>
    </div>
  );
};

export default NewOnSection;