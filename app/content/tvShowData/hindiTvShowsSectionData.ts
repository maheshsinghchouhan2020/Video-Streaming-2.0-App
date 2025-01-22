import { StaticImageData } from "next/image";
import hindiTvShow1 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow1.webp";
import hindiTvShow2 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow2.webp";
import hindiTvShow3 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow3.webp";
import hindiTvShow4 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow4.webp";
import hindiTvShow5 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow5.webp";
import hindiTvShow6 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow6.webp";
import hindiTvShow7 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow7.webp";
import hindiTvShow8 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow8.webp";
import hindiTvShow9 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow9.webp";
import hindiTvShow10 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow10.webp";
import hindiTvShow11 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow11.webp";
import hindiTvShow12 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow12.webp";
import hindiTvShow13 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow13.webp";
import hindiTvShow14 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow14.webp";
import hindiTvShow15 from "../../../public/assets/tvShowAssets/hindiTvShowsAssets/hindiTvShow15.webp";

interface hindiTvShowsProps {
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

const hindiTvShowsSectionData: hindiTvShowsProps[] = [
  {
    id: 1,
    title: "Kar Fateh",
    img: hindiTvShow1,
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
    title: "Power House",
    img: hindiTvShow2,
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
    title: "Feeling",
    img: hindiTvShow3,
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
    title: "Rooh",
    img: hindiTvShow4,
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
    title: "Aaye Haaye",
    img: hindiTvShow5,
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
    title: "Ab Rota Nahi Ye Dil",
    img: hindiTvShow6,
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
    img: hindiTvShow7,
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
    img: hindiTvShow8,
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
    img: hindiTvShow9,
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
    img: hindiTvShow10,
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
    img: hindiTvShow11,
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
    img: hindiTvShow12,
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
    img: hindiTvShow13,
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
    img: hindiTvShow14,
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
    img: hindiTvShow15,
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

export default hindiTvShowsSectionData;
