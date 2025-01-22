import { StaticImageData } from "next/image";
import kannad1 from "@/public/assets/shortSectionAssets/kannadaWebseriesAssets/kanada1.webp"
import kannad2 from "@/public/assets/shortSectionAssets/kannadaWebseriesAssets/kannada2.webp";
import kannad3 from "@/public/assets/shortSectionAssets/kannadaWebseriesAssets/kannada3.webp"
import kannad4 from "@/public/assets/shortSectionAssets/kannadaWebseriesAssets/kannada4.webp"
import kannad5 from "@/public/assets/shortSectionAssets/kannadaWebseriesAssets/kannada5.webp";
import kannad6 from "@/public/assets/shortSectionAssets/kannadaWebseriesAssets/kannada6.webp";
import kannad7 from "@/public/assets/shortSectionAssets/kannadaWebseriesAssets/kannada7.webp";
import kannad8 from "@/public/assets/shortSectionAssets/kannadaWebseriesAssets/kannada8.webp"

interface kannadaDataProps {
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

const kannadWebseriesData: kannadaDataProps[] = [
  {
    id: 1,
    title: "Badava Rascals",
    img: kannad1,
    description:
      "A thrilling musical competition where talent meets dreams, and the stage becomes a battleground for future stars.",
    language: "Kannada",
    duration: "2 hr 53 min",
    genre: "Shorts , Drama",
    releaseYear: "2013",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 2,
    title: "Giri Talks",
    img: kannad2,
    description:
      "A gripping tale of power, politics, and revenge, where every move is a step closer to reclaiming lost honor.",
    language: "Kannada",
    duration: "2 hr 47 min",
    genre: "Politics, Revenge",
    releaseYear: "2018",
    quality: "2D",
    ageRestriction: "10+",
  },
  {
    id: 3,
    title: "Nanig ond Doubt",
    img: kannad3,
    description:
      "A culinary adventure exploring the recipes of love and relationships, set against a backdrop of heartfelt drama.",
    language: "Kannada",
    duration: "2 hr 14 min",
    genre: "Drama, Love",
    releaseYear: "2002",
    quality: "HD",
    ageRestriction: "17+",
  },
  {
    id: 4,
    title: "Mistakes",
    img: kannad4,
    description:
      "An emotional rollercoaster of love, heartbreak, and redemption, told through powerful performances and storytelling.",
    language: "Kannada",
    duration: "2 hr 56 min",
    genre: "Melodrama, Romance, Drama",
    releaseYear: "2011",
    quality: "HD | Dolby Atmos",
    ageRestriction: "15+",
  },
  {
    id: 5,
    title: "Mr and Mrs Gopi",
    img: kannad5,
    description:
      "A delightful story of a woman who breaks all stereotypes to become the hero of her own life.",
    language: "Kannada",
    duration: "2 hr 56 min",
    genre: "Romance, Drama, Comedy",
    releaseYear: "2020",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 6,
    title: "Naanu Mattu Kavya",
    img: kannad6,
    description:
      "An action-packed family drama filled with love, laughter, and unforgettable moments of togetherness.",
    language: "Kannada",
    duration: "1 hr 54 min",
    genre: "Action, Romance, Drama",
    releaseYear: "2015",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 7,
    title: "Nan Hudgi Heroine",
    img: kannad7,
    description:
      "A heartwarming tale of love across generations, exploring the timeless nature of relationships.",
    language: "Kannada",
    duration: "2 hr 54 min",
    genre: "Comedy, Romance",
    releaseYear: "2018",
    quality: "HD | 3D",
    ageRestriction: "15+",
  },
  {
    id: 8,
    title: "Just Married",
    img: kannad8,
    description:
      "A poignant story of hope and perseverance that reminds us that even in the darkest times, all can be well.",
    language: "Kannada",
    duration: "2 hr 42 min",
    genre: "Romance, Melodrama, Drama",
    releaseYear: "2014",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
];

export default kannadWebseriesData;
