import { StaticImageData } from "next/image";
import recommended1 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend1.webp";
import recommended2 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend2.webp";
import recommended3 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend3.webp";
import recommended4 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend4.webp";
import recommended5 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend5.webp";
import recommended6 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend6.webp";
import recommended7 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend7.webp";
import recommended8 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend8.webp";
import recommended9 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend9.webp";
import recommended10 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend10.webp";
import recommended11 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend11.webp";
import recommended12 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend12.webp";
import recommended13 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend13.webp";
import recommended14 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend14.webp";
import recommended15 from "../../../public/assets/homePageAssets/recommendedAssetsSection/recommend15.webp";

interface CastMember {
  id?: number;
  actor: string;
  role: string;
}

interface RecommendedSectionDataInterface {
  id: number;
  type: string;
  title: string;
  description: string;
  genre: string;
  releaseDate: string;
  duration: string;
  rating: number;
  age_restriction: string;
  cast: CastMember[];
  director: string;
  production_company: string;
  language: string;
  subtitles: string[];
  quality: string;
  video: string;
  img: string | StaticImageData;
  trailer: string;
}

const recommendedSectionData: RecommendedSectionDataInterface[] = [
  {
    id: 1,
    type: "movie",
    title: "Mother India",
    description:
      "A 1957 Indian epic drama film that portrays the struggles of a poverty-stricken woman, her resilience, and moral values as she raises her sons amidst hardships in rural India.",
    genre: "Drama, Epic, Classic",
    releaseDate: "1957-10-14",
    duration: "2h 52min",
    quality: "4K",
    rating: 8.1,
    age_restriction: "13+",
    cast: [
      { actor: "Nargis", role: "Radha" },
      { actor: "Sunil Dutt", role: "Birju" },
    ],
    director: "Mehboob Khan",
    production_company: "Mehboob Productions",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended1,
    trailer: "",
  },
  {
    id: 2,
    type: "movie",
    title: "English Vinglish",
    description:
      "A heartwarming story about a homemaker who rediscovers herself and gains confidence while learning English.",
    genre: "Drama, Family",
    releaseDate: "2012-09-14",
    duration: "2h 14min",
    quality: "4K",
    rating: 7.8,
    age_restriction: "13+",
    cast: [
      { actor: "Sridevi", role: "Shashi" },
      { actor: "Adil Hussain", role: "Satish" },
    ],
    director: "Gauri Shinde",
    production_company: "Hope Productions",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended2,
    trailer: "",
  },
  {
    id: 3,
    type: "movie",
    title: "Rajdhani Express",
    description:
      "A thriller that unfolds aboard a train journey, exploring human emotions and societal issues.",
    genre: "Thriller, Drama",
    releaseDate: "2013-01-04",
    duration: "1h 59min",
    quality: "4K",
    rating: 5.2,
    age_restriction: "15+",
    cast: [
      { actor: "Leander Paes", role: "Keshav" },
      { actor: "Priyanshu Chatterjee", role: "Officer Yadav" },
    ],
    director: "Ashok Kohli",
    production_company: "Vega Entertainment",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended3,
    trailer: "",
  },
  {
    id: 4,
    type: "movie",
    title: "Raanjhanaa",
    description:
      "A love story set in Varanasi that portrays unrequited love, friendship, and redemption.",
    genre: "Romance, Drama",
    releaseDate: "2013-06-21",
    duration: "2h 20min",
    quality: "4K",
    rating: 7.6,
    age_restriction: "13+",
    cast: [
      { actor: "Dhanush", role: "Kundan" },
      { actor: "Sonam Kapoor", role: "Zoya" },
    ],
    director: "Aanand L. Rai",
    production_company: "Eros International",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended4,
    trailer: "",
  },
  {
    id: 5,
    type: "movie",
    title: "Badlapur",
    description:
      "A tale of revenge and redemption, where lives are intertwined by a tragic event.",
    genre: "Thriller, Crime, Drama",
    releaseDate: "2015-02-20",
    duration: "2h 14min",
    quality: "4K",
    rating: 7.4,
    age_restriction: "18+",
    cast: [
      { actor: "Varun Dhawan", role: "Raghu" },
      { actor: "Nawazuddin Siddiqui", role: "Liak" },
    ],
    director: "Sriram Raghavan",
    production_company: "Eros International",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended5,
    trailer: "",
  },
  {
    id: 6,
    type: "movie",
    title: "Shamitabh",
    description:
      "An unconventional story about an aspiring actor and his unique collaboration with a powerful voice.",
    genre: "Drama, Comedy",
    releaseDate: "2015-02-06",
    duration: "2h 15min",
    quality: "4K",
    rating: 6.8,
    age_restriction: "13+",
    cast: [
      { actor: "Amitabh Bachchan", role: "Shamitabh" },
      { actor: "Dhanush", role: "Danish" },
    ],
    director: "R. Balki",
    production_company: "Hope Productions",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended6,
    trailer: "",
  },
  {
    id: 7,
    type: "movie",
    title: "NH 10",
    description:
      "A gripping thriller about a couple's road trip that turns into a nightmare when they witness a violent honor killing.",
    genre: "Thriller, Action, Drama",
    releaseDate: "2015-03-13",
    duration: "1h 55min",
    quality: "4K",
    rating: 7.2,
    age_restriction: "18+",
    cast: [
      { actor: "Anushka Sharma", role: "Meera" },
      { actor: "Neil Bhoopalam", role: "Arjun" },
    ],
    director: "Navdeep Singh",
    production_company: "Phantom Films",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended7,
    trailer: "",
  },
  {
    id: 8,
    type: "movie",
    title: "Ki & Ka",
    description:
      "A refreshing take on gender roles and modern relationships, showcasing a househusband and a career-oriented wife.",
    genre: "Romance, Comedy, Drama",
    releaseDate: "2016-04-01",
    duration: "2h 6min",
    quality: "4K",
    rating: 6.8,
    age_restriction: "13+",
    cast: [
      { actor: "Kareena Kapoor", role: "Kia" },
      { actor: "Arjun Kapoor", role: "Kabir" },
    ],
    director: "R. Balki",
    production_company: "Hope Productions",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended8,
    trailer: "",
  },
  {
    id: 9,
    type: "movie",
    title: "Aligarh",
    description:
      "A deeply moving biographical drama about a professor fighting for his dignity and identity.",
    genre: "Biography, Drama",
    releaseDate: "2016-02-26",
    duration: "1h 54min",
    quality: "4K",
    rating: 8.0,
    age_restriction: "18+",
    cast: [
      { actor: "Manoj Bajpayee", role: "Prof. Siras" },
      { actor: "Rajkummar Rao", role: "Journalist Deepu" },
    ],
    director: "Hansal Mehta",
    production_company: "Eros International",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended9,
    trailer: "",
  },
  {
    id: 10,
    type: "movie",
    title: "RajKumar",
    description:
      "An action-packed romance that follows the adventures of a daring prince.",
    genre: "Action, Romance",
    releaseDate: "2013-12-06",
    duration: "2h 22min",
    quality: "4K",
    rating: 5.1,
    age_restriction: "13+",
    cast: [
      { actor: "Shahid Kapoor", role: "Rajkumar" },
      { actor: "Sonakshi Sinha", role: "Chanda" },
    ],
    director: "Prabhu Deva",
    production_company: "Eros International",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended10,
    trailer: "",
  },
  {
    id: 11,
    type: "movie",
    title: "Tanu Weds Manu",
    description:
      "A quirky romantic comedy about opposites attracting and navigating through cultural differences.",
    genre: "Romance, Comedy",
    releaseDate: "2011-02-25",
    duration: "2h 0min",
    quality: "4K",
    rating: 7.6,
    age_restriction: "13+",
    cast: [
      { actor: "Madhavan", role: "Manu" },
      { actor: "Kangana Ranaut", role: "Tanu" },
    ],
    director: "Aanand L. Rai",
    production_company: "Viacom18 Motion Pictures",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended11,
    trailer: "",
  },
  {
    id: 12,
    type: "movie",
    title: "Devdas",
    description:
      "A tragic love story of a wealthy young man whose life spirals into despair after losing his true love.",
    genre: "Drama, Romance",
    releaseDate: "2002-07-12",
    duration: "3h 5min",
    quality: "4K",
    rating: 7.6,
    age_restriction: "13+",
    cast: [
      { actor: "Shah Rukh Khan", role: "Devdas" },
      { actor: "Aishwarya Rai", role: "Paro" },
    ],
    director: "Sanjay Leela Bhansali",
    production_company: "SLB Films",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended12,
    trailer: "",
  },
  {
    id: 13,
    type: "movie",
    title: "Shubh Mangal Saavdhan",
    description:
      "A humorous and sensitive take on dealing with relationship challenges and societal taboos.",
    genre: "Comedy, Romance",
    releaseDate: "2017-09-01",
    duration: "1h 59min",
    quality: "4K",
    rating: 6.9,
    age_restriction: "13+",
    cast: [
      { actor: "Ayushmann Khurrana", role: "Mudit" },
      { actor: "Bhumi Pednekar", role: "Sugandha" },
    ],
    director: "R.S. Prasanna",
    production_company: "Colour Yellow Productions",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended13,
    trailer: "",
  },
  {
    id: 14,
    type: "movie",
    title: "Dharasnan",
    description:
      "A thought-provoking drama exploring the societal pressures and psychological trauma of a woman in a patriarchal society.",
    genre: "Drama, Psychological",
    releaseDate: "2018-05-11",
    duration: "2h 12min",
    quality: "4K",
    rating: 6.5,
    age_restriction: "13+",
    cast: [{ actor: "Rituparna Sengupta", role: "Anushka" }],
    director: "Haridas Bhattacharya",
    production_company: "Independent Productions",
    language: "Bengali",
    subtitles: ["English"],
    video: "",
    img: recommended14,
    trailer: "",
  },
  {
    id: 15,
    type: "movie",
    title: "Hero No 1",
    description:
      "A classic Bollywood comedy about a man trying to win the hearts of his love's family with hilarious antics.",
    genre: "Comedy, Romance",
    releaseDate: "1997-02-21",
    duration: "2h 20min",
    quality: "4K",
    rating: 6.5,
    age_restriction: "13+",
    cast: [
      { actor: "Govinda", role: "Rajesh" },
      { actor: "Karisma Kapoor", role: "Meena" },
    ],
    director: "David Dhawan",
    production_company: "Pooja Entertainment",
    language: "Hindi",
    subtitles: ["English"],
    video: "",
    img: recommended15,
    trailer: "",
  },
];

export default recommendedSectionData;
