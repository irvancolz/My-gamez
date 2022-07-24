import style from './GameDesc.module.css'
import image1  from '../../public/images/forza2.jpg'
import image2  from '../../public/images/forza-carousel-2.jpg'
import image3  from '../../public/images/forza-carousel.jpg'
import GamePicCarousel from '../GamePicCarousel'
import { FiShoppingCart } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import {FaSteam, FaXbox, FaGooglePlay, FaPlaystation} from 'react-icons/fa'
import {AiOutlineDownload} from 'react-icons/ai';
import {GrAppleAppStore} from 'react-icons/gr';
import {SiEpicgames} from 'react-icons/si';
import Link from 'next/link'
import GameInfo from '../GameInfo'


export default function GameDesc(){
    const platform =  [
        {
            "platform": {
                "id": 1,
                "name": "Xbox One",
                "slug": "xbox-one",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 5284,
                "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            },
            "released_at": "2021-11-08",
            "requirements": {}
        },
        {
            "platform": {
                "id": 186,
                "name": "Xbox Series S/X",
                "slug": "xbox-series-x",
                "image": null,
                "year_end": null,
                "year_start": 2020,
                "games_count": 506,
                "image_background": "https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg"
            },
            "released_at": "2021-11-08",
            "requirements": {}
        },
        {
            "platform": {
                "id": 4,
                "name": "PC",
                "slug": "pc",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 447736,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            "released_at": "2021-11-08",
            "requirements": {
                "minimum": "Minimum:\nRequires a 64-bit processor and operating system\nOS: Windows 10 version 15063.0 or higher\nProcessor: Intel i5-4460 or AMD Ryzen 3 1200\nMemory: 8 GB RAM\nGraphics: NVidia GTX 970 OR AMD RX 470\nDirectX: Version 12\nNetwork: Broadband Internet connection\nStorage: 110 GB available space",
                "recommended": "Recommended:\nRequires a 64-bit processor and operating system\nOS: Windows 10 version 15063.0 or higher\nProcessor: Intel i5-8400 or AMD Ryzen 5 1500X\nMemory: 16 GB RAM\nGraphics: NVidia GTX 1070 OR AMD RX 590\nDirectX: Version 12\nNetwork: Broadband Internet connection\nStorage: 110 GB available space"
            }
        }
    ]
    const stores = [
        {
            "id": 617116,
            "url": "",
            "store": {
                "id": 2,
                "name": "Xbox Store",
                "slug": "xbox-store",
                "domain": "microsoft.com",
                "games_count": 4720,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
            }
        },
        {
            "id": 617117,
            "url": "",
            "store": {
                "id": 1,
                "name": "Steam",
                "slug": "steam",
                "domain": "store.steampowered.com",
                "games_count": 64139,
                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
            }
        },
        {
            "store": {
                "id": 3,
                "name": "PlayStation Store",
                "slug": "playstation-store"
            }
        },
        {
            "store": {
                "id": 4,
                "name": "App Store",
                "slug": "apple-appstore"
            }
        },
        {
            "store": {
                "id": 8,
                "name": "Google Play",
                "slug": "google-play"
            }
        },
        {
            "store": {
                "id": 11,
                "name": "Epic Games",
                "slug": "epic-games"
            }
        }
    ]

    const website =  "https://forzamotorsport.net/en-US";

    const esrb_rating = {
        "id": 1,
        "name": "Everyone",
        "slug": "everyone"
    }
    const developers =[
        {
            "id": 13141,
            "name": "Playground Games",
            "slug": "playground-games",
            "games_count": 10,
            "image_background": "https://media.rawg.io/media/games/994/99496806493c2f39b9f191923de2a63b.jpg"
        }
    ]

    const genres =  [
        {
            "id": 4,
            "name": "Action",
            "slug": "action",
            "games_count": 151505,
            "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
        },
        {
            "id": 3,
            "name": "Adventure",
            "slug": "adventure",
            "games_count": 114675,
            "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
        },
        {
            "id": 15,
            "name": "Sports",
            "slug": "sports",
            "games_count": 19005,
            "image_background": "https://media.rawg.io/media/games/1a7/1a77ee44d7e91949aa794597d32c2e28.jpg"
        },
        {
            "id": 1,
            "name": "Racing",
            "slug": "racing",
            "games_count": 21891,
            "image_background": "https://media.rawg.io/media/screenshots/c02/c02c64324edc2045ea1fc0601cdaaa0c.jpg"
        }
    ]
    const storeLink = {
    'steam' : 'https://store.steampowered.com/search/?term=',
    'xbox-store': 'https://www.xbox.com/en-us/Search?q=' ,
    }
    let platforms = []
    for(let i =0; i < platform.length - 1; i++){
        platforms.push(platform[i].platform);
    }
    const newRatings = [
        {...esrb_rating}
    ]
    const newWebsite = [{
        'name': website,
        'slug': website,
    }]
    const listTitle = [
        {
        name : 'Genres',
        link: genres
        },
        {
        name : 'Developers',
        link: developers
        },
        {
        name : 'Who Can Play',
        link: newRatings
        },
        {
        name : 'Website',
        link: newWebsite
        },
        {
        name : 'Platforms',
        link: platforms
        },
    ]

    return (
        <section className={`${style.mainContainer} container`} >
            <div className={style.descContainer}>
                <div className={style.btnContainer}>
                    <div className={style.optionBtnContainer}>
                        <button className={`${style.buyBtn} btn`}>
                            <FiShoppingCart />
                            <a href='#buyBtn'>
                                <span className={style.buttonText}>
                                    Buy Games
                                </span>
                            </a>
                        </button>
                        <button className={`${style.favouriteBtn} btn`}>
                            <IoAdd />
                            <span className={style.buttonText}>
                                My Favourite
                            </span>
                        </button>
                    </div>
                    <div id='buyBtn' className={style.buyBtnContainer}>
                        {stores.map((store, index)=>{
                            return(             
                        <button key={index}
                            className={`${style.storeBtn} btn`}
                            style={{
                                '--animation-order' : `${index + 1}`,
                            }}
                            title={`go to ${store.store.name}`}>
                                {store.store.slug === 'steam' ? <FaSteam />:
                                store.store.slug === 'xbox-store' ? <FaXbox /> :
                                store.store.slug === 'playstation-store' ? <FaPlaystation /> :
                                store.store.slug === 'apple-appstore' ? <GrAppleAppStore /> :
                                store.store.slug === 'epic-games' ? <SiEpicgames /> :
                                store.store.slug === 'google-play' ? <FaGooglePlay /> :
                                <AiOutlineDownload />}
                            <Link href={`${storeLink[store.store.slug]}`}>
                                <a target='_blank'>
                                    <span className={style.buttonText}>
                                        {store.store.name}
                                    </span>
                                </a>
                            </Link>
                        </button>
                            )
                        })}
                    </div>
                
                </div>
                <div className={style.description}>
                     {listTitle.map((item, index)=>{
                        return(
                            <GameInfo key={index} info={item.name} content={item.link} />
                        )
                     })}
                </div>
            </div>
            
            <GamePicCarousel images={[ image1, image2, image3]} />
               
        </section>
    )
}
