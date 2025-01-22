import { StaticImageData } from "next/image";
import homeBanner1 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr1.webp";
import homeBanner2 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr2.webp";
import homeBanner3 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr3.webp";
import homeBanner4 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr4.webp";
import homeBanner5 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr5.webp";
import homeBanner6 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr6.webp";
import homeBanner7 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr7.webp";
import homeBanner8 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr8.webp";
import homeBanner9 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr9.webp";
import homeBanner10 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr10.webp";
import homeBanner11 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr11.webp";
import homeBanner12 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr12.webp";
import homeBanner13 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr13.webp";
import homeBanner14 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr14.webp";
import homeBanner15 from "../../../public/assets/homePageAssets/homeBannerSection/homeBannerr15.webp";

interface homeBannerSectionData {
  id: number;
  title: string;
  img: string | StaticImageData;
  description: string;
  language: string;
  duration: string;
  genre: string[];
  releaseYear: string;
  quality: string;
  ageRestriction: string;
}

export const homeBannerMovies: homeBannerSectionData[] = [
  {
    id: 1,
    title: "Chhaava",
    img: homeBanner15,
    description:
      "Chhava is a historical drama film about the life of Chhatrapati Sambhaji Maharaj, the son of Chhatrapati Shivaji Maharaj, the founder of the Maratha Empire.",
    language: "Hindi",
    duration: "3 hr 06 min",
    genre: ["Adventure, Drama, History"],
    releaseYear: "2025",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 2,
    title: "Jackal",
    img: homeBanner1,
    description: "A thrilling action-packed heist film",
    language: "Hindi, English",
    duration: "1 hr 52 min",
    genre: ["Action, Crime"],
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "15+",
  },
  {
    id: 3,
    title: "Jumanji",
    img: homeBanner2,
    description: "A superhero tale with action and sci-fi elements",
    language: "Hindi",
    duration: "2 hr 53 min",
    genre: ["Action, Adventure, Fight"],
    releaseYear: "2021",
    quality: "HD | 2D | 3D",
    ageRestriction: "All",
  },
  {
    id: 4,
    title: "Padmaavat",
    img: homeBanner3,
    description: "A classic action-packed drama about friendship and revenge",
    language: "Hindi",
    duration: "2 hr 47 min",
    genre: ["History, War, Historical Drama"],
    releaseYear: "2018",
    quality: "3D | IMAX 3D",
    ageRestriction: "10+",
  },
  {
    id: 5,
    title: "Dhoom-3",
    img: homeBanner4,
    description:
      "Dhoom 3 is a Indian action, crime, and drama film about a clown thief who targets the Western Bank of Chicago.",
    language: "Hindi, English",
    duration: "2 hr 14 min",
    genre: ["Comedy, Action, Crime"],
    releaseYear: "2018",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 6,
    title: "The Tomorrow War",
    img: homeBanner5,
    description: "A sci-fi superhero film featuring high-tech action sequences",
    language: "Hindi, English",
    duration: "2 hr 56 min",
    genre: ["Action, Sci-Fi, Drama"],
    releaseYear: "2020",
    quality: "HD | Dolby Atmos",
    ageRestriction: "15+",
  },
  {
    id: 7,
    title: "I Still Believe",
    img: homeBanner6,
    description: "An epic love story about two friends.",
    language: "English, Hindi",
    duration: "2 hr 56 min",
    genre: ["Romance, Love, Drama"],
    releaseYear: "2020",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 8,
    title: "The Forge",
    img: homeBanner7,
    description: "A thrilling crime drama about a powerful underworld figure",
    language: "Hindi, English",
    duration: "1 hr 54 min",
    genre: ["Action, Romance, Drama"],
    releaseYear: "2015",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 9,
    title: "Bloody Beggar",
    img: homeBanner8,
    description:
      "Bloody Beggar is dark dramedy film about a beggar whose life is turned upside down by an unexpected misadventure.",
    language: "Hindi, Tamil",
    duration: "2 hr 54 min",
    genre: ["Action, Adventure, Comedy"],
    releaseYear: "2024",
    quality: "HD | 2D | 3D",
    ageRestriction: "15+",
  },
  {
    id: 10,
    title: "Jailer",
    img: homeBanner9,
    description:
      "The movie Jailer is about a retired jailer who gets back into action after his son goes missing while investigating a gangster.",
    language: "Hindi, English, Spanish",
    duration: "2 hr 42 min",
    genre: ["Comedy, Action, Suspense"],
    releaseYear: "2023",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 11,
    title: "Double Engine",
    img: homeBanner10,
    description:
      "Double Engine is adventure comedy-drama film about a group of friends who search for a double-headed snake in rural village.",
    language: "Hindi",
    duration: "2 hr 48 min",
    genre: ["Action, Comedy, Drama"],
    releaseYear: "2023",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 12,
    title: "I'm Tony",
    img: homeBanner11,
    description:
      "Hi I'm Tony is a horror thriller film about a couple whose life is turned upside down when a stranger enters their apartment and becomes violent.",
    language: "Hindi, Tamil, Telugu",
    duration: "2 hr 13 min",
    genre: ["Action, Thrill, Fight"],
    releaseYear: "2019",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 13,
    title: "Teddy Buddy",
    img: homeBanner12,
    description:
      "Buddy is action, adventure, and sci-fi movie about a pilot and a teddy bear who work together to save the body of a kidnapped air traffic controller.",
    language: "Hindi, Tamil, Telugu",
    duration: "2 hr 33 min",
    genre: ["Action, Drama, Emotional"],
    releaseYear: "2024",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 14,
    title: "Maharaja",
    img: homeBanner13,
    description:
      "Maharaja is a 2024 thriller film about a barber who seeks vengeance after his home is burglarized.",
    language: "Hindi, Tamil, Telugu",
    duration: "2 hr 49 min",
    genre: ["Action, Thrill, Drama"],
    releaseYear: "2024",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 15,
    title: "Leo",
    img: homeBanner14,
    description: "A sci-fi action film featuring advanced robots in battle",
    language: "Hindi, Tamil, Telugu",
    duration: "2 hr 49 min",
    genre: ["Action, Thrill, Fight"],
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
];

