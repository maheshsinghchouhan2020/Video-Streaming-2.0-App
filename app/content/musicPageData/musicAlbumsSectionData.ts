import { StaticImageData } from "next/image";
import musicAlbums1 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums1.webp";
import musicAlbums2 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums2.webp";
import musicAlbums3 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums3.webp";
import musicAlbums4 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums4.webp";
import musicAlbums5 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums5.webp";
import musicAlbums6 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums6.webp";
import musicAlbums7 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums7.webp";
import musicAlbums8 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums8.webp";
import musicAlbums9 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums9.webp";
import musicAlbums10 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums10.webp";
import musicAlbums11 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums11.webp";
import musicAlbums12 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums12.webp";
import musicAlbums13 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums13.webp";
import musicAlbums14 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums14.webp";
import musicAlbums15 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums15.webp";
import musicAlbums16 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums16.webp";
import musicAlbums17 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums17.webp";
import musicAlbums18 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums18.webp";
import musicAlbums19 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums19.webp";
import musicAlbums20 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums20.webp";
import musicAlbums21 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums21.webp";
import musicAlbums22 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums22.webp";
import musicAlbums23 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums23.webp";
import musicAlbums24 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums24.webp";
import musicAlbums25 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums25.webp";
import musicAlbums26 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums26.webp";
import musicAlbums27 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums27.webp";
import musicAlbums28 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums28.webp";
import musicAlbums29 from "../../../public/assets/musicPageAssets/musicAlbumsAssetsSection/musicAlbums29.webp";

interface musicAlbumsProps {
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

const musicAlbumsSectionData: musicAlbumsProps[] = [
  {
    id: 1,
    title: "Kar Fateh 2",
    img: musicAlbums1,
    description:
      "Kar Fateh is a Hindi romantic song and album by Ishaan Khan and S. Thakur.",
    language: "Hindi",
    duration: "4 min 59 sec",
    genre: "Pop",
    releaseYear: "2024",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 2,
    title: "Power House 2",
    img: musicAlbums2,
    description: "A energetic songs of the gansters.",
    language: "Hindi",
    duration: "5 min 14 sec",
    genre: "Bollywood",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "15+",
  },
  {
    id: 3,
    title: "Feeling 2",
    img: musicAlbums3,
    description: "Feeling is a song from the album Pushpa3 movie.",
    language: "Hindi",
    duration: "5 min 30 sec",
    genre: "Pop, Filmi",
    releaseYear: "2024",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 4,
    title: "Rooh 2",
    img: musicAlbums4,
    description: "Rooh is a song by Honey Singh from his album Honey Singh 2.0.",
    language: "Hindi",
    duration: "3 min 47 sec",
    genre: "Hip-Hop, Indian",
    releaseYear: "2024",
    quality: "3D | IMAX 3D",
    ageRestriction: "10+",
  },
  {
    id: 5,
    title: "Aaye Haaye 2",
    img: musicAlbums5,
    description:
      "A romantic ballad from the movie Singh is King Mahi that features Rajkummar Rao and Janhvi Kapoor.",
    language: "Hindi",
    duration: "4 min",
    genre: "Pop, Romantic",
    releaseYear: "2023",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 6,
    title: "Ab Rota Nahi Ye Dil 2",
    img: musicAlbums6,
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
    title: "Deewane 2",
    img: musicAlbums7,
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
    title: "Aaj Fir 2",
    img: musicAlbums8,
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
    title: "Rehne Do Zara 2",
    img: musicAlbums9,
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
    title: "Jeena Abhi Baki Hai 2",
    img: musicAlbums10,
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
    title: "Hum Itna Roye Hai 2",
    img: musicAlbums11,
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
    title: "O Saki Saki 2",
    img: musicAlbums12,
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
    title: "Aaj Ki Raat 2",
    img: musicAlbums13,
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
    title: "Tum Mile Ho 2",
    img: musicAlbums14,
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
    title: "Shayad 2",
    img: musicAlbums15,
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
    title: "Care Ni Karda 2",
    img: musicAlbums16,
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
    title: "Care Ni Karda 2",
    img: musicAlbums17,
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
    title: "Care Ni Karda 2",
    img: musicAlbums18,
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
    title: "Care Ni Karda 2",
    img: musicAlbums19,
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
    title: "Care Ni Karda 2",
    img: musicAlbums20,
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
    title: "Care Ni Karda 2",
    img: musicAlbums21,
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
    title: "Care Ni Karda 2",
    img: musicAlbums22,
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
    title: "Care Ni Karda 2",
    img: musicAlbums23,
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
    title: "Care Ni Karda 2",
    img: musicAlbums24,
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
    title: "Care Ni Karda 2",
    img: musicAlbums25,
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
    title: "Care Ni Karda 2",
    img: musicAlbums26,
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
    title: "Care Ni Karda 2",
    img: musicAlbums27,
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
    title: "Care Ni Karda 2",
    img: musicAlbums28,
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
    title: "Care Ni Karda 2",
    img: musicAlbums29,
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

export default musicAlbumsSectionData;
