import { StaticImageData } from "next/image";
import romanceMania1 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania1.webp";
import romanceMania2 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania2.webp";
import romanceMania3 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania3.webp";
import romanceMania4 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania4.webp";
import romanceMania5 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania5.webp";
import romanceMania6 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania6.webp";
import romanceMania7 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania7.webp";
import romanceMania8 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania8.webp";
import romanceMania9 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania9.webp";
import romanceMania10 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania10.webp";
import romanceMania11 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania11.webp";
import romanceMania12 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania12.webp";
import romanceMania13 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania13.webp";
import romanceMania14 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania14.webp";
import romanceMania15 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania15.webp";
import romanceMania16 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania16.webp";
import romanceMania17 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania17.webp";
import romanceMania18 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania18.webp";
import romanceMania19 from "../../../public/assets/musicPageAssets/romanceManiaAssets/romanceMania19.webp";

interface romanceManiaProps {
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

const romanceManiaSectionData: romanceManiaProps[] = [
  {
    id: 1,
    title: "Kar Fateh 7",
    img: romanceMania1,
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
    title: "Power House 7",
    img: romanceMania2,
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
    title: "Feeling 7",
    img: romanceMania3,
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
    title: "Rooh 7",
    img: romanceMania4,
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
    title: "Aaye Haaye 7",
    img: romanceMania5,
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
    title: "Ab Rota Nahi Ye Dil 7",
    img: romanceMania6,
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
    title: "Deewane 7",
    img: romanceMania7,
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
    title: "Aaj Fir 7",
    img: romanceMania8,
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
    title: "Rehne Do Zara 7",
    img: romanceMania9,
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
    title: "Jeena Abhi Baki Hai 7",
    img: romanceMania10,
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
    title: "Hum Itna Roye Hai 7",
    img: romanceMania11,
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
    title: "O Saki Saki 7",
    img: romanceMania12,
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
    title: "Aaj Ki Raat 7",
    img: romanceMania13,
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
    title: "Tum Mile Ho 7",
    img: romanceMania14,
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
    title: "Shayad 7",
    img: romanceMania15,
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
    title: "Shayad 7",
    img: romanceMania16,
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
    title: "Shayad 7",
    img: romanceMania17,
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
    title: "Shayad 7",
    img: romanceMania18,
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
    title: "Shayad 7",
    img: romanceMania19,
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

export default romanceManiaSectionData;
