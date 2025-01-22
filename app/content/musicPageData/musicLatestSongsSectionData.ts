import { StaticImageData } from "next/image";
import musicLatestSongs1 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs1.webp";
import musicLatestSongs2 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs2.webp";
import musicLatestSongs3 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs3.webp";
import musicLatestSongs4 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs4.webp";
import musicLatestSongs5 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs5.webp";
import musicLatestSongs6 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs6.webp";
import musicLatestSongs7 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs7.webp";
import musicLatestSongs8 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs8.webp";
import musicLatestSongs9 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs9.webp";
import musicLatestSongs10 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs10.webp";
import musicLatestSongs11 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs11.webp";
import musicLatestSongs12 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs12.webp";
import musicLatestSongs13 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs13.webp";
import musicLatestSongs14 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs14.webp";
import musicLatestSongs15 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs15.webp";
import musicLatestSongs16 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs16.webp";
import musicLatestSongs17 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs17.webp";
import musicLatestSongs18 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs18.webp";
import musicLatestSongs19 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs19.webp";
import musicLatestSongs20 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs20.webp";
import musicLatestSongs21 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs21.webp";
import musicLatestSongs22 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs22.webp";
import musicLatestSongs23 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs23.webp";
import musicLatestSongs24 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs24.webp";
import musicLatestSongs25 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs25.webp";
import musicLatestSongs26 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs26.webp";
import musicLatestSongs27 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs27.webp";
import musicLatestSongs28 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs28.webp";
import musicLatestSongs29 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs29.webp";
import musicLatestSongs30 from "../../../public/assets/musicPageAssets/musicLatestSongsAssetsSection/musicLatestSongs30.webp";

interface musicLatestSongsProps {
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

const musicLatestSongsSectionData: musicLatestSongsProps[] = [
  {
    id: 1,
    title: "Bandish",
    img: musicLatestSongs1,
    description:
      "Bandish is a Hindi romantic song and album by Ishaan Khan and S. Thakur.",
    language: "Hindi",
    duration: "4 min 59 sec",
    genre: "Pop",
    releaseYear: "2024",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 2,
    title: "Thalaiva",
    img: musicLatestSongs2,
    description: "Thalaiva is a energetic songs of the gansters.",
    language: "Hindi",
    duration: "5 min 14 sec",
    genre: "Bollywood",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 3,
    title: "Kaavalaa",
    img: musicLatestSongs3,
    description: "Kaavalaa is a item song from the album Jailer movie.",
    language: "Hindi",
    duration: "5 min 30 sec",
    genre: "Pop, Filmi",
    releaseYear: "2024",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 4,
    title: "Aakhir Tumhe Aana Hai",
    img: musicLatestSongs4,
    description:
      "Aakhir Tumhe Aana Hai song is a desperate love story between two young humans.",
    language: "Hindi",
    duration: "3 min 47 sec",
    genre: "Romantic, Indian",
    releaseYear: "2024",
    quality: "2D | IMAX 3D",
    ageRestriction: "10+",
  },
  {
    id: 5,
    title: "Bandobast",
    img: musicLatestSongs5,
    description: "Bandobast is a energetic song for hero entry.",
    language: "Hindi",
    duration: "4 min",
    genre: "Pop, Bollywood",
    releaseYear: "2024",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 6,
    title: "Ab Rota Nahi Ye Dil",
    img: musicLatestSongs6,
    description:
      "Ab Rota Nahi Yeh Dil is a 2023 Hindi music album with one song.",
    language: "Hindi, English",
    duration: "3 min 56 sec",
    genre: "Classic, Lo-fi",
    releaseYear: "2023",
    quality: "HD | Dolby Atmos",
    ageRestriction: "15+",
  },
  {
    id: 7,
    title: "Deewane",
    img: musicLatestSongs7,
    description: "Deewane is a 2023 Hindi music album with one song.",
    language: "Hindi",
    duration: "5 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2023",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 8,
    title: "Aaj Fir",
    img: musicLatestSongs8,
    description: "An epic love story about two friends.",
    language: "Hindi",
    duration: "6 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2020",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 9,
    title: "Rehne Do Zara",
    img: musicLatestSongs9,
    description: "An epic love story about two classmates.",
    language: "Hindi",
    duration: "5 min 35 sec",
    genre: "Romance, Love, Drama",
    releaseYear: "2023",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 10,
    title: "Jeena Abhi Baki Hai",
    img: musicLatestSongs10,
    description: "An epic love story about two friends.",
    language: "Hindi",
    duration: "4 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2021",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 11,
    title: "Hum Itna Roye Hai",
    img: musicLatestSongs11,
    description: "An epic love story about two friends.",
    language: "English, Hindi",
    duration: "6 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2023",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 12,
    title: "O Saki Saki",
    img: musicLatestSongs12,
    description:
      "O Saki Saki is a Hindi language album that features the song of the same name from the movie Batla House",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Item Song, Bollywood",
    releaseYear: "2019",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 13,
    title: "Aaj Ki Raat",
    img: musicLatestSongs13,
    description: "Aaj Ki Raat is a song from the 2024 Hindi film Stree 2.",
    language: "Hindi",
    duration: "4 min 12 sec",
    genre: "Item Song, Bollywood",
    releaseYear: "2024",
    quality: "HD",
    ageRestriction: "13+",
  },
  {
    id: 14,
    title: "Tum Mile Ho",
    img: musicLatestSongs14,
    description: "An epic love story of two couples.",
    language: "Hindi",
    duration: "2 min 55 sec",
    genre: "Romance, Love, Drama",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 15,
    title: "Shayad",
    img: musicLatestSongs15,
    description:
      "The song “Shayad” from the album Love Aaj Kal is a Hindi song about the innocence of first love and the fear of losing it.",
    language: "Hindi",
    duration: "6 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 16,
    title: "Care Ni Karda",
    img: musicLatestSongs16,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 17,
    title: "Care Ni Karda",
    img: musicLatestSongs17,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 18,
    title: "Care Ni Karda",
    img: musicLatestSongs18,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 19,
    title: "Care Ni Karda",
    img: musicLatestSongs19,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 20,
    title: "Care Ni Karda",
    img: musicLatestSongs20,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 21,
    title: "Care Ni Karda",
    img: musicLatestSongs21,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 22,
    title: "Care Ni Karda",
    img: musicLatestSongs22,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 23,
    title: "Care Ni Karda",
    img: musicLatestSongs23,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 24,
    title: "Care Ni Karda",
    img: musicLatestSongs24,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 25,
    title: "Care Ni Karda",
    img: musicLatestSongs25,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 26,
    title: "Care Ni Karda",
    img: musicLatestSongs26,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 27,
    title: "Care Ni Karda",
    img: musicLatestSongs27,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 28,
    title: "Care Ni Karda",
    img: musicLatestSongs28,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 29,
    title: "Care Ni Karda",
    img: musicLatestSongs29,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 30,
    title: "Care Ni Karda",
    img: musicLatestSongs30,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: "Romance, Love",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
];

export default musicLatestSongsSectionData;
