import { StaticImageData } from "next/image";
import fightMania1 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania1.webp"
import fightMania2 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania2.webp"
import fightMania3 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania3.webp"
import fightMania4 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania4.webp"
import fightMania5 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania5.webp"
import fightMania6 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania6.webp"
import fightMania7 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania7.webp"
import fightMania8 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania8.webp"
import fightMania9 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania9.webp"
import fightMania10 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania10.webp"
import fightMania11 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania11.webp"
import fightMania12 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania12.webp"
import fightMania13 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania13.webp"
import fightMania14 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania14.webp"
import fightMania15 from "@/public/assets/shortSectionAssets/fightManiaAssets/fightMania15.webp"


interface FightManiaDataProps {
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

const FightManiaData: FightManiaDataProps[] = [
    {
        id: 1,
        title: "Bus itna sa Khavaab",
        img: fightMania1,
        description: "A poignant tale of a simple dream that changes the life of a young individual in unexpected ways.",
        language: "Hindi, Marathi",
        duration: "45 mins",
        genre: "Shorts, Drama",
        releaseYear: "2024",
        quality: "HD",
        ageRestriction: "15+"
    },
    {
        id: 2,
        title: "Silence Fun",
        img: fightMania2,
        description: "A heartfelt story where silence conveys emotions louder than words, bringing families closer.",
        language: "Hindi",
        duration: "2 hr 53 min",
        genre: "Drama, Family",
        releaseYear: "2013",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 3,
        title: "Sensational",
        img: fightMania3,
        description: "A gripping narrative of power and revenge that unfolds in the political corridors.",
        language: "Hindi",
        duration: "2 hr 47 min",
        genre: "Politics, Revenge",
        releaseYear: "2018",
        quality: "2D",
        ageRestriction: "10+"
    },
    {
        id: 4,
        title: "Jagrati",
        img: fightMania4,
        description: "An inspiring documentary highlighting the awakening of social consciousness in rural India.",
        language: "Hindi",
        duration: "2 hr 14 min",
        genre: "Drama, Documentary",
        releaseYear: "2002",
        quality: "HD",
        ageRestriction: "17+"
    },
    {
        id: 5,
        title: "Empowering women",
        img: fightMania5,
        description: "A powerful depiction of women's resilience and their journey to empowerment against all odds.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Melodrama, Romance",
        releaseYear: "2011",
        quality: "HD | Dolby Atmos",
        ageRestriction: "15+"
    },
    {
        id: 6,
        title: "Kese Mujhe Tum Mil Gaye",
        img: fightMania6,
        description: "A romantic saga of two individuals destined to meet against the trials of fate.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 7,
        title: "Romance Diaries",
        img: fightMania7,
        description: "A journey of love, heartbreak, and rediscovery narrated through a romantic lens.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 8,
        title: "Hamara Parivar",
        img: fightMania8,
        description: "A light-hearted comedy that celebrates the chaos and love in a big Indian family.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 9,
        title: "Sa Re Ga Ma Pa",
        img: fightMania9,
        description: "A melodious journey of dreams, challenges, and love, set against a musical backdrop.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 10,
        title: "Sensational",
        img: fightMania10,
        description: "An epic tale of valor and sacrifices in the backdrop of war and history.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    },
    {
        id: 11,
        title: "Super wisers",
        img: fightMania11,
        description: "A light-hearted comedy about a group of friends finding humor in life's chaos.",
        language: "Hindi",
        duration: "2 hr 56 min",
        genre: "Romance, Drama, Comedy",
        releaseYear: "2020",
        quality: "HD | IMAX 3D",
        ageRestriction: "13+"
    },
    {
        id: 12,
        title: "High Live",
        img: fightMania12,
        description: "A thrilling action-drama that explores the highs and lows of a dynamic life.",
        language: "Hindi, Punjabi",
        duration: "1 hr 54 min",
        genre: "Action, Romance, Drama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 13,
        title: "Jagarati part -2",
        img: fightMania13,
        description: "A sequel that continues the journey of awakening and empowerment in a compelling manner.",
        language: "Hindi, Punjabi",
        duration: "2 hr 54 min",
        genre: "Comedy, Romance",
        releaseYear: "2018",
        quality: "HD | 3D",
        ageRestriction: "15+"
    },
    {
        id: 14,
        title: "Muskaan",
        img: fightMania14,
        description: "A heartwarming story that highlights the power of a smile in overcoming life's struggles.",
        language: "Hindi",
        duration: "2 hr 42 min",
        genre: "Romance, Melodrama, Drama",
        releaseYear: "2014",
        quality: "HD | 2D",
        ageRestriction: "13+"
    },
    {
        id: 15,
        title: "Man of the match",
        img: fightMania15,
        description: "A dramatic retelling of events where courage and strategy lead to triumph.",
        language: "Hindi",
        duration: "2 hr 48 min",
        genre: "History, War, Melodrama",
        releaseYear: "2015",
        quality: "HD | 2D",
        ageRestriction: "All"
    }
];

export default FightManiaData;


