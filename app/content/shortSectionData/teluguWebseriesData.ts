import { StaticImageData } from "next/image";
import telugu1 from "@/public/assets/shortSectionAssets/teluguWebseriesAssets/telugu1.webp"
import telugu2 from "@/public/assets/shortSectionAssets/teluguWebseriesAssets/telugu2.webp";
import telugu3 from "@/public/assets/shortSectionAssets/teluguWebseriesAssets/telugu3.webp"
import telugu4 from "@/public/assets/shortSectionAssets/teluguWebseriesAssets/telugu4.webp"
import telugu5 from "@/public/assets/shortSectionAssets/teluguWebseriesAssets/telugu5.webp";
import telugu6 from "@/public/assets/shortSectionAssets/teluguWebseriesAssets/telugu6.webp";
import telugu7 from "@/public/assets/shortSectionAssets/teluguWebseriesAssets/telugu7.webp";
import telugu8 from "@/public/assets/shortSectionAssets/teluguWebseriesAssets/telugu8.webp"

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

const teluguWebseriesData: kannadaDataProps[] = [
  {
    id: 1,
    title: "Happy Married Life S1",
    img: telugu1,
    description:
      "A thrilling musical competition where talent meets dreams, and the stage becomes a battleground for future stars.",
    language: "Telugu",
    duration: "2 hr 53 min",
    genre: "Shorts , Drama",
    releaseYear: "2013",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 2,
    title: "Nayanam S1",
    img: telugu2,
    description:
      "A gripping tale of power, politics, and revenge, where every move is a step closer to reclaiming lost honor.",
    language: "Telugu",
    duration: "2 hr 47 min",
    genre: "Politics, Revenge",
    releaseYear: "2018",
    quality: "2D",
    ageRestriction: "10+",
  },
  {
    id: 3,
    title: "Ante Shankar Kooda S1",
    img: telugu3,
    description:
      "A culinary adventure exploring the recipes of love and relationships, set against a backdrop of heartfelt drama.",
    language: "Telugu",
    duration: "2 hr 14 min",
    genre: "Drama, Love",
    releaseYear: "2002",
    quality: "HD",
    ageRestriction: "17+",
  },
  {
    id: 4,
    title: "Papam Parry S1",
    img: telugu4,
    description:
      "An emotional rollercoaster of love, heartbreak, and redemption, told through powerful performances and storytelling.",
    language: "Telugu",
    duration: "2 hr 56 min",
    genre: "Melodrama, Romance, Drama",
    releaseYear: "2011",
    quality: "HD | Dolby Atmos",
    ageRestriction: "15+",
  },
  {
    id: 5,
    title: "Prema Thokka Thotakura",
    img: telugu5,
    description:
      "A delightful story of a woman who breaks all stereotypes to become the hero of her own life.",
    language: "Telugu",
    duration: "2 hr 56 min",
    genre: "Romance, Drama, Comedy",
    releaseYear: "2020",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 6,
    title: "Sathee",
    img: telugu6,
    description:
      "An action-packed family drama filled with love, laughter, and unforgettable moments of togetherness.",
    language: "Telugu",
    duration: "1 hr 54 min",
    genre: "Action, Romance, Drama",
    releaseYear: "2015",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 7,
    title: "Majili",
    img: telugu7,
    description:
      "A heartwarming tale of love across generations, exploring the timeless nature of relationships.",
    language: "Telugu",
    duration: "2 hr 54 min",
    genre: "Comedy, Romance",
    releaseYear: "2018",
    quality: "HD | 3D",
    ageRestriction: "15+",
  },
  {
    id: 8,
    title: "More Than Friends",
    img: telugu8,
    description:
      "A poignant story of hope and perseverance that reminds us that even in the darkest times, all can be well.",
    language: "Telugu",
    duration: "2 hr 42 min",
    genre: "Romance, Melodrama, Drama",
    releaseYear: "2014",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
];

export default teluguWebseriesData;
