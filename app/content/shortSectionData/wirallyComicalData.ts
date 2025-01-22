import { StaticImageData } from "next/image";
import wirallyComical1 from "@/public/assets/shortSectionAssets/wirallyComicalAssests/wirallyComical1.webp"
import wirallyComical2 from "@/public/assets/shortSectionAssets/wirallyComicalAssests/wirallyComical2.webp"
import wirallyComical3 from "@/public/assets/shortSectionAssets/wirallyComicalAssests/wirallyComical3.webp"
import wirallyComical4 from "@/public/assets/shortSectionAssets/wirallyComicalAssests/wirallyComical4.webp"
import wirallyComical5 from "@/public/assets/shortSectionAssets/wirallyComicalAssests/wirallyComical5.webp"
import wirallyComical6 from "@/public/assets/shortSectionAssets/wirallyComicalAssests/wirallyComical6.webp"
import wirallyComical7 from "@/public/assets/shortSectionAssets/wirallyComicalAssests/wirallyComical7.webp"
import wirallyComical8 from "@/public/assets/shortSectionAssets/wirallyComicalAssests/wirallyComical8.webp"
import wirallyComical9 from "@/public/assets/shortSectionAssets/wirallyComicalAssests/wirallyComical9.webp"
import wirallyComical10 from "@/public/assets/shortSectionAssets/wirallyComicalAssests/wirallyComical10.webp"


interface wirallyComicalDataProps {
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

const wirallyComicalData: wirallyComicalDataProps[] = [
    {
        id: 1,
        title: "Kudi Haryane Wal de",
        img: wirallyComical1,
        description: "A heartwarming story of a young woman from Haryana navigating love, tradition, and her dreams in a rapidly changing world.",
        language: "Hindi, Tamil",
        duration: "",
        genre: "Shorts , Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Jat ni Chudai Jat di",
        img: wirallyComical2,
        description: "A gripping tale of identity, pride, and overcoming societal expectations within a traditional Jat community.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "500 Meters",
        img: wirallyComical3,
        description: "A political drama about the uphill battle faced by a determined activist fighting corruption within a small-town system.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "The Thakt Inc.",
        img: wirallyComical4,
        description: "A moving story of love, ambition, and betrayal set against the backdrop of a thriving business empire.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Love",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "Yankee",
        img: wirallyComical5,
        description: "An emotional rollercoaster exploring the life of a young man caught between his romantic aspirations and familial duties.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance, Drama",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "Road Collage",
        img: wirallyComical6,
        description: "A lighthearted journey of friendship, romance, and self-discovery on an unforgettable road trip.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Sarpanch",
        img: wirallyComical7,
        description: "The inspiring story of a young leader challenging the status quo to bring justice and reform to their village.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "Jaat Boys",
        img: wirallyComical8,
        description: "A hilarious and heartfelt tale of friendship, rivalry, and love among a group of mischievous Jaat boys.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "Scinda Scindsa banda",
        img: wirallyComical9,
        description: "A captivating story of love, betrayal, and redemption set against the backdrop of rural India.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Murabba",
        img: wirallyComical10,
        description: "A historical drama exploring the struggles and triumphs of a family amidst a backdrop of war and cultural evolution.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }
];

export default wirallyComicalData;
