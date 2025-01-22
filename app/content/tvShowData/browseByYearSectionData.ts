import { StaticImageData } from "next/image";
import browseYear1 from "@/public/assets/tvShowAssets/browseByYearAssets/browseYear1.webp"
import browseYear2 from "@/public/assets/tvShowAssets/browseByYearAssets/browseYear2.webp"
import browseYear3 from "@/public/assets/tvShowAssets/browseByYearAssets/browseYear3.webp"
import browseYear4 from "@/public/assets/tvShowAssets/browseByYearAssets/browseYear4.webp"
import browseYear5 from "@/public/assets/tvShowAssets/browseByYearAssets/browseYear5.webp"
import browseYear6 from "@/public/assets/tvShowAssets/browseByYearAssets/browseYear6.webp"
import browseYear7 from "@/public/assets/tvShowAssets/browseByYearAssets/browseYear7.webp"
import browseYear8 from "@/public/assets/tvShowAssets/browseByYearAssets/browseYear8.webp"
import browseYear9 from "@/public/assets/tvShowAssets/browseByYearAssets/browseYear9.webp"
import browseYear10 from "@/public/assets/tvShowAssets/browseByYearAssets/browseYear10.webp"


interface BrowseByYearDataProps {
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

const BrowseByYearData: BrowseByYearDataProps[] = [
    {
        id: 1,
        title: "Khana Khajana",
        img: browseYear1,
        description: "A delightful journey into the world of Indian cuisine, exploring mouthwatering recipes and culinary secrets.",
        language: "Hindi, Tamil",
        duration: "15 min",
        genre: "Shorts, Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Parinaam",
        img: browseYear2,
        description: "A touching story of love, sacrifice, and the profound impact of life's outcomes.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "Romance, Drama",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "Shiv Bhakti",
        img: browseYear3,
        description: "An epic tale of devotion, politics, and revenge inspired by the power of Lord Shiva.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "Food Che Gujrati",
        img: browseYear4,
        description: "A heartwarming drama about love, culture, and the vibrant flavors of Gujarati cuisine.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Love",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "Romil And Jugal",
        img: browseYear5,
        description: "A modern-day tale of forbidden love that challenges societal norms with heart and humor.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance, Drama",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "Devi ka Revenge",
        img: browseYear6,
        description: "A gripping tale of vengeance and justice with twists that keep you on the edge of your seat.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Dang Rongii",
        img: browseYear7,
        description: "A dramatic action-packed journey exploring love, betrayal, and redemption.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "Meruko Chain",
        img: browseYear8,
        description: "A hilarious and heartwarming story about finding love and happiness amidst chaos.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "Black Butler",
        img: browseYear9,
        description: "An emotional melodrama that weaves romance and drama into a compelling narrative.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Nagin Npa",
        img: browseYear10,
        description: "A historical epic exploring war, betrayal, and the enduring power of love.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }
];

export default BrowseByYearData;
