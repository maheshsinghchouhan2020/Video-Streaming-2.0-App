"use client"
import React, { ChangeEvent, useState } from "react";
import Image, { StaticImageData } from "next/image";

// component
import CommonViewSection from "../common/CommonViewSection";
import ActorsSection from "./ActorsSection";
import RecentAddMovies from "../components/RecentAddMovies";
import TvShowsSection from "../components/TvShowsSection";
import LatestSongsSection from "../components/LatestSongsSection";
import ComedySection from "../components/ComedySection";
import PopularOnShortsSection from "../components/PopularOnShortsSection";

// Data
import { homeBannerMovies } from "../content/homePageData/homeBannerSectionData";
import actorsData from "../content/navbarSearchPageData/actorsSectionData";
import recentAddMovies from "../content/homePageData/recentAddMoviesData";
import TVShows from "../content/homePageData/TvShowsData";
import LatestSongs from "../content/homePageData/LatestSongsData";
import comedySectionData from "../content/homePageData/comedySectionData";
import PopularOnShorts from "../content/homePageData/PopularOnShortsData";
import { languageConst, LanguageProps } from "../constantData/languageConst";

// Icon
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiLanguage } from "react-icons/hi2";

interface CastMember {
  actor: string;
  role: string;
}

interface Item {
  age: string;
  id: string;
  title: string;
  img: string | StaticImageData;
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
  trailer: string;
}

// Combine all section data
const allSectionsData = [
  ...homeBannerMovies.map((item) => ({
    ...item,
    id: `homeBannerMovies-${item.id}`,
  })),
  ...actorsData.map((item) => ({ ...item, id: `Actor-${item.id}` })),
  ...recentAddMovies.map((item) => ({
    ...item,
    id: `recentAddMovies-${item.id}`,
  })),
  ...TVShows.map((item) => ({ ...item, id: `TVShows-${item.id}` })),
  ...LatestSongs.map((item) => ({ ...item, id: `LatestSongs-${item.id}` })),
  ...comedySectionData.map((item) => ({ ...item, id: `Comedy-${item.id}` })),
  ...PopularOnShorts.map((item) => ({
    ...item,
    id: `PopularOnShorts-${item.id}`,
  })),
];

const SearchNavbarPage = () => {
  const [languages, setLanguages] = useState<LanguageProps[]>(languageConst);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [showMoreCard, setShowMoreCard] = useState<boolean>(false);
  const [noResultsMessage, setNoResultsMessage] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  // filter data state
  const [homeBannerMoviesState, setHomeBannerMoviesState] = useState<Item[]>(
    []
  );
  const [actorState, setActorState] = useState<Item[]>([]);
  const [recentAddMoviesState, setRecentAddMoviesState] = useState<Item[]>([]);
  const [tvShowsState, setTvShowsState] = useState<Item[]>([]);
  const [latestSongsState, setLatestSongsState] = useState<Item[]>([]);
  const [comedyState, setComedyState] = useState<Item[]>([]);
  const [popularOnShortsState, setPopularOnShortsState] = useState<Item[]>([]);

  // Categorize filtered results into their respective states
  const categorizeFilteredResults = (results: Item[]) => {
    const homeBannerMovies: Item[] = [];
    const actor: Item[] = [];
    const recentAddMovies: Item[] = [];
    const tvShows: Item[] = [];
    const latestSongs: Item[] = [];
    const comedy: Item[] = [];
    const popularOnShorts: Item[] = [];

    results.forEach((item) => {
      if (item.id.startsWith("homeBannerMovies")) {
        homeBannerMovies.push(item);
      } else if (item.id.startsWith("Actor")) {
        actor.push(item);
      } else if (item.id.startsWith("recentAddMovies")) {
        recentAddMovies.push(item);
      } else if (item.id.startsWith("TVShows")) {
        tvShows.push(item);
      } else if (item.id.startsWith("LatestSongs")) {
        latestSongs.push(item);
      } else if (item.id.startsWith("Comedy")) {
        comedy.push(item);
      } else if (item.id.startsWith("PopularOnShorts")) {
        popularOnShorts.push(item);
      }
    });

    // Set state dynamically
    setHomeBannerMoviesState(homeBannerMovies);
    setActorState(actor);
    setRecentAddMoviesState(recentAddMovies);
    setTvShowsState(tvShows);
    setLatestSongsState(latestSongs);
    setComedyState(comedy);
    setPopularOnShortsState(popularOnShorts);
  };

  // Toggle language selection
  const toggleLanguage = (lang: string) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((language) =>
        language.label === lang
          ? { ...language, selected: !language.selected }
          : language
      )
    );
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleApply = () => {
    setIsDropdownOpen(false);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);

    if (!searchTerm) {
      setShowMoreCard(false);
      setHomeBannerMoviesState([]);
      setActorState([]);
      setRecentAddMoviesState([]);
      setTvShowsState([]);
      setLatestSongsState([]);
      setComedyState([]);
      setPopularOnShortsState([]);
    } else {
      setShowMoreCard(true);
      const filtered = allSectionsData.filter((item) => {
        // Use a type guard to narrow the type
        // const hasLanguage = () => {
        //   return "language" in item && typeof item.language === "string";
        // };

        return item.title.toLowerCase().includes(searchTerm);
        // ||
        // (hasLanguage() &&
        //   item.language.toLowerCase().includes(searchTerm))
      });

      if (filtered.length === 0) {
        setShowMoreCard(false);
        setNoResultsMessage(true);
      } else {
        setNoResultsMessage(false);
        categorizeFilteredResults(filtered as Item[]);
      }
    }
  };

  // console.log("homeBannerMoviesState", homeBannerMoviesState);
  // console.log("setActorState", setActorState);
  // console.log("recentAddMoviesState", recentAddMoviesState);
  // console.log("tvShowsState", tvShowsState);
  // console.log("latestSongsState", latestSongsState);
  // console.log("setComedyState", setComedyState);
  // console.log("popularOnShortsState", popularOnShortsState);

  const handleSearchAgain = () => {
    setSearchText("");
    window.location.reload();
  };

  return (
    <>
      <div className="flex flex-col items-center custom-container px-2 min-h-fit">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-6 w-full sm:w-fit">
          <div className="relative my-6 bg-transparent border border-white rounded-full w-full sm:w-[500px]">
            <input
              type="text"
              value={searchText}
              placeholder="Search Movies, Shows, Actors or Channels"
              onChange={handleSearch}
              className="bg-transparent px-4 py-2 w-full rounded-full border-none pr-10 placeholder-gray-400 text-white"
            />
            <IoSearch
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
            />
          </div>

          <div className="relative w-full sm:w-fit">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center gap-1 border border-white rounded-full px-4 py-2 hover:bg-vividRed hover:border-vividRed text-white w-full"
            >
              <HiLanguage size={18} />
              <span className="ml-1">Languages</span>
              <span
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                } flex items-center`}
              >
                <IoMdArrowDropdown size={22} />
              </span>
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full w-full bg-vividRed shadow-lg rounded-xl mt-2 z-10">
                <div className="p-2">
                  <ul className="space-y-1">
                    {languages.map((lang) => (
                      <li
                        key={lang.label}
                        className="flex items-center gap-2 hover:bg-darkRed p-1 rounded cursor-pointer"
                        onClick={() => toggleLanguage(lang.label)}
                      >
                        <input
                          type="checkbox"
                          className="accent-brightYellow"
                          id={lang.label}
                          checked={lang.selected}
                          onChange={() => toggleLanguage(lang.label)}
                        />
                        <label
                          htmlFor={lang.label}
                          className="cursor-pointer text-white h7"
                        >
                          {lang.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleApply}
                    className="block w-full px-4 py-1 bg-white text-darkRed rounded-full mt-2 h7 text-center"
                  >
                    Apply
                  </button>
                  <button
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on cancel
                    className="block w-full px-4 py-1 bg-transparent text-white rounded-full mt-2 h7 text-center border"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {noResultsMessage ? (
          <>
            <div className="text-white flex flex-col justify-center items-center gap-4 py-4">
              <div className="font-semibold">No Results Found</div>
              <div>
                <div>
                  We don´t have results for the content you´re looking for.
                </div>
                <div>
                  Please check the spelling or search for something else.
                </div>
              </div>

              <button
                className="rounded-full py-2 px-4 bg-vividRed cursor-pointer"
                onClick={handleSearchAgain}
              >
                Search Again
              </button>
            </div>
          </>
        ) : (
          <>
            {!showMoreCard && (
              <>
                <div className="w-full mt-8">
                  <CommonViewSection
                    cartTitle="Trending Search"
                    searchShowSlideViewAllButton={false}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 py-6 ">
                  {homeBannerMoviesState.length > 0 ? (
                    <>
                      {homeBannerMoviesState.map((item) => (
                        <Image
                          key={item.id}
                          src={item.img}
                          alt={""}
                          loading="lazy"
                          className="rounded-md"
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      {homeBannerMovies.map((item) => (
                        <Image
                          key={item.id}
                          src={item.img}
                          alt={""}
                          loading="lazy"
                          className="rounded-md"
                        />
                      ))}
                    </>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
      {!noResultsMessage && (
        <>
          {showMoreCard && (
            <>
              <div className="text-white flex flex-col gap-2 custom-container">
                {/* ARTISTS */}
                {actorState.length > 0 && (
                  <>
                    <ActorsSection
                      SearchProps={true}
                      SearchCartTitle="ARTISTS"
                      SearchCardData={actorState}
                    />
                  </>
                )}
                {/* MOVIES */}
                {recentAddMoviesState.length > 0 && (
                  <>
                    <RecentAddMovies
                      SearchCartTitle="MOVIES"
                      SearchCardData={recentAddMoviesState}
                    />
                  </>
                )}
                {/* TV SHOWS */}
                {tvShowsState.length > 0 && (
                  <>
                    <TvShowsSection
                      SearchCartTitle="TV SHOWS"
                      SearchCardData={tvShowsState}
                    />
                  </>
                )}
                {/* MUSIC VIDEOS */}
                {latestSongsState.length > 0 && (
                  <>
                    <LatestSongsSection
                      SearchCartTitle="MUSIC VIDEOS"
                      SearchCardData={latestSongsState}
                    />
                  </>
                )}
                {/* Comedy */}
                {comedyState.length > 0 && (
                  <>
                    <ComedySection
                      SearchCartTitle="Comedy"
                      SearchCardData={comedyState}
                    />
                  </>
                )}
                {/* SHORTS */}
                {popularOnShortsState.length > 0 && (
                  <>
                    <PopularOnShortsSection
                      SearchCartTitle="SHORTS"
                      SearchCardData={popularOnShortsState}
                    />
                  </>
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SearchNavbarPage;