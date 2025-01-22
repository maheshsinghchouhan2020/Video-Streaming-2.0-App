import { StaticImageData } from "next/image";
import vlogSeries1 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries1.webp"
import vlogSeries2 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries2.webp"
import vlogSeries3 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries3.webp"
import vlogSeries4 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries4.webp"
import vlogSeries5 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries5.webp"
import vlogSeries6 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries6.webp"
import vlogSeries7 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries7.webp"
import vlogSeries8 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries8.webp"
import vlogSeries9 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries9.webp"
import vlogSeries10 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries10.webp"
import vlogSeries11 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries11.webp"
import vlogSeries12 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries12.webp"
import vlogSeries13 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries13.webp"
import vlogSeries14 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries14.webp"
import vlogSeries15 from "@/public/assets/shortSectionAssets/VlogSeriesAssets/vlogSeries15.webp"

interface VlogSeriesDataProps {
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

const VlogSeriesData: VlogSeriesDataProps[] = [
    {
        id: 1,
        title: "Satru",
        img: vlogSeries1,
        description: "A gripping tale of rivalry and vengeance set against the backdrop of intense drama.",
        language: "Hindi, Marathi",
        duration: "45 mins",
        genre: "Shorts, Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Friend's Marriage",
        img: vlogSeries2,
        description: "An emotional rollercoaster capturing the bonds of friendship and the joy of a wedding celebration.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "Drama, Family",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "Mega Sakranti",
        img: vlogSeries3,
        description: "A powerful story of political intrigue and personal revenge that keeps you hooked till the end.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "Stars Junction",
        img: vlogSeries4,
        description: "A captivating drama exploring the lives of celebrities and their untold stories.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Documentary",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "All Is Well",
        img: vlogSeries5,
        description: "A heartwarming tale of love and resilience set amidst life's trials and tribulations.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "Maharaja",
        img: vlogSeries6,
        description: "An epic romantic saga filled with drama, comedy, and royal grandeur.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Kitchen Queen",
        img: vlogSeries7,
        description: "A tale of love, action, and culinary dreams woven together in a dramatic narrative.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "Comedy Block",
        img: vlogSeries8,
        description: "A laughter-packed romantic comedy that will leave you in splits.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "Family Dhamaka",
        img: vlogSeries9,
        description: "A family-oriented melodrama filled with love, emotions, and heartfelt moments.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Super Dhamaka",
        img: vlogSeries10,
        description: "A historical melodrama showcasing courage and sacrifice in times of war.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    },
    {
        id: 11,
        title: "Super Dhamaka 2",
        img: vlogSeries11,
        description: "A sequel filled with romance, drama, and comedic twists.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 12,
        title: "Aimim Mahayaktam",
        img: vlogSeries12,
        description: "An action-packed drama about love and perseverance in the face of challenges.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 13,
        title: "Friendship Dhamaka",
        img: vlogSeries13,
        description: "A hilarious and romantic journey exploring the power of friendship.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 14,
        title: "Sarkar",
        img: vlogSeries14,
        description: "A powerful drama delving into political ambitions and personal sacrifices.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 15,
        title: "Desi Dost",
        img: vlogSeries15,
        description: "A historical tale of friendship and bravery that transcends generations.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }
];

export default VlogSeriesData;


