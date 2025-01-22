import { StaticImageData } from "next/image";
import popularShortFilms1 from "@/public/assets/shortSectionAssets/popularShortFilmsAssests/popularShortFilms1.webp"
import popularShortFilms2 from "@/public/assets/shortSectionAssets/popularShortFilmsAssests/popularShortFilms2.webp"
import popularShortFilms3 from "@/public/assets/shortSectionAssets/popularShortFilmsAssests/popularShortFilms3.webp"
import popularShortFilms4 from "@/public/assets/shortSectionAssets/popularShortFilmsAssests/popularShortFilms4.webp"
import popularShortFilms5 from "@/public/assets/shortSectionAssets/popularShortFilmsAssests/popularShortFilms5.webp"
import popularShortFilms6 from "@/public/assets/shortSectionAssets/popularShortFilmsAssests/popularShortFilms6.webp"
import popularShortFilms7 from "@/public/assets/shortSectionAssets/popularShortFilmsAssests/popularShortFilms7.webp"
import popularShortFilms8 from "@/public/assets/shortSectionAssets/popularShortFilmsAssests/popularShortFilms8.webp"
import popularShortFilms9 from "@/public/assets/shortSectionAssets/popularShortFilmsAssests/popularShortFilms9.webp"
import popularShortFilms10 from "@/public/assets/shortSectionAssets/popularShortFilmsAssests/popularShortFilms10.webp"


interface popularShortFilmsDataProps {
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

const popularShortFilmsData: popularShortFilmsDataProps[] = [
    {
        id: 1,
        title: "Comedy Coupal",
        img: popularShortFilms1,
        description: "A humorous tale of a quirky couple navigating the ups and downs of life with laughter and love.",
        language: "Hindi, Marathi",
        duration: "45 mins",
        genre: "Shorts, Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Shukranu",
        img: popularShortFilms2,
        description: "A heartwarming family drama that delves into the complexities of relationships and life's unexpected challenges.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "Drama, Family",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "Karanjeet Kaur - The Journey Within",
        img: popularShortFilms3,
        description: "An inspiring political drama that unveils the inner battles and triumphs of Karanjeet Kaur’s journey.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "Behti Si.",
        img: popularShortFilms4,
        description: "A reflective documentary exploring the fluid nature of life and its unforeseen currents.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Documentry",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "Love Duet",
        img: popularShortFilms5,
        description: "A melodramatic romance where love and music intertwine to create a captivating symphony of emotions.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "Judgement Day",
        img: popularShortFilms6,
        description: "A thrilling courtroom drama that weaves together themes of justice, romance, and unexpected twists.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Never Judge Your Bestfriend",
        img: popularShortFilms7,
        description: "An action-packed tale of friendship, love, and the trials of trust that redefine relationships.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "The Casino",
        img: popularShortFilms8,
        description: "A lighthearted comedy that takes you through the glitz and glamour of casino life and love stories.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "Reject Kahaniya",
        img: popularShortFilms9,
        description: "An emotional journey of stories that were overlooked but hold profound meaning and connection.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Atkan Chatkan",
        img: popularShortFilms10,
        description: "A gripping historical drama showcasing the intersection of war, history, and poignant storytelling.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }    
];

export default popularShortFilmsData;
