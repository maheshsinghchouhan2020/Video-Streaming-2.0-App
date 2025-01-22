"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import CommonCardDetailView from "../../common/CommonCardDetailView";
import CommonHorizontalCard from "../../common/CommonHorizontalCard";
import CommonViewSection from "../../common/CommonViewSection";
import recentAddMovies from "../../content/homePageData/recentAddMoviesData";
import NewOnData from "../../content/homePageData/newOnSectionData";
import recommendedSectionData from "../../content/homePageData/recommendedSectionData";
import comedySectionData from "@/app/content/homePageData/comedySectionData";
import Link from "next/link";
interface MovieDetailData {
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
const MovieDetail: FC = () => {
  const [combinedData, setCombinedData] = useState<MovieDetailData[]>([]);
  const [filteredData, setFilteredData] = useState<MovieDetailData[]>([]);
  const sliderRef = useRef<Slider | null>(null);
  const [showArrowButtons, setShowArrowButtons] = useState(false);
  const pathname = usePathname();
  const match = pathname?.match(/\/movie\/(\d+)\/(.+)/);
  const idMatch = match ? match[1] : null; // Extracted ID
  const titleMatch = match ? decodeURIComponent(match[2]) : null;
  useEffect(() => {
    const allData = [
      ...recentAddMovies,
      ...NewOnData,
      ...recommendedSectionData,
      ...comedySectionData,
    ];
    setCombinedData(allData);
  }, []);
  useEffect(() => {
    console.log("idMatch:", idMatch, "titleMatch:", titleMatch);
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
      const totalItems = recentAddMovies.length;
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
        // Dynamically set heading based on which dataset the movie belongs to
        const heading = recentAddMovies.some(
          (movie) => movie.title === Item.title
        )
          ? "Recent Added Movie"
          : NewOnData.some((movie) => movie.title === Item.title)
          ? "New On Visto"
          : recommendedSectionData.some((movie) => movie.title === Item.title)
          ? "Recommended for You"
            : comedySectionData.some((movie) => movie.title === Item.title)
          ? "Comedy Celebration"
          : "Movie";

        return (
          <CommonCardDetailView
            key={Item.id}
            heading={
              <Link href="/">
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
          cartTitle="Movies"
          ViewAll={handleViewAll}
          cardSlideCarouselButton={showArrowButtons}
          searchShowSlideViewAllButton={true}
        />
        <Slider ref={sliderRef} {...settings} className="h-60">
          {recentAddMovies.map((item) => (
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
export default MovieDetail;
