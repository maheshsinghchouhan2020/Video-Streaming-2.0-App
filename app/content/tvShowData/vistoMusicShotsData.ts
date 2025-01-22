import { StaticImageData } from "next/image";
import vistoMusicShots1 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots1.webp"
import vistoMusicShots2 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots2.webp"
import vistoMusicShots3 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots3.webp"
import vistoMusicShots4 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots4.webp"
import vistoMusicShots5 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots5.webp"
import vistoMusicShots6 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots6.webp"
import vistoMusicShots7 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots7.webp"
import vistoMusicShots8 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots8.webp"
import vistoMusicShots9 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots9.webp"
import vistoMusicShots10 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots10.webp"
import vistoMusicShots11 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots11.webp"
import vistoMusicShots12 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots12.webp"
import vistoMusicShots13 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots13.webp"
import vistoMusicShots14 from "@/public/assets/tvShowAssets/vistoMusicShotsAssets/vistoMusicShots14.webp"

interface VistoMusicShotsDataProps {
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

const VistoMusicShotsData: VistoMusicShotsDataProps[] = [
    {
        id: 1,
        title: "Anuradha - Tere Pyaar ki",
        img: vistoMusicShots1,
        description: "A soulful journey of love and self-discovery, Anuradha - Tere Pyaar ki captures the emotions of unspoken desires.",
        language: "Hindi, Tamil",
        duration: "15 min",
        genre: "Shorts, Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Ismart Jodi",
        img: vistoMusicShots2,
        description: "A romantic saga of two individuals overcoming challenges to prove their bond is unbreakable.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "Romance, Drama",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "Thoda Tu Thoda Me",
        img: vistoMusicShots3,
        description: "A tale of politics and revenge, showcasing the delicate balance of trust and betrayal.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "Jhanak",
        img: vistoMusicShots4,
        description: "A heartwarming story of love and its intricate twists set against a dramatic backdrop.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Love",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "Diwaniyat",
        img: vistoMusicShots5,
        description: "A melodramatic tale of romance filled with emotional highs and gripping drama.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance, Drama",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "Dastanee",
        img: vistoMusicShots6,
        description: "A delightful blend of romance, drama, and comedy that explores life’s unexpected turns.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Bigg Boss 8",
        img: vistoMusicShots7,
        description: "An engaging mix of action, romance, and drama inside the iconic reality TV house.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "Rab Rakhaa",
        img: vistoMusicShots8,
        description: "A comedy-romance that beautifully captures the chaos and charm of modern relationships.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "AAA",
        img: vistoMusicShots9,
        description: "A captivating tale of love, melodrama, and the complexities of human emotions.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Save Trees",
        img: vistoMusicShots10,
        description: "A poignant story promoting the importance of nature and the fight to save our environment.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    },
    {
        id: 11,
        title: "Happy Family",
        img: vistoMusicShots11,
        description: "A heartwarming portrayal of the strength and love within a close-knit family.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    },
    {
        id: 12,
        title: "Inne Ki Aasha",
        img: vistoMusicShots12,
        description: "An inspiring tale of hope and determination to overcome life’s toughest battles.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    },
    {
        id: 13,
        title: "Happy Society",
        img: vistoMusicShots13,
        description: "A story celebrating the unity and spirit of a community striving for a better future.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    },
    {
        id: 14,
        title: "Jhalak Pyar Ki",
        img: vistoMusicShots14,
        description: "A romantic drama exploring the many shades of love and its impact on life.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }
];

export default VistoMusicShotsData;
