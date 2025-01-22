import { StaticImageData } from "next/image";
import viewAllEpisode1 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode1.webp";
import viewAllEpisode2 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode2.webp";
import viewAllEpisode3 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode3.webp";
import viewAllEpisode4 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode4.webp";
import viewAllEpisode5 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode5.webp";
import viewAllEpisode6 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode6.webp";
import viewAllEpisode7 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode7.webp";
import viewAllEpisode8 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode8.webp";
import viewAllEpisode9 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode9.webp";
import viewAllEpisode10 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode10.webp";
import viewAllEpisode11 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode11.webp";
import viewAllEpisode12 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode12.webp";
import viewAllEpisode13 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode13.webp";
import viewAllEpisode14 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode14.webp";
import viewAllEpisode15 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode15.webp";
import viewAllEpisode16 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode16.webp";
import viewAllEpisode17 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode17.webp";
import viewAllEpisode18 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode18.webp";
import viewAllEpisode19 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode19.webp";
import viewAllEpisode20 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode20.webp";
import viewAllEpisode21 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode21.webp";
import viewAllEpisode22 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode22.webp";

interface viewAllEpisodesProps {
  id: number;
  episodeNo: string;
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

export const viewAllEpisodeDetailsPageData: viewAllEpisodesProps[] = [
  {
    id: 1,
    episodeNo: "1",
    title: ". Tapu's Wedding Woes",
    img: viewAllEpisode1,
    description:
      "Tapu is growing increasingly anxious as the pressure to get married mounts, but he's running out of creative excuses to dodge the issue. Will he find a clever way to wriggle out of it?",
    language: "Hindi",
    duration: "22 mins",
    genre: "Pop",
    releaseYear: "24 Dec 2024",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 2,
    episodeNo: "2",
    title: ". Shaadi Ka Darr",
    img: viewAllEpisode2,
    description:
      "As their families begin the search for suitable life partners, Sonu and Tapu find themselves in a state of panic. Desperate to avoid arranged marriages, will they be able to come up with a plan?",
    language: "Hindi",
    duration: "20 mins",
    genre: "Bollywood",
    releaseYear: "23 Dec 2024",
    quality: "HD | 3D",
    ageRestriction: "15+",
  },
  {
    id: 3,
    episodeNo: "3",
    title: ". Shaadi Pressure",
    img: viewAllEpisode3,
    description:
      "Jethalal and Champaklal attempt to persuade Tappu to consider marriage, but he firmly refuses. Meanwhile, Sonu faces similar pressure from her parents. How will the duo manage to decline their elders' expectations?",
    language: "Hindi",
    duration: "23 mins",
    genre: "Pop, Filmi",
    releaseYear: "22 Dec 2024",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 4,
    episodeNo: "4",
    title: ". Suitable Groom For Sonu",
    img: viewAllEpisode4,
    description:
      "Bhide calls in an acquaintance to help arrange Sonu's marriage. How will she react when she finds out?",
    language: "Hindi",
    duration: "23 mins",
    genre: "Hip-Hop, Indian",
    releaseYear: "21 Dec 2024",
    quality: "3D | IMAX 3D",
    ageRestriction: "10+",
  },
  {
    id: 5,
    episodeNo: "5",
    title: ". Bhide Ki Jaldbaazi",
    img: viewAllEpisode5,
    description:
      "Worried about Sonu and Tapu's growing friendship, Bhide decides to speed up his search for a groom for Sonu. Meanwhile, Bapuji starts looking for a bride for Tapu.",
    language: "Hindi",
    duration: "24 min",
    genre: "Pop, Romantic",
    releaseYear: "19 Dec 2023",
    quality: "HD | 2D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 6,
    episodeNo: "6",
    title: ". Shaadi Ki Umar",
    img: viewAllEpisode6,
    description:
      "Bhide is concerned about Sonu's friendship with Tapu, fearing it might blossom into love. How will he come to terms with the fact that his daughter is now grown up and capable of making her own decisions?",
    language: "Hindi, English",
    duration: "30 mins",
    genre: "Classic, Lo-fi",
    releaseYear: "18 Dec 2024",
    quality: "HD | Dolby Atmos",
    ageRestriction: "15+",
  },
  {
    id: 7,
    episodeNo: "7",
    title: ". Sonu Ki Chinta",
    img: viewAllEpisode7,
    description:
      "Bhide is concerned about Sonu's friendship with Tapu, fearing it might blossom into love. How will he come to terms with the fact that his daughter is now grown up and capable of making her own decisions?",
    language: "Hindi",
    duration: "22 mins",
    genre: "Romance, Love, Drama",
    releaseYear: "17 Dec 2024",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 8,
    episodeNo: "8",
    title: ". Sonu Runs Late",
    img: viewAllEpisode8,
    description:
      "Bhide is on edge, worried that Sonu and Tapu Sena haven't returned from the party. He decides to take matters into his own hands and heads out to check on them.",
    language: "Hindi",
    duration: "27 mins",
    genre: "Romance, Love, Drama",
    releaseYear: "16 Dec 2024",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 9,
    episodeNo: "9",
    title: ". Baccho Ka Bhavishya",
    img: viewAllEpisode9,
    description:
      "Bhide and the others grow anxious about their children's future and upcoming marriage proposals. Later, Bhide becomes particularly concerned when he finds Sonu's phone switched off.",
    language: "Hindi",
    duration: "25 mins",
    genre: "Romance, Love, Drama",
    releaseYear: "15 Dec 2024",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 10,
    episodeNo: "10",
    title: ". Permission To Party",
    img: viewAllEpisode10,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "20 mins",
    genre: "Romance, Love, Drama",
    releaseYear: "14 Dec 2024",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 11,
    episodeNo: "11",
    title: ". Permission To Party",
    img: viewAllEpisode11,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "English, Hindi",
    duration: "26 mins",
    genre: "Romance, Love, Drama",
    releaseYear: "13 Dec 2024",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 12,
    episodeNo: "12",
    title: ". Permission To Party",
    img: viewAllEpisode12,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "24 mins",
    genre: "Item Song, Bollywood",
    releaseYear: "12 Dec 2024",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 13,
    episodeNo: "13",
    title: ". Permission To Party",
    img: viewAllEpisode13,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "28 mins",
    genre: "Item Song, Bollywood",
    releaseYear: "11 Dec 2024",
    quality: "HD",
    ageRestriction: "13+",
  },
  {
    id: 14,
    episodeNo: "14",
    title: ". Permission To Party",
    img: viewAllEpisode14,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "22 mins",
    genre: "Romance, Love, Drama",
    releaseYear: "10 Dec 2024",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 15,
    episodeNo: "15",
    title: ". Permission To Party",
    img: viewAllEpisode15,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "31 mins",
    genre: "Romance, Love, Drama",
    releaseYear: "09 Dec 2024",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 16,
    episodeNo: "16",
    title: ". Permission To Party",
    img: viewAllEpisode16,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "24 mins",
    genre: "Romance, Love",
    releaseYear: "08 Dec 2024",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 17,
    episodeNo: "17",
    title: ". Permission To Party",
    img: viewAllEpisode17,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "19 mins",
    genre: "Romance, Love",
    releaseYear: "07 Dec 2024",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 18,
    episodeNo: "18",
    title: ". Permission To Party",
    img: viewAllEpisode18,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "29 mins",
    genre: "Romance, Love",
    releaseYear: "06 Dec 2024",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 19,
    episodeNo: "19",
    title: ". Permission To Party",
    img: viewAllEpisode19,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "30 mins",
    genre: "Romance, Love",
    releaseYear: "05 Dec 2024",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 20,
    episodeNo: "20",
    title: ". Permission To Party",
    img: viewAllEpisode20,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "36 mins",
    genre: "Romance, Love",
    releaseYear: "04 Dec 2024",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 21,
    episodeNo: "21",
    title: ". Permission To Party",
    img: viewAllEpisode21,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "18 mins",
    genre: "Romance, Love",
    releaseYear: "03 Dec 2024",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 22,
    episodeNo: "22",
    title: ". Permission To Party",
    img: viewAllEpisode22,
    description:
      "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
    language: "Hindi",
    duration: "20 mins",
    genre: "Romance, Love",
    releaseYear: "02 Dec 2024",
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
  TvShowContent,
  AgeRestriction,
  Quality,
  Tags,
  Audio,
} from "@/app/content/ContentInterfaces";

export const TvShowData: TvShowContent[] = [
  {
    id: 1,
    type: ContentType.TVSHOW,
    title: "Taarak Mehta Ka Ooltah Chashmah",
    subtitles: [Language.ENGLISH],
    genres: [Genre.COMEDY],
    language: [Language.HINDI],
    ageRestriction: AgeRestriction.GENERAL,
    releaseDate: "28 July 2008",
    quality: [Quality.HD, Quality.THREE_D],
    rating: 4.8,
    description:
      "Taarak Mehta Ka Ooltah Chashmah is a SAB Comedy Show inspired from the famous humorous column, Duniya Ne Undha Chashmah written by the eminent Gujarati writer, Mr. Tarak Mehta. This show revolves around Gada family which consists of uneducated businessman, Jethalal Champaklal Gada, Jethalal's wife, Daya & their naughty son, Tipendra Gada living in Gokuldham Co-operative Society and covers topical issues which are socially relevant. This hilarious show will surely tickle your funny bone.",
    tags: [Tags.EXCLUSIVE, Tags.BLOCKBUSTER],
    audio: [Audio.DOLBY_ATMOS],
    totalSeasons: 1,
    totalEpisodes: 4283,
    seasonDetail: [
      {
        seasonNumber: 1,
        totalEpisodesInSeason: 4283,
        castDetail: [
          {
            castName: "Dilip Joshi",
            castRole: CastRole.ACTOR,
            castImg: "https://example.com/cast/chris-hemsworth.jpg",
          },
          {
            castName: "Disha Vakani",
            castRole: CastRole.ACTOR,
            castImg: "https://example.com/cast/scarlett-johansson.jpg",
          },
          {
            castName: "Nitish Bhaluni",
            castRole: CastRole.ACTOR,
            castImg: "https://example.com/cast/scarlett-johansson.jpg",
          },
          {
            castName: "Amit Bhatt",
            castRole: CastRole.ACTOR,
            castImg: "https://example.com/cast/scarlett-johansson.jpg",
          },
          {
            castName: "Shailesh Lodha",
            castRole: CastRole.ACTOR,
            castImg: "https://example.com/cast/scarlett-johansson.jpg",
          },
          {
            castName: "Neha Mehta",
            castRole: CastRole.ACTOR,
            castImg: "https://example.com/cast/scarlett-johansson.jpg",
          },
          {
            castName: "Tanuj Mahashabde",
            castRole: CastRole.ACTOR,
            castImg: "https://example.com/cast/scarlett-johansson.jpg",
          },
          {
            castName: "Harshad Joshi",
            castRole: CastRole.DIRECTOR,
            castImg: "https://example.com/cast/scarlett-johansson.jpg",
          },
          {
            castName: "Malav Suresh Rajda",
            castRole: CastRole.DIRECTOR,
            castImg: "https://example.com/cast/scarlett-johansson.jpg",
          },
          {
            castName: "Asit Kumar Modi",
            castRole: CastRole.PRODUCER,
            castImg: "https://example.com/cast/scarlett-johansson.jpg",
          },
        ],
        episodesDetail: [
          {
            episodeNumber: 1,
            episodeTitle: "Tapu's Wedding Woes",
            episodeDescription:
              "Tapu is growing increasingly anxious as the pressure to get married mounts, but he's running out of creative excuses to dodge the issue. Will he find a clever way to wriggle out of it?",
            episodeDuration: "00:22:10",
            episodeReleaseDate: "2024-12-24",
            assets: {
              imageAssets: {
                carouselImage: viewAllEpisode1,
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode1,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 2,
            episodeTitle: "Shaadi Ka Darr",
            episodeDescription:
              "As their families begin the search for suitable life partners, Sonu and Tapu find themselves in a state of panic. Desperate to avoid arranged marriages, will they be able to come up with a plan?",
            episodeDuration: "00:20:00",
            episodeReleaseDate: "2024-12-23",
            assets: {
              imageAssets: {
                carouselImage: viewAllEpisode2,
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode2,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 3,
            episodeTitle: "Shaadi Pressure",
            episodeDescription:
              "Jethalal and Champaklal attempt to persuade Tappu to consider marriage, but he firmly refuses. Meanwhile, Sonu faces similar pressure from her parents. How will the duo manage to decline their elders' expectations?",
            episodeDuration: "00:23:00",
            episodeReleaseDate: "2024-12-22",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode3,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 4,
            episodeTitle: "Suitable Groom For Sonu",
            episodeDescription:
              "Bhide calls in an acquaintance to help arrange Sonu's marriage. How will she react when she finds out?",
            episodeDuration: "00:23:00",
            episodeReleaseDate: "2024-12-21",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode4,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 5,
            episodeTitle: "Bhide Ki Jaldbaazi",
            episodeDescription:
              "Worried about Sonu and Tapu's growing friendship, Bhide decides to speed up his search for a groom for Sonu. Meanwhile, Bapuji starts looking for a bride for Tapu.",
            episodeDuration: "00:24:00",
            episodeReleaseDate: "2024-12-19",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode5,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 6,
            episodeTitle: "Shaadi Ki Umar",
            episodeDescription:
              "Bhide is concerned about Sonu's friendship with Tapu, fearing it might blossom into love. How will he come to terms with the fact that his daughter is now grown up and capable of making her own decisions?",
            episodeDuration: "00:30:00",
            episodeReleaseDate: "2024-12-18",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode6,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 7,
            episodeTitle: "Sonu Ki Chinta",
            episodeDescription:
              "Bhide is concerned about Sonu's friendship with Tapu, fearing it might blossom into love. How will he come to terms with the fact that his daughter is now grown up and capable of making her own decisions?",
            episodeDuration: "00:22:00",
            episodeReleaseDate: "2024-12-17",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode7,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 8,
            episodeTitle: "Sonu Runs Late",
            episodeDescription:
              "Bhide is on edge, worried that Sonu and Tapu Sena haven't returned from the party. He decides to take matters into his own hands and heads out to check on them.",
            episodeDuration: "00:27:00",
            episodeReleaseDate: "2024-12-16",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode8,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 9,
            episodeTitle: "Baccho Ka Bhavishya",
            episodeDescription:
              "Bhide and the others grow anxious about their children's future and upcoming marriage proposals. Later, Bhide becomes particularly concerned when he finds Sonu's phone switched off.",
            episodeDuration: "00:25:00",
            episodeReleaseDate: "2024-12-15",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode9,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 10,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:20:00",
            episodeReleaseDate: "2024-12-14",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode10,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 11,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:26:00",
            episodeReleaseDate: "2024-12-13",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode11,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 12,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:24:00",
            episodeReleaseDate: "2024-12-12",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode12,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 13,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:28:00",
            episodeReleaseDate: "2024-12-11",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode13,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 14,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:22:00",
            episodeReleaseDate: "2024-12-10",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode14,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 15,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:31:00",
            episodeReleaseDate: "2024-12-09",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode15,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 16,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:24:00",
            episodeReleaseDate: "2024-12-08",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode16,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 17,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:19:00",
            episodeReleaseDate: "2024-12-07",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode17,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 18,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:29:00",
            episodeReleaseDate: "2024-12-06",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode18,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 19,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:30:00",
            episodeReleaseDate: "2024-12-05",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode19,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 20,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:36:00",
            episodeReleaseDate: "2024-12-04",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode20,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 21,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:18:00",
            episodeReleaseDate: "2024-12-03",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode21,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
          {
            episodeNumber: 22,
            episodeTitle: "Permission To Party",
            episodeDescription:
              "Jethalal grows increasingly worried about his son's future now that he's grown up. Meanwhile, Tapu Sena seeks Bhide's permission to let Sonu attend a late-night party.",
            episodeDuration: "00:20:00",
            episodeReleaseDate: "2024-12-02",
            assets: {
              imageAssets: {
                carouselImage: "",
                bannerImage: "",
                cardImage: {
                  verticalImage: viewAllEpisode22,
                },
              },
              videoAssets: {
                videoUrl: "",
              },
            },
          },
        ],
      },
    ],
  },
];
