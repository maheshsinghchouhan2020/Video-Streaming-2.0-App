"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";

import CommonViewSection from "../common/CommonViewSection";
import CommonVerticalcard from "../common/CommonVerticalCard";
import Link from "next/link";

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

interface Item2 {
  id: number;
  title: string;
  img: string | StaticImageData;
  description: string;
  language: string;
  duration: string;
  genre: string;
  releaseDate: string;
  quality: string;
  age: string;
}

interface SearchComponentProps {
  SearchCartTitle: string;
  SearchCardData: Item[] | Item2[];
}

const RecentAddMovies: FC<SearchComponentProps> = ({
  SearchCartTitle,
  SearchCardData,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const [showArrowButtons, setShowArrowButtons] = useState(false);
  const router = useRouter();

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
      const totalItems = SearchCardData.length;
      const { slidesToShow } = settings.responsive.find(
        (breakpoint) => window.innerWidth <= breakpoint.breakpoint
      )?.settings || { slidesToShow: 5 };
      setShowArrowButtons(totalItems > slidesToShow);
    };
    updateArrowButtonsVisibility();
    window.addEventListener("resize", updateArrowButtonsVisibility);
    return () =>
      window.removeEventListener("resize", updateArrowButtonsVisibility);
  }, [SearchCardData.length, settings.responsive]);

  const handleViewAll = (category: string) => {
    const url = `/viewall?category=${category}`;
    router.push(url);
  };

  return (
    <div className="h-[480px] custom-container">
      <>
        <CommonViewSection
          sliderRef={sliderRef}
          cartTitle={SearchCartTitle}
          ViewAll={handleViewAll}
          cardSlideCarouselButton={showArrowButtons}
          searchShowSlideViewAllButton={true}
        />
        <Slider ref={sliderRef} {...settings} className="h-60">
          {SearchCardData.map((item) => (
           <Link key={item.id} href={`/movie/${item.id}/${item.title}`}>
            <CommonVerticalcard
              img={item.img}
              title={item.title}
              // releaseDate={""}
              description={`${new Date(item.releaseDate)
                .getFullYear()
                .toString()} | ${item.language} | ${item.genre}`}
              description2={`${item.duration} | ${item.age} | ${item.quality}`}
            />
           </Link>
          ))}
        </Slider>
      </>
    </div>
  );
};

export default RecentAddMovies;
