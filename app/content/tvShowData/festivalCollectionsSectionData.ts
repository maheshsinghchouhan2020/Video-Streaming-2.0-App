import { StaticImageData } from "next/image";
import festivalCollections1 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections1.webp";
import festivalCollections2 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections2.webp";
import festivalCollections3 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections3.webp";
import festivalCollections4 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections4.webp";
import festivalCollections5 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections5.webp";
import festivalCollections6 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections6.webp";
import festivalCollections7 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections7.webp";
import festivalCollections8 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections8.webp";
import festivalCollections9 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections9.webp";
import festivalCollections10 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections10.webp";
import festivalCollections11 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections11.webp";
import festivalCollections12 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections12.webp";
import festivalCollections13 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections13.webp";
import festivalCollections14 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections14.webp";
import festivalCollections15 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections15.webp";
import festivalCollections16 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections16.webp";
import festivalCollections17 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections17.webp";
import festivalCollections18 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections18.webp";
import festivalCollections19 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections19.webp";
import festivalCollections20 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections20.webp";
import festivalCollections21 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections21.webp";
import festivalCollections22 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections22.webp";
import festivalCollections23 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections23.webp";
import festivalCollections24 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections24.webp";
import festivalCollections25 from "../../../public/assets/tvShowAssets/festivalCollectionsAssets/festivalCollections25.webp";

interface festivalCollectionsProps {
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

const festivalCollectionsSectionData: festivalCollectionsProps[] = [
  {
    id: 1,
    title: "Independance Day",
    img: festivalCollections1,
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
    title: "Happy New Year",
    img: festivalCollections2,
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
    title: "Onam",
    img: festivalCollections3,
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
    title: "Ganesh Chaturthi",
    img: festivalCollections4,
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
    title: "Krishna Janmashtami",
    img: festivalCollections5,
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
    title: "Diwali",
    img: festivalCollections6,
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
    title: "Holi",
    img: festivalCollections7,
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
    title: "Pongal",
    img: festivalCollections8,
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
    title: "Ganesh Jii",
    img: festivalCollections9,
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
    title: "Navratri",
    img: festivalCollections10,
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
    title: "Dahi Handi",
    img: festivalCollections11,
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
    title: "Jagannath Rath Yatra",
    img: festivalCollections12,
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
    title: "Ganeshotsav",
    img: festivalCollections13,
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
    title: "Garbe",
    img: festivalCollections14,
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
    title: "Mataji",
    img: festivalCollections15,
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
    title: "Ganpati Bappa",
    img: festivalCollections16,
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
    title: "Buffalo Race",
    img: festivalCollections17,
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
    title: "Dandiya",
    img: festivalCollections18,
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
    title: "Pihu",
    img: festivalCollections19,
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
    title: "Festivals of Ladakh",
    img: festivalCollections20,
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
    title: "Bengal Maa Durga",
    img: festivalCollections21,
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
    title: "Dusshera",
    img: festivalCollections22,
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
    id: 23,
    title: "Guru Nanak Jayanti",
    img: festivalCollections23,
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
    id: 24,
    title: "Lohri",
    img: festivalCollections24,
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
    id: 25,
    title: "Happy Pongal",
    img: festivalCollections25,
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

export default festivalCollectionsSectionData;
