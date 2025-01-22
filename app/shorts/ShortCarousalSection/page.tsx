import CommonHeroCarouselViewSection from "@/app/common/CommonHeroCarouselViewSection";
import {ShortSectionData} from "@/app/content/shortSectionData/ShortBannerData";
import React from "react";

const ShortCarouselSection = () => {
  const transformeddata = ShortSectionData.map(movie => ({
    ...movie,
    genre: movie.genre.join(", "), 
  }));
  return (
    <>
      <div>
        <CommonHeroCarouselViewSection homeBanner={transformeddata} page="shorts" />;
      </div>
    </>
  );
};

export default ShortCarouselSection;
