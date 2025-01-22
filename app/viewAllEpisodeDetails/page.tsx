"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { FaCrown, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import viewAllEpisode1 from "../../public/assets/viewAllEpisodeAssets/viewAllEpisode1.webp";
import {
  CastDetail,
  EpisodeDetail,
  SeasonDetail,
  TvShowContent,
} from "../content/ContentInterfaces";
import { TvShowData } from "../content/viewAllEpisodePageData/viewAllEpisodeDetailsPageData";
import Link from "next/link";

const ViewAllEpisodeDetail = () => {
  const [showSortingOptions, setShowSortingOptions] = useState(false);
  // const [selectedRange, setSelectedRange] = useState<string>("1-5");
  // const [filteredEpisodes, setFilteredEpisodes] = useState(
  //   viewAllEpisodeDetailsPageData
  // );

  // new state's
  const [filteredTvShow, setFilteredTvShow] = useState<
    TvShowContent | TvShowContent[] | string | null
  >();
  const [seasonDetail, setSeasonDetail] = useState<SeasonDetail[]>([]);
  const [episodesDetail, setEpisodesDetail] = useState<EpisodeDetail[]>([]);
  const [castDetail, setCastDetail] = useState<CastDetail[]>([]);
  const [selectedRange, setSelectedRange] = useState({ start: 0, end: 5 });
  const [filteredEpisodes, setFilteredEpisodes] = useState<EpisodeDetail[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  // const ranges = useMemo(() => ["1-5", "6-10", "11-15", "16-20", "21-25"], []);

  useEffect(() => {
    if (id && title) {
      const matchedTvShow = TvShowData.find(
        (show) =>
          show.id === Number(id) &&
          show.title.toLowerCase() === title?.toLowerCase()
      );

      if (matchedTvShow) {
        setFilteredTvShow(matchedTvShow);
        setSeasonDetail(matchedTvShow.seasonDetail || []);
        const episodes = matchedTvShow.seasonDetail?.[0]?.episodesDetail || [];
        setEpisodesDetail(episodes);
        setCastDetail(matchedTvShow.seasonDetail?.[0]?.castDetail || []);
      } else {
        setFilteredTvShow("No matching data found");
      }
    }
  }, [id, title]);

  console.log("Filtered TV Show:", filteredTvShow);
  console.log("Season Detail:", seasonDetail);
  console.log("Cast Detail:", castDetail);
  // console.log("Episodes Detail:", episodesDetail);
  // console.log("episodesDetail Length:", episodesDetail.length);

  const filterEpisodes = useCallback(
    (range: { start: number; end: number }) => {
      const { start, end } = range;
      const filtered = episodesDetail.slice(start, end);
      setFilteredEpisodes(filtered);
    },
    [episodesDetail]
  );

  useEffect(() => {
    if (episodesDetail.length > 0) {
      filterEpisodes(selectedRange);
    }
  }, [episodesDetail, filterEpisodes, selectedRange]);

  useEffect(() => {
    const storedRange = localStorage.getItem("selectedRange");
    console.log("Stored range:", storedRange);

    if (storedRange) {
      try {
        const range = JSON.parse(storedRange);
        setSelectedRange(range);
        filterEpisodes(range);
      } catch (error) {
        console.error("Error parsing storedRange:", error); // Log parse error
        localStorage.removeItem("selectedRange"); // Remove invalid data
      }
    }
  }, [filterEpisodes]);

  const ranges = Array.from(
    { length: Math.ceil(episodesDetail.length / 5) },
    (_, index) => {
      const start = index * 5;
      return { start, end: Math.min(start + 5, episodesDetail.length) };
    }
  );

  // Handle range selection
  const handleRangeSelection = (range: { start: number; end: number }) => {
    setSelectedRange(range);
    setShowSortingOptions(false);
    localStorage.setItem("selectedRange", JSON.stringify(range));
    filterEpisodes(range);
  };

  const handleBackButton = () => {
    const url = `/detail?page=tv-show&title=${title}&id=${id}`;
    router.push(url);
  };

  const formatDuration = (duration: string): string => {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    if (seconds > 0) {
      return `${totalMinutes} mins ${seconds} sec`;
    }
    return `${totalMinutes} mins`;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };

    // Split the locale string and rearrange manually
    const formattedDate = date.toLocaleDateString("en-GB", options); // Use 'en-GB' for day-month-year order
    const [day, month, year] = formattedDate.split(" ");
    return `${day} ${month}. ${year}`;
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Blur */}
      <Image
        src={viewAllEpisode1}
        alt="Background Image"
        className="object-cover blur w-full h-auto absolute hidden sm:block"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative p-6 bg-opacity-75">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-sm text-white">
          <div>
            <Link href="/" className="hover:text-brightYellow">
              Home
            </Link>
          </div>
          <span>
            <IoChevronForward />
          </span>
          <div>
            <Link
              href="/tvshow"
              className="hover:underline hover:text-brightYellow"
            >
              TV Show
            </Link>
          </div>
          <span>
            <IoChevronForward />
          </span>
          <div>
            <div
              className="hover:text-brightYellow cursor-pointer"
              onClick={handleBackButton}
            >
              {title}
            </div>
          </div>
          <span>
            <IoChevronForward />
          </span>
          <div>
            <a href="#" className="hover:text-brightYellow">
              Ep {selectedRange.start + 1} - Ep {selectedRange.end}
            </a>
          </div>
        </div>

        {/* Title and Subscribe Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-4 gap-4">
          <div className="flex items-center">
            <button
              onClick={() => handleBackButton()}
              className="bg-[#3A7095] text-white p-1 rounded-full transform hover:scale-110 transition duration-300 sm:p-2 sm:text-base text-sm"
            >
              <IoIosArrowBack
                size={22}
                className="sm:text-[22px] text-[10px]"
              />
            </button>
            <div
              className="ml-4 text-lg md:text-3xl text-white font-semibold md:font-bold"
              style={{ textShadow: "0px 7px 6px black" }}
            >
              {title}
            </div>
          </div>
          <button className="bg-brightYellow flex-col items-center rounded-xl p-6 hidden sm:block">
            <div className="text-sm text-white opacity-85">
              Stream Live Sports and Ad-Free Originals
            </div>
            <div className="text-white flex items-center gap-9">
              <FaCrown size={36} />
              <div className="flex items-center">
                <span className="text-2xl font-bold">Subscribe Now</span>
                <IoChevronForward size={36} />
              </div>
            </div>
          </button>
        </div>

        {/* Additional Content */}
        <div className="hidden sm:block">
          <div className="flex flex-col md:flex-row justify-between mt-6 gap-6 items-center">
            <button className="bg-[#3E5B71] text-gray-300 rounded-full font-semibold text-lg px-10 py-2">
              All Episodes
            </button>
            <div className="text-white flex items-center gap-5">
              <span className="text-brightYellow text-xl font-semibold">
                Episodes
              </span>
              <button className="flex items-center gap-2 bg-[#3E5B71] text-gray-300 rounded-md p-1">
                <div>
                  Ep {selectedRange.start + 1} - Ep {selectedRange.end}
                </div>
                <RxCross2 />
              </button>
            </div>
            <button className="text-black rounded-full p-2 flex items-center justify-center bg-white w-48 gap-2">
              Latest Episode
              <FaCaretDown />
            </button>
          </div>
        </div>

        {/* Filter and Episode Detail Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Sorting Dropdown */}
          <div className="relative z-10">
            <button
              className="text-black rounded-full p-2 flex items-center justify-center bg-white w-48 gap-2"
              onClick={() => setShowSortingOptions((prev) => !prev)}
            >
              <span>
                Ep {selectedRange.start + 1} - Ep {selectedRange.end}
              </span>
              {showSortingOptions ? <FaCaretUp /> : <FaCaretDown />}
            </button>
            {showSortingOptions && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded-md w-48">
                {ranges.map((range) => (
                  <button
                    key={`${range.start}-${range.end}`}
                    className="block w-full text-left pl-16 py-2 hover:bg-gray-100"
                    onClick={() => handleRangeSelection(range)}
                  >
                    Ep {range.start + 1} - {range.end}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Episodes List */}
          <div className="flex flex-col gap-5">
            {filteredEpisodes.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row border border-transparent rounded-xl p-4 gap-4 bg-black bg-opacity-50 transform hover:scale-105 transition duration-300 cursor-pointer"
              >
                <div>
                  {item.assets.imageAssets.cardImage.verticalImage && (
                    <Image
                      src={item.assets.imageAssets.cardImage.verticalImage}
                      alt={item.episodeTitle || "Episode Image"}
                      height={200}
                      width={300}
                      className="rounded-xl"
                    />
                  )}
                </div>
                <div className="text-white flex-1">
                  <div className="flex gap-1 text-base">
                    <h1>{item.episodeNumber}.</h1>
                    <h1>{item.episodeTitle}</h1>
                  </div>
                  <div className="flex items-center gap-5 py-2 text-sm text-gray-300">
                    <button className="border border-gray-300 rounded-sm p-1">
                      FULL_HD
                    </button>
                    <span>{formatDuration(item.episodeDuration)}</span>
                    <span>{formatDate(item.episodeReleaseDate)}</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    {item.episodeDescription}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllEpisodeDetail;
