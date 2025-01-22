import FightMania from "./fightMania/page";
import KannadaWebseries from "./kannadaWebseries/page";
import NewlyAddedVideo from "./NewlyAddedVideos/page";
import PopularShortFilms from "./popularShortFilms/page";
import ShortCarouselSection from "./ShortCarousalSection/page";
import TeluguWebseries from "./teluguWebseries/page";
import VlogSeries from "./vlogSeries/page";
import WarangalDiaries from "./warangalDiaries/page";
import WirallyComical from "./wirallyComical/page";

const Shorts = () => {
  return (
    <>
      <div>
        <ShortCarouselSection />
      </div>
      <div>
        <NewlyAddedVideo />
      </div>
      <div>
        <WirallyComical />
      </div>
      <div>
        <WarangalDiaries />
      </div>
      <div>
        <PopularShortFilms />
      </div>
      <div>
        <FightMania />
      </div>
      <div>
        <VlogSeries />
      </div>
      <div>
        <KannadaWebseries/>
      </div>
      <div>
        <TeluguWebseries/>
      </div>
    </>
  );
};

export default Shorts;
