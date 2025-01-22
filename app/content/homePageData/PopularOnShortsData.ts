import { StaticImageData } from "next/image";
import shorts1 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts1.webp";
import shorts2 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts2.webp";
import shorts3 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts3.webp";
import shorts4 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts4.webp";
import shorts5 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts5.webp";
import shorts6 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts6.webp";
import shorts7 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts7.webp";
import shorts8 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts8.webp";
import shorts9 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts9.webp";
import shorts10 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts10.webp";
import shorts11 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts11.webp";
import shorts12 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts12.webp";
import shorts13 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts13.webp";
import shorts14 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts14.webp";
import shorts15 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts15.webp";
import shorts16 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts16.webp";
import shorts17 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts17.webp";
import shorts18 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts18.webp";
import shorts19 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts19.webp";
import shorts20 from "../../../public/assets/homePageAssets/shortsAssetsSection/shorts20.webp";

interface PopularOnShortsData {
  id: number;
  title: string;
  img: string | StaticImageData;
  description: string;
  language: string;
  duration: string;
  genre: string;
  releaseDate: string;
  episode:string
}

 const PopularOnShorts: PopularOnShortsData[] = [
  {
    id: 1,
    title: "Bhaukaal",
    img: shorts1,
    description: "A thrilling drama about love and betrayal",
    language: "Hindi",
    duration: "45 min",
    genre: " Entertainment",
    releaseDate: "2020-05-12",
    episode:"E100 - Nov 24, 2024",
  },
  {
    id: 2,
    title: "Scam 1992",
    img: shorts2,
    description: "A crime investigation series with shocking twists",
    language: "Hindi",
    duration: "50 min",
    genre: "Entertainment",
    releaseDate: "2021-03-01",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 3,
    title: "Shekhar Home",
    img: shorts3,
    description: "A comedy-drama about family dynamics",
    language: "Hindi",
    duration: "30 min",
    genre: "Entertainment",
    releaseDate: "2019-07-22",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 4,
    title: "Journey",
    img: shorts4,
    description: "A fantasy series set in a magical kingdom",
    language: "Hindi",
    duration: "60 min",
    genre: "Entertainment",
    releaseDate: "2022-11-10",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 5,
    title: "Baban",
    img: shorts5,
    description: "A mystery series that keeps you guessing",
    language: "Hindi",
    duration: "40 min",
    genre: "Entertainment",
    releaseDate: "2021-08-14",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 6,
    title: "Guru",
    img: shorts6,
    description: "A political drama about power struggles",
    language: "Hindi",
    duration: "50 min",
    genre: "Entertainment",
    releaseDate: "2020-10-15",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 7,
    title: "Conditions",
    img: shorts7,
    description: "A heartwarming family series about love and bonds",
    language: "Hindi",
    duration: "30 min",
    genre: " Entertainment",
    releaseDate: "2021-01-25",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 8,
    title: "Mithun",
    img: shorts8,
    description: "A dark psychological thriller with a twist",
    language: "Hindi",
    duration: "55 min",
    genre: "Entertainment",
    releaseDate: "2022-02-18",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 9,
    title: "Vantas",
    img: shorts9,
    description: "A supernatural horror series set in a haunted town",
    language: "Hindi",
    duration: "45 min",
    genre: "Entertainment",
    releaseDate: "2023-06-30",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 10,
    title: "Virat",
    img: shorts10,
    description: "A thriller series about espionage and secret agents",
    language: "Hindi",
    duration: "50 min",
    genre: "Entertainment",
    releaseDate: "2019-11-07",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 11,
    title: "Karaar",
    img: shorts11,
    description: "A courtroom drama about legal battles and justice",
    language: "Hindi",
    duration: "40 min",
    genre: "Entertainment",
    releaseDate: "2020-05-20",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 12,
    title: "Barayan",
    img: shorts12,
    description: "A science fiction series exploring futuristic concepts",
    language: "Hindi",
    duration: "60 min",
    genre: "Entertainment",
    releaseDate: "2022-09-02",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 13,
    title: "Chitthi",
    img: shorts13,
    description: "A biographical drama about a historical figure",
    language: "Hindi",
    duration: "60 min",
    genre: "Entertainment",
    releaseDate: "2021-04-08",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 14,
    title: "Kesari",
    img: shorts14,
    description: "A detective series solving crimes in a big city",
    language: "Hindi",
    duration: "45 min",
    genre: "Entertainment",
    releaseDate: "2020-07-15",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 15,
    title: "Pension",
    img: shorts15,
    description: "A comedy series about friendship and life struggles",
    language: "Hindi",
    duration: "30 min",
    genre: "Entertainment",
    releaseDate: "2021-12-22",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 16,
    title: "Gotya",
    img: shorts16,
    description: "A survival drama set in a post-apocalyptic world",
    language: "Hindi",
    duration: "55 min",
    genre: " Entertainment",
    releaseDate: "2022-01-19",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 17,
    title: "Once More",
    img: shorts17,
    description: "A crime thriller about a small-town mystery",
    language: "Hindi",
    duration: "40 min",
    genre: "Entertainment",
    releaseDate: "2021-06-10",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 18,
    title: "Bedhadak",
    img: shorts18,
    description: "A drama about young love and high school challenges",
    language: "Hindi",
    duration: "30 min",
    genre: "Entertainment",
    releaseDate: "2023-04-12",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 19,
    title: "Phuntroo",
    img: shorts19,
    description: "A gritty crime drama about the underworld",
    language: "Hindi",
    duration: "55 min",
    genre: "Entertainment",
    releaseDate: "2020-09-05",
    episode:"E100 - Nov 24, 2024"
  },
  {
    id: 20,
    title: "Phuntroo 2",
    img: shorts20,
    description: "A superhero series about a vigilante saving the city",
    language: "Hindi",
    duration: "50 min",
    genre: "Entertainment",
    releaseDate: "2021-11-19",
    episode:"E100 - Nov 24, 2024"
  },
];
export default PopularOnShorts