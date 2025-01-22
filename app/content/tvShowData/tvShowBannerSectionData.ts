import { StaticImageData } from "next/image";
import tvShowBanner1 from "@/public/assets/tvShowAssets/tvShowBannerSection/tvShowBanner1.webp";
import tvShowBanner2 from "@/public/assets/tvShowAssets/tvShowBannerSection/tvShowBanner2.webp";
import tvShowBanner3 from "@/public/assets/tvShowAssets/tvShowBannerSection/tvShowBanner3.webp";
import tvShowBanner4 from "@/public/assets/tvShowAssets/tvShowBannerSection/tvShowBanner4.webp";
import tvShowBanner5 from "@/public/assets/tvShowAssets/tvShowBannerSection/tvShowBanner5.webp";
import tvShowBanner6 from "@/public/assets/tvShowAssets/tvShowBannerSection/tvShowBanner6.webp";
import tvShowBanner7 from "@/public/assets/tvShowAssets/tvShowBannerSection/tvShowBanner7.webp";
import tvShowBanner8 from "@/public/assets/tvShowAssets/tvShowBannerSection/tvShowBanner8.webp";
import tvShowBanner9 from "@/public/assets/tvShowAssets/tvShowBannerSection/tvShowBanner9.webp";
import tvShowBanner10 from "@/public/assets/tvShowAssets/tvShowBannerSection/tvShowBanner10.webp";
import viewAllEpisode1 from "../../../public/assets/viewAllEpisodeAssets/viewAllEpisode24.webp";

interface tvShowBannerDataProps {
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

export const tvShowBannerData: tvShowBannerDataProps[] = [
  {
    id: 1,
    title: "Taarak Mehta Ka Ooltah Chashmah",
    img: viewAllEpisode1,
    description:
      "Taarak Mehta Ka Ooltah Chashmah is a SAB Comedy Show inspired from the famous humorous column, Duniya Ne Undha Chashmah written by the eminent Gujarati writer, Mr. Tarak Mehta. This show revolves around Gada family which consists of uneducated businessman, Jethalal Champaklal Gada, Jethalal's wife, Daya & their naughty son, Tipendra Gada living in Gokuldham Co-operative Society and covers topical issues which are socially relevant. This hilarious show will surely tickle your funny bone.",
    language: "Hindi",
    duration: "22 min",
    genre: ["COMEDY"],
    releaseYear: "2008",
    quality: "HD",
    ageRestriction: "G",
  },
  {
    id: 2,
    title: "CV - Cyber Crime Cases",
    img: tvShowBanner1,
    description:
      "Explore riveting cybercrime cases as the show delves into the world of digital crimes, unraveling the mysteries of the virtual realm.",
    language: "Hindi",
    duration: "60 min",
    genre: ["Game Show"],
    releaseYear: "2000",
    quality: "HD",
    ageRestriction: "7+",
  },
  {
    id: 3,
    title: "Shekhar Home",
    img: tvShowBanner2,
    description:
      "A lighthearted sitcom about Shekhar and his quirky family, navigating everyday challenges with humor and love.",
    language: "Hindi",
    duration: "20 min",
    genre: ["Comedy, Family"],
    releaseYear: "2008",
    quality: "HD",
    ageRestriction: "7+",
  },
  {
    id: 4,
    title: "Spy Family",
    img: tvShowBanner3,
    description:
      "Follow a talented family of spies as they embark on musical adventures while balancing their covert missions.",
    language: "Hindi",
    duration: "90 min",
    genre: ["Reality, Music"],
    releaseYear: "2004",
    quality: "HD",
    ageRestriction: "7+",
  },
  {
    id: 5,
    title: "Comedy Circus - Bachaoo",
    img: tvShowBanner4,
    description:
      "A comedy-drama show featuring hilarious skits and moments designed to keep audiences laughing out loud.",
    language: "Hindi",
    duration: "60 min",
    genre: ["Reality, Drama"],
    releaseYear: "2006",
    quality: "HD",
    ageRestriction: "16+",
  },
  {
    id: 6,
    title: "Swipe Ride - Ft. Bhumi Padnekar",
    img: tvShowBanner5,
    description:
      "An engaging family drama infused with supernatural twists, starring the talented Bhumi Padnekar.",
    language: "Hindi",
    duration: "30 min",
    genre: ["Drama, Family, Supernatural"],
    releaseYear: "2011",
    quality: "SD",
    ageRestriction: "13+",
  },
  {
    id: 7,
    title: "The Dark Nights",
    img: tvShowBanner6,
    description:
      "Dive into adventurous journeys and thrilling realities as contestants brave the darkness to achieve victory.",
    language: "Hindi",
    duration: "60 min",
    genre: ["Adventure, Reality"],
    releaseYear: "2003",
    quality: "HD",
    ageRestriction: "13+",
  },
  {
    id: 8,
    title: "Khatro Ke Khiladi",
    img: tvShowBanner7,
    description:
      "A gripping drama showcasing participants tackling high-stakes challenges and daring stunts.",
    language: "Hindi",
    duration: "30 min",
    genre: ["Drama"],
    releaseYear: "2021",
    quality: "SD",
    ageRestriction: "13+",
  },
  {
    id: 9,
    title: "Big Boss",
    img: tvShowBanner8,
    description:
      "A popular reality show where contestants live together and compete, with music and drama at every turn.",
    language: "Hindi",
    duration: "60 min",
    genre: ["Reality, Music"],
    releaseYear: "2019",
    quality: "HD",
    ageRestriction: "13+",
  },
  {
    id: 10,
    title: "Demon Slayer",
    img: tvShowBanner9,
    description:
      "A captivating comedy-drama where characters face emotional and humorous moments in a fantastical world.",
    language: "Hindi",
    duration: "30 min",
    genre: ["Comedy, Drama"],
    releaseYear: "2020",
    quality: "SD",
    ageRestriction: "13+",
  },
  {
    id: 11,
    title: "SplitVilla x5",
    img: tvShowBanner10,
    description:
      "A dramatic series where contestants navigate love, betrayal, and survival in an exciting villa setup.",
    language: "Hindi",
    duration: "30 min",
    genre: ["Drama"],
    releaseYear: "2015",
    quality: "SD",
    ageRestriction: "13+",
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

export const topCarouselTvShow: TvShowContent[] = [
  {
    id: 1,
    type: ContentType.TVSHOW,
    title: "Indian Idol",
    subtitles: [Language.ENGLISH],
    genres: [Genre.MUSIC, Genre.REALITY],
    language: [Language.HINDI],
    ageRestriction: AgeRestriction.AGE_12,
    releaseDate: "2004-05-10",
    quality: [Quality.HD],
    rating: 4.8,
    description:
      "The much-anticipated Season 15 of 'Indian Idol' is here! The stage is set for an exciting musical journey hosted by Aditya Narayan. On a mission to find the next big star whose 'voice is their hero', judges Vishal Dadlani, Shreya Ghoshal and Badshah are on the lookout for exceptional performers who can deliver a complete, electrifying performance.",
    tags: [Tags.EXCLUSIVE, Tags.BLOCKBUSTER],
    audio: [Audio.DOLBY_ATMOS],
    totalSeasons: 2,
    totalEpisodes: 62,
    seasonDetail: [
      {
        seasonNumber: 1,
        totalEpisodesInSeason: 29,
        episodesDetail: [
          {
            episodeNumber: 1,
            episodeTitle: "Raj Kapoor Special",
            episodeDescription:
              "A small tribute to our beloved & all time blockbuster Mr Raj Kapoor.",
            episodeDuration: "00:30:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner1,
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
            episodeNumber: 2,
            episodeTitle: "The Encounter",
            episodeDescription: "The team encounters a new enemy in the wild.",
            episodeDuration: "00:47:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner2,
                bannerImage:
                  "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                  verticalImage: "",
                },
              },
              videoAssets: {
                trailerUrl: "https://example.com/trailer/grand-adventure.mp4",
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
              },
            },
          },
        ],
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
      },
      {
        seasonNumber: 2, // Season number
        totalEpisodesInSeason: 33, // Number of episodes in this season
        episodesDetail: [
          {
            episodeNumber: 1,
            episodeTitle: "New Beginnings",
            episodeDescription:
              "The team faces new challenges after the encounter.",
            episodeDuration: "00:50:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner3,
                bannerImage:
                  "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                  verticalImage: "",
                },
              },
              videoAssets: {
                trailerUrl: "https://example.com/trailer/grand-adventure.mp4",
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
              },
            },
          },
          {
            episodeNumber: 2,
            episodeTitle: "The Hidden Truth",
            episodeDescription:
              "The team uncovers a hidden secret that could change everything.",
            episodeDuration: "00:52:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner1,
                bannerImage:
                  "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                  verticalImage: "",
                },
              },
              videoAssets: {
                trailerUrl: "https://example.com/trailer/grand-adventure.mp4",
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
              },
            },
          },
          // More episodes can be added here similarly
        ],
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
      },
      // More seasons can be added here similarly
    ],
  },
  {
    id: 2,
    type: ContentType.TVSHOW,
    title: "Radha Krishn",
    subtitles: [Language.ENGLISH],
    genres: [Genre.MUSIC, Genre.REALITY],
    language: [Language.HINDI],
    ageRestriction: AgeRestriction.AGE_12,
    releaseDate: "2004-05-10",
    quality: [Quality.HD],
    rating: 4.8,
    description:
      "The much-anticipated Season 15 of 'Indian Idol' is here! The stage is set for an exciting musical journey hosted by Aditya Narayan. On a mission to find the next big star whose 'voice is their hero', judges Vishal Dadlani, Shreya Ghoshal and Badshah are on the lookout for exceptional performers who can deliver a complete, electrifying performance.",
    tags: [Tags.EXCLUSIVE, Tags.BLOCKBUSTER],
    audio: [Audio.DOLBY_ATMOS],
    totalSeasons: 2,
    totalEpisodes: 62,
    seasonDetail: [
      {
        seasonNumber: 1,
        totalEpisodesInSeason: 29,
        episodesDetail: [
          {
            episodeNumber: 1,
            episodeTitle: "Raj Kapoor Special",
            episodeDescription:
              "A small tribute to our beloved & all time blockbuster Mr Raj Kapoor.",
            episodeDuration: "00:30:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner1,
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
            episodeNumber: 2,
            episodeTitle: "The Encounter",
            episodeDescription: "The team encounters a new enemy in the wild.",
            episodeDuration: "00:47:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner2,
                bannerImage:
                  "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                  verticalImage: "",
                },
              },
              videoAssets: {
                trailerUrl: "https://example.com/trailer/grand-adventure.mp4",
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
              },
            },
          },
        ],
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
      },
      {
        seasonNumber: 2, // Season number
        totalEpisodesInSeason: 33, // Number of episodes in this season
        episodesDetail: [
          {
            episodeNumber: 1,
            episodeTitle: "New Beginnings",
            episodeDescription:
              "The team faces new challenges after the encounter.",
            episodeDuration: "00:50:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner3,
                bannerImage:
                  "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                  verticalImage: "",
                },
              },
              videoAssets: {
                trailerUrl: "https://example.com/trailer/grand-adventure.mp4",
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
              },
            },
          },
          {
            episodeNumber: 2,
            episodeTitle: "The Hidden Truth",
            episodeDescription:
              "The team uncovers a hidden secret that could change everything.",
            episodeDuration: "00:52:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner1,
                bannerImage:
                  "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                  verticalImage: "",
                },
              },
              videoAssets: {
                trailerUrl: "https://example.com/trailer/grand-adventure.mp4",
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
              },
            },
          },
          // More episodes can be added here similarly
        ],
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
      },
      // More seasons can be added here similarly
    ],
  },
  {
    id: 3,
    type: ContentType.TVSHOW,
    title: "Kapil Sharma Show",
    subtitles: [Language.ENGLISH],
    genres: [Genre.MUSIC, Genre.REALITY],
    language: [Language.HINDI],
    ageRestriction: AgeRestriction.AGE_12,
    releaseDate: "2004-05-10",
    quality: [Quality.HD],
    rating: 4.8,
    description:
      "The much-anticipated Season 15 of 'Indian Idol' is here! The stage is set for an exciting musical journey hosted by Aditya Narayan. On a mission to find the next big star whose 'voice is their hero', judges Vishal Dadlani, Shreya Ghoshal and Badshah are on the lookout for exceptional performers who can deliver a complete, electrifying performance.",
    tags: [Tags.EXCLUSIVE, Tags.BLOCKBUSTER],
    audio: [Audio.DOLBY_ATMOS],
    totalSeasons: 2,
    totalEpisodes: 62,
    seasonDetail: [
      {
        seasonNumber: 1,
        totalEpisodesInSeason: 29,
        episodesDetail: [
          {
            episodeNumber: 1,
            episodeTitle: "Raj Kapoor Special",
            episodeDescription:
              "A small tribute to our beloved & all time blockbuster Mr Raj Kapoor.",
            episodeDuration: "00:30:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner1,
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
            episodeNumber: 2,
            episodeTitle: "The Encounter",
            episodeDescription: "The team encounters a new enemy in the wild.",
            episodeDuration: "00:47:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner2,
                bannerImage:
                  "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                  verticalImage: "",
                },
              },
              videoAssets: {
                trailerUrl: "https://example.com/trailer/grand-adventure.mp4",
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
              },
            },
          },
        ],
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
      },
      {
        seasonNumber: 2, // Season number
        totalEpisodesInSeason: 33, // Number of episodes in this season
        episodesDetail: [
          {
            episodeNumber: 1,
            episodeTitle: "New Beginnings",
            episodeDescription:
              "The team faces new challenges after the encounter.",
            episodeDuration: "00:50:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner3,
                bannerImage:
                  "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                  verticalImage: "",
                },
              },
              videoAssets: {
                trailerUrl: "https://example.com/trailer/grand-adventure.mp4",
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
              },
            },
          },
          {
            episodeNumber: 2,
            episodeTitle: "The Hidden Truth",
            episodeDescription:
              "The team uncovers a hidden secret that could change everything.",
            episodeDuration: "00:52:00",
            episodeReleaseDate: "2004-05-10",
            assets: {
              imageAssets: {
                carouselImage: tvShowBanner1,
                bannerImage:
                  "https://example.com/imageAssets/grand-adventure-banner.jpg",
                cardImage: {
                  verticalImage: "",
                },
              },
              videoAssets: {
                trailerUrl: "https://example.com/trailer/grand-adventure.mp4",
                videoUrl: "https://example.com/full-movie/grand-adventure.mp4",
              },
            },
          },
          // More episodes can be added here similarly
        ],
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
      },
    ],
  },
];
