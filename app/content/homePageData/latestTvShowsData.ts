//latest Episodes tv shows
import { StaticImageData } from "next/image";
import latestEpisode1 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode1.webp"
import latestEpisode2 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode2.webp"
import latestEpisode3 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode3.webp"
import latestEpisode4 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode4.webp"
import latestEpisode5 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode5.webp"
import latestEpisode6 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode6.webp"
import latestEpisode7 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode7.webp"
import latestEpisode8 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode8.webp"
import latestEpisode9 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode9.webp"
import latestEpisode10 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode10.webp"
import latestEpisode11 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode11.webp"
import latestEpisode12 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode12.webp"
import latestEpisode13 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode13.webp"
import latestEpisode14 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode14.webp"
import latestEpisode15 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode15.webp"
import latestEpisode16 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode16.webp"
import latestEpisode17 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode17.webp"
import latestEpisode18 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode18.webp"
import latestEpisode19 from "../../../public/assets/homePageAssets/latestEpisodesAssetsSection/latestEpisode19.webp"

interface LatestTvShowsProps {
    id: number;
    title: string;
    img: string | StaticImageData
    description: string;
    language: string;
    duration: string;
    genre: string;
    releaseDate: string;
    quality: string;
    episodeNumber: number;
}

const LatestTvShows: LatestTvShowsProps[] = [
    {
        id: 1,
        title: "Breaking Bad",
        img: latestEpisode1,
        description: "A high school chemistry teacher turned methamphetamine manufacturer navigates the dangers of the drug trade.",
        language: "English",
        duration: "47 min",
        genre: "Crime, Drama, Thriller",
        episodeNumber: 1,
        releaseDate: "2008-01-20",
        quality: "HD",
    },
    {
        id: 2,
        title: "Stranger Things",
        img: latestEpisode2,
        description: "A group of kids uncover supernatural mysteries in their small town of Hawkins, Indiana.",
        language: "English",
        duration: "50 min",
        genre: "Drama, Fantasy, Horror",
        episodeNumber: 1,
        releaseDate: "2016-07-15",
        quality: "HD",
    },
    {
        id: 3,
        title: "Anupamaa",
        img: latestEpisode3,
        description: "A devoted wife and mother navigates the challenges of family life while rediscovering her identity.",
        language: "Hindi",
        duration: "22 min",
        genre: "Drama, Family",
        episodeNumber: 1,
        releaseDate: "2020-07-13",
        quality: "HD",
    },
    {
        id: 4,
        title: "Money Heist",
        img: latestEpisode4,
        description: "A criminal mastermind and his team of robbers plan and execute complex heists in Spain.",
        language: "Spanish",
        duration: "41 min",
        genre: "Action, Crime, Drama",
        episodeNumber: 1,
        releaseDate: "2017-05-02",
        quality: "Full HD",
    },
    {
        id: 5,
        title: "Yeh Rishta Kya Kehlata Hai",
        img: latestEpisode5,
        description: "A family drama showcasing relationships and challenges faced by different generations.",
        language: "Hindi",
        duration: "20 min",
        genre: "Drama, Romance",
        episodeNumber: 1,
        releaseDate: "2009-01-12",
        quality: "HD",
    },
    {
        id: 6,
        title: "Game of Thrones",
        img: latestEpisode6,
        description: "Nine noble families wage war against each other to gain control over the mythical land of Westeros.",
        language: "English",
        duration: "55 min",
        genre: "Action, Adventure, Drama",
        episodeNumber: 1,
        releaseDate: "2011-04-17",
        quality: "4K",
    },
    {
        id: 7,
        title: "Taarak Mehta Ka Ooltah Chashmah",
        img: latestEpisode7,
        description: "A comedy-drama revolving around the lives of residents in the Gokuldham Society.",
        language: "Hindi",
        duration: "22 min",
        genre: "Comedy, Family",
        episodeNumber: 1,
        releaseDate: "2008-07-28",
        quality: "HD",
    },
    {
        id: 8,
        title: "Dark",
        img: latestEpisode8,
        description: "A missing child sets four families on a frantic hunt for answers, uncovering a mind-bending mystery that spans three generations.",
        language: "German",
        duration: "53 min",
        genre: "Crime, Drama, Mystery",
        episodeNumber: 1,
        releaseDate: "2017-12-01",
        quality: "HD",
    },
    {
        id: 9,
        title: "Kumkum Bhagya",
        img: latestEpisode9,
        description: "The story of a rockstar and a humble woman who navigate love, family, and destiny.",
        language: "Hindi",
        duration: "21 min",
        genre: "Drama, Romance",
        episodeNumber: 1,
        releaseDate: "2014-04-15",
        quality: "HD",
    },
    {
        id: 10,
        title: "Sacred Games",
        img: latestEpisode10,
        description: "A Mumbai gangster's past intertwines with a troubled cop's investigation in a deadly game of power and survival.",
        language: "Hindi",
        duration: "60 min",
        genre: "Crime, Thriller",
        episodeNumber: 1,
        releaseDate: "2018-08-15",
        quality: "HD",
    },
    {
        id: 11,
        title: "The Crown",
        img: latestEpisode11,
        description: "The reign of Queen Elizabeth II, from her early days on the throne to the later years of her reign, exploring the trials of British royalty.",
        language: "English",
        duration: "58 min",
        genre: "Biography, Drama, History",
        episodeNumber: 1,
        releaseDate: "2016-11-04",
        quality: "4K",
    },
    {
        id: 12,
        title: "The Witcher",
        img: latestEpisode12,
        description: "Geralt of Rivia, a monster hunter with supernatural abilities, journeys through a war-torn world filled with sorcery and political intrigue.",
        language: "English",
        duration: "60 min",
        genre: "Action, Adventure, Drama",
        episodeNumber: 1,
        releaseDate: "2019-12-20",
        quality: "4K",
    },
    {
        id: 13,
        title: "Paatal Lok",
        img: latestEpisode13,
        description: "A gritty crime drama where a washed-out cop is assigned a high-profile case that takes him into the dark underworld of crime and politics.",
        language: "Hindi",
        duration: "45 min",
        genre: "Crime, Thriller, Drama",
        episodeNumber: 1,
        releaseDate: "2020-05-15",
        quality: "HD",
    },
    {
        id: 14,
        title: "Black Mirror",
        img: latestEpisode13,
        description: "A dystopian anthology series that explores the dark and often twisted side of technology and its impact on society.",
        language: "English",
        duration: "60 min",
        genre: "Drama, Sci-Fi, Thriller",
        episodeNumber: 1,
        releaseDate: "2011-12-04",
        quality: "HD",
    },
    {
        id: 15,
        title: "The Family Man",
        img: latestEpisode14,
        description: "A middle-class man secretly working as an intelligence officer for a special cell of the Threat Analysis and Surveillance Cell.",
        language: "Hindi",
        duration: "50 min",
        genre: "Action, Drama, Thriller",
        episodeNumber: 1,
        releaseDate: "2019-09-20",
        quality: "HD",
    },
    {
        id: 16,
        title: "Narcos",
        img: latestEpisode15,
        description: "The story of the rise and fall of Pablo Escobar, the infamous Colombian drug lord, and the DEA's pursuit to bring him down.",
        language: "English",
        duration: "50 min",
        genre: "Biography, Crime, Drama",
        episodeNumber: 1,
        releaseDate: "2015-08-28",
        quality: "Full HD",
    },
    {
        id: 17,
        title: "Mirzapur",
        img: latestEpisode16,
        description: "A ruthless gangster operates out of the Uttar Pradesh town of Mirzapur, where power, crime, and revenge are intertwined.",
        language: "Hindi",
        duration: "55 min",
        genre: "Action, Crime, Thriller",
        episodeNumber: 1,
        releaseDate: "2018-11-16",
        quality: "HD",
    },
    {
        id: 18,
        title: "Fleabag",
        img: latestEpisode17,
        description: "A witty, dark comedy series following a troubled woman as she struggles with her personal relationships and unresolved grief.",
        language: "English",
        duration: "30 min",
        genre: "Comedy, Drama",
        episodeNumber: 1,
        releaseDate: "2016-07-21",
        quality: "HD",
    },
    {
        id: 19,
        title: "Bepannah",
        img: latestEpisode18,
        description: "A romantic drama where two strangers, united by fate, find themselves bound together by the tragic death of their spouses.",
        language: "Hindi",
        duration: "20 min",
        genre: "Drama, Romance",
        episodeNumber: 1,
        releaseDate: "2018-03-19",
        quality: "HD",
    },
    {
        id: 20,
        title: "Sherlock",
        img: latestEpisode19,
        description: "A modern-day reimagining of Sherlock Holmes, the brilliant detective solving crimes with his sharp intellect and deduction.",
        language: "English",
        duration: "88 min",
        genre: "Crime, Drama, Mystery",
        episodeNumber: 1,
        releaseDate: "2010-07-25",
        quality: "HD",
    }
];
export default LatestTvShows