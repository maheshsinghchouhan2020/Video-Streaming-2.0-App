import { StaticImageData } from "next/image";
import recentlyAdd1 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd11.webp";
import recentlyAdd2 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd12.webp";
import recentlyAdd3 from"../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd13.webp";
import recentlyAdd4 from"../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd14.webp";
import recentlyAdd5 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd15.webp";
import recentlyAdd6 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd16.webp";
import recentlyAdd7 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd17.webp";
import recentlyAdd8 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd18.webp";
import recentlyAdd9 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd19.webp";
import recentlyAdd10 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd20.webp";
interface LatestSongsProps {
    id: number;
    title: string;
    img: string | StaticImageData
    description: string;
    language: string;
    duration: string;
    genre: string;
    releaseDate: string;
    quality: string;
    age: string
}

const LatestSongs: LatestSongsProps[] = [
    {
        id: 1,
        title: "Song",
        img: recentlyAdd1,
        description: "A thrilling action-packed heist film",
        language: "Hindi",
        duration: "4 min",
        genre: "Music",
        releaseDate: "2006-11-24",
        quality: "4k",
        age: "13+",
    },
    {
        id: 2,
        title: "Song 2",
        img: recentlyAdd2,
        description: "A superhero tale with action and sci-fi elements",
        language: "Hindi",
        duration: "4 min",
        genre: "Music",
        releaseDate: "2006-06-23",
        quality: "4k",
        age: "13+",
    },
    {
        id: 3,
        title: "Song 3",
        img: recentlyAdd3,
        description: "A classic action-packed drama about friendship and revenge",
        language: "Hindi",
        duration: "4 min",
        genre: "Music",
        releaseDate: "1975-08-15",
        quality: "4k",
        age: "13+",
    },
    {
        id: 4,
        title: "Song 4",
        img: recentlyAdd4,
        description: "An action thriller about espionage and betrayal",
        language: "Hindi",
        duration: "4 min",
        genre: "Music",
        releaseDate: "2019-10-02",
        quality: "4k",
        age: "13+",
    },
    {
        id: 5,
        title: "Song 5",
        img: recentlyAdd5,
        description: "A sci-fi superhero film featuring high-tech action sequences",
        language: "Hindi",
        duration: "4 min",
        genre: "Music",
        releaseDate: "2011-10-26",
        quality: "4k",
        age: "13+",
    },
    {
        id: 6,
        title: "Song 6",
        img: recentlyAdd6,
        description: "An epic action-adventure about power and betrayal",
        language: "Telugu",
        duration: "4 min",
        genre: "Music",
        releaseDate: "2015-07-10",
        quality: "4k",
        age: "13+",
    },
    {
        id: 7,
        title: "Song 7",
        img: recentlyAdd7,
        description: "A thrilling crime drama about a powerful underworld figure",
        language: "Hindi",
        duration: "4 min",
        genre: "Music",
        releaseDate: "2006-11-20",
        quality: "4k",
        age: "13+",
    },
    {
        id: 8,
        title: "Song 8",
        img: recentlyAdd8,
        description: "A high-stakes action-adventure set in the British Raj",
        language: "Hindi",
        duration: "4 min",
        genre: "Music",
        releaseDate: "2018-11-08",
        quality: "4k",
        age: "13+",
    },
    {
        id: 9,
        title: "Song 9",
        img: recentlyAdd9,
        description: "A crime drama about the rise of a small-town gangster",
        language: "Hindi",
        duration: "4 min",
        genre: "Music",
        releaseDate: "2017-01-25",
        quality: "4k",
        age: "13+",
    },
    {
      id: 10,
      title: "Song 10",
      img: recentlyAdd10,
      description: "A sci-fi action film featuring advanced robots in battle",
      language: "Tamil",
      duration: "4 min",
      genre: "Music",
      releaseDate: "2018-11-29",
      quality: "4k",
      age: "All",
  },
];
export default LatestSongs