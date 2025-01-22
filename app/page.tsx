"use client"

import HeroCarouselSection from "./components/HeroCarouselSection";
import NewOnSection from "./components/NewOnSection";
import TvShowsSection from "./components/TvShowsSection";
import PopularOnShortsSection from "./components/PopularOnShortsSection";
import RecommendedSection from "./components/RecommendedSection";
import ComedySection from "./components/ComedySection";
import LatestEpisodeSection from "./components/LatestEpisodeSection";
import RecentAddMovies from "./components/RecentAddMovies";
import LatestSongsSection from "./components/LatestSongsSection";

import TvShows from "@/app/content/homePageData/TvShowsData";
import PopularOnShortsData from "@/app/content/homePageData/PopularOnShortsData";
import ComedySectionData from "@/app/content/homePageData/comedySectionData";
import RecentMovieData from "@/app/content/homePageData/recentAddMoviesData";
import LatestSongs from "@/app/content/homePageData/LatestSongsData";

const Home = () => {
  return (
    <>
      <div>
        <HeroCarouselSection />
      </div>
      <div>
        <NewOnSection />
      </div>
      <div>
        <TvShowsSection SearchCartTitle={"TV Show"} SearchCardData={TvShows} />
      </div>
      <div>
        <PopularOnShortsSection
          SearchCartTitle={"Popular On Shorts"}
          SearchCardData={PopularOnShortsData}
        />
      </div>
      <div>
        <RecommendedSection />
      </div>
      <div>
        <ComedySection
          SearchCartTitle={"Comedy Celebration"}
          SearchCardData={ComedySectionData}
        />
      </div>
      <div>
        <LatestEpisodeSection />
      </div>
      <div>
        <RecentAddMovies SearchCartTitle={"Recent Added Movie"} SearchCardData={RecentMovieData} />
      </div>
      <div>
        <LatestSongsSection SearchCartTitle={"Latest Songs"} SearchCardData={LatestSongs}/>
      </div>
    </>
  );
};

export default Home;