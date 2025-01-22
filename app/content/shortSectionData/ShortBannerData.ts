import { StaticImageData } from "next/image";
import shortBanner1 from "@/public/assets/shortSectionAssets/shortBannerSectionAssets/shortBanner1.webp";
import shortBanner2 from "@/public/assets/shortSectionAssets/shortBannerSectionAssets/shortBanner2.webp";
import shortBanner3 from "@/public/assets/shortSectionAssets/shortBannerSectionAssets/shortBanner3.webp";
import shortBanner4 from "@/public/assets/shortSectionAssets/shortBannerSectionAssets/shortBanner4.webp";
import shortBanner5 from "@/public/assets/shortSectionAssets/shortBannerSectionAssets/shortBanner5.webp";
import shortBanner6 from "@/public/assets/shortSectionAssets/shortBannerSectionAssets/shortBanner6.webp";
import shortBanner7 from "@/public/assets/shortSectionAssets/shortBannerSectionAssets/shortBanner7.webp";
import shortBanner8 from "@/public/assets/shortSectionAssets/shortBannerSectionAssets/shortBanner8.webp";
import shortBanner9 from "@/public/assets/shortSectionAssets/shortBannerSectionAssets/shortBanner9.webp";
import shortBanner10 from "@/public/assets/shortSectionAssets/shortBannerSectionAssets/shortBanner10.webp";

interface ShortSectionDataProps {
    id: number;
    title: string;
    img: string | StaticImageData;
    description: string;
    language: string;
    duration: string;
    genre: string[];
    releaseYear: string;
    quality: string;
    ageRestriction: string;
}

export const ShortSectionData: ShortSectionDataProps[] = [
    {
        id: 1,
        title: "Venom - The Dark Fate",
        img: shortBanner1,
        description:
            "A thrilling comedy about Venom's unexpected twist of fate as he tries to navigate the hilarious chaos in a darker world.",
        language: "Hindi",
        duration: "20 mins",
        genre: ["Sci-fi"],
        releaseYear: "2023",
        quality: "HD",
        ageRestriction: "13+",
    },
    {
        id: 2,
        title: "Make The Laufe",
        img: shortBanner2,
        description:
            "An emotional drama exploring the journey of self-discovery and redemption in the face of personal struggles.",
        language: "English",
        duration: "25 mins",
        genre: ["Drama"],
        releaseYear: "2023",
        quality: "HD",
        ageRestriction: "13+",
    },
    {
        id: 3,
        title: "Apolina - Sapno ki Udaan",
        img: shortBanner3,
        description:
            "An inspiring sports story of Apolina, who dares to dream big and soar above challenges to achieve her goals.",
        language: "English",
        duration: "30 mins",
        genre: ["Drama"],
        releaseYear: "2022",
        quality: "HD",
        ageRestriction: "13+",
    },
    {
        id: 4,
        title: "Aha Universal",
        img: shortBanner4,
        description:
            "A profound documentary uncovering the beauty and diversity of the Marathi culture and its universal appeal.",
        language: "Marathi",
        duration: "40 mins",
        genre: ["Documentary"],
        releaseYear: "2023",
        quality: "4K",
        ageRestriction: "All Ages",
    },
    {
        id: 5,
        title: "Spiderman - HomeComing",
        img: shortBanner5,
        description:
            "A thrilling adventure as Spiderman returns to his roots to confront his past and face new dangers.",
        language: "Hindi",
        duration: "50 mins",
        genre: ["Thriller"],
        releaseYear: "2022",
        quality: "HD",
        ageRestriction: "16+",
    },
    {
        id: 6,
        title: "Pinga Pori Pinga",
        img: shortBanner6,
        description:
            "A romantic tale of two souls finding love amidst the lively and colorful vibes of their unique world.",
        language: "English",
        duration: "45 mins",
        genre: ["Romance"],
        releaseYear: "2023",
        quality: "HD",
        ageRestriction: "13+",
    },
    {
        id: 7,
        title: "Ashok Ma Ma",
        img: shortBanner7,
        description:
            "A gripping mystery where Ashok unravels secrets that lead to shocking revelations in a complex tale of intrigue.",
        language: "English",
        duration: "60 mins",
        genre: ["Drama"],
        releaseYear: "2023",
        quality: "4K",
        ageRestriction: "13+",
    },
    {
        id: 8,
        title: "Where the Heart Is",
        img: shortBanner8,
        description:
            "A heartwarming family story that highlights love, togetherness, and the true meaning of home.",
        language: "English",
        duration: "30 mins",
        genre: ["Family"],
        releaseYear: "2023",
        quality: "HD",
        ageRestriction: "All Ages",
    },
    {
        id: 9,
        title: "Hustle",
        img: shortBanner9,
        description:
            "An adventurous journey of resilience and determination, where the hustle becomes the key to survival and success.",
        language: "English",
        duration: "50 mins",
        genre: ["Adventure"],
        releaseYear: "2023",
        quality: "HD",
        ageRestriction: "13+",
    },
    {
        id: 10,
        title: "Suman Indori",
        img: shortBanner10,
        description:
            "A historical saga about Suman, a fearless warrior from Indore, who defied odds to rewrite history.",
        language: "Hindi",
        duration: "45 mins",
        genre: ["Romantic"],
        releaseYear: "2022",
        quality: "4K",
        ageRestriction: "13+",
    },
];

// New Data format

// Importing common interfaces from the shared ContentInterfaces.ts
import {
    AgeRestriction,
    Audio,
    CastRole,
    ContentType,
    Genre,
    Language,
    Quality,
    ShortContent,
    Tags,
} from "@/app/content/ContentInterfaces";

export const topCarouselShort: ShortContent[] = [
    {
        id: 1,
        type: ContentType.SHORT,
        title: "Taal Se Taal Mila Short",
        subtitles: [Language.ENGLISH],
        genres: [Genre.MUSIC, Genre.CLASSIC],
        language: [Language.HINDI],
        duration: "00:05:32",
        ageRestriction: AgeRestriction.AGE_12,
        releaseDate: "2004-05-10",
        quality: [Quality.FOUR_K],
        rating: 4.8,
        description:
            "The much-anticipated Season 15 of 'Indian Idol' is here! The stage is set for an exciting musical journey hosted by Aditya Narayan. On a mission to find the next big star whose 'voice is their hero', judges Vishal Dadlani, Shreya Ghoshal and Badshah are on the lookout for exceptional performers who can deliver a complete, electrifying performance.",
        tags: [Tags.BLOCKBUSTER, Tags.EXCLUSIVE],
        audio: [Audio.DOLBY_ATMOS],
        castDetail: [
            {
                castName: "Shreya Ghoshal",
                castRole: CastRole.JUDGE,
                castImg: "https://example.com/cast/chris-hemsworth.jpg",
            },
            {
                castName: "Vishal Dadlani",
                castRole: CastRole.JUDGE,
                castImg: "https://example.com/cast/scarlett-johansson.jpg",
            },
            {
                castName: "Badshah",
                castRole: CastRole.JUDGE,
                castImg: "https://example.com/cast/scarlett-johansson.jpg",
            },
            {
                castName: "Aditya Narayan",
                castRole: CastRole.HOST,
                castImg: "https://example.com/cast/scarlett-johansson.jpg",
            },
            {
                castName: "",
                castRole: CastRole.DIRECTOR,
                castImg: "https://example.com/cast/scarlett-johansson.jpg",
            },
            {
                castName: "",
                castRole: CastRole.PRODUCER,
                castImg: "https://example.com/cast/scarlett-johansson.jpg",
            },
        ],
        assets: {
            imageAssets: {
                carouselImage: shortBanner1,
                bannerImage:
                    "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                    verticalImage: "",
                },
            },
            videoAssets: {
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
            },
        },
    },
    {
        id: 2,
        type: ContentType.SHORT,
        title: "Venom - The Dark Fate",
        subtitles: [Language.ENGLISH],
        genres: [Genre.MUSIC, Genre.CLASSIC],
        language: [Language.HINDI],
        duration: "00:05:32",
        ageRestriction: AgeRestriction.AGE_12,
        releaseDate: "2004-05-10",
        quality: [Quality.FOUR_K],
        rating: 4.8,
        description:
            "The much-anticipated Season 15 of 'Indian Idol' is here! The stage is set for an exciting musical journey hosted by Aditya Narayan. On a mission to find the next big star whose 'voice is their hero', judges Vishal Dadlani, Shreya Ghoshal and Badshah are on the lookout for exceptional performers who can deliver a complete, electrifying performance.",
        tags: [Tags.BLOCKBUSTER, Tags.EXCLUSIVE],
        audio: [Audio.DOLBY_ATMOS],
        castDetail: [
            {
                castName: "Shreya Ghoshal",
                castRole: CastRole.JUDGE,
                castImg: "https://example.com/cast/chris-hemsworth.jpg",
            },
            {
                castName: "Vishal Dadlani",
                castRole: CastRole.JUDGE,
                castImg: "https://example.com/cast/scarlett-johansson.jpg",
            },
            {
                castName: "Badshah",
                castRole: CastRole.JUDGE,
                castImg: "https://example.com/cast/scarlett-johansson.jpg",
            },
            {
                castName: "Aditya Narayan",
                castRole: CastRole.HOST,
                castImg: "https://example.com/cast/scarlett-johansson.jpg",
            },
            {
                castName: "",
                castRole: CastRole.DIRECTOR,
                castImg: "https://example.com/cast/scarlett-johansson.jpg",
            },
            {
                castName: "",
                castRole: CastRole.PRODUCER,
                castImg: "https://example.com/cast/scarlett-johansson.jpg",
            },
        ],
        assets: {
            imageAssets: {
                carouselImage: shortBanner1,
                bannerImage:
                    "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                    verticalImage: "",
                },
            },
            videoAssets: {
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
            },
        },
    },
];
