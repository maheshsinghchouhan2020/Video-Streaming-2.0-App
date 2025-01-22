"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import CommonCardDetailView from "../../common/CommonCardDetailView";
import CommonHorizontalCard from "../../common/CommonHorizontalCard";
import CommonViewSection from "../../common/CommonViewSection";
import LatestTvShowsData from "../../content/homePageData/latestTvShowsData";
import tvshowdata from "../../content/homePageData/TvShowsData";
import trendingShowsSectionData from "@/app/content/tvShowData/trendingShowSectionData";
import BrowseByYearData from "@/app/content/tvShowData/browseByYearSectionData";
import RecommenedForYouData from "@/app/content/tvShowData/recommendedForYouSectionData";
import LatestEpisodesData from "@/app/content/tvShowData/latestEpisodesSectionData";
import hindiTvShowsSectionData from "@/app/content/tvShowData/hindiTvShowsSectionData";
import serialPreviewsSectionData from "@/app/content/tvShowData/serialPreviewsSectionData";
import tvCollectionsSectionData from "@/app/content/tvShowData/tvCollectionsSectionData";
import festivalCollectionsSectionData from "@/app/content/tvShowData/festivalCollectionsSectionData";
import Link from "next/link";

interface TvShowDetailData {
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

const TvShowDetail: FC = () => {
  const [combinedData, setCombinedData] = useState<TvShowDetailData[]>([]);
  const [filteredData, setFilteredData] = useState<TvShowDetailData[]>([]);
  const sliderRef = useRef<Slider | null>(null);
  const [showArrowButtons, setShowArrowButtons] = useState(false);

  const pathname = usePathname();
  const match = pathname?.match(/\/tvshow\/(\d+)\/(.+)/);
  const idMatch = match ? match[1] : null; // Extracted ID
  const titleMatch = match ? decodeURIComponent(match[2]) : null;

  useEffect(() => {
    const allData = [
      ...LatestTvShowsData,
      ...tvshowdata,
      ...trendingShowsSectionData,
      ...BrowseByYearData,
      ...RecommenedForYouData,
      ...LatestEpisodesData,
      ...hindiTvShowsSectionData,
      ...serialPreviewsSectionData,
      ...tvCollectionsSectionData,
      ...festivalCollectionsSectionData,
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
      const totalItems = tvshowdata.length;
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
    return <div>Music not found!</div>;
  }

  const handleViewAll = () => {
    console.log("View All");
  };

  return (
    <div>
      {filteredData.map((Item) => {
        // Dynamically set heading based on which dataset the movie belongs to
        const heading = tvshowdata.some((movie) => movie.title === Item.title)
          ? "TV Show"
          : LatestTvShowsData.some((movie) => movie.title === Item.title)
          ? "Latest Episodes"
          : trendingShowsSectionData.some((movie) => movie.title === Item.title)
          ? "Trending Shows"
          : BrowseByYearData.some((movie) => movie.title === Item.title)
          ? "Browse By Year"
          : RecommenedForYouData.some((movie) => movie.title === Item.title)
          ? "Recommended for You"
          : LatestEpisodesData.some((movie) => movie.title === Item.title)
          ? "Latest Episodes"
          : hindiTvShowsSectionData.some((movie) => movie.title === Item.title)
          ? "Hindi TV Shows"
          : serialPreviewsSectionData.some(
              (movie) => movie.title === Item.title
            )
          ? "Serial Previews"
          : tvCollectionsSectionData.some((movie) => movie.title === Item.title)
          ? "TV Collections"
          : festivalCollectionsSectionData.some(
              (movie) => movie.title === Item.title
            )
          ? "Festival Collections"
          : "TV Show";
          
        return (
          <CommonCardDetailView
            key={Item.id}
            heading={
              <Link href="/tvshow">
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
          cartTitle="Tv Shows"
          ViewAll={handleViewAll}
          cardSlideCarouselButton={showArrowButtons}
          searchShowSlideViewAllButton={true}
        />
        <Slider ref={sliderRef} {...settings} className="h-60">
          {tvshowdata.map((item) => (
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

export default TvShowDetail;
