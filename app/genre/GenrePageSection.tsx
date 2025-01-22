"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { homeBannerMovies } from "../content/homePageData/homeBannerSectionData";
import LatestSongs from "../content/homePageData/LatestSongsData";
import LatestTvShows from "../content/homePageData/latestTvShowsData";
import newOnMovies from "../content/homePageData/newOnSectionData";
import PopularOnShorts from "../content/homePageData/PopularOnShortsData";
import recentAddMovies from "../content/homePageData/recentAddMoviesData";
import TVShows from "../content/homePageData/TvShowsData";
import comedySectionData from "../content/homePageData/comedySectionData";
import CommonViewSection from "../common/CommonViewSection";
import recommendedSectionData from "../content/homePageData/recommendedSectionData";
import awardsSectionData from "../content/musicPageData/awardsSectionData";
import jukeBoxSectionData from "../content/musicPageData/jukeBoxSectionData";
import musicAlbumsSectionData from "../content/musicPageData/musicAlbumsSectionData";
import musicalHitsSectionData from "../content/musicPageData/musicalHitsSectionData";
import { musicBannerNewSectionData } from "../content/musicPageData/musicBannerNewSectionData";
import musicLatestSongsSectionData from "../content/musicPageData/musicLatestSongsSectionData";
import ostJukeBoxSectionData from "../content/musicPageData/ostJukeBoxSectionData";
import newlyAddedVideoData from "../content/shortSectionData/newlyAddedVideoData";
import popularShortFilmsData from "../content/shortSectionData/popularShortFilmsData";
import {viewAllEpisodeDetailsPageData} from "../content/viewAllEpisodePageData/viewAllEpisodeDetailsPageData";

const allSectionsData = [
  ...homeBannerMovies.map((item) => ({
    ...item,
    id: `homeBannerMovies-${item.id}`,
  })),
  ...LatestSongs.map((item) => ({ ...item, id: `LatestSongs-${item.id}` })),
  ...LatestTvShows.map((item) => ({ ...item, id: `LatestTvShows-${item.id}` })),
  ...newOnMovies.map((item) => ({ ...item, id: `newOnMovies-${item.id}` })),
  ...PopularOnShorts.map((item) => ({
    ...item,
    id: `PopularOnShorts-${item.id}`,
  })),
  ...recentAddMovies.map((item) => ({
    ...item,
    id: `recentAddMovies-${item.id}`,
  })),
  ...TVShows.map((item) => ({ ...item, id: `TVShows-${item.id}` })),
  ...comedySectionData.map((item) => ({
    ...item,
    id: `comedySectionData-${item.id}`,
  })),
  ...recommendedSectionData.map((item) => ({
    ...item,
    id: `recommendedSectionData-${item.id}`,
  })),
  ...awardsSectionData.map((item) => ({
    ...item,
    id: `awardsSectionData-${item.id}`,
  })),
  ...jukeBoxSectionData.map((item) => ({
    ...item,
    id: `jukeBoxSectionData-${item.id}`,
  })),
  ...musicAlbumsSectionData.map((item) => ({
    ...item,
    id: `musicAlbumsSectionData-${item.id}`,
  })),
  ...musicalHitsSectionData.map((item) => ({
    ...item,
    id: `musicalHitsSectionData-${item.id}`,
  })),
  ...musicBannerNewSectionData.map((item) => ({
    ...item,
    id: `musicBannerNewSectionData-${item.id}`,
  })),
  ...musicLatestSongsSectionData.map((item) => ({
    ...item,
    id: `musicLatestSongsSectionData-${item.id}`,
  })),
  ...ostJukeBoxSectionData.map((item) => ({
    ...item,
    id: `ostJukeBoxSectionData-${item.id}`,
  })),
  ...newlyAddedVideoData.map((item) => ({
    ...item,
    id: `newlyAddedVideoData-${item.id}`,
  })),
  ...popularShortFilmsData.map((item) => ({
    ...item,
    id: `popularShortFilmsData-${item.id}`,
  })),
  ...viewAllEpisodeDetailsPageData.map((item) => ({
    ...item,
    id: `viewAllEpisodeDetailsPageData-${item.id}`,
  })),
];

const fallbackImg = "/path-to-default-image.jpg";

const GenrePageSection = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(allSectionsData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedGenres = localStorage.getItem("selectedGenres");
    const storedFilteredData = localStorage.getItem("filteredData");

    if (storedGenres) {
      setSelectedGenres(JSON.parse(storedGenres));
    }
    if (storedFilteredData) {
      setFilteredData(JSON.parse(storedFilteredData));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
      localStorage.setItem("filteredData", JSON.stringify(filteredData));
    }
  }, [selectedGenres, filteredData, loading]);

  const dynamicGenres = useMemo(() => {
    const genres = new Set<string>();
    allSectionsData.forEach((item) => {
      if (Array.isArray(item.genre)) {
        item.genre.forEach((g) => {
          g.split(",").forEach((splitGenre) => genres.add(splitGenre.trim()));
        });
      } else if (typeof item.genre === "string") {
        item.genre
          .split(",")
          .forEach((splitGenre) => genres.add(splitGenre.trim()));
      }
    });
    return ["All Genres", ...Array.from(genres)];
  }, []);

  const handleGenreSelect = (genre: string) => {
    if (genre === "All Genres") {
      setSelectedGenres([]);
    } else {
      setSelectedGenres((prev) =>
        prev.includes(genre)
          ? prev.filter((g) => g !== genre)
          : [...prev, genre]
      );
    }
  };

  const applyFilter = () => {
    let filtered = allSectionsData;

    if (selectedGenres.length > 0) {
      filtered = filtered.filter((item) =>
        selectedGenres.some((genre) => {
          if (typeof item.genre === "string") {
            return item.genre.toLowerCase().includes(genre.toLowerCase());
          } else if (Array.isArray(item.genre)) {
            return item.genre.some((g) =>
              g.toLowerCase().includes(genre.toLowerCase())
            );
          }
          return false;
        })
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.language?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (Array.isArray(item.genre)
            ? item.genre.some((g) =>
                g.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : typeof item.genre === "string" &&
              item.genre.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredData(filtered);
  };

  const cancelFilter = () => {
    setSelectedGenres([]);
    setSearchQuery("");
    setFilteredData(allSectionsData);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchQuery(term);
    let filtered = allSectionsData;

    if (term) {
      filtered = filtered.filter(
        (item) =>
          item.title?.toLowerCase().includes(term.toLowerCase()) ||
          item.language?.toLowerCase().includes(term.toLowerCase()) ||
          (Array.isArray(item.genre)
            ? item.genre.some((g) =>
                g.toLowerCase().includes(term.toLowerCase())
              )
            : typeof item.genre === "string" &&
              item.genre.toLowerCase().includes(term.toLowerCase()))
      );
    }
    setFilteredData(filtered);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#2D2D39]">
        <div className="text-white flex flex-wrap gap-4 px-4 py-4">
          {dynamicGenres.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreSelect(genre)}
              className={`${
                selectedGenres.includes(genre) ||
                (genre === "All Genres" && selectedGenres.length === 0)
                  ? "bg-[#A80929]"
                  : "bg-[#232323]"
              } rounded-full px-4 py-2 hover:bg-[#A80929] transition-transform transform hover:scale-105`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Cancel and Apply Buttons */}
        <div className="flex justify-end gap-4 px-4 py-4">
          <button
            onClick={cancelFilter}
            className="bg-[#3E3E49] border border-gray-300 rounded-full px-4 py-2 text-white transition-transform transform hover:scale-110"
          >
            Cancel
          </button>
          <button
            onClick={applyFilter}
            className=" rounded-full px-4 py-2 bg-[#A80929] text-white transition-transform transform hover:scale-110"
          >
            Apply
          </button>
        </div>
      </div>

      <CommonViewSection
        cartTitle="New on Visto"
        genre={true}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 px-4 py-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="relative">
              <Image
                src={item.img || fallbackImg}
                alt={item.title || "Image"}
                width={200}
                height={100}
                loading="lazy"
                className="rounded-lg h-68 sm:h-32 2xl:h-60 w-full object-cover"
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-white">
            Data not available
          </div>
        )}
      </div>
    </div>
  );
};

export default GenrePageSection;
