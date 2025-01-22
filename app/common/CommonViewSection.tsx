"use client";
import React, { ChangeEvent, FC, RefObject } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

import ArrowButton from "./CommonArrowButton";
import RangeCarouselSection from "../components/DetailView/RangeCarouselSection";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

interface Range {
  start: number;
  end: number;
}

interface CommonViewSectionProps {
  sliderRef?: RefObject<Slider | null>;
  cartTitle: string;
  ViewAll?: (category: string) => void;
  buttonTypeViewAll?: boolean;
  carouselEpisodeView?: boolean;
  visibleRange?: [number, number];
  setVisibleRange?: (range: [number, number]) => void;
  ranges?: Range[];
  cardSlideCarouselButton?: boolean;
  genre?: boolean;
  searchQuery?: string;
  handleSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  searchShowSlideViewAllButton?: boolean;
  artistViewAllButtonHide?: boolean;
}

const CommonViewSection: FC<CommonViewSectionProps> = ({
  sliderRef,
  cartTitle,
  ViewAll,
  buttonTypeViewAll,
  carouselEpisodeView,
  visibleRange,
  setVisibleRange,
  ranges,
  cardSlideCarouselButton,
  genre,
  searchQuery,
  handleSearch,
  searchShowSlideViewAllButton,
  artistViewAllButtonHide,
}) => {
  const router = useRouter();
  return (
    <>
      <div className=" flex flex-col">
        <div className="flex justify-between items-center px-2 mt-2 ">
          <div className="w-[70%] sm:w-fit flex items-center ">
            {genre ? (
              <>
                <div className="flex items-center justify-center py-2">
                  <button
                    className=" bg-black text-white p-2 bg-transparent hover:bg-vividRed hover:border-vividRed rounded-full "
                    onClick={() => router.push("/")}
                  >
                    <IoIosArrowBack size={22} />
                  </button>
                  <h1 className="h1 text-white font-bold inline-block pl-2 leading-[1.25]  sm:max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                    {cartTitle}
                  </h1>
                </div>
              </>
            ) : (
              <>
                <h1 className="h1  text-white font-bold inline-block border-l-4 border-pink-800 pl-2 leading-[1.25]  sm:max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                  {cartTitle}
                </h1>
              </>
            )}
          </div>
          {carouselEpisodeView && visibleRange && setVisibleRange && ranges && (
            <>
              <div className="hidden sm:flex items-center pt-2 sm:w-[50%] lg:w-[70%] xl:w-full  px-5 ">
                <RangeCarouselSection
                  visibleRange={visibleRange}
                  setVisibleRange={setVisibleRange}
                  ranges={ranges}
                />
              </div>
            </>
          )}

          {genre ? (
            <>
              <div className="relative hidden sm:block">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search by TV shows"
                  className="border rounded-full bg-transparent p-2 pl-10 py-2 text-white"
                />
                <IoSearch
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
                />
              </div>
            </>
          ) : (
            <>
              {searchShowSlideViewAllButton && (
                <>
                  <div className="flex items-center gap-4">
                    {cardSlideCarouselButton && (
                      <>
                        <ArrowButton
                          direction="prev"
                          onClick={() => {
                            if (sliderRef?.current) {
                              sliderRef.current.slickPrev();
                            }
                          }}
                        />
                        <ArrowButton
                          direction="next"
                          onClick={() => {
                            if (sliderRef?.current) {
                              sliderRef.current.slickNext();
                            }
                          }}
                        />
                      </>
                    )}

                    {!artistViewAllButtonHide && (
                      <>
                        {buttonTypeViewAll ? (
                          <div className="flex items-center cursor-pointer">
                            <button
                              className="flex text-brightYellow text-nowrap items-center "
                              aria-label="View all Episode"
                              onClick={() => ViewAll?.(cartTitle)}
                            >
                              View All Episode <IoIosArrowForward />
                            </button>
                          </div>
                        ) : (
                          <button
                            className="flex items-center text-white px-3 hover:bg-vividRed  rounded-full h7 border border-white hover:border-vividRed text-nowrap"
                            aria-label="View all"
                            onClick={() => ViewAll?.(cartTitle)}
                          >
                            View All <IoIosArrowForward className="ml-1" />
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
        {genre && (
          <>
            <div className="relative sm:hidden px-4">
              <input
                type="search"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search by TV shows"
                className="border rounded-full bg-transparent p-2 pl-10 py-2 text-white w-full"
              />
              <IoSearch
                size={20}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white"
              />
            </div>
          </>
        )}

        {carouselEpisodeView && visibleRange && setVisibleRange && ranges && (
          <div className="sm:hidden px-4 ">
            <RangeCarouselSection
              visibleRange={visibleRange}
              setVisibleRange={setVisibleRange}
              ranges={ranges}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CommonViewSection;
