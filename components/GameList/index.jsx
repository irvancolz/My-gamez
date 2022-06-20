import GameCard from "../GameCard"
import style from "./GameList.module.css"

export default function GameList({name= '', content=[]}){
    const game =   {
        "id": 58753,
        "slug": "forza-horizon-4",
        "name": "Forza Horizon 4",
        "released": "2018-10-02",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg",
        "rating": 4.38,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 707,
                "percent": 53.2
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 498,
                "percent": 37.47
            },
            {
                "id": 3,
                "title": "meh",
                "count": 85,
                "percent": 6.4
            },
            {
                "id": 1,
                "title": "skip",
                "count": 39,
                "percent": 2.93
            }
        ],
        "ratings_count": 1316,
        "reviews_text_count": 10,
        "added": 4777,
        "added_by_status": {
            "yet": 142,
            "owned": 3178,
            "beaten": 415,
            "toplay": 273,
            "dropped": 446,
            "playing": 323
        },
        "metacritic": 90,
        "playtime": 13,
        "suggestions_count": 436,
        "updated": "2021-03-12T03:09:18",
        "user_game": null,
        "reviews_count": 1329,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "platforms": [
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 5315,
                    "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                },
                "released_at": "2018-10-02",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 186,
                    "name": "Xbox Series S/X",
                    "slug": "xbox-series-x",
                    "image": null,
                    "year_end": null,
                    "year_start": 2020,
                    "games_count": 538,
                    "image_background": "https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg"
                },
                "released_at": "2018-10-02",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 450685,
                    "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                },
                "released_at": "2021-03-09",
                "requirements_en": {
                    "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 version 15063.0 or higher<br></li><li><strong>Processor:</strong> Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> NVidia 650TI OR AMD R7 250x<br></li><li><strong>DirectX:</strong> Version 12<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 80 GB available space</li></ul>",
                    "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 version 15063.0 or higher<br></li><li><strong>Processor:</strong> Intel i7-3820 @ 3.6Ghz<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVidia GTX 970 OR NVidia GTX 1060 3GB OR AMD R9 290x OR AMD RX 470<br></li><li><strong>DirectX:</strong> Version 12<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 100 GB available space</li></ul>"
                },
                "requirements_ru": null
            }
        ],
        "parent_platforms": [
            {
                "platform": {
                    "id": 1,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 3,
                    "name": "Xbox",
                    "slug": "xbox"
                }
            }
        ],
        "genres": [
            {
                "id": 1,
                "name": "Racing",
                "slug": "racing",
                "games_count": 21978,
                "image_background": "https://media.rawg.io/media/screenshots/69b/69bb243ea9896ddfc2e051b58e81624d.jpg"
            },
            {
                "id": 59,
                "name": "Massively Multiplayer",
                "slug": "massively-multiplayer",
                "games_count": 2878,
                "image_background": "https://media.rawg.io/media/screenshots/d68/d684c5ec81b8ea46bfd4b5c3bae4007f.jpg"
            }
        ],
        "stores": [
            {
                "id": 549203,
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam",
                    "domain": "store.steampowered.com",
                    "games_count": 63885,
                    "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                }
            },
            {
                "id": 48952,
                "store": {
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store",
                    "domain": "microsoft.com",
                    "games_count": 4720,
                    "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
                }
            }
        ],
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 167379,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            },
            {
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "language": "eng",
                "games_count": 26120,
                "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 31308,
                "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 22367,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            },
            {
                "id": 40849,
                "name": "Steam Cloud",
                "slug": "steam-cloud",
                "language": "eng",
                "games_count": 11884,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12131,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3204,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 8423,
                "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
            },
            {
                "id": 36,
                "name": "Open World",
                "slug": "open-world",
                "language": "eng",
                "games_count": 5161,
                "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
            },
            {
                "id": 8,
                "name": "First-Person",
                "slug": "first-person",
                "language": "eng",
                "games_count": 21838,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 9,
                "name": "Online Co-Op",
                "slug": "online-co-op",
                "language": "eng",
                "games_count": 3542,
                "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
            },
            {
                "id": 37,
                "name": "Sandbox",
                "slug": "sandbox",
                "language": "eng",
                "games_count": 4928,
                "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
            },
            {
                "id": 6,
                "name": "Exploration",
                "slug": "exploration",
                "language": "eng",
                "games_count": 15515,
                "image_background": "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg"
            },
            {
                "id": 40832,
                "name": "Cross-Platform Multiplayer",
                "slug": "cross-platform-multiplayer",
                "language": "eng",
                "games_count": 1951,
                "image_background": "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg"
            },
            {
                "id": 37796,
                "name": "exclusive",
                "slug": "exclusive",
                "language": "eng",
                "games_count": 4513,
                "image_background": "https://media.rawg.io/media/games/009/009e4e84975d6a60173ec1199db25aa3.jpg"
            },
            {
                "id": 157,
                "name": "PvP",
                "slug": "pvp",
                "language": "eng",
                "games_count": 5609,
                "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
            },
            {
                "id": 107,
                "name": "Family Friendly",
                "slug": "family-friendly",
                "language": "eng",
                "games_count": 3545,
                "image_background": "https://media.rawg.io/media/games/6c8/6c8cb4780ce30b76b944cf656e8fff49.jpg"
            },
            {
                "id": 110,
                "name": "Cinematic",
                "slug": "cinematic",
                "language": "eng",
                "games_count": 935,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 77,
                "name": "Realistic",
                "slug": "realistic",
                "language": "eng",
                "games_count": 2583,
                "image_background": "https://media.rawg.io/media/screenshots/8be/8be6b02800b2e657e1d17fddfd285a25.jpg"
            },
            {
                "id": 33,
                "name": "VR",
                "slug": "vr",
                "language": "eng",
                "games_count": 10458,
                "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
            },
            {
                "id": 478,
                "name": "3rd-Person Perspective",
                "slug": "3rd-person-perspective",
                "language": "eng",
                "games_count": 86,
                "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
            },
            {
                "id": 130,
                "name": "Driving",
                "slug": "driving",
                "language": "eng",
                "games_count": 4150,
                "image_background": "https://media.rawg.io/media/games/1f5/1f5ddf7199f2778ff83663b93b5cb330.jpg"
            },
            {
                "id": 40937,
                "name": "Steam Trading Cards",
                "slug": "steam-trading-cards-2",
                "language": "eng",
                "games_count": 293,
                "image_background": "https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg"
            },
            {
                "id": 45878,
                "name": "Online PvP",
                "slug": "online-pvp",
                "language": "eng",
                "games_count": 2211,
                "image_background": "https://media.rawg.io/media/games/228/228e21229213695c8f6697a6b3387a2b.jpg"
            },
            {
                "id": 2326,
                "name": "explore",
                "slug": "explore",
                "language": "eng",
                "games_count": 3026,
                "image_background": "https://media.rawg.io/media/games/1c7/1c761e6bb9f9d47e48cec4484c7186bb.jpg"
            },
            {
                "id": 132,
                "name": "Offroad",
                "slug": "offroad",
                "language": "eng",
                "games_count": 850,
                "image_background": "https://media.rawg.io/media/screenshots/47d/47dabe0393d233fc70d3ad4610484b0f.jpg"
            },
            {
                "id": 49951,
                "name": "Automobile Sim",
                "slug": "automobile-sim",
                "language": "eng",
                "games_count": 306,
                "image_background": "https://media.rawg.io/media/games/19a/19a512a8c1293c22894b7364e1405ec1.jpg"
            },
            {
                "id": 51020,
                "name": "street racing",
                "slug": "street-racing-2",
                "language": "eng",
                "games_count": 11,
                "image_background": "https://media.rawg.io/media/screenshots/234/23481af4d4cf137992cf0c88defa3d91.jpg"
            },
            {
                "id": 48354,
                "name": "w10 exclusive",
                "slug": "w10-exclusive",
                "language": "eng",
                "games_count": 9,
                "image_background": "https://media.rawg.io/media/games/079/079175933a50b2bf202edd6aa17be19c.jpg"
            },
            {
                "id": 980,
                "name": "winter",
                "slug": "winter",
                "language": "eng",
                "games_count": 1366,
                "image_background": "https://media.rawg.io/media/screenshots/e8c/e8c34e51e5f78145586305c4f5310b81.jpg"
            },
            {
                "id": 1324,
                "name": "autumn",
                "slug": "autumn",
                "language": "eng",
                "games_count": 90,
                "image_background": "https://media.rawg.io/media/screenshots/ee5/ee503cd1f798ed06882102414dc4b4fb.jpg"
            },
            {
                "id": 2161,
                "name": "extreme",
                "slug": "extreme",
                "language": "eng",
                "games_count": 42,
                "image_background": "https://media.rawg.io/media/screenshots/4ef/4efa62e158fa84f20dc07cc2d7b096cd.jpg"
            }
        ],
        "esrb_rating": {
            "id": 1,
            "name": "Everyone",
            "slug": "everyone"
        },
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg"
            },
            {
                "id": 778896,
                "image": "https://media.rawg.io/media/screenshots/722/7226b83de614b7c5171b7c2694d53fce.jpg"
            },
            {
                "id": 778897,
                "image": "https://media.rawg.io/media/screenshots/f2b/f2b5d9a9306ff4ada2993f382834ed9c.jpg"
            },
            {
                "id": 778898,
                "image": "https://media.rawg.io/media/screenshots/bb0/bb0eb559688110e2d6ff7209c33a4e70.jpg"
            },
            {
                "id": 778899,
                "image": "https://media.rawg.io/media/screenshots/4a0/4a061c6752a938c1b50ec1409c0fc303.jpg"
            },
            {
                "id": 778900,
                "image": "https://media.rawg.io/media/screenshots/816/816c0aab06078d503f0121b3f7243d36.jpg"
            },
            {
                "id": 1652204,
                "image": "https://media.rawg.io/media/screenshots/698/698b7e6262e8ae019da03e4ec3d11537.jpg"
            }
        ]
    }
    return(
        <section className={`container`}>
            <h1 className="title">{name}</h1>
            <div className={style.gameList}>
                {/* {content.map(game =>{
                    return( */}
                       <GameCard content={game} /> 
                    {/* )
                })} */}
            </div>
        </section>
    )
}