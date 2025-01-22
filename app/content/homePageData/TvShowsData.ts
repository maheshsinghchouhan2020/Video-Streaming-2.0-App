import { StaticImageData } from "next/image";
import tvshow1 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow1.webp";
import tvshow2 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow2.webp";
import tvshow3 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow3.webp";
import tvshow4 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow4.webp";
import tvshow5 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow5.webp";
import tvshow6 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow6.webp";
import tvshow7 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow7.webp";
import tvshow8 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow8.webp";
import tvshow9 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow9.webp";
import tvshow10 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow10.webp";
import tvshow11 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow11.webp";
import tvshow12 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow12.webp";
import tvshow13 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow13.webp";
import tvshow14 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow14.webp";
import tvshow15 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow15.webp";
import tvshow16 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow16.webp";
import tvshow17 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow17.webp";
import tvshow18 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow18.webp";
import tvshow19 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow19.webp";
import tvshow20 from "../../../public/assets/homePageAssets/tvShowsAssetsSection/tvShow20.webp";

interface tvShowsData {
  id: number;
  title: string;
  img: string | StaticImageData;
  description: string;
  language: string;
  duration: string;
  genre: string;
  releaseDate: string;
}

 const TVShows: tvShowsData[] = [
  {
    id: 1,
    title: "Mata ki mahima",
    img: tvshow1,
    description: "A thrilling drama about love and betrayal A thrilling drama about love and betrayal A thrilling drama about love and betrayal A thrilling drama about love and betrayal ",
    language: "Hindi",
    duration: "45 min",
    genre: "Drama, Serials",
    releaseDate: "2020-05-12",
  },
  {
    id: 2,
    title: "Ganga",
    img: tvshow2,
    description: "A crime investigation series with shocking twists",
    language: "Hindi",
    duration: "50 min",
    genre: "Serials",
    releaseDate: "2021-03-01",
  },
  {
    id: 3,
    title: "Nandini",
    img: tvshow3,
    description: "A comedy-drama about family dynamics",
    language: "Hindi",
    duration: "30 min",
    genre: "Serials",
    releaseDate: "2019-07-22",
  },
  {
    id: 4,
    title: "Devo Ke Dev Mahadev",
    img: tvshow4,
    description: "A fantasy series set in a magical kingdom",
    language: "Hindi",
    duration: "60 min",
    genre: "Serials",
    releaseDate: "2022-11-10",
  },
  {
    id: 5,
    title: "Dance +",
    img: tvshow5,
    description: "A mystery series that keeps you guessing",
    language: "Hindi",
    duration: "40 min",
    genre: "Serials",
    releaseDate: "2021-08-14",
  },
  {
    id: 6,
    title: "Dance Champions",
    img: tvshow6,
    description: "A political drama about power struggles",
    language: "Hindi",
    duration: "50 min",
    genre: "Serials",
    releaseDate: "2020-10-15",
  },
  {
    id: 7,
    title: "Appi Aamchi Collector",
    img: tvshow7,
    description: "A heartwarming family series about love and bonds",
    language: "Hindi",
    duration: "30 min",
    genre: "Drama, Serials",
    releaseDate: "2021-01-25",
  },
  {
    id: 8,
    title: "Paaru",
    img: tvshow8,
    description: "A dark psychological thriller with a twist",
    language: "Hindi",
    duration: "55 min",
    genre: "Serials, Drama",
    releaseDate: "2022-02-18",
  },
  {
    id: 9,
    title: "Shiva",
    img: tvshow9,
    description: "A supernatural horror series set in a haunted town",
    language: "Hindi",
    duration: "45 min",
    genre: "Serials",
    releaseDate: "2023-06-30",
  },
  {
    id: 10,
    title: "Vasudha",
    img: tvshow10,
    description: "A thriller series about espionage and secret agents",
    language: "Hindi",
    duration: "50 min",
    genre: "Entertainment",
    releaseDate: "2019-11-07",
  },
  {
    id: 11,
    title: "Kundali Bhagya",
    img: tvshow11,
    description: "A courtroom drama about legal battles and justice",
    language: "Hindi",
    duration: "40 min",
    genre: "Serials",
    releaseDate: "2020-05-20",
  },
  {
    id: 12,
    title: "Atal",
    img: tvshow12,
    description: "A science fiction series exploring futuristic concepts",
    language: "Hindi",
    duration: "60 min",
    genre: "Serials,Drama",
    releaseDate: "2022-09-02",
  },
  {
    id: 13,
    title: "Sa Re Ga Ma Pa",
    img: tvshow13,
    description: "A biographical drama about a historical figure",
    language: "Hindi",
    duration: "60 min",
    genre: "Serials, Drama",
    releaseDate: "2021-04-08",
  },
  {
    id: 14,
    title: "Aaamcha Dada",
    img: tvshow14,
    description: "A detective series solving crimes in a big city",
    language: "Hindi",
    duration: "45 min",
    genre: "Serials",
    releaseDate: "2020-07-15",
  },
  {
    id: 15,
    title: "Paaru2",
    img: tvshow15,
    description: "A comedy series about friendship and life struggles",
    language: "Hindi",
    duration: "30 min",
    genre: "Serials",
    releaseDate: "2021-12-22",
  },
  {
    id: 16,
    title: "Navri",
    img: tvshow16,
    description: "A survival drama set in a post-apocalyptic world",
    language: "Hindi",
    duration: "55 min",
    genre: "Drama, Serials",
    releaseDate: "2022-01-19",
  },
  {
    id: 17,
    title: "Humara Parivaar",
    img: tvshow17,
    description: "A crime thriller about a small-town mystery",
    language: "Hindi",
    duration: "40 min",
    genre: "Entertainment",
    releaseDate: "2021-06-10",
  },
  {
    id: 18,
    title: "Rab Se Hai Dua",
    img: tvshow18,
    description: "A drama about young love and high school challenges",
    language: "Hindi",
    duration: "30 min",
    genre: "Serials",
    releaseDate: "2023-04-12",
  },
  {
    id: 19,
    title: "Serial 19",
    img: tvshow19,
    description: "A gritty crime drama about the underworld",
    language: "Hindi",
    duration: "55 min",
    genre: "Serials",
    releaseDate: "2020-09-05",
  },
  {
    id: 20,
    title: "Serial 20",
    img: tvshow20,
    description: "A superhero series about a vigilante saving the city",
    language: "Hindi",
    duration: "50 min",
    genre: "Serials",
    releaseDate: "2021-11-19",
  },
];
export default TVShows