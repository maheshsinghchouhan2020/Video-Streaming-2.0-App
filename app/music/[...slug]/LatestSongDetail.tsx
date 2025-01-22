"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import { usePathname } from 'next/navigation';

import CommonCardDetailView from "../../common/CommonCardDetailView";
import CommonHorizontalCard from "../../common/CommonHorizontalCard";
import CommonViewSection from "../../common/CommonViewSection";

import Latestsong from "../../content/homePageData/LatestSongsData";
import musicAlbumsSectionData from "../../content/musicPageData/musicAlbumsSectionData";
import musicLatestSongsSectionData from "../../content/musicPageData/musicLatestSongsSectionData";
import jukeBoxSectionData from "@/app/content/musicPageData/jukeBoxSectionData";
import ostJukeBoxSectionData from "@/app/content/musicPageData/ostJukeBoxSectionData";
import awardsSectionData from "@/app/content/musicPageData/awardsSectionData";
import musicalHitsSectionData from "@/app/content/musicPageData/musicalHitsSectionData";
import romanceManiaSectionData from "@/app/content/musicPageData/romanceManiaSectionData";
import danceFloorSectionData from "@/app/content/musicPageData/danceFloorSectionData";
import Link from "next/link";

interface LatestSongDetailData {
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

const LatestSongDetail: FC = () => {
  const [combinedData, setCombinedData] = useState<LatestSongDetailData[]>([]);
  const [filteredData, setFilteredData] = useState<LatestSongDetailData[]>([]);
  const sliderRef = useRef<Slider | null>(null);
  const [showArrowButtons, setShowArrowButtons] = useState(false);

  const pathname = usePathname();

  const match = pathname?.match(/\/music\/(\d+)\/(.+)/); 
  const idMatch = match ? match[1] : null; // Extracted ID
  const titleMatch = match ? decodeURIComponent(match[2]) : null; 

  useEffect(() => {
    const allData = [
      ...Latestsong,
      ...musicAlbumsSectionData,
      ...musicLatestSongsSectionData,
      ...jukeBoxSectionData,
      ...ostJukeBoxSectionData,
      ...awardsSectionData,
      ...musicalHitsSectionData,
      ...romanceManiaSectionData,
      ...danceFloorSectionData,
    ];
    setCombinedData(allData);
  }, []);

  useEffect(() => {
    if (idMatch && titleMatch) {
      const filtered = combinedData.filter((item) => {
        const isIdMatch = item.id?.toString() === idMatch;
        const isTitleMatch = item.title?.toLowerCase().includes(titleMatch.toLowerCase());
        return isIdMatch && isTitleMatch;
      });
      setFilteredData(filtered);
    }
  }, [idMatch, titleMatch, combinedData]);

  useEffect(() => {
    const updateArrowButtonsVisibility = () => {
      const totalItems = Latestsong.length;
      const { slidesToShow } = settings.responsive.find(
        (breakpoint) => window.innerWidth <= breakpoint.breakpoint
      )?.settings || { slidesToShow: 5 };
      setShowArrowButtons(totalItems > slidesToShow);
    };
    updateArrowButtonsVisibility();
    window.addEventListener("resize", updateArrowButtonsVisibility);
    return () =>
      window.removeEventListener("resize", updateArrowButtonsVisibility);
  }, );

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
    return <div>Music not found!</div>;
  }

  const handleViewAll = () => {
    console.log("View All");
  };

  return (
    <div>
      {filteredData.map((Item) => {
        const heading = Latestsong.some((movie) => movie.title === Item.title)
          ? "Latest Songs"
          : musicAlbumsSectionData.some((movie) => movie.title === Item.title)
          ? "Latest Music Albums"
          : musicLatestSongsSectionData.some(
              (movie) => movie.title === Item.title 
            )
          ? "Recommended For YOU"
          : jukeBoxSectionData.some((movie) => movie.title === Item.title)
          ? "Jukebox"
          : ostJukeBoxSectionData.some((movie) => movie.title === Item.title)
          ? "OST Jukebox"
          : awardsSectionData.some((movie) => movie.title === Item.title)
          ? "SIIMA AWARDS 2024 - Song Performance"
          : musicalHitsSectionData.some((movie) => movie.title === Item.title)
          ? "Musical Hits Of 2024"
          : romanceManiaSectionData.some((movie) => movie.title === Item.title)
          ? "ROMANCE MANIA"
          : danceFloorSectionData.some((movie) => movie.title === Item.title)
          ? "DANCE FLOOR"
          : "Music";

        return (
          <CommonCardDetailView
            key={Item.id}
            heading={
              <Link href="/music">
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
          cartTitle="Songs"
          ViewAll={handleViewAll}
          cardSlideCarouselButton={showArrowButtons}
          searchShowSlideViewAllButton={true}
        />
        <Slider ref={sliderRef} {...settings} className="h-60">
          {Latestsong.map((item) => (
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

export default LatestSongDetail;
