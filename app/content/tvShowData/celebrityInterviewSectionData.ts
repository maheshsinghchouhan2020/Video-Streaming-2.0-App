import { StaticImageData } from "next/image";
import celebrityInterview1 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview1.webp"
import celebrityInterview2 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview2.webp"
import celebrityInterview3 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview3.webp"
import celebrityInterview4 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview4.webp"
import celebrityInterview5 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview5.webp"
import celebrityInterview6 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview6.webp"
import celebrityInterview7 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview7.webp"
import celebrityInterview8 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview8.webp"
import celebrityInterview9 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview9.webp"
import celebrityInterview10 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview10.webp"
import celebrityInterview11 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview11.webp"
import celebrityInterview12 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview12.webp"
import celebrityInterview13 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview13.webp"
import celebrityInterview14 from "@/public/assets/tvShowAssets/celebrityInterviewAssets/celebrityInterview14.webp"

interface CelebrityInterviewDataProps {
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

const CelebrityInterviewData: CelebrityInterviewDataProps[] = [
    {
        id: 1,
        title: "Celebrity Interview 1",
        img: celebrityInterview1,
        description: "An exclusive interview featuring behind-the-scenes stories and personal insights from a renowned celebrity.",
        language: "Hindi, Tamil",
        duration: "15 min",
        genre: "Shorts, Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Krishnu Specials",
        img: celebrityInterview2,
        description: "A heartfelt romantic drama that captures the ups and downs of Krishnu's love story.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "Romance, Drama",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "Imtiyaz Patbandhu",
        img: celebrityInterview3,
        description: "A gripping tale of politics and revenge where Imtiyaz battles betrayal and power struggles.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "Red Carpet",
        img: celebrityInterview4,
        description: "A love story set amidst the glitz and glamour of the red carpet, exploring drama and romance.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Love",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "Reality Show",
        img: celebrityInterview5,
        description: "A dramatic depiction of the highs and lows of contestants competing in a gripping reality show.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance, Drama",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "Prakash Raj",
        img: celebrityInterview6,
        description: "A delightful mix of romance, drama, and comedy featuring the charming Prakash Raj.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Lights Caraval Action",
        img: celebrityInterview7,
        description: "An action-packed drama filled with romance and emotions set against a vibrant backdrop.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "NFO Alignment",
        img: celebrityInterview8,
        description: "A hilarious romantic comedy exploring unexpected alignments and connections.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "Evergreen Final",
        img: celebrityInterview9,
        description: "A timeless tale of love, drama, and emotions that touches the heart.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Inspector Sameer",
        img: celebrityInterview10,
        description: "An inspiring story of Inspector Sameer, fighting for justice during turbulent times.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    },
    {
        id: 11,
        title: "Devotional",
        img: celebrityInterview11,
        description: "A spiritual journey exploring the depths of faith and devotion.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    },
    {
        id: 12,
        title: "Cookerey",
        img: celebrityInterview12,
        description: "A culinary adventure showcasing unique recipes and heartfelt moments.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    },
    {
        id: 13,
        title: "Audio Launch",
        img: celebrityInterview13,
        description: "A celebration of music and cinema at the much-awaited audio launch event.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    },
    {
        id: 14,
        title: "Mohan Interview",
        img: celebrityInterview14,
        description: "A captivating interview with Mohan, delving into his life, career, and inspirations.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }
];
export default CelebrityInterviewData;
