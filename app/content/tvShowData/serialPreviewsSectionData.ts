import { StaticImageData } from "next/image";
import serialPreviews1 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews1.webp";
import serialPreviews2 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews2.webp";
import serialPreviews3 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews3.webp";
import serialPreviews4 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews4.webp";
import serialPreviews5 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews5.webp";
import serialPreviews6 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews6.webp";
import serialPreviews7 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews7.webp";
import serialPreviews8 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews8.webp";
import serialPreviews9 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews9.webp";
import serialPreviews10 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews10.webp";
import serialPreviews11 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews11.webp";
import serialPreviews12 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews12.webp";
import serialPreviews13 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews13.webp";
import serialPreviews14 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews14.webp";
import serialPreviews15 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews15.webp";
import serialPreviews16 from "../../../public/assets/tvShowAssets/serialPreviewsAssets/serialPreviews16.webp";

interface serialPreviewsProps {
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

const serialPreviewsSectionData: serialPreviewsProps[] = [
  {
    id: 1,
    title: "Jyoti",
    img: serialPreviews1,
    description:
      "A captivating story that sheds light on Jyoti's journey of hope, love, and perseverance.",
    language: "Hindi",
    duration: "4 min 59 sec",
    genre: "Pop",
    releaseYear: "2024",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 2,
    title: "Yeh Rishta Kesa hai",
    img: serialPreviews2,
    description: "A dramatic tale exploring the essence of relationships and family bonds.",
    language: "Hindi",
    duration: "5 min 14 sec",
    genre: "Bollywood",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "15+",
  },
  {
    id: 3,
    title: "Jeet",
    img: serialPreviews3,
    description: "An inspiring journey of victory and overcoming challenges.",
    language: "Hindi",
    duration: "5 min 30 sec",
    genre: "Pop, Filmi",
    releaseYear: "2024",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 4,
    title: "Anupama",
    img: serialPreviews4,
    description:
      "Anupama's story of love, resilience, and finding her own voice.",
    language: "Hindi",
    duration: "3 min 47 sec",
    genre: "Hip-Hop, Indian",
    releaseYear: "2024",
    quality: "3D | IMAX 3D",
    ageRestriction: "10+",
  },
  {
    id: 5,
    title: "Imli Tere Pyaar Ki",
    img: serialPreviews5,
    description:
      "A romantic ballad about love and devotion with heartfelt emotions.",
    language: "Hindi",
    duration: "4 min",
    genre: "Pop, Romantic",
    releaseYear: "2023",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 6,
    title: "Yoddha",
    img: serialPreviews6,
    description:
      "A classic and powerful tale of courage and heroism.",
    language: "Hindi, English",
    duration: "3 min 56 sec",
    genre: "Classic, Lo-fi",
    releaseYear: "2023",
    quality: "HD | Dolby Atmos",
    ageRestriction: "15+",
  },
  {
    id: 7,
    title: "Jeets",
    img: serialPreviews7,
    description: "A tender and dramatic love story filled with emotions.",
    language: "Hindi",
    duration: "5 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2023",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 8,
    title: "Computer Mama",
    img: serialPreviews8,
    description: "A lighthearted tale that blends love and humor with technology.",
    language: "Hindi",
    duration: "6 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2020",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 9,
    title: "Rehne Do",
    img: serialPreviews9,
    description: "A bittersweet narrative about love, choices, and moving on.",
    language: "Hindi",
    duration: "5 min 35 sec",
    genre: "Romance, Love, Drama",
    releaseYear: "2023",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 10,
    title: "Sindoor Ghar Ghar Ka",
    img: serialPreviews10,
    description:
      "An emotional family drama highlighting relationships and traditions.",
    language: "Hindi",
    duration: "4 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2021",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 11,
    title: "Kalash",
    img: serialPreviews11,
    description: "A moving tale of rituals, love, and the sanctity of relationships.",
    language: "English, Hindi",
    duration: "6 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2023",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 12,
    title: "Chai Chuski Bhari",
    img: serialPreviews12,
    description:
      "A lively and energetic Bollywood track with an unforgettable rhythm.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Item Song, Bollywood",
    releaseYear: "2019",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 13,
    title: "More Pi-ya",
    img: serialPreviews13,
    description:
      "A melodious Bollywood number filled with romance and passion.",
    language: "Hindi",
    duration: "4 min 12 sec",
    genre: "Item Song, Bollywood",
    releaseYear: "2024",
    quality: "HD",
    ageRestriction: "13+",
  },
  {
    id: 14,
    title: "Shakti",
    img: serialPreviews14,
    description: "A tale of empowerment and unyielding determination.",
    language: "Hindi",
    duration: "2 min 55 sec",
    genre: "Romance, Love, Drama",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 15,
    title: "Shayad Phir Kabhi",
    img: serialPreviews15,
    description:
      "A heartwarming narrative about second chances and finding love again.",
    language: "Hindi",
    duration: "6 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 16,
    title: "Purnvivahh",
    img: serialPreviews16,
    description:
      "A timeless story of love, traditions, and the sanctity of marriage.",
    language: "Hindi",
    duration: "6 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
];

export default serialPreviewsSectionData;
