import Layout from "./Layout";
import Topnav from "./Topnav";
import MainBanner from "./MainBanner";
import GameDesc from "./GameDescription";
import GamePicCarousel from "./GamePicCarousel";
import GameStory from "./GameStory";
import Ratings from "./Ratings";
import Requirements from "./Requirements";
import Achievements from "./Achievements";
import GameList from "./GameList";
import Tags from "./Tags";
import BgImageComponent from "./BgImageComponent";

export default function Components(){
    return(
        {
            Layout,
            Topnav,
            MainBanner,
            GameDesc,
            GamePicCarousel,
            GameStory,
            Ratings,
            Requirements,
            Achievements,
            GameList,
            Tags,
            BgImageComponent,
        }
    )
}