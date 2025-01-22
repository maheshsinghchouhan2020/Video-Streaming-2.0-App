"use client"
import React, { useEffect, useRef, useState, useMemo } from "react";
import Slider from "react-slick";
import { StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";
import {tvShowBannerData} from "@/app/content/tvShowData/tvShowBannerSectionData";

import CommonCardDetailView from "../common/CommonCardDetailView";
import CommonHorizontalCard from "../common/CommonHorizontalCard";
import CommonViewSection from "../common/CommonViewSection";
import { useRouter } from "next/navigation";
import Link from "next/link";


interface HomeBannerMoviesData {
  id?: string | number;
  img?: string | StaticImageData;
  title?: string;
  description?: string;
  rating?: number;
  language?: string;
  year?: string;
  genre?: string[];
  subtitles?: string[];
  director?: string;
  producer?: string;
  type?: string;
  duration?: string;
  age?: string;
  trailer?: string;
}

const TVSectionDetailHero = () => {
  const sliderRef = useRef<Slider | null>(null);
    const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const title = searchParams.get("title");

  const [comedy, setComedy] = useState<HomeBannerMoviesData | null>(null);
  const [showArrowButtons, setShowArrowButtons] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const ranges = Array.from(
    { length: Math.ceil(tvShowBannerData.length / 5) },
    (_, index) => {
      const start = index * 5;
      return { start, end: Math.min(start + 5, tvShowBannerData.length) };
    }
  );

  const [visibleRange, setVisibleRange] = useState<[number, number]>([
    ranges[ranges.length - 1].start,
    ranges[ranges.length - 1].end,
  ]);

  const filteredData = useMemo(() => {
    return tvShowBannerData.slice(visibleRange[0], visibleRange[1]);
  }, [visibleRange]);

  useEffect(() => {
    const fetchMovieDetails = () => {
      if (id) {
        const selectedMovie = tvShowBannerData.find(
          (movie) => movie.id.toString() === id
        );
        if (selectedMovie) {
          setComedy(selectedMovie);
        } else {
          setComedy(null); 
        }
      } else {
        setComedy(null); 
      }
      setLoading(false); 
    };

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    const updateArrowButtonsVisibility = () => {
      const totalItems = filteredData.length;
      const { slidesToShow } = settings.responsive.find(
        (breakpoint) => window.innerWidth <= breakpoint.breakpoint
      )?.settings || { slidesToShow: 5 };
      setShowArrowButtons(totalItems > slidesToShow);
    };

    updateArrowButtonsVisibility();
    window.addEventListener("resize", updateArrowButtonsVisibility);
    return () =>
      window.removeEventListener("resize", updateArrowButtonsVisibility);
  }, [filteredData, settings.responsive]);

  const handleViewAll = () => {
    router.push(`/viewAllEpisodeDetails?title=${title}&id=${id}`);
    console.log("View All clicked!");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!comedy) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <CommonCardDetailView
        heading={
          <Link href="/tvshow" className="hover:underline hover:text-white">
            TV Show
          </Link>
        }
        img={comedy.img || "not found"}
        title={comedy.title || ""}
        description={comedy.description || ""}
        rating={comedy.rating || 0}
        language={comedy.language || ""}
        year={comedy.year || ""}
        genre={comedy.genre || []}
        subtitles={comedy.subtitles || []}
        director={comedy.director || ""}
        producer={comedy.producer || ""}
        type={comedy.type || ""}
        duration={comedy.duration || ""}
        age={comedy.age || ""}
        trailer={comedy.trailer || ""}
      />

      <div>
        <CommonViewSection
          sliderRef={sliderRef}
          cartTitle="Episodes"
          ViewAll={handleViewAll}
          buttonTypeViewAll={true}
          carouselEpisodeView={true}
          visibleRange={visibleRange}
          setVisibleRange={setVisibleRange}
          ranges={ranges}
          cardSlideCarouselButton={showArrowButtons}
          searchShowSlideViewAllButton={true}
        />

        <Slider ref={sliderRef} {...settings} className="h-60">
          {filteredData
            .slice()
            .reverse()
            .map((item) => (
              <CommonHorizontalCard
                key={item.id}
                img={item.img}
                title={item.title}
                description={`${item.language} | ${
                  Array.isArray(item.genre)
                    ? item.genre.join(", ")
                    : item.genre || "Unknown Genre"
                } | ${item.duration}`}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default TVSectionDetailHero;