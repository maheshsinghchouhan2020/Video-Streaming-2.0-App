"use client"

import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Range {
  start: number;
  end: number;
}

interface RangeCarouselSectionProps {
  visibleRange: [number, number];
  setVisibleRange: (range: [number, number]) => void;
  ranges: Range[];
}

const RangeCarouselSection: React.FC<RangeCarouselSectionProps> = ({
  visibleRange,
  setVisibleRange,
  ranges,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -150 : 150;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
    }
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      updateScrollButtons();
      const handleScroll = () => updateScrollButtons();
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex items-center gap-2 w-full ">
      {canScrollLeft && (
        <button
          className="p-2 mb-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
          onClick={() => scrollCarousel("left")}
          aria-label="Scroll left"
        >
          <FaArrowLeft />
        </button>
      )}

      <div
        ref={carouselRef}
        className="scrollable-range pb-2 flex gap-1 sm:gap-2 overflow-x-auto text-white  "
        style={{ scrollBehavior: "smooth" }}
      >
        {ranges.map((range: Range)=> (
          <button
            key={`${range.start}-${range.end}`}
            className={`px-5 py-1 border rounded-3xl text-nowrap ${
              visibleRange[0] === range.start ? "bg-white text-black" : ""
            }`}
            onClick={() => setVisibleRange([range.start, range.end])}
          >
            {range.start + 1} - {range.end}
          </button>
        ))}
      </div>

      {canScrollRight && (
        <button
          className="p-2 mb-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
          onClick={() => scrollCarousel("right")}
          aria-label="Scroll right"
        >
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};

export default RangeCarouselSection;
