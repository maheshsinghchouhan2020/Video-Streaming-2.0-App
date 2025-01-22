import { StaticImageData } from "next/image";
import tvCollections1 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections1.webp";
import tvCollections2 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections2.webp";
import tvCollections3 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections3.webp";
import tvCollections4 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections4.webp";
import tvCollections5 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections5.webp";
import tvCollections6 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections6.webp";
import tvCollections7 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections7.webp";
import tvCollections8 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections8.webp";
import tvCollections9 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections9.webp";
import tvCollections10 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections10.webp";
import tvCollections11 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections11.webp";
import tvCollections12 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections12.webp";
import tvCollections13 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections13.webp";
import tvCollections14 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections14.webp";
import tvCollections15 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections15.webp";
import tvCollections16 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections16.webp";
import tvCollections17 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections17.webp";
import tvCollections18 from "../../../public/assets/tvShowAssets/tvCollectionsAssets/tvCollections18.webp";

interface tvCollectionsProps {
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

const tvCollectionsSectionData: tvCollectionsProps[] = [
  {
    id: 1,
    title: "Kar Fateh 4",
    img: tvCollections1,
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
    title: "Power House 4",
    img: tvCollections2,
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
    title: "Feeling 4",
    img: tvCollections3,
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
    title: "Rooh 4",
    img: tvCollections4,
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
    title: "Aaye Haaye 4",
    img: tvCollections5,
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
    title: "Ab Rota Nahi Ye Dil 4",
    img: tvCollections6,
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
    title: "Deewane 4",
    img: tvCollections7,
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
    title: "Aaj Fir 4",
    img: tvCollections8,
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
    title: "Rehne Do Zara 4",
    img: tvCollections9,
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
    title: "Jeena Abhi Baki Hai 4",
    img: tvCollections10,
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
    title: "Hum Itna Roye Hai 4",
    img: tvCollections11,
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
    title: "O Saki Saki 4",
    img: tvCollections12,
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
    title: "Aaj Ki Raat 4",
    img: tvCollections13,
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
    title: "Tum Mile Ho 4",
    img: tvCollections14,
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
    title: "Shayad 4",
    img: tvCollections15,
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
    title: "Shayad 4",
    img: tvCollections16,
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
    title: "Shayad 4",
    img: tvCollections17,
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
    title: "Shayad 4",
    img: tvCollections18,
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

export default tvCollectionsSectionData;
