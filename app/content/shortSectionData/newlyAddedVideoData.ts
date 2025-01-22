import { StaticImageData } from "next/image";
import newlyAddedVideo1 from "@/public/assets/shortSectionAssets/newlyAddedMovieAssests/newlyAddedVideo1.webp"
import newlyAddedVideo2 from "@/public/assets/shortSectionAssets/newlyAddedMovieAssests/newlyAddedVideo2.webp";
import newlyAddedVideo3 from "@/public/assets/shortSectionAssets/newlyAddedMovieAssests/newlyAddedVideo3.webp"
import newlyAddedVideo4 from "@/public/assets/shortSectionAssets/newlyAddedMovieAssests/newlyAddedVideo4.webp"
import newlyAddedVideo5 from "@/public/assets/shortSectionAssets/newlyAddedMovieAssests/newlyAddedVideo5.webp";
import newlyAddedVideo6 from "@/public/assets/shortSectionAssets/newlyAddedMovieAssests/newlyAddedVideo6.webp";
import newlyAddedVideo7 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn7.webp";
import newlyAddedVideo8 from "@/public/assets/shortSectionAssets/newlyAddedMovieAssests/newlyAddedVideo8.webp"
import newlyAddedVideo9 from "@/public/assets/shortSectionAssets/newlyAddedMovieAssests/newlyAddedVideo9.webp"
import newlyAddedVideo10 from "@/public/assets/shortSectionAssets/newlyAddedMovieAssests/newlyAddedVideo10.webp"


interface newlyAddedVideoDataProps {
    id: number;
    title: string;
    img: string | StaticImageData;
    description: string;
    language: string;
    duration: string;
    genre: string;
    releaseYear: string;
    quality: string;
    ageRestriction: string;
}

const newlyAddedVideoData: newlyAddedVideoDataProps[] = [
  {
    id: 1,
    title: "Unstoppable",
    img: newlyAddedVideo1,
    description:
      "An inspiring journey of resilience and determination that showcases the power of never giving up.",
    language: "Hindi, Tamil",
    duration: "",
    genre: "Shorts , Drama",
    releaseYear: "2024",
    quality: "HD",
    ageRestriction: "15+",
  },
  {
    id: 2,
    title: "Indian Idol",
    img: newlyAddedVideo2,
    description:
      "A thrilling musical competition where talent meets dreams, and the stage becomes a battleground for future stars.",
    language: "Hindi",
    duration: "2 hr 53 min",
    genre: "Shorts , Drama",
    releaseYear: "2013",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 3,
    title: "Sarkaar",
    img: newlyAddedVideo3,
    description:
      "A gripping tale of power, politics, and revenge, where every move is a step closer to reclaiming lost honor.",
    language: "Hindi",
    duration: "2 hr 47 min",
    genre: "Politics, Revenge",
    releaseYear: "2018",
    quality: "2D",
    ageRestriction: "10+",
  },
  {
    id: 4,
    title: "Chef Mantra",
    img: newlyAddedVideo4,
    description:
      "A culinary adventure exploring the recipes of love and relationships, set against a backdrop of heartfelt drama.",
    language: "Hindi",
    duration: "2 hr 14 min",
    genre: "Drama, Love",
    releaseYear: "2002",
    quality: "HD",
    ageRestriction: "17+",
  },
  {
    id: 5,
    title: "Samam Originals",
    img: newlyAddedVideo5,
    description:
      "An emotional rollercoaster of love, heartbreak, and redemption, told through powerful performances and storytelling.",
    language: "Hindi",
    duration: "2 hr 56 min",
    genre: "Melodrama, Romance, Drama",
    releaseYear: "2011",
    quality: "HD | Dolby Atmos",
    ageRestriction: "15+",
  },
  {
    id: 6,
    title: "Super Woman",
    img: newlyAddedVideo6,
    description:
      "A delightful story of a woman who breaks all stereotypes to become the hero of her own life.",
    language: "Hindi",
    duration: "2 hr 56 min",
    genre: "Romance, Drama, Comedy",
    releaseYear: "2020",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 7,
    title: "Family Dhamaka",
    img: newlyAddedVideo7,
    description:
      "An action-packed family drama filled with love, laughter, and unforgettable moments of togetherness.",
    language: "Hindi, Punjabi",
    duration: "1 hr 54 min",
    genre: "Action, Romance, Drama",
    releaseYear: "2015",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 8,
    title: "Love Aaj Kal",
    img: newlyAddedVideo8,
    description:
      "A heartwarming tale of love across generations, exploring the timeless nature of relationships.",
    language: "Hindi, Punjabi",
    duration: "2 hr 54 min",
    genre: "Comedy, Romance",
    releaseYear: "2018",
    quality: "HD | 3D",
    ageRestriction: "15+",
  },
  {
    id: 9,
    title: "All is Well",
    img: newlyAddedVideo9,
    description:
      "A poignant story of hope and perseverance that reminds us that even in the darkest times, all can be well.",
    language: "Hindi",
    duration: "2 hr 42 min",
    genre: "Romance, Melodrama, Drama",
    releaseYear: "2014",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 10,
    title: "11th Hour",
    img: newlyAddedVideo10,
    description:
      "A powerful historical drama that captures the sacrifices and heroics of individuals during the final moments of a war.",
    language: "Hindi",
    duration: "2 hr 48 min",
    genre: "History, War, Melodrama",
    releaseYear: "2015",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
];

export default newlyAddedVideoData;
