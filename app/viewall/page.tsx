"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import TvShows from "../content/homePageData/TvShowsData";
import Image from "next/image";
import CommonViewSection from "../common/CommonViewSection";
import newOnMovies from "../content/homePageData/newOnSectionData";
import PopularOnShorts from "../content/homePageData/PopularOnShortsData";
import recommendedSectionData from "../content/homePageData/recommendedSectionData";
import comedySectionData from "../content/homePageData/comedySectionData";
import LatestTvShowsData from "../content/homePageData/latestTvShowsData";
import RecentMovieData from "../content/homePageData/recentAddMoviesData";
import LatestSongs from "../content/homePageData/LatestSongsData";
import { useRouter } from "next/navigation";

const ViewAllPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const getCategoryData = (category: string) => {
    switch (category) {
      case "TV Show":
        return TvShows;
      case "New On Visto":
        return newOnMovies;
      case "Popular On Shorts":
        return PopularOnShorts;
      case "Recommended For YOU":
        return recommendedSectionData;
      case "Comedy Celebration":
        return comedySectionData;
      case "Latest Episodes":
        return LatestTvShowsData;
      case "Recent Added Movie":
        return RecentMovieData;
      case "Latest Songs":
        return LatestSongs;
      default:
        return [];
    }
  };

  if (!category) {
    return <p>Loading...</p>;
  }

  const categoryData = getCategoryData(category);

  const filteredData = categoryData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleClick = (id: number, category: string,title:string) => {
    if (category === "TV Show") {
      router.push(`/tvshow/${id}/${title}`);
    } else if (category === "New On Visto") {
      router.push(`/movie/${id}/${title}`);
    } else if (category === "Popular On Shorts") {
      router.push(`/shorts/${id}/${title}`);
    } else if (category === "Recommended For YOU") {
      router.push(`/movie/${id}/${title}`);
    } else if (category === "Comedy Celebration") {
      router.push(`/movie/${id}/${title}`);
    } else if (category === "Latest Episodes") {
      router.push(`/tvshow/${id}/${title}`);
    } else if (category === "Recent Added Movie") {
      router.push(`/movie/${id}/${title}`);
    } else if (category === "Latest Songs") {
      router.push(`/music/${id}/${title}`);
    } else {
      return [];  
    }
  };
  return (
    <div className="my-6">
      <CommonViewSection
        cartTitle={category}
        genre={true}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-7 px-4 py-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="relative">
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={100}
                className="rounded-lg w-full sm:h-36 2xl:h-48 object-cover"
                onClick={() => handleClick(item.id, category,item.title)}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-white">
            No items found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllPage;
