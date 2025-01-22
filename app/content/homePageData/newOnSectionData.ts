import { StaticImageData } from "next/image";
import newOn1 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn1.webp";
import newOn2 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn2.webp";
import newOn3 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn3.webp";
import newOn4 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn4.webp";
import newOn5 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn5.webp";
import newOn6 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn6.webp";
import newOn7 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn7.webp";
import newOn8 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn8.webp";
import newOn9 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn9.webp";
import newOn10 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn10.webp";
import newOn11 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn11.webp";
import newOn12 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn12.webp";
import newOn13 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn13.webp";
import newOn14 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn14.webp";
import newOn15 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn15.webp";
import newOn16 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn16.webp";
import newOn17 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn17.webp";
import newOn18 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn18.webp";
import newOn19 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn19.webp";
import newOn20 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn20.webp";
import newOn21 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn21.webp";
import newOn22 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn22.webp";
import newOn23 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn23.webp";
import newOn24 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn24.webp";
import newOn25 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn25.webp";
import newOn26 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn26.webp";
import newOn27 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn27.webp";
import newOn28 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn28.webp";
import newOn29 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn29.webp";
import newOn30 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn30.webp";
import newOn31 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn31.webp";
import newOn32 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn32.webp";
import newOn33 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn33.webp";
import newOn34 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn34.webp";
import newOn35 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn35.webp";
import newOn36 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn36.webp";
import newOn37 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn37.webp";
import newOn38 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn38.webp";
import newOn39 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn39.webp";
import newOn40 from "../../../public/assets/homePageAssets/newOnAssetsSection/newOn40.webp";

interface newOnSectionData {
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

const newOnMovies: newOnSectionData[] = [
  {
    id: 1,
    title: "Raayan Rumble",
    img: newOn1,
    description:
      "Watch the official music video Raayan Rumble from RAAYAN. Lyrics written and sung by Arivu, Music by A.R. Rahman & Written and Directed by Dhanush.",
    language: "Hindi, Tamil",
    duration: "4 mins",
    genre: "Music",
    releaseYear: "2024",
    quality: "HD",
    ageRestriction: "15+",
  },
  {
    id: 2,
    title: "Love Aaj Kal",
    img: newOn2,
    description:
      "The movie follows two love stories that cross paths at different times.",
    language: "Hindi",
    duration: "2 hr 53 min",
    genre: "Romance",
    releaseYear: "2013",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 3,
    title: "Omkara",
    img: newOn3,
    description:
      "A classic action-packed movie about friendship, revenge and relationship.",
    language: "Hindi",
    duration: "2 hr 47 min",
    genre: "Politics, Revenge",
    releaseYear: "2018",
    quality: "2D",
    ageRestriction: "10+",
  },
  {
    id: 4,
    title: "Rangeela",
    img: newOn4,
    description: "An action thriller about espionage and betrayal",
    language: "Hindi",
    duration: "2 hr 14 min",
    genre: "Drama, Love",
    releaseYear: "2002",
    quality: "HD",
    ageRestriction: "17+",
  },
  {
    id: 5,
    title: "Rockstar",
    img: newOn5,
    description:
      "Rockstar is a 2011 Bollywood drama, music, and romance film about a young man who transforms into a rockstar to pursue his dreams.",
    language: "Hindi",
    duration: "2 hr 56 min",
    genre: "Melodrama, Romance, Drama",
    releaseYear: "2011",
    quality: "HD | Dolby Atmos",
    ageRestriction: "15+",
  },
  {
    id: 6,
    title: "Vicky Donor",
    img: newOn6,
    description:
      "The film explores the emotional complexities of relationships and parenthood, and sends out a crucial message.",
    language: "Hindi",
    duration: "2 hr 56 min",
    genre: "Romance, Drama, Comedy",
    releaseYear: "2020",
    quality: "HD | IMAX 3D",
    ageRestriction: "13+",
  },
  {
    id: 7,
    title: "Saadi Love Story",
    img: newOn7,
    description: "A thrilling crime drama about a powerful underworld figure",
    language: "Hindi, Punjabi",
    duration: "1 hr 54 min",
    genre: "Action, Romance, Drama",
    releaseYear: "2015",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 8,
    title: "Rangeelay",
    img: newOn8,
    description: "A high-stakes romance set in the Punjab.",
    language: "Hindi, Punjabi",
    duration: "2 hr 54 min",
    genre: "Comedy, Romance",
    releaseYear: "2018",
    quality: "HD | 3D",
    ageRestriction: "15+",
  },
  {
    id: 9,
    title: "Raanjhanaa",
    img: newOn9,
    description:
      "The 2013 Bollywood movie Raanjhanaa is about a love story that takes place between Kundan, the son of a Tamil priest, and Zoya, a Muslim girl.",
    language: "Hindi",
    duration: "2 hr 42 min",
    genre: "Romance, Melodrama, Drama",
    releaseYear: "2014",
    quality: "HD | 2D",
    ageRestriction: "13+",
  },
  {
    id: 10,
    title: "Bajirao Mastani",
    img: newOn10,
    description:
      "Bajirao Mastani is a Indian film that tells the story of the romance between Maratha general Bajirao I and Mastani, the princess of Bundelkhand.",
    language: "Hindi",
    duration: "2 hr 48 min",
    genre: "History, War, Melodrama",
    releaseYear: "2015",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 11,
    title: "Shareek",
    img: newOn11,
    description: "A high action film featuring advanced weapons in battle.",
    language: "Hindi",
    duration: "2 hr 13 min",
    genre: "Action, Thrill, Fight",
    releaseYear: "2019",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 12,
    title: "Mukhtiar Chadda",
    img: newOn12,
    description: "A drama, action film featuring love and war.",
    language: "Hindi",
    duration: "2 hr 33 min",
    genre: "Action, Drama, Emotional",
    releaseYear: "2023",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 13,
    title: "Chaar Sahabzaade",
    img: newOn13,
    description:
      "Chaar Sahibzaade is animated film that tells the story of the last four sons of Guru Gobind Singh, the tenth Sikh Guru, and their sacrifices to protect their religion.",
    language: "Hindi, Punjabi",
    duration: "2 hr 49 min",
    genre: "Action, Adventure, Animation",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 14,
    title: "Mukkebaaz",
    img: newOn14,
    description:
      "Mukkabaaz is a Indian boxing drama film about an aspiring boxer, Shravan, who falls in love with Sunaina, the niece of a gangster boxing promoter.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "Action, Adventure, Fight",
    releaseYear: "2022",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 15,
    title: "Shubh Mangal Saavdhan",
    img: newOn15,
    description:
      "Shubh Mangal Saavdhan is a Bollywood film about a couple who fall in love but face challenges when the groom discovers he has erectile dysfunction.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "Romance, Comedy Drama",
    releaseYear: "2022",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 16,
    title: "Toffee",
    img: newOn16,
    description: "Toffe is a movie based on special child.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "Simple, Innocence",
    releaseYear: "2022",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 17,
    title: "25 August",
    img: newOn17,
    description: "This movie based on patriotic theme.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "Patriotic, Fight",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 18,
    title: "Wedding Pullav",
    img: newOn18,
    description:
      "Wedding Pullav is a Bollywood movie about the engagement of Aadi and Rhea, which takes place in Thailand.",
    language: "Hindi, Punjabi",
    duration: "2 hr 49 min",
    genre: "Romance, Drama, Comedy",
    releaseYear: "2023",
    quality: "IMAX 3D | 3D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 19,
    title: "X-Men Apocalypse",
    img: newOn19,
    description:
      "X-Men: Apocalypse is a action, adventure, and sci-fi movie about the X-Men's battle to stop an ancient mutant from destroying the world.",
    language: "Hindi, Punjabi",
    duration: "2 hr 49 min",
    genre: "Action, Adventure, Animation",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 20,
    title: "Vedaa",
    img: newOn20,
    description:
      "The 2024 movie Vedaa is about a young Dalit woman who learns boxing to protect her family from caste-based violence.",
    language: "Hindi, Punjabi",
    duration: "2 hr 49 min",
    genre: "Action, Adventure, Drama",
    releaseYear: "2024",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 21,
    title: "Eye For Eye",
    img: newOn21,
    description:
      "A woman seeks justice after the courts fail to keep the man who raped and murdered her daughter behind bars.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "Horror, Thriller, Suspense",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 22,
    title: "Shaitaan",
    img: newOn22,
    description:
      "Shaitaan is a 2024 supernatural-thriller movie about a family whose weekend getaway goes wrong when a stranger possesses their teenage daughter.",
    language: "Hindi, Punjabi",
    duration: "2 hr 49 min",
    genre: "Horror, Thriller, Suspense",
    releaseYear: "2024",
    quality: "HD | 3D | IMAX 3D",
    ageRestriction: "All",
  },
  {
    id: 23,
    title: "Kanguva",
    img: newOn23,
    description:
      "Kanguva is a 2024 Tamil-language action film that tells the story of a bounty hunter in the present day who is connected to a tribal warrior in the year 1070.",
    language: "Hindi, Punjabi",
    duration: "2 hr 49 min",
    genre: "Action, Adventure, Fantasy",
    releaseYear: "2024",
    quality: "HD | 3D | IMAX 3D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 24,
    title: "Trainer No.1",
    img: newOn24,
    description:
      "A fitness expert living with his mother in Los Angeles, who takes a maniacal swing at fame and fortune pursuing his version of the American dream.",
    language: "Hindi, English",
    duration: "2 hr 49 min",
    genre: "Action, Adventure, Sci-fi",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 25,
    title: "Eight 83",
    img: newOn25,
    description:
      "83 is a 2021 Hindi-language biographical sports movie about the 1983 Cricket World Cup, when the Indian cricket team beat the two-time World Champions, the West Indies.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "History , Drama, Sports",
    releaseYear: "2021",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 26,
    title: "Marco",
    img: newOn26,
    description:
      "Marco is a prequel to the 2019 film Mikhael and follows the journey of how Marco became the kingpin seen in Mikhael.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "Action, Thriller, Drama",
    releaseYear: "2024",
    quality: "HD | 3D | IMAX 3D",
    ageRestriction: "All",
  },
  {
    id: 27,
    title: "Bhoot Bangla",
    img: newOn27,
    description:
      "A 2023 movie about a family who are forced to take shelter in an abandoned church while being hunted by a serial killer.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "Horror, Suspense, Thriller",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 28,
    title: "Stree 3",
    img: newOn28,
    description:
      "The town of Chanderi is haunted again by a headless entity called Sarkatta who is abducting women. Vicky and his friends must save the town and its people.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "Horror, Suspense, Thriller",
    releaseYear: "2023",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 29,
    title: "Hitman",
    img: newOn29,
    description:
      "Based on the video game series, this action-thriller film is about a professional assassin named Agent 47 who gets caught up in a political conspiracy.",
    language: "Hindi, Telugu",
    duration: "2 hr 49 min",
    genre: "Action, Adventure, Fight",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 30,
    title: "Maari 2",
    img: newOn30,
    description:
      "Maari 2 is a Tamil, Telugu, and Hindi action comedy film about a local gangster named Maari who faces off against a hardened criminal named Beeja.",
    language: "Hindi, Tamil",
    duration: "2 hr 49 min",
    genre: "Action, Adventure, Drama",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 31,
    title: "Trap",
    img: newOn31,
    description:
      "Trap is a 2024 American psychological thriller film about a serial killer who attends a concert with his daughter while evading the police.",
    language: "Hindi, English",
    duration: "2 hr 49 min",
    genre: "Horror, Suspense, Thriller",
    releaseYear: "2024",
    quality: "HD | 3D | IMAX 3D",
    ageRestriction: "All",
  },
  {
    id: 32,
    title: "Padmaavat",
    img: newOn32,
    description:
      "Padmaavat is a Indian Hindi-language film that tells the story of Queen Padmavati, a Hindu queen who is the target of an obsessed Muslim Sultan.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "History, Melodrama, Love",
    releaseYear: "2022",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 33,
    title: "Ravanasura",
    img: newOn33,
    description:
      "Ravanasura is a 2023 Telugu-language thriller film about a junior lawyer who investigates a murder and uncovers a series of other crimes.",
    language: "Hindi, Tamil, Telugu",
    duration: "2 hr 49 min",
    genre: "Action, Thriller, Comedy",
    releaseYear: "2023",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 34,
    title: "Laboratory",
    img: newOn34,
    description:
      "A sci-fi movie about aliens who kidnap humans for experiments. It stars Garnett Smith and June Kim, and was directed by Robert Emenegger and Allan Sandler.",
    language: "Hindi, English, Tamil",
    duration: "2 hr 49 min",
    genre: "Romance, Comedy, Drama, Sci-fi",
    releaseYear: "2022",
    quality: "HD",
    ageRestriction: "All",
  },
  {
    id: 35,
    title: "Night At The Museum",
    img: newOn35,
    description:
      "Night at the Museum is a movie about a night security guard who discovers that the exhibits at the American Museum of Natural History come to life after the sun sets.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "Action, Adventure, Thriller",
    releaseYear: "2021",
    quality: "HD | 3D | Dolby Atmos",
    ageRestriction: "All",
  },
  {
    id: 36,
    title: "Joker",
    img: newOn36,
    description:
      "The Joker movie is about Arthur Fleck, a struggling clown with a mental illness that causes him to laugh uncontrollably.",
    language: "Hindi, English",
    duration: "2 hr 49 min",
    genre: "Horror, Suspense, Drama",
    releaseYear: "2022",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 37,
    title: "Monster",
    img: newOn37,
    description:
      "Monster movies, also known as creature features or giant monster movies, are a subgenre of horror films that focus on characters trying to survive attacks from monsters.",
    language: "Hindi, English",
    duration: "2 hr 49 min",
    genre: "Suspense, Fantasy, Animation",
    releaseYear: "2025",
    quality: "HD | 3D",
    ageRestriction: "All",
  },
  {
    id: 38,
    title: "Live, Die, Repeat",
    img: newOn38,
    description:
      "Live Die Repeat: Edge of Tomorrow is a sci-fi action thriller movie about a Major who is sent on a suicide mission against an alien invasion and is thrown into a time loop.",
    language: "Hindi, English",
    duration: "2 hr 49 min",
    genre: "Sci-fi, Mystery, War",
    releaseYear: "2024",
    quality: "HD | 3D | IMAX 3D",
    ageRestriction: "All",
  },
  {
    id: 39,
    title: "Shaitaan",
    img: newOn39,
    description:
      "Shaitaan is a 2024 supernatural-thriller movie about a family whose weekend getaway goes wrong when a stranger possesses their teenage daughter.",
    language: "Hindi",
    duration: "2 hr 49 min",
    genre: "Horror, Thriller, Suspense",
    releaseYear: "2022",
    quality: "HD | 2D",
    ageRestriction: "All",
  },
  {
    id: 40,
    title: "Transformers One",
    img: newOn40,
    description:
      "Transformers One is a 2024 animated science fiction action film that tells the origin story of Optimus Prime and Megatron, the Transformers' sworn enemies who were once friends.",
    language: "Hindi, English",
    duration: "2 hr 49 min",
    genre: "Fantasy, Adventure, Animation",
    releaseYear: "2024",
    quality: "HD | 3D | IMAX 3D | Dolby Atmos",
    ageRestriction: "All",
  },
];

export default newOnMovies;
