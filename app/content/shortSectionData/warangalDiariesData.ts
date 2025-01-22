import { StaticImageData } from "next/image";
import warangalDiaries1 from "@/public/assets/shortSectionAssets/warangalDiariesAssests/warangalDiaries1.webp"
import warangalDiaries2 from "@/public/assets/shortSectionAssets/warangalDiariesAssests/warangalDiaries2.webp"
import warangalDiaries3 from "@/public/assets/shortSectionAssets/warangalDiariesAssests/warangalDiaries3.webp"
import warangalDiaries4 from "@/public/assets/shortSectionAssets/warangalDiariesAssests/warangalDiaries4.webp"
import warangalDiaries5 from "@/public/assets/shortSectionAssets/warangalDiariesAssests/warangalDiaries5.webp"
import warangalDiaries6 from "@/public/assets/shortSectionAssets/warangalDiariesAssests/warangalDiaries6.webp"
import warangalDiaries7 from "@/public/assets/shortSectionAssets/warangalDiariesAssests/warangalDiaries7.webp"
import warangalDiaries8 from "@/public/assets/shortSectionAssets/warangalDiariesAssests/warangalDiaries8.webp"
import warangalDiaries9 from "@/public/assets/shortSectionAssets/warangalDiariesAssests/warangalDiaries9.webp"
import warangalDiaries10 from "@/public/assets/shortSectionAssets/warangalDiariesAssests/warangalDiaries10.webp"


interface warangalDiariesDataProps {
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

const warangalDiariesData: warangalDiariesDataProps[] = [
    {
        id: 1,
        title: "Hitlarla",
        img: warangalDiaries1,
        description: "A gripping short drama that explores the life and struggles of Hitlarla as he fights against all odds to carve his destiny.",
        language: "Hindi, Marathi",
        duration: "45 mins",
        genre: "Shorts, Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Vasuda",
        img: warangalDiaries2,
        description: "A heartwarming tale of Vasuda, a woman who embarks on a journey to redefine her life amidst the challenges of her past.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "Drama, Family",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "Shivaa",
        img: warangalDiaries3,
        description: "A powerful story of Shivaa, a man seeking revenge for his family's betrayal in a dark world of politics and deceit.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "Atal.",
        img: warangalDiaries4,
        description: "A poignant drama about love and sacrifice, following the life of Atal and the choices that shape his destiny.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Documentry",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "Kaise Mujhe Tum Mile",
        img: warangalDiaries5,
        description: "A romantic melodrama that delves into the serendipitous journey of two souls destined to meet against all odds.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "Aamcha Dada",
        img: warangalDiaries6,
        description: "A heartfelt romantic comedy about a lovable character known as Aamcha Dada, whose adventures bring laughter and life lessons.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Savali",
        img: warangalDiaries7,
        description: "An action-packed romantic drama that traces the story of Savali, whose courage and love shine through even in the darkest times.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "Kumkum Bhagya",
        img: warangalDiaries8,
        description: "A comedic and romantic tale about relationships, misunderstandings, and the journey to finding true love.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "Satva Saach",
        img: warangalDiaries9,
        description: "A melodramatic romance where emotions run deep as Satva Saach struggles to balance love, truth, and drama in his life.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Tum Mile Yaha Kaha",
        img: warangalDiaries10,
        description: "An epic historical war drama capturing the emotional and heroic journey of Tum Mile as he fights for honor and justice.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }
];

export default warangalDiariesData;
