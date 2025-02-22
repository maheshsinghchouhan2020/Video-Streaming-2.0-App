import { StaticImageData } from "next/image";
import recentlyAdd1 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd1.webp";
import recentlyAdd2 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd2.webp";
import recentlyAdd3 from"../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd3.webp";
import recentlyAdd4 from"../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd4.webp";
import recentlyAdd5 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd5.webp";
import recentlyAdd6 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd6.webp";
import recentlyAdd7 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd7.webp";
import recentlyAdd8 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd8.webp";
import recentlyAdd9 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd9.webp";
import recentlyAdd10 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd10.webp";
import recentlyAdd11 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd11.webp";
import recentlyAdd12 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd12.webp";
import recentlyAdd13 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd13.webp";
import recentlyAdd14 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd14.webp";
import recentlyAdd15 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd15.webp";
import recentlyAdd16 from"../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd16.webp";
import recentlyAdd17 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd17.webp";
import recentlyAdd18 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd18.webp";
import recentlyAdd19 from"../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd19.webp";
import recentlyAdd20 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd20.webp";
import recentlyAdd21 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd21.webp";
import recentlyAdd22 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd22.webp";
import recentlyAdd23 from"../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd23.webp";
import recentlyAdd24 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd24.webp";
import recentlyAdd25 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd25.webp";
import recentlyAdd26 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd26.webp";
import recentlyAdd27 from"../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd27.webp";
import recentlyAdd28 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd28.webp";
import recentlyAdd29 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd29.webp";
import recentlyAdd30 from "../../../public/assets/homePageAssets/recentlyAddAssetsSection/recentlyAdd30.webp";
interface recentAddMoviesProps {
    id: number;
    title: string;
    img: string | StaticImageData
    description: string;
    language: string;
    duration: string;
    genre: string[];
    releaseDate: string;
    quality: string;
    age: string
}

const recentAddMovies: recentAddMoviesProps[] = [
    {
        id: 1,
        title: "Dhoom 2",
        img: recentlyAdd1,
        description: "A thrilling action-packed heist film",
        language: "Hindi",
        duration: "152 min",
        genre: ["Action, Crime"],
        releaseDate: "2006-11-24",
        quality: "4k",
        age: "13+",
    },
    {
        id: 2,
        title: "Krrish",
        img: recentlyAdd2,
        description: "A superhero tale with action and sci-fi elements",
        language: "Hindi",
        duration: "153 min",
        genre: ["Action, Adventure, Sci-Fi"],
        releaseDate: "2006-06-23",
        quality: "4k",
        age: "13+",
    },
    {
        id: 3,
        title: "Sholay",
        img: recentlyAdd3,
        description: "A classic action-packed drama about friendship and revenge",
        language: "Hindi",
        duration: "159 min",
        genre: ["Action, Adventure, Drama"],
        releaseDate: "1975-08-15",
        quality: "4k",
        age: "13+",
    },
    {
        id: 4,
        title: "War",
        img: recentlyAdd4,
        description: "An action thriller about espionage and betrayal",
        language: "Hindi",
        duration: "154 min",
        genre: ["Action, Adventure, Crime"],
        releaseDate: "2019-10-02",
        quality: "4k",
        age: "13+",
    },
    {
        id: 5,
        title: "Ra.One",
        img: recentlyAdd5,
        description: "A sci-fi superhero film featuring high-tech action sequences",
        language: "Hindi",
        duration: "156 min",
        genre: ["Action, Sci-Fi"],
        releaseDate: "2011-10-26",
        quality: "4k",
        age: "13+",
    },
    {
        id: 6,
        title: "Baahubali: The Beginning",
        img: recentlyAdd6,

        description: "An epic action-adventure about power and betrayal",
        language: "Telugu",
        duration: "159 min",
        genre: ["Action, Adventure, Drama"],
        releaseDate: "2015-07-10",
        quality: "4k",
        age: "13+",
    },
    {
        id: 7,
        title: "Don",
        img: recentlyAdd7,

        description: "A thrilling crime drama about a powerful underworld figure",
        language: "Hindi",
        duration: "174 min",
        genre: ["Action, Crime"],
        releaseDate: "2006-11-20",
        quality: "4k",
        age: "13+",
    },
    {
        id: 8,
        title: "Thugs of Hindostan",
        img: recentlyAdd8,
        description: "A high-stakes action-adventure set in the British Raj",
        language: "Hindi",
        duration: "164 min",
        genre: ["Action, Adventure"],
        releaseDate: "2018-11-08",
        quality: "4k",
        age: "13+",
    },
    {
        id: 9,
        title: "Raees",
        img: recentlyAdd9,
        description: "A crime drama about the rise of a small-town gangster",
        language: "Hindi",
        duration: "143 min",
        genre: ["Action, Crime, Drama"],
        releaseDate: "2017-01-25",
        quality: "4k",
        age: "13+",
    },
    {
        id: 10,
        title: "Robot 2.0",
        img: recentlyAdd10,
        description: "A sci-fi action film featuring advanced robots in battle",
        language: "Tamil",
        duration: "148 min",
        genre: ["Action, Sci-Fi"],
        releaseDate: "2018-11-29",
        quality: "4k",
        age: "All",
    },
    {
        id: 11,
        title: "PK",
        img: recentlyAdd11,
        description: "A satirical drama exploring social issues through the eyes of an alien",
        language: "Hindi",
        duration: "153 min",
        genre: ["Comedy, Drama, Fantasy"],
        releaseDate: "2014-12-19",
        quality: "4k",
        age: "18+",
    },
    {
        id: 12,
        title: "3 Idiots",
        img: recentlyAdd12,
        description: "A heartwarming story of friendship, education, and life lessons",
        language: "Hindi",
        duration: "170 min",
        genre: ["Comedy, Drama"],
        releaseDate: "2009-12-25",
        quality: "4k",
        age: "13+",
    },
    {
        id: 13,
        title: "Kabir Singh",
        img: recentlyAdd13,
        description: "A romantic drama about a surgeon's journey through heartbreak",
        language: "Hindi",
        duration: "172 min",
        genre: ["Drama, Romance"],
        releaseDate: "2019-06-21",
        quality: "4k",
        age: "18+",
    },
    {
        id: 14,
        title: "Tanhaji: The Unsung Warrior",
        img: recentlyAdd14,
        description: "An epic action-drama based on the life of a Maratha warrior",
        language: "Hindi",
        duration: "135 min",
        genre: ["Action, Drama, History"],
        releaseDate: "2020-01-10",
        quality: "4k",
        age: "All",
    },
    {
        id: 15,
        title: "Barfi!",
        img: recentlyAdd15,
        description: "A heartwarming tale of love and self-discovery",
        language: "Hindi",
        duration: "151 min",
        genre: ["Comedy, Drama, Romance"],
        releaseDate: "2012-09-14",
        quality: "4k",
        age: "18+",
    },
    {
        id: 16,
        title: "Lagaan",
        img: recentlyAdd16,
        description: "A period drama about an Indian village challenging the British in cricket",
        language: "Hindi",
        duration: "224 min",
        genre: ["Drama, Sport"],
        releaseDate: "2001-06-15",
        quality: "4k",
        age: "16+",
    },
    {
        id: 17,
        title: "Padmaavat",
        img: recentlyAdd17,
        description: "A historical drama depicting the story of Rani Padmavati",
        language: "Hindi",
        duration: "164 min",
        genre: ["Drama, History, Romance"],
        releaseDate: "2018-01-25",
        quality: "4k",
        age: "18+",
    },
    {
        id: 18,
        title: "Chennai Express",
        img: recentlyAdd18,
        description: "A fun-filled action-comedy about an unexpected journey",
        language: "Hindi",
        duration: "141 min",
        genre: ["Action, Comedy, Romance"],
        releaseDate: "2013-08-09",
        quality: "4k",
        age: "13+",
    },
    {
        id: 19,
        title: "Baahubali: The Conclusion",
        img: recentlyAdd19,
        description: "The epic continuation of the Baahubali saga",
        language: "Telugu",
        duration: "171 min",
        genre: ["Action, Drama"],
        releaseDate: "2017-04-28",
        quality: "4k",
        age: "16+",
    },
    {
        id: 20,
        title: "Dilwale Dulhania Le Jayenge",
        img: recentlyAdd20,
        description: "A classic romantic tale of love and family values",
        language: "Hindi",
        duration: "189 min",
        genre: ["Drama, Romance"],
        releaseDate: "1995-10-20",
        quality: "4k",
        age: "18+",
    },
    {
        id: 21,
        title: "Dangal",
        img: recentlyAdd21,
        description: "An inspiring story of a father training his daughters for wrestling",
        language: "Hindi",
        duration: "161 min",
        genre: ["Biography, Drama, Sport"],
        releaseDate: "2016-12-23",
        quality: "4k",
        age: "18+",
    },
    {
        id: 22,
        title: "Zindagi Na Milegi Dobara",
        img: recentlyAdd22,
        description: "A journey of self-discovery and friendship during a bachelor trip",
        language: "Hindi",
        duration: "155 min",
        genre: ["Comedy, Drama"],
        releaseDate: "2011-07-15",
        quality: "4k",
        age: "13+",
    },
    {
        id: 23,
        title: "Gully Boy",
        img: recentlyAdd23,
        description: "A coming-of-age story of a street rapper from Mumbai",
        language: "Telugu",
        duration: "153 min",
        genre: ["Drama, Music"],
        releaseDate: "2019-02-14",
        quality: "4k",
        age: "18+",
    },
    {
        id: 24,
        title: "Kesari",
        img: recentlyAdd24,
        description: "A historical drama based on the Battle of Saragarhi",
        language: "Kannada",
        duration: "150 min",
        genre: ["Action, Drama, History"],
        releaseDate: "2019-03-21",
        quality: "4k",
        age: "18+",
    },
    {
        id: 25,
        title: "Drishyam",
        img: recentlyAdd25,
        description: "A suspenseful crime drama about a man protecting his family",
        language: "Tamil",
        duration: "163 min",
        genre: ["Crime, Drama, Thriller"],
        releaseDate: "2015-07-31",
        quality: "4k",
        age: "18+",
    },
    {
        id: 26,
        title: "Kal Ho Naa Ho",
        img: recentlyAdd26,
        description: "A heartfelt romantic drama about love, life, and friendship",
        language: "Hindi",
        duration: "186 min",
        genre: ["Comedy, Drama, Romance"],
        releaseDate: "2003-11-28",
        quality: "4k",
        age: "13+",
    },
    {
        id: 27,
        title: "Bajrangi Bhaijaan",
        img: recentlyAdd27,
        description: "A touching tale of a man helping a mute girl reunite with her family",
        language: "Kannada",
        duration: "163 min",
        genre: ["Action, Adventure, Drama"],
        releaseDate: "2015-07-17",
        quality: "4k",
        age: "16+",
    },
    {
        id: 28,
        title: "Kick",
        img: recentlyAdd28,
        description: "A high-octane action film about a thrill-seeker's adventures",
        language: "Hindi",
        duration: "146 min",
        genre: ["Action, Comedy"],
        releaseDate: "2014-07-25",
        quality: "4k",
        age: "18+",
    },
    {
        id: 29,
        title: "Rockstar",
        img: recentlyAdd29,
        description: "A musical drama about love, passion, and heartbreak",
        language: "Hindi",
        duration: "159 min",
        genre: ["Drama, Music, Romance"],
        releaseDate: "2011-11-11",
        quality: "4k",
        age: "18+",
    },
    {
        id: 30,
        title: "Kabhi Khushi Kabhie Gham",
        img: recentlyAdd30,
        description: "A family drama exploring relationships, love, and traditions",
        language: "Tamil",
        duration: "210 min",
        genre: ["Drama, Musical, Romance"],
        releaseDate: "2001-12-14",
        quality: "4k",
        age: "All",
    },
];
export default recentAddMovies