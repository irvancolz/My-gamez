import Layout from "./Layout";
import Topnav from "./Topnav";
import MainBanner from "./MainBanner";
import GameDesc from "./GameDescription";
import GamePicCarousel from "./GamePicCarousel";
import GameStory from "./GameStory";
import GameTitle from "./GameTitle";
import Ratings from "./Ratings";
import Requirements from "./Requirements";
import Achievements from "./Achievements";
import GameList from "./GameList";
import Tags from "./Tags";
import BgImageComponent from "./BgImageComponent";
import UserCards from "./UserCard";
import SideNav from "./SideNav";
import NestedLayout from "./NestedLayout";
import MainCarousel from "./MainCarousel";
import Searchbar from "./Searchbar";
import GenreHeader from "./GenreHeader";

export default function Components(){
    return(
        {
            Layout,
            Topnav,
            MainBanner,
            GameDesc,
            GamePicCarousel,
            GameStory,
            GameTitle,
            Ratings,
            Searchbar,
            Requirements,
            Achievements,
            GameList,
            Tags,
            BgImageComponent,
            UserCards,
            SideNav,
            NestedLayout,
            MainCarousel,
            GenreHeader
        }
    )
}