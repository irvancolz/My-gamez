import React from 'react';
import Components from '../../../components';
import style from './game.module.css';

export default function index() {
    const gameContent = 
    [
        {
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
            "added": 4779,
            "added_by_status": {
                "yet": 142,
                "owned": 3179,
                "beaten": 416,
                "toplay": 273,
                "dropped": 446,
                "playing": 323
            },
            "metacritic": 90,
            "playtime": 13,
            "suggestions_count": 437,
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
        },
        {
            "id": 881,
            "slug": "forza-horizon-3",
            "name": "Forza Horizon 3",
            "released": "2016-09-27",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/30a/30afe3a3cb06849dc032ef3b9295f180.jpg",
            "rating": 4.35,
            "rating_top": 5,
            "ratings": [
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 280,
                    "percent": 51.19
                },
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 220,
                    "percent": 40.22
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 26,
                    "percent": 4.75
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 21,
                    "percent": 3.84
                }
            ],
            "ratings_count": 544,
            "reviews_text_count": 1,
            "added": 1798,
            "added_by_status": {
                "yet": 53,
                "owned": 1223,
                "beaten": 225,
                "toplay": 67,
                "dropped": 171,
                "playing": 59
            },
            "metacritic": 88,
            "playtime": 0,
            "suggestions_count": 453,
            "updated": "2021-11-04T21:15:36",
            "user_game": null,
            "reviews_count": 547,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "platforms": [
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
                    "released_at": "2016-09-27",
                    "requirements_en": null,
                    "requirements_ru": null
                },
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
                    "released_at": "2016-09-27",
                    "requirements_en": null,
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
                }
            ],
            "stores": [
                {
                    "id": 897,
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
                    "id": 7,
                    "name": "Multiplayer",
                    "slug": "multiplayer",
                    "language": "eng",
                    "games_count": 31308,
                    "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
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
                    "id": 132,
                    "name": "Offroad",
                    "slug": "offroad",
                    "language": "eng",
                    "games_count": 850,
                    "image_background": "https://media.rawg.io/media/screenshots/47d/47dabe0393d233fc70d3ad4610484b0f.jpg"
                },
                {
                    "id": 51020,
                    "name": "street racing",
                    "slug": "street-racing-2",
                    "language": "eng",
                    "games_count": 11,
                    "image_background": "https://media.rawg.io/media/screenshots/234/23481af4d4cf137992cf0c88defa3d91.jpg"
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
                    "image": "https://media.rawg.io/media/games/30a/30afe3a3cb06849dc032ef3b9295f180.jpg"
                },
                {
                    "id": 7772,
                    "image": "https://media.rawg.io/media/screenshots/ea9/ea9ac44e300c63e69fd1626b9ec27cef.jpg"
                },
                {
                    "id": 7779,
                    "image": "https://media.rawg.io/media/screenshots/835/835fce3536c0346e12b312727130894a.jpg"
                },
                {
                    "id": 59676,
                    "image": "https://media.rawg.io/media/screenshots/cf4/cf45410c520670222fe3463ad53879c6.jpg"
                },
                {
                    "id": 59693,
                    "image": "https://media.rawg.io/media/screenshots/29e/29ec01bcae61e6efe16fa571cb5af92e.jpg"
                },
                {
                    "id": 628371,
                    "image": "https://media.rawg.io/media/screenshots/05d/05d0840d079a5632f9ba8262f54ecadb.jpg"
                },
                {
                    "id": 628372,
                    "image": "https://media.rawg.io/media/screenshots/df0/df0d7d2ea3dc7b050e2d2b383b39e8c3.jpg"
                }
            ]
        },
        {
            "id": 28633,
            "slug": "forza-horizon-2",
            "name": "Forza Horizon 2",
            "released": "2014-09-30",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/9a8/9a8be216c8907959a9984eec3a2cc8d1.jpg",
            "rating": 4.21,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 158,
                    "percent": 49.38
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 125,
                    "percent": 39.06
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 26,
                    "percent": 8.12
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 11,
                    "percent": 3.44
                }
            ],
            "ratings_count": 319,
            "reviews_text_count": 0,
            "added": 1394,
            "added_by_status": {
                "yet": 26,
                "owned": 1063,
                "beaten": 165,
                "toplay": 22,
                "dropped": 94,
                "playing": 24
            },
            "metacritic": 86,
            "playtime": 2,
            "suggestions_count": 177,
            "updated": "2020-05-07T13:36:37",
            "user_game": null,
            "reviews_count": 320,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "platforms": [
                {
                    "platform": {
                        "id": 14,
                        "name": "Xbox 360",
                        "slug": "xbox360",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 2770,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    "released_at": "2014-09-30",
                    "requirements_en": null,
                    "requirements_ru": null
                },
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
                    "released_at": "2014-09-30",
                    "requirements_en": null,
                    "requirements_ru": null
                }
            ],
            "parent_platforms": [
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
                }
            ],
            "stores": [
                {
                    "id": 34044,
                    "store": {
                        "id": 7,
                        "name": "Xbox 360 Store",
                        "slug": "xbox360",
                        "domain": "marketplace.xbox.com",
                        "games_count": 1916,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                    }
                },
                {
                    "id": 49503,
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
                    "id": 7,
                    "name": "Multiplayer",
                    "slug": "multiplayer",
                    "language": "eng",
                    "games_count": 31308,
                    "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
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
                    "id": 37796,
                    "name": "exclusive",
                    "slug": "exclusive",
                    "language": "eng",
                    "games_count": 4513,
                    "image_background": "https://media.rawg.io/media/games/009/009e4e84975d6a60173ec1199db25aa3.jpg"
                },
                {
                    "id": 51020,
                    "name": "street racing",
                    "slug": "street-racing-2",
                    "language": "eng",
                    "games_count": 11,
                    "image_background": "https://media.rawg.io/media/screenshots/234/23481af4d4cf137992cf0c88defa3d91.jpg"
                }
            ],
            "esrb_rating": {
                "id": 2,
                "name": "Everyone 10+",
                "slug": "everyone-10-plus"
            },
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/9a8/9a8be216c8907959a9984eec3a2cc8d1.jpg"
                },
                {
                    "id": 806274,
                    "image": "https://media.rawg.io/media/screenshots/c5c/c5cb7742c780ecec82b6752a87c17adc.jpg"
                },
                {
                    "id": 806275,
                    "image": "https://media.rawg.io/media/screenshots/b54/b54e70665ca52013d66481b0795defe0_n9zyXmg.jpg"
                },
                {
                    "id": 806276,
                    "image": "https://media.rawg.io/media/screenshots/258/258098804b3463743e0fd7e88c84ab2e.jpg"
                },
                {
                    "id": 806277,
                    "image": "https://media.rawg.io/media/screenshots/9e5/9e59319e9ef9ebda6e3c348435229f32.jpg"
                }
            ]
        },
        {
            "id": 28637,
            "slug": "forza-horizon",
            "name": "Forza Horizon",
            "released": "2012-10-23",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/994/99496806493c2f39b9f191923de2a63b.jpg",
            "rating": 4.34,
            "rating_top": 5,
            "ratings": [
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 161,
                    "percent": 49.85
                },
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 134,
                    "percent": 41.49
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 17,
                    "percent": 5.26
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 11,
                    "percent": 3.41
                }
            ],
            "ratings_count": 322,
            "reviews_text_count": 0,
            "added": 1275,
            "added_by_status": {
                "yet": 30,
                "owned": 959,
                "beaten": 163,
                "toplay": 23,
                "dropped": 85,
                "playing": 15
            },
            "metacritic": 85,
            "playtime": 13,
            "suggestions_count": 405,
            "updated": "2020-05-14T11:04:27",
            "user_game": null,
            "reviews_count": 323,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "platforms": [
                {
                    "platform": {
                        "id": 14,
                        "name": "Xbox 360",
                        "slug": "xbox360",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 2770,
                        "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                    },
                    "released_at": "2012-10-23",
                    "requirements_en": null,
                    "requirements_ru": null
                }
            ],
            "parent_platforms": [
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
                }
            ],
            "stores": [
                {
                    "id": 34053,
                    "store": {
                        "id": 7,
                        "name": "Xbox 360 Store",
                        "slug": "xbox360",
                        "domain": "marketplace.xbox.com",
                        "games_count": 1916,
                        "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
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
                    "id": 7,
                    "name": "Multiplayer",
                    "slug": "multiplayer",
                    "language": "eng",
                    "games_count": 31308,
                    "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
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
                    "id": 51020,
                    "name": "street racing",
                    "slug": "street-racing-2",
                    "language": "eng",
                    "games_count": 11,
                    "image_background": "https://media.rawg.io/media/screenshots/234/23481af4d4cf137992cf0c88defa3d91.jpg"
                }
            ],
            "esrb_rating": {
                "id": 3,
                "name": "Teen",
                "slug": "teen"
            },
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/994/99496806493c2f39b9f191923de2a63b.jpg"
                },
                {
                    "id": 2021137,
                    "image": "https://media.rawg.io/media/screenshots/4f0/4f08c34cdee8f47944a169f80f34ebcd.jpg"
                },
                {
                    "id": 2021139,
                    "image": "https://media.rawg.io/media/screenshots/a23/a23b55359a952efd51025616e19820df.jpg"
                },
                {
                    "id": 2021140,
                    "image": "https://media.rawg.io/media/screenshots/623/6230ff9a1dfd3f6235687f13e752ba84.jpg"
                },
                {
                    "id": 2021141,
                    "image": "https://media.rawg.io/media/screenshots/a94/a94c08a4411580af9b295609a51a5384.jpg"
                },
                {
                    "id": 279011,
                    "image": "https://media.rawg.io/media/screenshots/efa/efa1af5a9b0fc4c22fc089572e568660.jpg"
                },
                {
                    "id": 279012,
                    "image": "https://media.rawg.io/media/screenshots/ddb/ddb6e708570bb8e9dad0cb11d56d880b.jpg"
                }
            ]
        }
    ]
    const game = {
    "id": 622492,
    "slug": "forza-horizon-5",
    "name": "Forza Horizon 5",
    "name_original": "Forza Horizon 5",
    "description": "<p>Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.<br />\nExplore a world of striking contrast and beauty. Discover living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons and a towering snow-capped volcano.<br />\nImmerse yourself in a deep campaign with hundreds of challenges that reward you for engaging in the activities you love. Meet new characters and choose the outcomes of their Horizon Story missions.<br />\nTake on awe-inspiring weather events like towering dust storms and intense tropical storms as Mexico’s unique, dynamic seasons change the world every week. Keep coming back for new events, challenges, collectibles, and rewards, and new areas to explore.<br />\nTeam up with other players and enter the Horizon Arcade for a continuing series of fun, over-the-top challenges that keep you and your friends in the action and having fun with no menus, loading screens or lobbies.<br />\nCreate your own expressions of fun with the new EventLab gameplay toolset including custom races, challenges, stunts, and new game modes. Customize your cars in more ways than ever before. Use the Gift Drops feature to share your custom creations.</p>",
    "metacritic": 92,
    "metacritic_platforms": [
        {
            "metascore": 92,
            "url": "https://www.metacritic.com/game/xbox-series-x/forza-horizon-5",
            "platform": {
                "platform": 186,
                "name": "Xbox Series S/X",
                "slug": "xbox-series-x"
            }
        },
        {
            "metascore": 91,
            "url": "https://www.metacritic.com/game/pc/forza-horizon-5",
            "platform": {
                "platform": 4,
                "name": "PC",
                "slug": "pc"
            }
        }
    ],
    "released": "2021-11-08",
    "tba": false,
    "updated": "2022-07-26T14:53:40",
    "background_image": "https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg",
    "background_image_additional": "https://media.rawg.io/media/screenshots/156/156227810408c477fb90112a9feefe8e.jpg",
    "website": "https://forza.net/horizon",
    "rating": 4.4,
    "rating_top": 5,
    "ratings": [
        {
            "id": 5,
            "title": "exceptional",
            "count": 213,
            "percent": 53.25
        },
        {
            "id": 4,
            "title": "recommended",
            "count": 149,
            "percent": 37.25
        },
        {
            "id": 3,
            "title": "meh",
            "count": 31,
            "percent": 7.75
        },
        {
            "id": 1,
            "title": "skip",
            "count": 7,
            "percent": 1.75
        }
    ],
    "reactions": {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 1,
        "7": 2,
        "12": 1
    },
    "added": 3270,
    "added_by_status": {
        "yet": 102,
        "owned": 2473,
        "beaten": 125,
        "toplay": 233,
        "dropped": 141,
        "playing": 196
    },
    "playtime": 11,
    "screenshots_count": 12,
    "movies_count": 0,
    "creators_count": 0,
    "achievements_count": 178,
    "parent_achievements_count": 89,
    "reddit_url": "https://www.reddit.com/r/ForzaHorizon/",
    "reddit_name": "Forza Horizon",
    "reddit_description": "A place to share, discuss and celebrate everything about the Forza Horizon series!",
    "reddit_logo": "",
    "reddit_count": 1635,
    "twitch_count": 157,
    "youtube_count": 1000000,
    "reviews_text_count": 11,
    "ratings_count": 389,
    "suggestions_count": 513,
    "alternative_names": [
        "FH 5",
        "FH5"
    ],
    "metacritic_url": "https://www.metacritic.com/game/pc/forza-horizon-5",
    "parents_count": 0,
    "additions_count": 1,
    "game_series_count": 4,
    "user_game": null,
    "reviews_count": 400,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
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
    "platforms": [
        {
            "platform": {
                "id": 4,
                "name": "PC",
                "slug": "pc",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 464329,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            "released_at": "2021-11-08",
            "requirements": {
                "minimum": "Minimum:\nRequires a 64-bit processor and operating system\nOS: Windows 10 version 15063.0 or higher\nProcessor: Intel i5-4460 or AMD Ryzen 3 1200\nMemory: 8 GB RAM\nGraphics: NVidia GTX 970 OR AMD RX 470\nDirectX: Version 12\nNetwork: Broadband Internet connection\nStorage: 110 GB available space",
                "recommended": "Recommended:\nRequires a 64-bit processor and operating system\nOS: Windows 10 version 15063.0 or higher\nProcessor: Intel i5-8400 or AMD Ryzen 5 1500X\nMemory: 16 GB RAM\nGraphics: NVidia GTX 1070 OR AMD RX 590\nDirectX: Version 12\nNetwork: Broadband Internet connection\nStorage: 110 GB available space"
            }
        },
        {
            "platform": {
                "id": 1,
                "name": "Xbox One",
                "slug": "xbox-one",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 5341,
                "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
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
                "games_count": 564,
                "image_background": "https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg"
            },
            "released_at": "2021-11-08",
            "requirements": {}
        }
    ],
    "stores": [
        {
            "id": 617116,
            "url": "",
            "store": {
                "id": 2,
                "name": "Xbox Store",
                "slug": "xbox-store",
                "domain": "microsoft.com",
                "games_count": 4720,
                "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
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
                "games_count": 65199,
                "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
            }
        }
    ],
    "developers": [
        {
            "id": 13141,
            "name": "Playground Games",
            "slug": "playground-games",
            "games_count": 12,
            "image_background": "https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg"
        }
    ],
    "genres": [
        {
            "id": 4,
            "name": "Action",
            "slug": "action",
            "games_count": 156643,
            "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
        },
        {
            "id": 3,
            "name": "Adventure",
            "slug": "adventure",
            "games_count": 118565,
            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
        },
        {
            "id": 15,
            "name": "Sports",
            "slug": "sports",
            "games_count": 19327,
            "image_background": "https://media.rawg.io/media/games/cb4/cb487ab3c54b81cb685388bab42ec848.jpeg"
        },
        {
            "id": 1,
            "name": "Racing",
            "slug": "racing",
            "games_count": 22323,
            "image_background": "https://media.rawg.io/media/games/9e5/9e52a797f049e701d4eee84774a99007.jpg"
        }
    ],
    "tags": [
        {
            "id": 31,
            "name": "Singleplayer",
            "slug": "singleplayer",
            "language": "eng",
            "games_count": 174107,
            "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
        },
        {
            "id": 40847,
            "name": "Steam Achievements",
            "slug": "steam-achievements",
            "language": "eng",
            "games_count": 26597,
            "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
        },
        {
            "id": 7,
            "name": "Multiplayer",
            "slug": "multiplayer",
            "language": "eng",
            "games_count": 31928,
            "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
        },
        {
            "id": 13,
            "name": "Atmospheric",
            "slug": "atmospheric",
            "language": "eng",
            "games_count": 23347,
            "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
        },
        {
            "id": 40836,
            "name": "Full controller support",
            "slug": "full-controller-support",
            "language": "eng",
            "games_count": 12381,
            "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
        },
        {
            "id": 40849,
            "name": "Steam Cloud",
            "slug": "steam-cloud",
            "language": "eng",
            "games_count": 12102,
            "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
        },
        {
            "id": 18,
            "name": "Co-op",
            "slug": "co-op",
            "language": "eng",
            "games_count": 8623,
            "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        {
            "id": 36,
            "name": "Open World",
            "slug": "open-world",
            "language": "eng",
            "games_count": 5312,
            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
        },
        {
            "id": 411,
            "name": "cooperative",
            "slug": "cooperative",
            "language": "eng",
            "games_count": 3501,
            "image_background": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg"
        },
        {
            "id": 8,
            "name": "First-Person",
            "slug": "first-person",
            "language": "eng",
            "games_count": 22880,
            "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
        },
        {
            "id": 149,
            "name": "Third Person",
            "slug": "third-person",
            "language": "eng",
            "games_count": 7495,
            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
        },
        {
            "id": 9,
            "name": "Online Co-Op",
            "slug": "online-co-op",
            "language": "eng",
            "games_count": 3638,
            "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
        },
        {
            "id": 6,
            "name": "Exploration",
            "slug": "exploration",
            "language": "eng",
            "games_count": 16113,
            "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
        },
        {
            "id": 40832,
            "name": "Cross-Platform Multiplayer",
            "slug": "cross-platform-multiplayer",
            "language": "eng",
            "games_count": 1981,
            "image_background": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
        },
        {
            "id": 157,
            "name": "PvP",
            "slug": "pvp",
            "language": "eng",
            "games_count": 5828,
            "image_background": "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg"
        },
        {
            "id": 130,
            "name": "Driving",
            "slug": "driving",
            "language": "eng",
            "games_count": 4230,
            "image_background": "https://media.rawg.io/media/games/662/66261db966238da20c306c4b78ae4603.jpg"
        },
        {
            "id": 40937,
            "name": "Steam Trading Cards",
            "slug": "steam-trading-cards-2",
            "language": "eng",
            "games_count": 305,
            "image_background": "https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg"
        },
        {
            "id": 45878,
            "name": "Online PvP",
            "slug": "online-pvp",
            "language": "eng",
            "games_count": 2326,
            "image_background": "https://media.rawg.io/media/games/8bd/8bda6d876f3e241c6024022299553efd.jpg"
        },
        {
            "id": 577,
            "name": "Beautiful",
            "slug": "beautiful",
            "language": "eng",
            "games_count": 1769,
            "image_background": "https://media.rawg.io/media/games/c24/c24f4434882ae9c2c8d9d38de82cb7a5.jpg"
        },
        {
            "id": 1632,
            "name": "cars",
            "slug": "cars",
            "language": "eng",
            "games_count": 5636,
            "image_background": "https://media.rawg.io/media/games/692/6923e20d9884ae4e4814ea2031078a4f.jpg"
        },
        {
            "id": 2156,
            "name": "drift",
            "slug": "drift",
            "language": "eng",
            "games_count": 1337,
            "image_background": "https://media.rawg.io/media/screenshots/fa0/fa0c39bd5a0617af397159b6c7016e12.jpg"
        },
        {
            "id": 8803,
            "name": "racing-game",
            "slug": "racing-game",
            "language": "eng",
            "games_count": 38,
            "image_background": "https://media.rawg.io/media/screenshots/5ac/5ac3f7cfe6ed54c561dbbbdd7e4ea55c.jpg"
        },
        {
            "id": 9336,
            "name": "mexico",
            "slug": "mexico",
            "language": "eng",
            "games_count": 69,
            "image_background": "https://media.rawg.io/media/screenshots/eed/eedab9da0d0e02b7de8db89465467830.jpg"
        },
        {
            "id": 5270,
            "name": "festival",
            "slug": "festival",
            "language": "eng",
            "games_count": 23,
            "image_background": "https://media.rawg.io/media/screenshots/182/182c6b019445c0b454ace94cca3b9edc.jpg"
        },
        {
            "id": 12669,
            "name": "sprint",
            "slug": "sprint",
            "language": "eng",
            "games_count": 6,
            "image_background": "https://media.rawg.io/media/screenshots/75a/75a2b63be78a0891ec8084d2bffd7b70.jpg"
        },
        {
            "id": 27142,
            "name": "photorealism",
            "slug": "photorealism",
            "language": "eng",
            "games_count": 2,
            "image_background": "https://media.rawg.io/media/screenshots/fb6/fb6bf0655098fbd2f4e6473569f660fb.jpg"
        }
    ],
    "publishers": [
        {
            "id": 34843,
            "name": "Xbox Game Studios",
            "slug": "xbox-game-studios",
            "games_count": 42,
            "image_background": "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg"
        }
    ],
    "esrb_rating": {
        "id": 1,
        "name": "Everyone",
        "slug": "everyone"
    },
    "clip": null,
    "description_raw": "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.\r\nExplore a world of striking contrast and beauty. Discover living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons and a towering snow-capped volcano.\r\nImmerse yourself in a deep campaign with hundreds of challenges that reward you for engaging in the activities you love. Meet new characters and choose the outcomes of their Horizon Story missions.\r\nTake on awe-inspiring weather events like towering dust storms and intense tropical storms as Mexico’s unique, dynamic seasons change the world every week. Keep coming back for new events, challenges, collectibles, and rewards, and new areas to explore.\r\nTeam up with other players and enter the Horizon Arcade for a continuing series of fun, over-the-top challenges that keep you and your friends in the action and having fun with no menus, loading screens or lobbies.\r\nCreate your own expressions of fun with the new EventLab gameplay toolset including custom races, challenges, stunts, and new game modes. Customize your cars in more ways than ever before. Use the Gift Drops feature to share your custom creations."
}

    const {
        Layout,
        MainBanner,
        GameDesc,
        GameTitle,
        Ratings,
        Requirements,
        Achievements,
        GameList,
        Tags,
        BgImageComponent} = Components();

      return (
        <Layout>
            <div className={style.mainContainer}>
                    <MainBanner dataBg={game.background_image} dataBgAdd={game.background_image_additional}/>
                <div className={style.content}>
                        <GameTitle title={game.name} id={game.id} />
                        <GameDesc storesSlug={game.stores} desc={game.description}/>
                    <div className={style.bgwrapper}>
                        <Ratings />
                        <div className={style.wrapper}>
                            <Requirements />
                            <Achievements />
                        </div>
                        <BgImageComponent />
                    </div>
                    <div className={`${style.container}`}>
                        <GameList name='From The Same Series' content={gameContent} swipeable/>
                        <GameList name='From The Same Categories' content={gameContent} swipeable />
                    </div>
                    <Tags />
                </div>
            </div>
        </Layout>
      );
}
