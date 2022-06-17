import style from './GameDesc.module.css'
import image1  from '../../public/images/forza2.jpg'
import image2  from '../../public/images/forza-carousel-2.jpg'
import image3  from '../../public/images/forza-carousel.jpg'
import GamePicCarousel from '../GamePicCarousel'
import { FiShoppingCart } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import Link from 'next/link'


export default function GameDesc(){
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

    const player = {
        "id": 1,
        "name": "Everyone",
        "slug": "everyone"
    }

    const link = "https://forzamotorsport.net/en-US"


    return (
        <section className={`${style.mainContainer} container`} >
            <div className={style.descContainer}>
                <div className={style.btnContainer}>
                    <button type='button' className={`${style.buyBtn} btn`}>
                        <div className={style.btnContent}>
                            <FiShoppingCart />
                            <p>Buy Now</p>
                        </div>
                    </button>
                    <button type='button' className={`${style.addBtn} btn`}>
                        <div className={style.btnContent}>
                            <IoAdd />
                            <p>My favourite</p>
                        </div>
                    </button>
                </div>
                <div className={style.description}>
                        <p>Genre : {genres.map(genre =>{
                            return(
                                <span 
                                    className={style.link}
                                    key={genre.id} 
                                    title={`see all ${genre.name} games`}>
                                    <Link href="#">{` ${genre.name}, `}</Link>
                                </span>
                            )
                        })}</p>
                    <p>Publisher : <span 
                        className={style.link}
                        title={`see other games by ${developers[0].name}`}>
                        <Link href="#" >{developers[0].name}</Link>    
                        </span>
                    </p>
                    <p>Platforms : 
                        {platform.map(platform =>{
                            return (
                                <span
                                className={style.link}
                                title={`see all ${platform.platform.name} games`}
                                key={platform.platform.id}>
                                    <Link href="#">{` ${platform.platform.name},`}</Link>
                                </span>
                            )
                        })}
                    </p>
                    <p>Who can play: 
                        <span className={style.link}>
                            {player.name}
                        </span>
                    </p>
                    <p>Oficial website: 
                        <span className={style.link}>
                            <Link href="#">{` ${link}`}</Link>
                        </span>
                    </p>
                </div>
            </div>
            
            <GamePicCarousel images={[ image1, image2, image3]} />
               
        </section>
    )
}