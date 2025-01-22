import { StaticImageData } from "next/image";
import musicBannerNew1 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew1.webp";
import musicBannerNew2 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew2.webp";
import musicBannerNew3 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew3.webp";
import musicBannerNew4 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew4.webp";
import musicBannerNew5 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew5.webp";
import musicBannerNew6 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew6.webp";
import musicBannerNew7 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew7.webp";
import musicBannerNew8 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew8.webp";
import musicBannerNew9 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew9.webp";
import musicBannerNew10 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew10.webp";
import musicBannerNew11 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew11.webp";
import musicBannerNew12 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew12.webp";
import musicBannerNew13 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew13.webp";
import musicBannerNew14 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew14.webp";
import musicBannerNew15 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew15.webp";
import musicBannerNew16 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew16.webp";
import musicBannerNew17 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew17.webp";
import musicBannerNew18 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew18.webp";
import musicBannerNew19 from "../../../public/assets/musicPageAssets/musicBannerAssetsSectionNew/musicBannerNew19.webp";

interface musicBannerNewProps {
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

export const musicBannerNewSectionData: musicBannerNewProps[] = [
  {
    id: 1,
    title: "Dard Tere",
    img: musicBannerNew1,
    description:
      "Dard Tere is a Hindi romantic song and album by Ishaan Khan and S. Thakur.",
    language: "Hindi",
    duration: "4 min 59 sec",
    genre: ["Pop"],
    releaseYear: "2021",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 2,
    title: "Mind Relax Music",
    img: musicBannerNew2,
    description: "A mind relaxing lo-fi music.",
    language: "Hindi, English",
    duration: "52 min 14 sec",
    genre: ["LoFi, Sufi, Bollywood, Romantic"],
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "15+",
  },
  {
    id: 3,
    title: "Naiyo Lagda",
    img: musicBannerNew3,
    description:
      "Naiyo Lagda is a song from the album Kisi Ka Bhai Kisi Ki Jaan.",
    language: "Hindi",
    duration: "5 min 30 sec",
    genre: ["Pop, Filmi"],
    releaseYear: "2023",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 4,
    title: "Maan Meri Jaan",
    img: musicBannerNew4,
    description:
      "Maan Meri Jaan is a song by King from his album Champagne Talk.",
    language: "Hindi",
    duration: "3 min 47 sec",
    genre: ["Hip-Hop, Indian"],
    releaseYear: "2022",
    quality: "3D | IMAX 3D",
    ageRestriction: "10+",
  },
  {
    id: 5,
    title: "Dekha Tenu",
    img: musicBannerNew5,
    description:
      "A romantic ballad from the movie Mr. and Mrs. Mahi that features Rajkummar Rao and Janhvi Kapoor.",
    language: "Hindi, English",
    duration: "4 min",
    genre: ["Pop, Romantic"],
    releaseYear: "2023",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 6,
    title: "Kore Kore Se Tum",
    img: musicBannerNew6,
    description:
      "Kore Kore Sapne, from the T-series album, was released in the year 2022.",
    language: "Hindi",
    duration: "4 min",
    genre: ["Pop, Romantic"],
    releaseYear: "2022",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 7,
    title: "Main Dhundhne Ko Zamane Me",
    img: musicBannerNew7,
    description:
      "Main Dhoondne Ko Zamaane Mein, from the album Heartless, was released in the year 2014.",
    language: "Hindi",
    duration: "4 min 23 sec",
    genre: ["Pop, Romantic"],
    releaseYear: "2014",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 8,
    title: "Pyaar",
    img: musicBannerNew8,
    description:
      "Pyaar, from the album Sanam Teri Kasam, was released in the year 2017.",
    language: "Hindi",
    duration: "4 min",
    genre: ["Pop, Romantic"],
    releaseYear: "2017",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 9,
    title: "Makhna",
    img: musicBannerNew9,
    description: "Makhna, from the album Drive, was released in the year 2019.",
    language: "Hindi",
    duration: "3 min 03 sec",
    genre: ["Pop, Romantic"],
    releaseYear: "2019",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 10,
    title: "Itni Si Baat Hain",
    img: musicBannerNew10,
    description:
      "Itni Si Baat Hain, from the album Azhar, was released in the year 2016.",
    language: "Hindi",
    duration: "4 min 55 sec",
    genre: ["Pop, Romantic"],
    releaseYear: "2016",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 11,
    title: "Tera Deewana",
    img: musicBannerNew11,
    description:
      "Tera Deewana song from the album Celebrating World Music Day- Best Bollywood of Red Ribbon is released on Jun 2016.",
    language: "Hindi",
    duration: "4 min 22 sec",
    genre: ["Pop, Romantic"],
    releaseYear: "2016",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 12,
    title: "Dil Ko Karaar Aaya",
    img: musicBannerNew12,
    description:
      "Dil Ko Karaar Aaya From album from Sukoon, was released in the year 2020.",
    language: "Hindi",
    duration: "3 min 57 sec",
    genre: ["Pop, Romantic"],
    releaseYear: "2020",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 13,
    title: "Zakhm Dil Ke",
    img: musicBannerNew13,
    description:
      "Zakhm Dil Ke romantic ballad from the movie Aashiqui that features Aditya Kapoor and Shraddha Kapoor.",
    language: "Hindi",
    duration: "4 min 52 sec",
    genre: ["Pop, Romantic"],
    releaseYear: "2016",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 14,
    title: "Tera Hone Laga Hu",
    img: musicBannerNew14,
    description:
      "Tera Hone Laga Hoon From Ajab Prem Ki Ghazab Kahani is a Hindi song released in 2018.",
    language: "Hindi",
    duration: "4 min 35 sec",
    genre: ["Pop, Romantic"],
    releaseYear: "2018",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 15,
    title: "Papa Meri Jaan",
    img: musicBannerNew15,
    description: "Papa Meri Jaan from ANIMAL is a hindi song released in 2023.",
    language: "Hindi",
    duration: "5 min 21 sec",
    genre: ["Pop, Romantic"],
    releaseYear: "2023",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 16,
    title: "Har Funn Maula",
    img: musicBannerNew16,
    description: "The song Har Funn Maula from the movie Koi Jaane Na.",
    language: "Hindi",
    duration: "4 min 21 sec",
    genre: ["Pop, Romantic"],
    releaseYear: "2021",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 17,
    title: "Agar Tum Saath Ho",
    img: musicBannerNew17,
    description:
      "Agar Tum Saath Ho from Tamasha movie is a hindi song released in 2019.",
    language: "Hindi",
    duration: "4 min",
    genre: ["Pop, Romantic"],
    releaseYear: "2019",
    quality: "HD | 2D",
    ageRestriction: "All",
    
  },
  {
    id: 18,
    title: "Heer To Badi Sad Hai",
    img: musicBannerNew18,
    description: "Heer Toh Badi Sad Hai is a hindi song released in 2015.",
    language: "Hindi",
    duration: "3 min 15 sec",
    genre: ["Pop, Romantic"],
    releaseYear: "2015",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 19,
    title: "Bloody Daddy",
    img: musicBannerNew19,
    description: "Bloody Daddy is a hindi language album released in 2023.",
    language: "Hindi",
    duration: "2 min 57 sec",
    genre: ["Pop, Rock"],
    releaseYear: "2023",
    quality: "HD",
    ageRestriction: "All",
  },
];

// Importing common interfaces from the shared ContentInterfaces.ts
import {
  ContentType,
  Language,
  Genre,
  CastRole,
  MusicContent,
  AgeRestriction,
  Quality,
  Tags,
  Audio,
} from "@/app/content/ContentInterfaces";

export const topCarouselMusic: MusicContent[] = [
  {
    id: 1,
    type: ContentType.MUSIC,
    title: "Dard Tere",
    subtitles: [Language.ENGLISH],
    genres: [Genre.MUSIC, Genre.CLASSIC],
    language: [Language.HINDI],
    duration: "00:07:18",
    ageRestriction: AgeRestriction.AGE_12,
    releaseDate: "2004-05-10",
    quality: [Quality.FOUR_K],
    rating: 4.8,
    description:
      "The much-anticipated Season 15 of 'Indian Idol' is here! The stage is set for an exciting musical journey hosted by Aditya Narayan. On a mission to find the next big star whose 'voice is their hero', judges Vishal Dadlani, Shreya Ghoshal and Badshah are on the lookout for exceptional performers who can deliver a complete, electrifying performance.",
    tags: [Tags.EXCLUSIVE, Tags.ADVENTURE],
    audio: [Audio.STEREO, Audio.DOLBY_ATMOS, Audio.SURROUND],
    assets: {
      imageAssets: {
        carouselImage: musicBannerNew1,
        bannerImage:
          "https://example.com/imageAssets/grand-adventure-banner.jpg",
        cardImage: {
          verticalImage: musicBannerNew1,
        },
      },
      videoAssets: {
        videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
      },
    },
    castDetail: [
      {
        castName: "Aishwarya Rai",
        castRole: CastRole.ACTOR,
        castImg: "https://example.com/cast/chris-hemsworth.jpg",
      },
      {
        castName: "Akshay Khanna",
        castRole: CastRole.ACTOR,
        castImg: "https://example.com/cast/scarlett-johansson.jpg",
      },
      {
        castName: "Latamageshwar",
        castRole: CastRole.SINGER,
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
  },
  {
    id: 2,
    type: ContentType.MUSIC,
    title: "Mind Relax Music",
    subtitles: [Language.ENGLISH],
    genres: [Genre.MUSIC, Genre.CLASSIC],
    language: [Language.HINDI],
    duration: "00:07:18",
    ageRestriction: AgeRestriction.AGE_12,
    releaseDate: "2004-05-10",
    quality: [Quality.FOUR_K],
    rating: 4.8,
    description:
      "The much-anticipated Season 15 of 'Indian Idol' is here! The stage is set for an exciting musical journey hosted by Aditya Narayan. On a mission to find the next big star whose 'voice is their hero', judges Vishal Dadlani, Shreya Ghoshal and Badshah are on the lookout for exceptional performers who can deliver a complete, electrifying performance.",
    tags: [Tags.EXCLUSIVE, Tags.ADVENTURE],
    audio: [Audio.STEREO, Audio.DOLBY_ATMOS, Audio.SURROUND],
    assets: {
      imageAssets: {
        carouselImage: musicBannerNew2,
        bannerImage:
          "https://example.com/imageAssets/grand-adventure-banner.jpg",
        cardImage: {
          verticalImage: musicBannerNew2,
        },
      },
      videoAssets: {
        videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
      },
    },
    castDetail: [
      {
        castName: "Aishwarya Rai",
        castRole: CastRole.ACTOR,
        castImg: "https://example.com/cast/chris-hemsworth.jpg",
      },
      {
        castName: "Akshay Khanna",
        castRole: CastRole.ACTOR,
        castImg: "https://example.com/cast/scarlett-johansson.jpg",
      },
      {
        castName: "Latamageshwar",
        castRole: CastRole.SINGER,
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
  },
  {
    id: 3,
    type: ContentType.MUSIC,
    title: "Naiyo Lagda",
    subtitles: [Language.ENGLISH],
    genres: [Genre.MUSIC, Genre.CLASSIC],
    language: [Language.HINDI],
    duration: "00:07:18",
    ageRestriction: AgeRestriction.AGE_12,
    releaseDate: "2004-05-10",
    quality: [Quality.FOUR_K],
    rating: 4.8,
    description:
      "The much-anticipated Season 15 of 'Indian Idol' is here! The stage is set for an exciting musical journey hosted by Aditya Narayan. On a mission to find the next big star whose 'voice is their hero', judges Vishal Dadlani, Shreya Ghoshal and Badshah are on the lookout for exceptional performers who can deliver a complete, electrifying performance.",
    tags: [Tags.EXCLUSIVE, Tags.ADVENTURE],
    audio: [Audio.STEREO, Audio.DOLBY_ATMOS, Audio.SURROUND],
    assets: {
      imageAssets: {
        carouselImage: musicBannerNew3,
        bannerImage:
          "https://example.com/imageAssets/grand-adventure-banner.jpg",
        cardImage: {
          verticalImage: musicBannerNew3,
        },
      },
      videoAssets: {
        videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
      },
    },
    castDetail: [
      {
        castName: "Aishwarya Rai",
        castRole: CastRole.ACTOR,
        castImg: "https://example.com/cast/chris-hemsworth.jpg",
      },
      {
        castName: "Akshay Khanna",
        castRole: CastRole.ACTOR,
        castImg: "https://example.com/cast/scarlett-johansson.jpg",
      },
      {
        castName: "Latamageshwar",
        castRole: CastRole.SINGER,
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
  },
];

