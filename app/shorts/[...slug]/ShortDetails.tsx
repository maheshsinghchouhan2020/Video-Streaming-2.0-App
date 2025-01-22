"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

import CommonCardDetailView from "../../common/CommonCardDetailView";
import CommonHorizontalCard from "../../common/CommonHorizontalCard";
import CommonViewSection from "../../common/CommonViewSection";

import PopularOnShorts from "@/app/content/homePageData/PopularOnShortsData";
import newlyAddedVideoData from "@/app/content/shortSectionData/newlyAddedVideoData";
import Link from "next/link";
import wirallyComicalData from "@/app/content/shortSectionData/wirallyComicalData";
import warangalDiariesData from "@/app/content/shortSectionData/warangalDiariesData";
import popularShortFilmsData from "@/app/content/shortSectionData/popularShortFilmsData";
import FightManiaData from "@/app/content/shortSectionData/fightManiaData";
import VlogSeriesData from "@/app/content/shortSectionData/vlogSeriesData";
import kannadWebseriesData from "@/app/content/shortSectionData/kannadaWebseriesData";
import teluguWebseriesData from "@/app/content/shortSectionData/teluguWebseriesData";

interface ShortsDetailData {
  id?: string | number;
  img?: string | StaticImageData;
  title?: string;
  description?: string;
  rating?: number;
  language?: string;
  year?: string;
  genre?: string | string[];
  subtitles?: string[];
  director?: string;
  producer?: string;
  type?: string;
  duration?: string;
  age?: string;
  trailer?: string;
}

const ShortsDetail: FC = () => {
  const [combinedData, setCombinedData] = useState<ShortsDetailData[]>([]);
  const [filteredData, setFilteredData] = useState<ShortsDetailData[]>([]);
  const sliderRef = useRef<Slider | null>(null);
  const [showArrowButtons, setShowArrowButtons] = useState(false);

  const pathname = usePathname();

  const match = pathname?.match(/\/shorts\/(\d+)\/(.+)/);
  const idMatch = match ? match[1] : null; // Extracted ID
  const titleMatch = match ? decodeURIComponent(match[2]) : null;

  useEffect(() => {
    const allData = [
      ...PopularOnShorts,
      ...newlyAddedVideoData,
      ...wirallyComicalData,
      ...warangalDiariesData,
      ...popularShortFilmsData,
      ...FightManiaData,
      ...VlogSeriesData,
      ...kannadWebseriesData,
      ...teluguWebseriesData,
    ];
    setCombinedData(allData);
  }, []);

  useEffect(() => {
    if (idMatch && titleMatch) {
      const filtered = combinedData.filter((item) => {
        const isIdMatch = item.id?.toString() === idMatch;
        const isTitleMatch = item.title
          ?.toLowerCase()
          .includes(titleMatch.toLowerCase());
        return isIdMatch && isTitleMatch;
      });
      setFilteredData(filtered);
    }
  }, [idMatch, titleMatch, combinedData]);

  useEffect(() => {
    const updateArrowButtonsVisibility = () => {
      const totalItems = PopularOnShorts.length;
      const { slidesToShow } = settings.responsive.find(
        (breakpoint) => window.innerWidth <= breakpoint.breakpoint
      )?.settings || { slidesToShow: 5 };
      setShowArrowButtons(totalItems > slidesToShow);
    };
    updateArrowButtonsVisibility();
    window.addEventListener("resize", updateArrowButtonsVisibility);
    return () =>
      window.removeEventListener("resize", updateArrowButtonsVisibility);
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
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

  if (!filteredData.length) {
    return <div>not found!</div>;
  }

  const handleViewAll = () => {
    console.log("View All");
  };

  return (
    <div>
      {filteredData.map((Item) => {
        const heading = PopularOnShorts.some((movie) => movie.title === Item.title)
          ? "Popular on Shorts"
          : newlyAddedVideoData.some((movie) => movie.title === Item.title)
          ? "Newly Added Video"
           : wirallyComicalData.some((movie) => movie.title === Item.title)
          ? "Wirally Comical"
           : warangalDiariesData.some((movie) => movie.title === Item.title)
          ? "Warangal Diaries"
          : popularShortFilmsData.some((movie) => movie.title === Item.title)
          ? "Popular Short Films"
           : FightManiaData.some((movie) => movie.title === Item.title)
          ? "Fight Mania"
           : VlogSeriesData.some((movie) => movie.title === Item.title)
          ? "Vlog Series"
           : kannadWebseriesData.some((movie) => movie.title === Item.title)
          ? "Kannada Web-Series"
          : teluguWebseriesData.some((movie) => movie.title === Item.title)
          ? "Telugu Web-Series"
          : "Shorts";
          
        return (
          <CommonCardDetailView
            key={Item.id}
            heading={
              <Link href="/shorts">
                <div className="hover:text-white">{heading}</div>
              </Link>
            }
            img={Item.img || ""}
            title={Item.title || ""}
            description={Item.description || ""}
            rating={Item.rating || 0}
            language={Item.language || ""}
            year={Item.year || ""}
            genre={Item.genre || []}
            subtitles={Item.subtitles || []}
            director={Item.director || ""}
            producer={Item.producer || ""}
            type={Item.type || ""}
            duration={Item.duration || ""}
            age={Item.age || ""}
            trailer={Item.trailer || ""}
          />
        );
      })}

      <div>
        <CommonViewSection
          sliderRef={sliderRef}
          cartTitle="Shorts"
          ViewAll={handleViewAll}
          cardSlideCarouselButton={showArrowButtons}
          searchShowSlideViewAllButton={true}
        />
        <Slider ref={sliderRef} {...settings} className="h-60">
          {PopularOnShorts.map((item) => (
            <CommonHorizontalCard
              key={item.id}
              img={item.img}
              title={item.title}
              description={`${item.language} | ${item.genre} | ${item.duration}`}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShortsDetail;
