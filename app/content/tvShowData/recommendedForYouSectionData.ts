import { StaticImageData } from "next/image";
import recommenededShow1 from "@/public/assets/tvShowAssets/recommendedForYouAssets/recommendedShow1.webp"
import recommenededShow2 from "@/public/assets/tvShowAssets/recommendedForYouAssets/recommendedShow2.webp"
import recommenededShow3 from "@/public/assets/tvShowAssets/recommendedForYouAssets/recommendedShow3.webp"
import recommenededShow4 from "@/public/assets/tvShowAssets/recommendedForYouAssets/recommendedShow4.webp"
import recommenededShow5 from "@/public/assets/tvShowAssets/recommendedForYouAssets/recommendedShow5.webp"
import recommenededShow6 from "@/public/assets/tvShowAssets/recommendedForYouAssets/recommendedShow6.webp"
import recommenededShow7 from "@/public/assets/tvShowAssets/recommendedForYouAssets/recommendedShow7.webp"
import recommenededShow8 from "@/public/assets/tvShowAssets/recommendedForYouAssets/recommendedShow8.webp"
import recommenededShow9 from "@/public/assets/tvShowAssets/recommendedForYouAssets/recommendedShow9.webp"
import recommenededShow10 from "@/public/assets/tvShowAssets/recommendedForYouAssets/recommendedShow10.webp"


interface RecommenedForYouDataProps {
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

const RecommenedForYouData: RecommenedForYouDataProps[] = [
    {
        id: 1,
        title: "1992 Police Cases",
        img: recommenededShow1,
        description: "A gripping portrayal of real-life police cases from 1992, showcasing the courage and struggles of law enforcement officers.",
        language: "Hindi, Tamil",
        duration: "15 min",
        genre: "Shorts, Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Home Heroes",
        img: recommenededShow2,
        description: "A heartfelt tale of love and sacrifice as ordinary people rise to become heroes in their homes.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "Romance, Drama",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "Jajdta",
        img: recommenededShow3,
        description: "A powerful story of politics and revenge, where personal vendettas change the fate of a nation.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "Comedy Express",
        img: recommenededShow4,
        description: "A hilarious journey filled with drama and love that will leave you laughing out loud.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Love",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "Aali Lahar Kela Kaha",
        img: recommenededShow5,
        description: "An emotional rollercoaster that explores deep relationships and the struggles of love.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance, Drama",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "Folk Culture",
        img: recommenededShow6,
        description: "A vibrant celebration of folk traditions, infused with romance, comedy, and heartfelt drama.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Comedy Express 2",
        img: recommenededShow7,
        description: "The action-packed sequel to 'Comedy Express,' blending romance, drama, and thrilling moments.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "Comedy Bullet Train",
        img: recommenededShow8,
        description: "A fast-paced comedy about love and laughter, set aboard a high-speed train journey.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "Hua Hain",
        img: recommenededShow9,
        description: "An emotional saga of love, heartbreak, and redemption that will touch your heart.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Haiyanna Pahi",
        img: recommenededShow10,
        description: "A historical epic that delves into the wars and struggles of ancient times, with a touch of melodrama.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }
];

export default RecommenedForYouData;
