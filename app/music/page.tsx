import Awards2024Section from "./Awards2024Section/page";
import DanceFloorSection from "./DanceFloorSection/page";
import JukeBoxSection from "./JukeBoxSection/page";
import MusicAlbumsSection from "./MusicAlbumsSection/page";
import MusicalHits2024Section from "./MusicalHits2024Section/page";
import MusicCarouselSection from "./MusicCarouselSection/page";
import MusicLatestSongsSection from "./MusicLatestSongsSection/page";
import OstJukeBoxSection from "./OstJukeBoxSection/page";
import RomanceManiaSection from "./RomanceManiaSection/page";

const Music = () => {
  return (
    <div>
      <MusicCarouselSection />
      <MusicAlbumsSection />
      <MusicLatestSongsSection />
      <JukeBoxSection />
      <OstJukeBoxSection />
      <Awards2024Section/>
      <MusicalHits2024Section/>
      <RomanceManiaSection/>
      <DanceFloorSection/>
    </div>
  );
};

export default Music;
