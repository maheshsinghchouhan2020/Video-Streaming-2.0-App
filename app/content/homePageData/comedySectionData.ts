import { StaticImageData } from "next/image";
import comedy1 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy1.webp";
import comedy2 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy2.webp";
import comedy3 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy3.webp";
import comedy4 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy4.webp";
import comedy5 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy5.webp";
import comedy6 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy6.webp";
import comedy7 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy7.webp";
import comedy8 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy8.webp";
import comedy9 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy9.webp";
import comedy10 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy10.webp";
import comedy11 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy11.webp";
import comedy12 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy12.webp";
import comedy13 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy13.webp";
import comedy14 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy14.webp";
import comedy15 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy15.webp";
import comedy16 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy16.webp";
import comedy17 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy17.webp";
import comedy18 from "../../../public/assets/homePageAssets/comediesAssetsSection/comedy18.webp";

interface CastMember {
  id?: number;
  actor: string;
  role: string;
}

interface comedySectionDataInterface {
  id: number;
  type: string;
  title: string;
  description: string;
  genre: string[];
  releaseDate: string;
  duration: string;
  rating: number;
  age_restriction: number;
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

const comedySectionData: comedySectionDataInterface[] = [
  {
    id: 1,
    type: "movie",
    title: "Stree 2",
    description:
      "A thrilling continuation of the Stree saga, blending horror and comedy with a social message about empowering women.",
    genre: ["Comedy", "Horror"],
    releaseDate: "2024-09-14",
    duration: "2h 30min",
    quality: "HD",
    rating: 7.8,
    age_restriction: 15,
    cast: [
      { actor: "Shraddha Kapoor", role: "Stree" },
      { actor: "Rajkummar Rao", role: "Vicky" },
    ],
    director: "Amar Kaushik",
    production_company: "Maddock Films",
    language: "Hindi",
    subtitles: ["English", "Spanish"],
      video: "https://www.example.com/stree2/video",
      img: comedy1,
      trailer: "https://www.example.com/stree2/trailer",
    
  },
  {
    id: 2,
    type: "movie",
    title: "Sandwich",
    description:
      "A delightful family comedy where a homemaker learns life lessons and regains her self-confidence by learning English.",
    genre: ["Comedy", "Drama"],
    releaseDate: "2012-09-14",
    duration: "2h 14min",
    quality: "HD",
    rating: 7.8,
    age_restriction: 13,
    cast: [
      { actor: "Sridevi", role: "Shashi" },
      { actor: "Adil Hussain", role: "Satish" },
    ],
    director: "Gauri Shinde",
    production_company: "Hope Productions",
    language: "Hindi",
    subtitles: ["English", "French"],
      video: "https://www.example.com/sandwich/video",
      img: comedy2,
      trailer: "https://www.example.com/sandwich/trailer",
  },
  {
    id: 3,
    type: "movie",
    title: "Hum Tum Shabana",
    description:
      "A comedy revolving around the lives of three individuals who unexpectedly cross paths while on a train journey.",
    genre: ["Comedy", "Drama"],
    releaseDate: "2013-01-04",
    duration: "1h 59min",
    quality: "HD",
    rating: 5.2,
    age_restriction: 15,
    cast: [
      { actor: "Leander Paes", role: "Keshav" },
      { actor: "Priyanshu Chatterjee", role: "Officer Yadav" },
    ],
    director: "Ashok Kohli",
    production_company: "Vega Entertainment",
    language: "Hindi",
    subtitles: ["English"],
      video: "https://www.example.com/humtumshabana/video",
      img: comedy3,
      trailer: "https://www.example.com/humtumshabana/trailer",
  },
  {
    id: 4,
    type: "movie",
    title: "No Problem",
    description:
      "An entertaining love story set in Varanasi, filled with comedy and romance, depicting unrequited love and friendship.",
    genre: ["Comedy", "Romance"],
    releaseDate: "2013-06-21",
    duration: "2h 20min",
    quality: "HD",
    rating: 7.6,
    age_restriction: 13,
    cast: [
      { actor: "Dhanush", role: "Kundan" },
      { actor: "Sonam Kapoor", role: "Zoya" },
    ],
    director: "Aanand L. Rai",
    production_company: "Eros International",
    language: "Hindi",
    subtitles: ["English"],
      video: "https://www.example.com/noproblem/video",
      img: comedy4,
      trailer: "https://www.example.com/noproblem/trailer",
  },
  {
    id: 5,
    type: "movie",
    title: "Humgama",
    description:
      "A dark comedy about a tragic event that binds two strangers, exploring revenge and redemption with comedic undertones.",
    genre: ["Thriller", "Comedy", "Crime"],
    releaseDate: "2015-02-20",
    duration: "2h 14min",
    quality: "HD",
    rating: 7.4,
    age_restriction: 18,
    cast: [
      { actor: "Varun Dhawan", role: "Raghu" },
      { actor: "Nawazuddin Siddiqui", role: "Liak" },
    ],
    director: "Sriram Raghavan",
    production_company: "Eros International",
    language: "Hindi",
    subtitles: ["English"],
      video: "https://www.example.com/humgama/video",
      img: comedy5,
      trailer: "https://www.example.com/humgama/trailer",
  },
  {
    id: 6,
    type: "movie",
    title: "JugJugg Jeeyo",
    description:
      "A family-oriented comedy that explores the complexities of relationships across generations, focusing on marital troubles and reconciliations.",
    genre: ["Comedy", "Drama", "Family"],
    releaseDate: "2022-06-24",
    duration: "2h 23min",
    quality: "HD",
    rating: 7.3,
    age_restriction: 13,
    cast: [
      { actor: "Anil Kapoor", role: "Bheem" },
      { actor: "Neetu Kapoor", role: "Geeta" },
      { actor: "Varun Dhawan", role: "Kukoo" },
      { actor: "Kiara Advani", role: "Naina" },
    ],
    director: "Raj Mehta",
    production_company: "Karan Johar's Dharma Productions",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy6,
      trailer: "",
  },
  {
    id: 7,
    type: "movie",
    title: "Good Newwz",
    description:
      "A comic tale of two couples who are on a quest to have a baby, only to find out that a sperm mix-up results in an unexpected turn of events.",
    genre: ["Comedy", "Drama", "Romance"],
    releaseDate: "2019-12-27",
    duration: "2h 14min",
    quality: "HD",
    rating: 7.9,
    age_restriction: 13,
    cast: [
      { actor: "Akshay Kumar", role: "Varun Batra" },
      { actor: "Kareena Kapoor", role: "Deepti Batra" },
      { actor: "Diljit Dosanjh", role: "Honey" },
      { actor: "Kiara Advani", role: "Monika" },
    ],
    director: "Raj Mehta",
    production_company: "Dharma Productions",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy7,
      trailer: "",
  },
  {
    id: 8,
    type: "movie",
    title: "Hera Pheri",
    description:
      "A hilarious comedy of errors revolving around three hapless individuals who get caught up in a high-stakes game of deception, all in the name of money.",
    genre: ["Comedy", "Crime", "Drama"],
    releaseDate: "2000-03-31",
    duration: "2h 45min",
    quality: "HD",
    rating: 8.1,
    age_restriction: 13,
    cast: [
      { actor: "Akshay Kumar", role: "Raju" },
      { actor: "Paresh Rawal", role: "Baburao Ganpatrao Apte" },
      { actor: "Sunil Shetty", role: "Shyam" },
    ],
    director: "Priyadarshan",
    production_company: "A.G. Films",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy8,
      trailer: "",
  },
  {
    id: 9,
    type: "movie",
    title: "Govinda Naam Mera",
    description:
      "A quirky comedy about an aspiring actor caught in a love triangle, trying to navigate through life's challenges and family conflicts.",
    genre: ["Comedy", "Drama"],
    releaseDate: "2022-12-16",
    duration: "1h 59min",
    quality: "HD",
    rating: 7.2,
    age_restriction: 13,
    cast: [
      { actor: "Vicky Kaushal", role: "Govinda Waghmare" },
      { actor: "Kiara Advani", role: "Suku" },
      { actor: "Bhumi Pednekar", role: "Gauri" },
    ],
    director: "Shashank Khaitan",
    production_company: "Dharma Productions",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy9,
      trailer: "",
  },
  {
    id: 10,
    type: "movie",
    title: "The Hangover",
    description:
      "A wild comedy about a bachelor party gone wrong in Las Vegas, where three friends try to piece together the events of the previous night.",
    genre: ["Comedy", "Crime"],
    releaseDate: "2009-06-05",
    duration: "1h 40min",
    quality: "HD",
    rating: 7.7,
    age_restriction: 18,
    cast: [
      { actor: "Bradley Cooper", role: "Phil Wenneck" },
      { actor: "Ed Helms", role: "Stu Price" },
      { actor: "Zach Galifianakis", role: "Alan Garner" },
    ],
    director: "Todd Phillips",
    production_company: "Warner Bros.",
    language: "English",
    subtitles: ["English", "Spanish", "French"],
      video: "",
      img: comedy10,
      trailer: "",
  },
  {
    id: 11,
    type: "movie",
    title: "Jayeshbhai Jordaar",
    description:
      "A quirky yet touching comedy about a Gujarati man who stands up for his wife and unborn daughter in the face of societal and familial pressures.",
    genre: ["Comedy", "Drama"],
    releaseDate: "2022-05-13",
    duration: "2h 25min",
    quality: "HD",
    rating: 6.9,
    age_restriction: 13,
    cast: [
      { actor: "Ranveer Singh", role: "Jayeshbhai" },
      { actor: "Shalini Pandey", role: "Mudra" },
      { actor: "Boman Irani", role: "Keshav" },
    ],
    director: "Divyang Thakkar",
    production_company: "Yash Raj Films",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy11,
      trailer: "",
  },
  {
    id: 12,
    type: "movie",
    title: "Vicky Vidya Ka Woh Wala Video",
    description:
      "A newly married couple's relationship and reputation are put at risk when their private video CD is stolen. The story follows their roller coaster journey to recover the CD, navigating a series of unexpected difficulties along the way.",
    genre: ["Drama", "Romance"],
    releaseDate: "2024-10-11",
    duration: "2h 26min",
    quality: "HD",
    rating: 7.4,
    age_restriction: 13,
    cast: [
      { actor: "Rajkummar Rao", role: "Vicky" },
      { actor: "Triptii Dimri", role: "Vidya" },
    ],
    director: "Raaj Shaandilyaa",
    production_company: "T-Series Films",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy12,
      trailer: "",
  },
  {
    id: 13,
    type: "movie",
    title: "Tanu Weds Manu",
    description:
      "A hilarious yet emotional comedy about a mismatched couple who struggle with their differences and complexities in their marriage.",
    genre: ["Comedy", "Romance"],
    releaseDate: "2011-02-25",
    duration: "2h 20min",
    quality: "HD",
    rating: 7.2,
    age_restriction: 13,
    cast: [
      { actor: "Kangana Ranaut", role: "Tanu" },
      { actor: "R. Madhavan", role: "Mannu" },
    ],
    director: "Aanand L. Rai",
    production_company: "Viacom18 Motion Pictures",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy13,
      trailer: "",
  },
  {
    id: 14,
    type: "movie",
    title: "Teen Thay Bhai",
    description:
      "A quirky comedy about three brothers who, after the death of their father, come together to honor his last wish, resulting in a series of misunderstandings and chaos.",
    genre: ["Comedy", "Family"],
    releaseDate: "2011-04-08",
    duration: "1h 55min",
    quality: "HD",
    rating: 6.1,
    age_restriction: 13,
    cast: [
      { actor: "Om Puri", role: "Bhai 1" },
      { actor: "Shreyas Talpade", role: "Bhai 2" },
      { actor: "Deepak Dobriyal", role: "Bhai 3" },
    ],
    director: "Mrighdeep Singh Lamba",
    production_company: "Y Films",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy14,
      trailer: "",
  },
  {
    id: 15,
    type: "movie",
    title: "3 Idiots",
    description:
      "A timeless comedy about three engineering students who challenge the educational system, exploring friendship, learning, and personal growth.",
    genre: ["Comedy", "Drama", "Education"],
    releaseDate: "2009-12-25",
    duration: "2h 50min",
    quality: "HD",
    rating: 8.4,
    age_restriction: 13,
    cast: [
      { actor: "Aamir Khan", role: "Rancho" },
      { actor: "R. Madhavan", role: "Farhan" },
      { actor: "Sharman Joshi", role: "Raju" },
    ],
    director: "Rajkumar Hirani",
    production_company: "Vidhu Vinod Chopra Productions",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy15,
      trailer: "",
  },
  {
    id: 16,
    type: "movie",
    title: "Awara Paagal Deewana",
    description:
      "A wild comedy about a man caught in a tangled web of gangsters, mistaken identities, and a series of events that spiral out of control.",
    genre: ["Comedy", "Action", "Crime"],
    releaseDate: "2002-08-16",
    duration: "2h 25min",
    quality: "HD",
    rating: 6.8,
    age_restriction: 13,
    cast: [
      { actor: "Akshay Kumar", role: "Ravi Anand" },
      { actor: "Sunil Shetty", role: "Baba" },
      { actor: "Paresh Rawal", role: "Shyam Sundar" },
      { actor: "Aftab Shivdasani", role: "Raghav" },
    ],
    director: "Vikram Bhatt",
    production_company: "Balaji Motion Pictures",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy16,
      trailer: "",
  },
  {
    id: 17,
    type: "movie",
    title: "Trial Period",
    description:
      "A lighthearted comedy revolving around a man who, after a messy breakup, goes through a trial period with his new housemate, leading to hilarious misunderstandings.",
    genre: ["Comedy", "Romance", "Drama"],
    releaseDate: "2022-05-20",
    duration: "1h 45min",
    quality: "HD",
    rating: 6.5,
    age_restriction: 13,
    cast: [
      { actor: "Vijay Varma", role: "Aarav" },
      { actor: "Sanya Malhotra", role: "Neha" },
      { actor: "Raghubir Yadav", role: "Ravi's Father" },
    ],
    director: "Shilpi Dasgupta",
    production_company: "Reliance Entertainment",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy17,
      trailer: "",
  },
  {
    id: 18,
    type: "movie",
    title: "Bad Newz",
    description:
      "A comedy of errors about two couples who find themselves in a hilarious situation when a sperm mix-up leads to unexpected complications in their lives.",
    genre: ["Comedy", "Romance", "Drama"],
    releaseDate: "2019-12-27",
    duration: "2h 15min",
    quality: "HD",
    rating: 6.8,
    age_restriction: 13,
    cast: [
      { actor: "Akshay Kumar", role: "Varun Batra" },
      { actor: "Kareena Kapoor", role: "Deepti Batra" },
      { actor: "Diljit Dosanjh", role: "Honey" },
      { actor: "Kiara Advani", role: "Monika" },
    ],
    director: "Raj Mehta",
    production_company: "Dharma Productions",
    language: "Hindi",
    subtitles: ["English"],
      video: "",
      img: comedy18,
      trailer: "",
  },
];

export default comedySectionData;