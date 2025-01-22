"use client";
import React from "react";
import HeroSectionDetailHome from "./HeroSectionDetailHome";
import TVSectionDetailHero from "./TVSectionDetailHero";
import { useSearchParams } from "next/navigation";
import MusicBannerDetail from "./MusicBannerDetail";
import ShortsBannerDetail from "./ShortsBannerDetail";

const Page = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  return (
    <div>
      {page === "tv-show" ? (
        <TVSectionDetailHero />
      ) : page === "home" ? (
        <HeroSectionDetailHome />
      ) :page === "music" ? (
        <MusicBannerDetail/>
      ) :page === "shorts" ? (
        <ShortsBannerDetail/>
      ) : (
        <div>Page not found</div>
      )}
    </div>
  );
};

export default Page;
