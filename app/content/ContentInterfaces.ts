import { StaticImageData } from "next/image";

export enum ContentType {
  MOVIE = "movie",
  TVSHOW = "tvShow",
  MUSIC = "music",
  SHORT = "short",
}

export enum Language {
  TAMIL = "Tamil",
  TELUHU = "Telugu",
  MALAYALAM = "Malayalam",
  KANNADA = "Kannada",
  HINDI = "Hindi",
  BENGALI = "Bengali",
  MARATHI = "Marathi",
  ENGLISH = "English",
}

export enum Genre {
  ALL_GENRES = "All Genres",
  COMEDY = "Comedy",
  HORROR = "Horror",
  DRAMA = "Drama",
  ROMANCE = "Romance",
  THRILLER = "Thriller",
  CRIME = "Crime",
  FAMILY = "Family",
  EDUCATION = "Education",
  ACTION = "Action",
  ADVENTURE = "Adventure",
  FIGHT = "Fight",
  HISTORY = "History",
  WAR = "War",
  HISTORICAL = "Historical",
  SCIFI = "Sci-Fi",
  LOVE = "Love",
  SUSPENSE = "Suspense",
  THRILL = "Thrill",
  EMOTIONAL = "Emotional",
  MUSIC = "Music",
  FANTASY = "Fantasy",
  MYSTERY = "Mystery",
  BIOGRAPHY = "Biography",
  POLITICS = "Politics",
  REVENGE = "Revenge",
  MELODRAMA = "Melodrama",
  ANIMATION = "Animation",
  SIMPLE = "Simple",
  INNOCENCE = "Innocence",
  PATRIOTIC = "Patriotic",
  ENTERTAINMENT = "Entertainment",
  SPORT = "Sport",
  MUSICAL = "Musical",
  EPIC = "Epic",
  CLASSIC = "Classic",
  PSYCHOLOGICAL = "Psychological",
  SERIALS = "Serials",
  REALITY = "Reality",
}

export enum CastRole {
  // Acting-related roles
  ACTOR = "Actor",
  VOICE_ACTOR = "Voice Actor", // For animated or dubbed roles

  // Directing and production
  DIRECTOR = "Director",
  PRODUCER = "Producer",
  EXECUTIVE_PRODUCER = "Executive Producer", // Common in movies and TV

  // Writing and creative roles
  SCREENWRITER = "Screenwriter", 
  CINEMATOGRAPHER = "Cinematographer",
  EDITOR = "Editor", // Important for short videos and films

  // Music-related roles
  SINGER = "Singer",
  LYRICIST = "Lyricist",
  MUSIC_DIRECTOR = "Music Director",
  COMPOSER = "Composer",

  // Hosting and judging
  HOST = "Host", // For TV shows, award shows, etc.
  JUDGE = "Judge", // For reality shows and competitions

  // Other creative roles
  CHOREOGRAPHER = "Choreographer", // For dance-related projects
  COSTUME_DESIGNER = "Costume Designer", // Relevant for movies and TV
  MAKEUP_ARTIST = "Makeup Artist",

  // Additional roles for short videos
  CONTENT_CREATOR = "Content Creator", // General term for short video platforms
  INFLUENCER = "Influencer", // Relevant for short-form media
}

export enum Quality {
  SD = "SD",
  HD = "HD",
  FULLHD = "Full HD",
  UHD = "UHD",
  FOUR_K = "4K",
  THREE_D = "3D",
}

export enum Tags {
  EPIC = "Epic",
  EXCLUSIVE = "Exclusive",
  ADVENTURE = "Adventure",
  BIOGRAPHICAL = "Biographical",
  ACTION_PACKED = "Action-Packed",
  FAMILY_FRIENDLY = "Family-Friendly",
  CULT_CLASSIC = "Cult Classic",
  BLOCKBUSTER = "Blockbuster",
  HEARTWARMING = "Heartwarming",
  CRITICALLY_ACCLAIMED = "Critically Acclaimed",
  NEW_RELEASE = "New Release",
  TRENDING = "Trending",
  HISTORICAL = "Historical",
  DRAMATIC = "Dramatic",
  INSPIRATIONAL = "Inspirational",
}

export enum AgeRestriction {
  GENERAL = "G", // Suitable for all ages
  PG = "PG", // Parental Guidance suggested
  PG_13 = "PG-13", // Not suitable for children under 13
  R = "R", // Restricted to 17+ unless accompanied
  NC_17 = "NC-17", // Adults only
  AGE_12 = "12+", // Custom for specific age group (e.g., 12+)
  AGE_16 = "16+", // Custom for specific age group (e.g., 16+)
  AGE_18 = "18+", // Custom for adults only (18+)
}

export enum Audio {
  STEREO = "Stereo",
  MONO = "Mono",
  SURROUND = "Surround",
  DOLBY_ATMOS = "Dolby Atmos",
  DTS = "DTS",
  AAC = "AAC",
  MP3 = "MP3",
  FLAC = "FLAC",
}

export interface CastDetail {
  castName: string;
  castRole: CastRole;
  castImg: string | StaticImageData;
}

export interface ImageAssets {
  carouselImage: string | StaticImageData;
  bannerImage: string | StaticImageData;
  cardImage: {
    // {Movie & Music - horizontal}
    // {TvShow & Short - Vertical}
    horizontalImage?: string | StaticImageData;
    verticalImage?: string | StaticImageData;
  };
}

export interface VideoAssets {
  trailerUrl?: string;
  videoUrl: string;
}

export interface Assets {
  imageAssets: ImageAssets;
  videoAssets: VideoAssets;
}

export interface Content {
  id: number;
  type: ContentType;
  title: string;
  subtitles: Language[];
  description: string;
  language: Language[];
  genres: Genre[];
  quality: Quality[];
  ageRestriction: AgeRestriction;
  rating: number;
  releaseDate: string;
  tags: Tags[];
  audio: Audio[];
}

export interface SeasonDetail {
  seasonNumber: number;
  totalEpisodesInSeason: number;
  episodesDetail: EpisodeDetail[];
  castDetail: CastDetail[];
}

export interface EpisodeDetail {
  episodeNumber: number;
  episodeTitle: string;
  episodeDescription: string;
  episodeDuration: string;
  episodeReleaseDate: string;
  assets: Assets;
}


// export interface HomeContent {
//   movieContent?: MovieContent[];
//   tvShowContent?: TvShowContent[];
//   musicContent?: MusicContent[];
//   shortContent?: ShortContent[];
// }
// Interface for TV Shows, including season and episode details
export interface MovieContent extends Content {
  duration: string;
  assets: Assets;
  castDetail: CastDetail[];
}

// Interface for TV Shows, including season and episode details
export interface TvShowContent extends Content {
  totalSeasons: number;
  totalEpisodes: number;
  seasonDetail: SeasonDetail[];
}

// Interface for Music content
export interface MusicContent extends Content {
  duration: string;
  assets: Assets;
  castDetail: CastDetail[];
}

// Interface for Short Videos
export interface ShortContent extends Content {
  duration: string;
  assets: Assets;
  castDetail: CastDetail[];
}
