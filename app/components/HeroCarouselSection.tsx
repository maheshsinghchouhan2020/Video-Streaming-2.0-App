import CommonHeroCarouselViewSection from "../common/CommonHeroCarouselViewSection";
import { homeBannerMovies } from "../content/homePageData/homeBannerSectionData";

const transformedHomeBannerMovies = homeBannerMovies.map(movie => ({
  ...movie,
  genre: movie.genre.join(", "),
}));

const HeroCarouselSection = () => {
  return (
    <>
      <CommonHeroCarouselViewSection homeBanner={transformedHomeBannerMovies} page="home" />
    </>
  );
};

export default HeroCarouselSection;
