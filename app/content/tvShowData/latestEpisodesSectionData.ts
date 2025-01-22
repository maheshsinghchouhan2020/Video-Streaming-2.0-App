import { StaticImageData } from "next/image";
import latestEps1 from "@/public/assets/tvShowAssets/latestEpisodeAssets/latestEps1.webp"
import latestEps2 from "@/public/assets/tvShowAssets/latestEpisodeAssets/latestEps2.webp"
import latestEps3 from "@/public/assets/tvShowAssets/latestEpisodeAssets/latestEps3.webp"
import latestEps4 from "@/public/assets/tvShowAssets/latestEpisodeAssets/latestEps4.webp"
import latestEps5 from "@/public/assets/tvShowAssets/latestEpisodeAssets/latestEps5.webp"
import latestEps6 from "@/public/assets/tvShowAssets/latestEpisodeAssets/latestEps6.webp"
import latestEps7 from "@/public/assets/tvShowAssets/latestEpisodeAssets/latestEps7.webp"
import latestEps8 from "@/public/assets/tvShowAssets/latestEpisodeAssets/latestEps8.webp"
import latestEps9 from "@/public/assets/tvShowAssets/latestEpisodeAssets/latestEps9.webp"
import latestEps10 from "@/public/assets/tvShowAssets/latestEpisodeAssets/latestEps10.webp"


interface LatestEpisodesDataProps {
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

const LatestEpisodesData: LatestEpisodesDataProps[] = [
    {
        id: 1,
        title: "Haryanavaya Paichai",
        img: latestEps1,
        description: "A gripping tale of sibling rivalry and family honor, set against the vibrant backdrop of Haryana.",
        language: "Hindi, Tamil",
        duration: "15 min",
        genre: "Shorts, Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Free Content",
        img: latestEps2,
        description: "An emotional rollercoaster that explores love, sacrifice, and the cost of freedom.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "Romance, Drama",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "Superfast Comedy Express",
        img: latestEps3,
        description: "A hilarious journey through unexpected political satire and revenge plots.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "Aai Lahar Comedy Ki",
        img: latestEps4,
        description: "A heartwarming comedy about love, misunderstandings, and second chances.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Love",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "Tujhi Aamle Vachi",
        img: latestEps5,
        description: "A melodramatic love story of two souls destined to be together despite overwhelming odds.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance, Drama",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "Tikli - New Season",
        img: latestEps6,
        description: "The new season dives into complex relationships and a whirlwind of romance, drama, and comedy.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Savli",
        img: latestEps7,
        description: "An action-packed story of love and betrayal, set against the rich cultural backdrop of Punjab.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "Meruko Chain aaiche",
        img: latestEps8,
        description: "A laugh-out-loud romantic comedy that explores the chaos of love and life.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "Aadi Shakti",
        img: latestEps9,
        description: "A powerful tale of devotion, resilience, and the unyielding strength of a woman.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Comedy Bullet Train",
        img: latestEps10,
        description: "A fast-paced drama that intertwines humor, history, and the horrors of war.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }

];

export default LatestEpisodesData;
