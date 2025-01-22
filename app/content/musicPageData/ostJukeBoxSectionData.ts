import { StaticImageData } from "next/image";
import ostJukeBox1 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox1.webp";
import ostJukeBox2 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox2.webp";
import ostJukeBox3 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox3.webp";
import ostJukeBox4 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox4.webp";
import ostJukeBox5 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox5.webp";
import ostJukeBox6 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox6.webp";
import ostJukeBox7 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox7.webp";
import ostJukeBox8 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox8.webp";
import ostJukeBox9 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox9.webp";
import ostJukeBox10 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox10.webp";
import ostJukeBox11 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox11.webp";
import ostJukeBox12 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox12.webp";
import ostJukeBox13 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox13.webp";
import ostJukeBox14 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox14.webp";
import ostJukeBox15 from "../../../public/assets/musicPageAssets/ostJukeBoxSectionAssets/ostJukeBox15.webp";

interface ostJukeBoxProps {
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

const ostJukeBoxSectionData: ostJukeBoxProps[] = [
  {
    id: 1,
    title: "Kar Fateh 4",
    img: ostJukeBox1,
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
    img: ostJukeBox2,
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
    img: ostJukeBox3,
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
    img: ostJukeBox4,
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
    img: ostJukeBox5,
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
    img: ostJukeBox6,
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
    img: ostJukeBox7,
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
    img: ostJukeBox8,
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
    img: ostJukeBox9,
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
    img: ostJukeBox10,
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
    img: ostJukeBox11,
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
    img: ostJukeBox12,
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
    img: ostJukeBox13,
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
    img: ostJukeBox14,
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
    img: ostJukeBox15,
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

export default ostJukeBoxSectionData;
