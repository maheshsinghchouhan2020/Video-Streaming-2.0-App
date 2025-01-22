import {tvShowBannerData} from "@/app/content/tvShowData/tvShowBannerSectionData";
import CommonHeroCarouselViewSection from "../../common/CommonHeroCarouselViewSection";

const TvCarouselSection = () => {
  const transformeddata = tvShowBannerData.map(movie => ({
    ...movie,
    genre: movie.genre.join(", "), 
  }));
  
  return (
    <>
      <CommonHeroCarouselViewSection homeBanner={transformeddata} page="tv-show"/>
    </>
  );
};

export default TvCarouselSection;
