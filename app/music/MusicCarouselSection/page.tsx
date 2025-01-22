import React from "react";
import CommonHeroCarouselViewSection from "@/app/common/CommonHeroCarouselViewSection";
import {musicBannerNewSectionData} from "@/app/content/musicPageData/musicBannerNewSectionData";

const MusicCarouselSection = () => {
  const transformeddata = musicBannerNewSectionData.map(movie => ({
    ...movie,
    genre: movie.genre.join(", "), 
  }));
  return (
    <>
      <CommonHeroCarouselViewSection homeBanner={transformeddata} page={"music"} />
    </>
  );
};

export default MusicCarouselSection;
