import { StaticImageData } from "next/image";
import jukeBox1 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox1.webp";
import jukeBox2 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox2.webp";
import jukeBox3 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox3.webp";
import jukeBox4 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox4.webp";
import jukeBox5 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox5.webp";
import jukeBox6 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox6.webp";
import jukeBox7 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox7.webp";
import jukeBox8 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox8.webp";
import jukeBox9 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox9.webp";
import jukeBox10 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox10.webp";
import jukeBox11 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox11.webp";
import jukeBox12 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox12.webp";
import jukeBox13 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox13.webp";
import jukeBox14 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox14.webp";
import jukeBox15 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox15.webp";
import jukeBox16 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox16.webp";
import jukeBox17 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox17.webp";
import jukeBox18 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox18.webp";
import jukeBox19 from "../../../public/assets/musicPageAssets/jukeBoxSectionAssets/jukeBox19.webp";

interface jukeBoxProps {
  id: number;
  title: string;
  img: string | StaticImageData;
  description: string;
  language: string;
  duration: string;
  genre: string[];
  releaseYear: string;
  quality: string;
  ageRestriction: string;
}

const jukeBoxSectionData: jukeBoxProps[] = [
  {
    id: 1,
    title: "Kar Fateh 3",
    img: jukeBox1,
    description:
      "Kar Fateh is a Hindi romantic song and album by Ishaan Khan and S. Thakur.",
    language: "Hindi",
    duration: "4 min 59 sec",
    genre: ["Pop"],
    releaseYear: "2024",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 2,
    title: "Power House 3",
    img: jukeBox2,
    description: "A energetic songs of the gansters.",
    language: "Hindi",
    duration: "5 min 14 sec",
    genre: ["Bollywood"],
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "15+",
  },
  {
    id: 3,
    title: "Feeling 3",
    img: jukeBox3,
    description: "Feeling is a song from the album Pushpa3 movie.",
    language: "Hindi",
    duration: "5 min 30 sec",
    genre: ["Pop, Filmi"],
    releaseYear: "2024",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 4,
    title: "Rooh 3",
    img: jukeBox4,
    description:
      "Rooh is a song by Honey Singh from his album Honey Singh 2.0.",
    language: "Hindi",
    duration: "3 min 47 sec",
    genre: ["Hip-Hop, Indian"],
    releaseYear: "2024",
    quality: "3D | IMAX 3D",
    ageRestriction: "10+",
  },
  {
    id: 5,
    title: "Aaye Haaye 3",
    img: jukeBox5,
    description:
      "A romantic ballad from the movie Singh is King Mahi that features Rajkummar Rao and Janhvi Kapoor.",
    language: "Hindi",
    duration: "4 min",
    genre: ["Pop, Romantic"],
    releaseYear: "2023",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 6,
    title: "Ab Rota Nahi Ye Dil 3",
    img: jukeBox6,
    description:
      "Ab Rota Nahi Yeh Dil is a 2023 Hindi music album with one song.",
    language: "Hindi, English",
    duration: "3 min 56 sec",
    genre: ["Classic, Lo-fi"],
    releaseYear: "2023",
    quality: "HD | Dolby Atmos",
    ageRestriction: "15+",
  },
  {
    id: 7,
    title: "Deewane 3",
    img: jukeBox7,
    description: "Deewane is a 2023 Hindi music album with one song.",
    language: "Hindi",
    duration: "5 min",
    genre: ["Romance, Love, Drama"],
    releaseYear: "2023",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 8,
    title: "Aaj Fir 3",
    img: jukeBox8,
    description: "An epic love story about two friends.",
    language: "Hindi",
    duration: "6 min",
    genre: ["Romance, Love, Drama"],
    releaseYear: "2020",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 9,
    title: "Rehne Do Zara 3",
    img: jukeBox9,
    description: "An epic love story about two classmates.",
    language: "Hindi",
    duration: "5 min 35 sec",
    genre: ["Romance, Love, Drama"],
    releaseYear: "2023",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 10,
    title: "Jeena Abhi Baki Hai 3",
    img: jukeBox10,
    description: "An epic love story about two friends.",
    language: "Hindi",
    duration: "4 min",
    genre: ["Romance, Love, Drama"],
    releaseYear: "2021",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 11,
    title: "Hum Itna Roye Hai 3",
    img: jukeBox11,
    description: "An epic love story about two friends.",
    language: "English, Hindi",
    duration: "6 min",
    genre: ["Romance, Love, Drama"],
    releaseYear: "2023",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 12,
    title: "O Saki Saki 3",
    img: jukeBox12,
    description:
      "O Saki Saki is a Hindi language album that features the song of the same name from the movie Batla House",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: ["Item Song, Bollywood"],
    releaseYear: "2019",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 13,
    title: "Aaj Ki Raat 3",
    img: jukeBox13,
    description: "Aaj Ki Raat is a song from the 2024 Hindi film Stree 2.",
    language: "Hindi",
    duration: "4 min 12 sec",
    genre: ["Item Song, Bollywood"],
    releaseYear: "2024",
    quality: "HD",
    ageRestriction: "13+",
  },
  {
    id: 14,
    title: "Tum Mile Ho 3",
    img: jukeBox14,
    description: "An epic love story of two couples.",
    language: "Hindi",
    duration: "2 min 55 sec",
    genre: ["Romance, Love, Drama"],
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 15,
    title: "Shayad 3",
    img: jukeBox15,
    description:
      "The song “Shayad” from the album Love Aaj Kal is a Hindi song about the innocence of first love and the fear of losing it.",
    language: "Hindi",
    duration: "6 min",
    genre: ["Romance, Love, Drama"],
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 16,
    title: "Care Ni Karda 3",
    img: jukeBox16,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: ["Romance, Love"],
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 17,
    title: "Care Ni Karda 3",
    img: jukeBox17,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: ["Romance, Love"],
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 18,
    title: "Care Ni Karda 3",
    img: jukeBox18,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: ["Romance, Love"],
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 19,
    title: "Care Ni Karda 3",
    img: jukeBox19,
    description:
      "The Care Ni Karda album is a Hindi album that features a single song from the Bollywood movie Chhalaang.",
    language: "Hindi",
    duration: "4 min 30 sec",
    genre: ["Romance, Love"],
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
];

export default jukeBoxSectionData;
