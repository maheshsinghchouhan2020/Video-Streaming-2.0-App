import BrowseByYear from "./browseByYearSection/page";
import CelebrityInterview from "./celebrityInterviewSection/page";
import FestivalCollections from "./FestivalCollections/page";
import HindiTvShowsSection from "./HindiTvShowsSection/page";
import LatestEpisode from "./latestEpisodeSection/page";
import RecommendedForYou from "./recommendedForYouSection/page";
import SerialPreviewsSection from "./SerialPreviewsSection/page";
import TrendingShows from "./trendingShowsSection/page";
import TvCarouselSection from "./TvCarouselSection/page";
import TVCollectionsSection from "./TVCollectionsSection/page";
import VistoMusicShots from "./vistoMusicShotsSection/page";

const TVShow = () => {
  return (
    <>
      <div>
        <TvCarouselSection />
      </div>
      <div>
        <TrendingShows />
      </div>
      <div>
        <BrowseByYear />
      </div>
      <div>
        <RecommendedForYou />
      </div>
      <div>
        <LatestEpisode />
      </div>
      <div>
        <HindiTvShowsSection />
      </div>
      <div>
        <SerialPreviewsSection />
      </div>
      <div>
        <VistoMusicShots />
      </div>
      <div>
        <CelebrityInterview />
      </div>
      <div>
        <TVCollectionsSection/>
      </div>
      <div>
        <FestivalCollections/>
      </div>
    </>
  );
};

export default TVShow;
