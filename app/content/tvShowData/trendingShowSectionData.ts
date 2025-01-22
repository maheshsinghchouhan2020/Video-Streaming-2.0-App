import { StaticImageData } from "next/image";
import trendingShows1 from "@/public/assets/tvShowAssets/trendingShowsAssests/trendingShows1.webp"
import trendingShows2 from "@/public/assets/tvShowAssets/trendingShowsAssests/trendingShows2.webp"
import trendingShows3 from "@/public/assets/tvShowAssets/trendingShowsAssests/trendingShows3.webp"
import trendingShows4 from "@/public/assets/tvShowAssets/trendingShowsAssests/trendingShows4.webp"
import trendingShows5 from "@/public/assets/tvShowAssets/trendingShowsAssests/trendingShows5.webp"
import trendingShows6 from "@/public/assets/tvShowAssets/trendingShowsAssests/trendingShows6.webp"
import trendingShows7 from "@/public/assets/tvShowAssets/trendingShowsAssests/trendingShows7.webp"
import trendingShows8 from "@/public/assets/tvShowAssets/trendingShowsAssests/trendingShows8.webp"
import trendingShows9 from "@/public/assets/tvShowAssets/trendingShowsAssests/trendingShows9.webp"
import trendingShows10 from "@/public/assets/tvShowAssets/trendingShowsAssests/trendingShows10.webp"


interface trendingShowsSectionDataProps {
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

const trendingShowsSectionData: trendingShowsSectionDataProps[] = [
    {
        id: 1,
        title: "Vekhi ja cheddi na",
        img: trendingShows1,
        description: "A gripping short drama exploring the complex emotions and relationships between individuals in a small town.",
        language: "Hindi, Tamil",
        duration: "15 min",
        genre: "Shorts, Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Tenu Pyar Kar Da",
        img: trendingShows2,
        description: "A heartfelt romantic tale of unrequited love, sacrifices, and second chances, set against a vibrant backdrop.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "Romance, Drama",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "Fabolous Lives",
        img: trendingShows3,
        description: "An intense political drama laced with revenge, betrayal, and a quest for power that leaves you on edge.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "Nex Fashion.",
        img: trendingShows4,
        description: "A dramatic love story intertwined with ambition and fashion, revealing the struggles of aspiring designers.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Love",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "Ki Banu Pauda Da",
        img: trendingShows5,
        description: "A melodramatic romance that delves into the ups and downs of relationships in the face of societal challenges.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance, Drama",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "London To Haryana",
        img: trendingShows6,
        description: "A cross-cultural romantic comedy that follows the journey of love from the bustling streets of London to the heart of Haryana.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Kii mai Kunti",
        img: trendingShows7,
        description: "An action-packed romantic drama that explores themes of love, redemption, and self-discovery.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "Pennak Sardarji",
        img: trendingShows8,
        description: "A laugh-out-loud romantic comedy about a charming Sardarji navigating love and family traditions.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "Phera Hariyana",
        img: trendingShows9,
        description: "An emotional rollercoaster of love, melodrama, and family dynamics set in the vibrant culture of Haryana.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Control Karo Yarr",
        img: trendingShows10,
        description: "A historical war drama that highlights the bravery and sacrifices made during turbulent times.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }


];

export default trendingShowsSectionData;
