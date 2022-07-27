import style from './home.module.css';
import Components from '../components'

export default function Home() {
  const {NestedLayout, MainCarousel,GameList} = Components();
  const MainCarouselContent = [
    {
        "id": 3498,
        "slug": "grand-theft-auto-v",
        "name": "Grand Theft Auto V",
        "released": "2013-09-17",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "rating": 4.48,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 3470,
                "percent": 59.28
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1907,
                "percent": 32.58
            },
            {
                "id": 3,
                "title": "meh",
                "count": 372,
                "percent": 6.35
            },
            {
                "id": 1,
                "title": "skip",
                "count": 105,
                "percent": 1.79
            }
        ],
        "ratings_count": 5780,
        "reviews_text_count": 42,
        "added": 17703,
        "added_by_status": {
            "yet": 444,
            "owned": 10380,
            "beaten": 4827,
            "toplay": 519,
            "dropped": 889,
            "playing": 644
        },
        "metacritic": 91,
        "playtime": 72,
        "suggestions_count": 409,
        "updated": "2022-07-14T16:42:42",
        "user_game": null,
        "reviews_count": 5854,
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
                    "games_count": 460709,
                    "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": {
                    "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
                    "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
                },
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
                    "games_count": 561,
                    "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 6424,
                    "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 16,
                    "name": "PlayStation 3",
                    "slug": "playstation3",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 3610,
                    "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 14,
                    "name": "Xbox 360",
                    "slug": "xbox360",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 2770,
                    "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                },
                "released_at": "2013-09-17",
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
                    "games_count": 5337,
                    "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                },
                "released_at": "2013-09-17",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 187,
                    "name": "PlayStation 5",
                    "slug": "playstation5",
                    "image": null,
                    "year_end": null,
                    "year_start": 2020,
                    "games_count": 627,
                    "image_background": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg"
                },
                "released_at": "2013-09-17",
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
                    "id": 2,
                    "name": "PlayStation",
                    "slug": "playstation"
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
                "id": 4,
                "name": "Action",
                "slug": "action",
                "games_count": 155362,
                "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
            },
            {
                "id": 3,
                "name": "Adventure",
                "slug": "adventure",
                "games_count": 117922,
                "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
            }
        ],
        "stores": [
            {
                "id": 290375,
                "store": {
                    "id": 3,
                    "name": "PlayStation Store",
                    "slug": "playstation-store",
                    "domain": "store.playstation.com",
                    "games_count": 7792,
                    "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                }
            },
            {
                "id": 438095,
                "store": {
                    "id": 11,
                    "name": "Epic Games",
                    "slug": "epic-games",
                    "domain": "epicgames.com",
                    "games_count": 1032,
                    "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
                }
            },
            {
                "id": 290376,
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam",
                    "domain": "store.steampowered.com",
                    "games_count": 64932,
                    "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                }
            },
            {
                "id": 290377,
                "store": {
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360",
                    "domain": "marketplace.xbox.com",
                    "games_count": 1915,
                    "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                }
            },
            {
                "id": 290378,
                "store": {
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store",
                    "domain": "microsoft.com",
                    "games_count": 4720,
                    "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
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
                "games_count": 172174,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "language": "eng",
                "games_count": 26500,
                "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 31817,
                "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23160,
                "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12330,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3206,
                "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "language": "eng",
                "games_count": 14843,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 8582,
                "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
            },
            {
                "id": 36,
                "name": "Open World",
                "slug": "open-world",
                "language": "eng",
                "games_count": 5286,
                "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            },
            {
                "id": 411,
                "name": "cooperative",
                "slug": "cooperative",
                "language": "eng",
                "games_count": 3483,
                "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
            },
            {
                "id": 8,
                "name": "First-Person",
                "slug": "first-person",
                "language": "eng",
                "games_count": 22688,
                "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            },
            {
                "id": 149,
                "name": "Third Person",
                "slug": "third-person",
                "language": "eng",
                "games_count": 7425,
                "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
            },
            {
                "id": 4,
                "name": "Funny",
                "slug": "funny",
                "language": "eng",
                "games_count": 19354,
                "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
            },
            {
                "id": 37,
                "name": "Sandbox",
                "slug": "sandbox",
                "language": "eng",
                "games_count": 5039,
                "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
            },
            {
                "id": 123,
                "name": "Comedy",
                "slug": "comedy",
                "language": "eng",
                "games_count": 9218,
                "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
            },
            {
                "id": 150,
                "name": "Third-Person Shooter",
                "slug": "third-person-shooter",
                "language": "eng",
                "games_count": 2411,
                "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
            },
            {
                "id": 62,
                "name": "Moddable",
                "slug": "moddable",
                "language": "eng",
                "games_count": 701,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 144,
                "name": "Crime",
                "slug": "crime",
                "language": "eng",
                "games_count": 2274,
                "image_background": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg"
            },
            {
                "id": 62349,
                "name": "vr mod",
                "slug": "vr-mod",
                "language": "eng",
                "games_count": 17,
                "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature"
        },
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
            },
            {
                "id": 1827221,
                "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
            },
            {
                "id": 1827222,
                "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
            },
            {
                "id": 1827223,
                "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
            },
            {
                "id": 1827225,
                "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
            },
            {
                "id": 1827226,
                "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
            },
            {
                "id": 1827227,
                "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
            }
        ]
    },
    {
        "id": 3328,
        "slug": "the-witcher-3-wild-hunt",
        "name": "The Witcher 3: Wild Hunt",
        "released": "2015-05-18",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "rating": 4.67,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 4263,
                "percent": 78.02
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 849,
                "percent": 15.54
            },
            {
                "id": 3,
                "title": "meh",
                "count": 220,
                "percent": 4.03
            },
            {
                "id": 1,
                "title": "skip",
                "count": 132,
                "percent": 2.42
            }
        ],
        "ratings_count": 5386,
        "reviews_text_count": 56,
        "added": 16481,
        "added_by_status": {
            "yet": 926,
            "owned": 9553,
            "beaten": 3865,
            "toplay": 656,
            "dropped": 716,
            "playing": 765
        },
        "metacritic": 92,
        "playtime": 46,
        "suggestions_count": 670,
        "updated": "2022-07-15T19:37:07",
        "user_game": null,
        "reviews_count": 5464,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "platforms": [
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 4879,
                    "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                },
                "released_at": "2015-05-18",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 187,
                    "name": "PlayStation 5",
                    "slug": "playstation5",
                    "image": null,
                    "year_end": null,
                    "year_start": 2020,
                    "games_count": 627,
                    "image_background": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg"
                },
                "released_at": "2015-05-18",
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
                    "games_count": 561,
                    "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
                },
                "released_at": "2015-05-18",
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
                    "games_count": 5337,
                    "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                },
                "released_at": "2015-05-18",
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
                    "games_count": 460709,
                    "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
                },
                "released_at": "2015-05-18",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 6424,
                    "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                },
                "released_at": "2015-05-18",
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
                    "id": 2,
                    "name": "PlayStation",
                    "slug": "playstation"
                }
            },
            {
                "platform": {
                    "id": 3,
                    "name": "Xbox",
                    "slug": "xbox"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo",
                    "slug": "nintendo"
                }
            }
        ],
        "genres": [
            {
                "id": 4,
                "name": "Action",
                "slug": "action",
                "games_count": 155362,
                "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
            },
            {
                "id": 3,
                "name": "Adventure",
                "slug": "adventure",
                "games_count": 117922,
                "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
            },
            {
                "id": 5,
                "name": "RPG",
                "slug": "role-playing-games-rpg",
                "games_count": 47464,
                "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
            }
        ],
        "stores": [
            {
                "id": 354780,
                "store": {
                    "id": 5,
                    "name": "GOG",
                    "slug": "gog",
                    "domain": "gog.com",
                    "games_count": 4279,
                    "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
                }
            },
            {
                "id": 3565,
                "store": {
                    "id": 3,
                    "name": "PlayStation Store",
                    "slug": "playstation-store",
                    "domain": "store.playstation.com",
                    "games_count": 7792,
                    "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                }
            },
            {
                "id": 305376,
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam",
                    "domain": "store.steampowered.com",
                    "games_count": 64932,
                    "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                }
            },
            {
                "id": 312313,
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
                "id": 676022,
                "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo",
                    "domain": "nintendo.com",
                    "games_count": 8834,
                    "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
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
                "games_count": 172174,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23160,
                "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12330,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3206,
                "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "language": "eng",
                "games_count": 14843,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 118,
                "name": "Story Rich",
                "slug": "story-rich",
                "language": "eng",
                "games_count": 15204,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 36,
                "name": "Open World",
                "slug": "open-world",
                "language": "eng",
                "games_count": 5286,
                "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            },
            {
                "id": 149,
                "name": "Third Person",
                "slug": "third-person",
                "language": "eng",
                "games_count": 7425,
                "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
            },
            {
                "id": 64,
                "name": "Fantasy",
                "slug": "fantasy",
                "language": "eng",
                "games_count": 20330,
                "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            },
            {
                "id": 37,
                "name": "Sandbox",
                "slug": "sandbox",
                "language": "eng",
                "games_count": 5039,
                "image_background": "https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg"
            },
            {
                "id": 97,
                "name": "Action RPG",
                "slug": "action-rpg",
                "language": "eng",
                "games_count": 4889,
                "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
            },
            {
                "id": 41,
                "name": "Dark",
                "slug": "dark",
                "language": "eng",
                "games_count": 11313,
                "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
            },
            {
                "id": 44,
                "name": "Nudity",
                "slug": "nudity",
                "language": "eng",
                "games_count": 3853,
                "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
            },
            {
                "id": 336,
                "name": "controller support",
                "slug": "controller-support",
                "language": "eng",
                "games_count": 293,
                "image_background": "https://media.rawg.io/media/games/37a/37a9536e92cf8fe3b60045aa75dbd41f.jpg"
            },
            {
                "id": 192,
                "name": "Mature",
                "slug": "mature",
                "language": "eng",
                "games_count": 1505,
                "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
            },
            {
                "id": 145,
                "name": "Choices Matter",
                "slug": "choices-matter",
                "language": "eng",
                "games_count": 2372,
                "image_background": "https://media.rawg.io/media/games/264/2642b17a7885f7abc4fd018e98943242.jpg"
            },
            {
                "id": 40,
                "name": "Dark Fantasy",
                "slug": "dark-fantasy",
                "language": "eng",
                "games_count": 2552,
                "image_background": "https://media.rawg.io/media/games/cfe/cfe5960b5caca432f3575fc7d8ff736b.jpg"
            },
            {
                "id": 66,
                "name": "Medieval",
                "slug": "medieval",
                "language": "eng",
                "games_count": 4319,
                "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            },
            {
                "id": 82,
                "name": "Magic",
                "slug": "magic",
                "language": "eng",
                "games_count": 6859,
                "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
            },
            {
                "id": 218,
                "name": "Multiple Endings",
                "slug": "multiple-endings",
                "language": "eng",
                "games_count": 5504,
                "image_background": "https://media.rawg.io/media/games/8b9/8b9e77be7f0f7941b11ae4b21ca2db43.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature"
        },
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            },
            {
                "id": 30336,
                "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg"
            },
            {
                "id": 30337,
                "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg"
            },
            {
                "id": 30338,
                "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg"
            },
            {
                "id": 30339,
                "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg"
            },
            {
                "id": 30340,
                "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg"
            },
            {
                "id": 30342,
                "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
            }
        ]
    },
    {
        "id": 4200,
        "slug": "portal-2",
        "name": "Portal 2",
        "released": "2011-04-18",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "rating": 4.61,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 3381,
                "percent": 70.28
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1197,
                "percent": 24.88
            },
            {
                "id": 3,
                "title": "meh",
                "count": 132,
                "percent": 2.74
            },
            {
                "id": 1,
                "title": "skip",
                "count": 101,
                "percent": 2.1
            }
        ],
        "ratings_count": 4770,
        "reviews_text_count": 28,
        "added": 15496,
        "added_by_status": {
            "yet": 517,
            "owned": 9564,
            "beaten": 4526,
            "toplay": 303,
            "dropped": 459,
            "playing": 127
        },
        "metacritic": 95,
        "playtime": 11,
        "suggestions_count": 550,
        "updated": "2022-07-15T16:17:12",
        "user_game": null,
        "reviews_count": 4811,
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
                    "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                },
                "released_at": "2011-04-19",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 6,
                    "name": "Linux",
                    "slug": "linux",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 68948,
                    "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                },
                "released_at": "2011-04-19",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 5,
                    "name": "macOS",
                    "slug": "macos",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 94778,
                    "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
                },
                "released_at": null,
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 16,
                    "name": "PlayStation 3",
                    "slug": "playstation3",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 3610,
                    "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                },
                "released_at": "2011-04-19",
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
                    "games_count": 460709,
                    "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
                },
                "released_at": null,
                "requirements_en": null,
                "requirements_ru": {
                    "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
                    "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
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
                    "games_count": 5337,
                    "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                },
                "released_at": "2011-04-18",
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
                    "id": 2,
                    "name": "PlayStation",
                    "slug": "playstation"
                }
            },
            {
                "platform": {
                    "id": 3,
                    "name": "Xbox",
                    "slug": "xbox"
                }
            },
            {
                "platform": {
                    "id": 5,
                    "name": "Apple Macintosh",
                    "slug": "mac"
                }
            },
            {
                "platform": {
                    "id": 6,
                    "name": "Linux",
                    "slug": "linux"
                }
            }
        ],
        "genres": [
            {
                "id": 2,
                "name": "Shooter",
                "slug": "shooter",
                "games_count": 53883,
                "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
            },
            {
                "id": 7,
                "name": "Puzzle",
                "slug": "puzzle",
                "games_count": 87502,
                "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
            }
        ],
        "stores": [
            {
                "id": 465889,
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
                "id": 13134,
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam",
                    "domain": "store.steampowered.com",
                    "games_count": 64932,
                    "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                }
            },
            {
                "id": 4526,
                "store": {
                    "id": 3,
                    "name": "PlayStation Store",
                    "slug": "playstation-store",
                    "domain": "store.playstation.com",
                    "games_count": 7792,
                    "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                }
            },
            {
                "id": 33916,
                "store": {
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360",
                    "domain": "marketplace.xbox.com",
                    "games_count": 1915,
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
                "games_count": 172174,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "language": "eng",
                "games_count": 26500,
                "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 31817,
                "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23160,
                "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
            },
            {
                "id": 7808,
                "name": "steam-trading-cards",
                "slug": "steam-trading-cards",
                "language": "eng",
                "games_count": 7582,
                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12330,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 40849,
                "name": "Steam Cloud",
                "slug": "steam-cloud",
                "language": "eng",
                "games_count": 12057,
                "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
            },
            {
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 8582,
                "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
            },
            {
                "id": 118,
                "name": "Story Rich",
                "slug": "story-rich",
                "language": "eng",
                "games_count": 15204,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 411,
                "name": "cooperative",
                "slug": "cooperative",
                "language": "eng",
                "games_count": 3483,
                "image_background": "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg"
            },
            {
                "id": 8,
                "name": "First-Person",
                "slug": "first-person",
                "language": "eng",
                "games_count": 22688,
                "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            },
            {
                "id": 32,
                "name": "Sci-fi",
                "slug": "sci-fi",
                "language": "eng",
                "games_count": 14811,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
            },
            {
                "id": 30,
                "name": "FPS",
                "slug": "fps",
                "language": "eng",
                "games_count": 10801,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 9,
                "name": "Online Co-Op",
                "slug": "online-co-op",
                "language": "eng",
                "games_count": 3616,
                "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
            },
            {
                "id": 4,
                "name": "Funny",
                "slug": "funny",
                "language": "eng",
                "games_count": 19354,
                "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
            },
            {
                "id": 189,
                "name": "Female Protagonist",
                "slug": "female-protagonist",
                "language": "eng",
                "games_count": 8643,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
            },
            {
                "id": 123,
                "name": "Comedy",
                "slug": "comedy",
                "language": "eng",
                "games_count": 9218,
                "image_background": "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg"
            },
            {
                "id": 75,
                "name": "Local Co-Op",
                "slug": "local-co-op",
                "language": "eng",
                "games_count": 4554,
                "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
            },
            {
                "id": 11669,
                "name": "stats",
                "slug": "stats",
                "language": "eng",
                "games_count": 4154,
                "image_background": "https://media.rawg.io/media/games/a92/a92272ea5cfc35b8ad6317fbd81ce0f6.jpg"
            },
            {
                "id": 40852,
                "name": "Steam Workshop",
                "slug": "steam-workshop",
                "language": "eng",
                "games_count": 1208,
                "image_background": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg"
            },
            {
                "id": 25,
                "name": "Space",
                "slug": "space",
                "language": "eng",
                "games_count": 37538,
                "image_background": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg"
            },
            {
                "id": 40838,
                "name": "Includes level editor",
                "slug": "includes-level-editor",
                "language": "eng",
                "games_count": 1514,
                "image_background": "https://media.rawg.io/media/games/2a2/2a2f9a0035544500e59a171c7038ec3a.jpg"
            },
            {
                "id": 40833,
                "name": "Captions available",
                "slug": "captions-available",
                "language": "eng",
                "games_count": 1169,
                "image_background": "https://media.rawg.io/media/games/a77/a7773acbce8720869fcb61d7a1e5c88f.jpg"
            },
            {
                "id": 40834,
                "name": "Commentary available",
                "slug": "commentary-available",
                "language": "eng",
                "games_count": 244,
                "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
            },
            {
                "id": 87,
                "name": "Science",
                "slug": "science",
                "language": "eng",
                "games_count": 1346,
                "image_background": "https://media.rawg.io/media/screenshots/0cf/0cfe4ec4dcffb8fcac999d7176c69176.jpg"
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
                "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 99018,
                "image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
            },
            {
                "id": 99019,
                "image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
            },
            {
                "id": 99020,
                "image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
            },
            {
                "id": 99021,
                "image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
            },
            {
                "id": 99022,
                "image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
            },
            {
                "id": 99023,
                "image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
            }
        ]
    },
    {
        "id": 5286,
        "slug": "tomb-raider",
        "name": "Tomb Raider (2013)",
        "released": "2013-03-05",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "rating": 4.06,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 2036,
                "percent": 60.25
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 862,
                "percent": 25.51
            },
            {
                "id": 3,
                "title": "meh",
                "count": 384,
                "percent": 11.36
            },
            {
                "id": 1,
                "title": "skip",
                "count": 97,
                "percent": 2.87
            }
        ],
        "ratings_count": 3357,
        "reviews_text_count": 10,
        "added": 13856,
        "added_by_status": {
            "yet": 552,
            "owned": 9054,
            "beaten": 3523,
            "toplay": 207,
            "dropped": 422,
            "playing": 98
        },
        "metacritic": 86,
        "playtime": 11,
        "suggestions_count": 627,
        "updated": "2022-07-15T16:17:02",
        "user_game": null,
        "reviews_count": 3379,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "platforms": [
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 6424,
                    "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                },
                "released_at": "2013-03-05",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 5,
                    "name": "macOS",
                    "slug": "macos",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 94778,
                    "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
                },
                "released_at": "2013-03-05",
                "requirements_en": {
                    "minimum": "Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB"
                },
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
                    "games_count": 460709,
                    "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
                },
                "released_at": "2013-03-05",
                "requirements_en": {
                    "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>"
                },
                "requirements_ru": {
                    "minimum": "i486-100, 8 Мб",
                    "recommended": "Pentium 166, 16 Мб"
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
                    "games_count": 5337,
                    "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                },
                "released_at": "2013-03-05",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 14,
                    "name": "Xbox 360",
                    "slug": "xbox360",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 2770,
                    "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
                },
                "released_at": "2013-03-05",
                "requirements_en": null,
                "requirements_ru": null
            },
            {
                "platform": {
                    "id": 16,
                    "name": "PlayStation 3",
                    "slug": "playstation3",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 3610,
                    "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
                },
                "released_at": "2013-03-05",
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
                    "id": 2,
                    "name": "PlayStation",
                    "slug": "playstation"
                }
            },
            {
                "platform": {
                    "id": 3,
                    "name": "Xbox",
                    "slug": "xbox"
                }
            },
            {
                "platform": {
                    "id": 5,
                    "name": "Apple Macintosh",
                    "slug": "mac"
                }
            }
        ],
        "genres": [
            {
                "id": 4,
                "name": "Action",
                "slug": "action",
                "games_count": 155362,
                "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
            },
            {
                "id": 3,
                "name": "Adventure",
                "slug": "adventure",
                "games_count": 117922,
                "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
            }
        ],
        "stores": [
            {
                "id": 33824,
                "store": {
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360",
                    "domain": "marketplace.xbox.com",
                    "games_count": 1915,
                    "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                }
            },
            {
                "id": 13151,
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam",
                    "domain": "store.steampowered.com",
                    "games_count": 64932,
                    "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                }
            },
            {
                "id": 5640,
                "store": {
                    "id": 3,
                    "name": "PlayStation Store",
                    "slug": "playstation-store",
                    "domain": "store.playstation.com",
                    "games_count": 7792,
                    "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                }
            },
            {
                "id": 218233,
                "store": {
                    "id": 8,
                    "name": "Google Play",
                    "slug": "google-play",
                    "domain": "play.google.com",
                    "games_count": 16836,
                    "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
                }
            },
            {
                "id": 79036,
                "store": {
                    "id": 4,
                    "name": "App Store",
                    "slug": "apple-appstore",
                    "domain": "apps.apple.com",
                    "games_count": 73001,
                    "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                }
            },
            {
                "id": 713685,
                "store": {
                    "id": 11,
                    "name": "Epic Games",
                    "slug": "epic-games",
                    "domain": "epicgames.com",
                    "games_count": 1032,
                    "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
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
                "games_count": 172174,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 31817,
                "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23160,
                "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12330,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "language": "eng",
                "games_count": 14843,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 149,
                "name": "Third Person",
                "slug": "third-person",
                "language": "eng",
                "games_count": 7425,
                "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
            },
            {
                "id": 193,
                "name": "Classic",
                "slug": "classic",
                "language": "eng",
                "games_count": 1692,
                "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
            },
            {
                "id": 189,
                "name": "Female Protagonist",
                "slug": "female-protagonist",
                "language": "eng",
                "games_count": 8643,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
            },
            {
                "id": 6,
                "name": "Exploration",
                "slug": "exploration",
                "language": "eng",
                "games_count": 16024,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            },
            {
                "id": 15,
                "name": "Stealth",
                "slug": "stealth",
                "language": "eng",
                "games_count": 5032,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 150,
                "name": "Third-Person Shooter",
                "slug": "third-person-shooter",
                "language": "eng",
                "games_count": 2411,
                "image_background": "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
            },
            {
                "id": 74,
                "name": "Retro",
                "slug": "retro",
                "language": "eng",
                "games_count": 32792,
                "image_background": "https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg"
            },
            {
                "id": 69,
                "name": "Action-Adventure",
                "slug": "action-adventure",
                "language": "eng",
                "games_count": 11417,
                "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
            },
            {
                "id": 110,
                "name": "Cinematic",
                "slug": "cinematic",
                "language": "eng",
                "games_count": 980,
                "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
            },
            {
                "id": 269,
                "name": "Quick-Time Events",
                "slug": "quick-time-events",
                "language": "eng",
                "games_count": 273,
                "image_background": "https://media.rawg.io/media/games/7a5/7a5f7a3e58593bfda983507c2ddbc891.jpg"
            },
            {
                "id": 126,
                "name": "Dinosaurs",
                "slug": "dinosaurs",
                "language": "eng",
                "games_count": 1479,
                "image_background": "https://media.rawg.io/media/games/17b/17bcf0d95af7f341adbfa5eaab2841a5.jpg"
            },
            {
                "id": 306,
                "name": "Lara Croft",
                "slug": "lara-croft",
                "language": "eng",
                "games_count": 14,
                "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature"
        },
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            },
            {
                "id": 99160,
                "image": "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg"
            },
            {
                "id": 99161,
                "image": "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg"
            },
            {
                "id": 99162,
                "image": "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg"
            },
            {
                "id": 99163,
                "image": "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg"
            },
            {
                "id": 99164,
                "image": "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg"
            },
            {
                "id": 99165,
                "image": "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
            }
        ]
    }
]
    const GameListContent = [
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
    const gameListFilter =[
        {
            "id": 4,
            "name": "PC",
            "slug": "pc",
            "games_count": 461005,
            "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17716
                },
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16492
                },
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15505
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13866
                },
                {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 13431
                },
                {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 13417
                }
            ]
        },
        {
            "id": 187,
            "name": "PlayStation 5",
            "slug": "playstation5",
            "games_count": 627,
            "image_background": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg",
            "image": null,
            "year_start": 2020,
            "year_end": null,
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17716
                },
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16492
                },
                {
                    "id": 32,
                    "slug": "destiny-2",
                    "name": "Destiny 2",
                    "added": 11003
                },
                {
                    "id": 58175,
                    "slug": "god-of-war-2",
                    "name": "God of War",
                    "added": 10840
                },
                {
                    "id": 766,
                    "slug": "warframe",
                    "name": "Warframe",
                    "added": 9919
                },
                {
                    "id": 41494,
                    "slug": "cyberpunk-2077",
                    "name": "Cyberpunk 2077",
                    "added": 9484
                }
            ]
        },
        {
            "id": 1,
            "name": "Xbox One",
            "slug": "xbox-one",
            "games_count": 5337,
            "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17716
                },
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16492
                },
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15505
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13866
                },
                {
                    "id": 4062,
                    "slug": "bioshock-infinite",
                    "name": "BioShock Infinite",
                    "added": 12887
                },
                {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 12788
                }
            ]
        }
    ]
    const gameTagContent= [
        {
            "id": 4,
            "name": "Action",
            "slug": "action",
            "games_count": 155983,
            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17719
                },
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16498
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13872
                },
                {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 13432
                },
                {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 13422
                },
                {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 13238
                }
            ]
        },
        {
            "id": 51,
            "name": "Indie",
            "slug": "indie",
            "games_count": 45935,
            "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
            "games": [
                {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 11486
                },
                {
                    "id": 3272,
                    "slug": "rocket-league",
                    "name": "Rocket League",
                    "added": 10392
                },
                {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 9887
                },
                {
                    "id": 3612,
                    "slug": "hotline-miami",
                    "name": "Hotline Miami",
                    "added": 8696
                },
                {
                    "id": 3790,
                    "slug": "outlast",
                    "name": "Outlast",
                    "added": 8572
                },
                {
                    "id": 9767,
                    "slug": "hollow-knight",
                    "name": "Hollow Knight",
                    "added": 8522
                }
            ]
        },
        {
            "id": 3,
            "name": "Adventure",
            "slug": "adventure",
            "games_count": 118186,
            "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17719
                },
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16498
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13872
                },
                {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 13142
                },
                {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 12792
                },
                {
                    "id": 28,
                    "slug": "red-dead-redemption-2",
                    "name": "Red Dead Redemption 2",
                    "added": 12407
                }
            ]
        },
    ];
  return(
    <NestedLayout>
        <div className='container'>
            <h1 className={style.title}>Explore Your Favourite Games in one Place..</h1>
            <MainCarousel content={MainCarouselContent} />
            <GameList name='For You' content={GameListContent} swipeable />
            <GameList name='Games Of The Year' content={GameListContent} swipeable/>
            <GameList name='For Your Device' content={gameTagContent} filter filterList={gameListFilter} listLinks='Platforms' />
            <GameList name='Popular Genre' content={gameTagContent} filter filterList={gameListFilter} listLinks='Genres' />
            <GameList name='Find By Tags'  filter filterList={gameListFilter} listLinks='Tags' />
            <GameList name='All Games' content={GameListContent} filter filterList={gameListFilter} listLinks='Games' />
        </div>
    </NestedLayout>
  )
}