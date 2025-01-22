import { StaticImageData } from "next/image";
import musicalHits1 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits1.webp";
import musicalHits2 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits2.webp";
import musicalHits3 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits3.webp";
import musicalHits4 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits4.webp";
import musicalHits5 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits5.webp";
import musicalHits6 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits6.webp";
import musicalHits7 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits7.webp";
import musicalHits8 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits8.webp";
import musicalHits9 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits9.webp";
import musicalHits10 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits10.webp";
import musicalHits11 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits11.webp";
import musicalHits12 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits12.webp";
import musicalHits13 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits13.webp";
import musicalHits14 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits14.webp";
import musicalHits15 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits15.webp";
import musicalHits16 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits16.webp";
import musicalHits17 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits17.webp";
import musicalHits18 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits18.webp";
import musicalHits19 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits19.webp";
import musicalHits20 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits20.webp";
import musicalHits21 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits21.webp";
import musicalHits22 from "../../../public/assets/musicPageAssets/musicalHitsSectionAssets/musicalHits22.webp";

interface musicalHitsProps {
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

const musicalHitsSectionData: musicalHitsProps[] = [
  {
    id: 1,
    title: "Kar Fateh 6",
    img: musicalHits1,
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
    title: "Power House 6",
    img: musicalHits2,
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
    title: "Feeling 6",
    img: musicalHits3,
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
    title: "Rooh 6",
    img: musicalHits4,
    description:
      "Rooh is a song by Honey Singh from his album Honey Singh 2.0.",
    language: "Hindi",
    duration: "3 min 47 sec",
    genre: "Hip-Hop, Indian",
    releaseYear: "2024",
    quality: "3D | IMAX 3D",
    ageRestriction: "10+",
  },
  {
    id: 5,
    title: "Aaye Haaye 6",
    img: musicalHits5,
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
    title: "Ab Rota Nahi Ye Dil 6",
    img: musicalHits6,
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
    title: "Deewane 6",
    img: musicalHits7,
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
    title: "Aaj Fir 6",
    img: musicalHits8,
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
    title: "Rehne Do Zara 6",
    img: musicalHits9,
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
    title: "Jeena Abhi Baki Hai 6",
    img: musicalHits10,
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
    title: "Hum Itna Roye Hai 6",
    img: musicalHits11,
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
    title: "O Saki Saki 6",
    img: musicalHits12,
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
    title: "Aaj Ki Raat 6",
    img: musicalHits13,
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
    title: "Tum Mile Ho 6",
    img: musicalHits14,
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
    title: "Shayad 6",
    img: musicalHits15,
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
    title: "Shayad 6",
    img: musicalHits16,
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
    id: 17,
    title: "Shayad 6",
    img: musicalHits17,
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
    id: 18,
    title: "Shayad 6",
    img: musicalHits18,
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
    id: 19,
    title: "Shayad 6",
    img: musicalHits19,
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
    id: 20,
    title: "Shayad 6",
    img: musicalHits20,
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
    id: 21,
    title: "Shayad 6",
    img: musicalHits21,
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
    id: 22,
    title: "Shayad 6",
    img: musicalHits22,
    description:
      "The song “Shayad” from the album Love Aaj Kal is a Hindi song about the innocence of first love and the fear of losing it.",
    language: "Hindi",
    duration: "6 min",
    genre: "Romance, Love, Drama",
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
];

export default musicalHitsSectionData;
