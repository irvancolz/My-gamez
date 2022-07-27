import React from 'react';
import Components from '../../../components'

export default function TagsPages() {
    const {NestedLayout,GenreHeader, GameList} = Components();
    const HeaderContent ={
      "id": 6,
      "name": "Nintendo Store",
      "domain": "nintendo.com",
      "slug": "nintendo",
      "games_count": 8832,
      "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
      "description": "<p>Nintendo is a Japanese developing and publishing company founded in 1889. Nintendo develops their own consoles, and currently supports four of them: Nintendo Switch, Nintendo 3DS/Nintendo 2DS, and Wii U. Games for Nintendo consoles can be purchased on the official online marketplace. Titles are grouped depending on which console supports them, and upcoming games are featured on the main page. Moreover, Nintendo suggests game collections based on their famous franchises - Mario, Castlevania, Pokémon - along with indie exclusives for Nintendo, online multiplayer titles and special offers. Additionally, games are ranged by genres, available DLCs and demos, and users&#39; playstyle.</p>"
  }
  const GameListContent = [
    {
        "slug": "the-witcher-3-wild-hunt",
        "name": "The Witcher 3: Wild Hunt",
        "playtime": 46,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 187,
                    "name": "PlayStation 5",
                    "slug": "playstation5"
                }
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one"
                }
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4"
                }
            },
            {
                "platform": {
                    "id": 186,
                    "name": "Xbox Series S/X",
                    "slug": "xbox-series-x"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch"
                }
            }
        ],
        "stores": [
            {
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam"
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
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store"
                }
            },
            {
                "store": {
                    "id": 5,
                    "name": "GOG",
                    "slug": "gog"
                }
            },
            {
                "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            }
        ],
        "released": "2015-05-18",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "rating": 4.67,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 4280,
                "percent": 78.05
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 851,
                "percent": 15.52
            },
            {
                "id": 3,
                "title": "meh",
                "count": 220,
                "percent": 4.01
            },
            {
                "id": 1,
                "title": "skip",
                "count": 133,
                "percent": 2.43
            }
        ],
        "ratings_count": 5406,
        "reviews_text_count": 56,
        "added": 16543,
        "added_by_status": {
            "yet": 933,
            "owned": 9577,
            "beaten": 3887,
            "toplay": 658,
            "dropped": 720,
            "playing": 768
        },
        "metacritic": 92,
        "suggestions_count": 656,
        "updated": "2022-07-25T18:06:03",
        "id": 3328,
        "score": null,
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 174439,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42396,
                "name": "Для одного игрока",
                "slug": "dlia-odnogo-igroka",
                "language": "rus",
                "games_count": 26247,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42417,
                "name": "Экшен",
                "slug": "ekshen",
                "language": "rus",
                "games_count": 27745,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            {
                "id": 42392,
                "name": "Приключение",
                "slug": "prikliuchenie",
                "language": "rus",
                "games_count": 25733,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23400,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12381,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
            },
            {
                "id": 42400,
                "name": "Атмосфера",
                "slug": "atmosfera",
                "language": "rus",
                "games_count": 6102,
                "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            },
            {
                "id": 42401,
                "name": "Отличный саундтрек",
                "slug": "otlichnyi-saundtrek",
                "language": "rus",
                "games_count": 4430,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3206,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            {
                "id": 42394,
                "name": "Глубокий сюжет",
                "slug": "glubokii-siuzhet",
                "language": "rus",
                "games_count": 6951,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "language": "eng",
                "games_count": 14908,
                "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
            },
            {
                "id": 42412,
                "name": "Ролевая игра",
                "slug": "rolevaia-igra",
                "language": "rus",
                "games_count": 11547,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 118,
                "name": "Story Rich",
                "slug": "story-rich",
                "language": "eng",
                "games_count": 15302,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 42442,
                "name": "Открытый мир",
                "slug": "otkrytyi-mir",
                "language": "rus",
                "games_count": 3605,
                "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
            },
            {
                "id": 36,
                "name": "Open World",
                "slug": "open-world",
                "language": "eng",
                "games_count": 5319,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42435,
                "name": "Шедевр",
                "slug": "shedevr",
                "language": "rus",
                "games_count": 1059,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 149,
                "name": "Third Person",
                "slug": "third-person",
                "language": "eng",
                "games_count": 7500,
                "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
            },
            {
                "id": 42441,
                "name": "От третьего лица",
                "slug": "ot-tretego-litsa",
                "language": "rus",
                "games_count": 3671,
                "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
            },
            {
                "id": 42480,
                "name": "Фэнтези",
                "slug": "fentezi",
                "language": "rus",
                "games_count": 6107,
                "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            },
            {
                "id": 64,
                "name": "Fantasy",
                "slug": "fantasy",
                "language": "eng",
                "games_count": 20564,
                "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
            },
            {
                "id": 37,
                "name": "Sandbox",
                "slug": "sandbox",
                "language": "eng",
                "games_count": 5069,
                "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
            },
            {
                "id": 97,
                "name": "Action RPG",
                "slug": "action-rpg",
                "language": "eng",
                "games_count": 4930,
                "image_background": "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg"
            },
            {
                "id": 42489,
                "name": "Ролевой экшен",
                "slug": "rolevoi-ekshen",
                "language": "rus",
                "games_count": 1962,
                "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
            },
            {
                "id": 42477,
                "name": "Мрачная",
                "slug": "mrachnaia",
                "language": "rus",
                "games_count": 2649,
                "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
            },
            {
                "id": 41,
                "name": "Dark",
                "slug": "dark",
                "language": "eng",
                "games_count": 11431,
                "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
            },
            {
                "id": 42406,
                "name": "Нагота",
                "slug": "nagota",
                "language": "rus",
                "games_count": 3574,
                "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
            },
            {
                "id": 44,
                "name": "Nudity",
                "slug": "nudity",
                "language": "eng",
                "games_count": 3881,
                "image_background": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg"
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
                "id": 42390,
                "name": "Решения с последствиями",
                "slug": "resheniia-s-posledstviiami",
                "language": "rus",
                "games_count": 2681,
                "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
            },
            {
                "id": 42529,
                "name": "Для взрослых",
                "slug": "dlia-vzroslykh",
                "language": "rus",
                "games_count": 1357,
                "image_background": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
            },
            {
                "id": 192,
                "name": "Mature",
                "slug": "mature",
                "language": "eng",
                "games_count": 1526,
                "image_background": "https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg"
            },
            {
                "id": 145,
                "name": "Choices Matter",
                "slug": "choices-matter",
                "language": "eng",
                "games_count": 2399,
                "image_background": "https://media.rawg.io/media/games/704/704f831d2d132e9614931f1c4eab9e86.jpg"
            },
            {
                "id": 42506,
                "name": "Тёмное фэнтези",
                "slug": "tiomnoe-fentezi",
                "language": "rus",
                "games_count": 1375,
                "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
            },
            {
                "id": 40,
                "name": "Dark Fantasy",
                "slug": "dark-fantasy",
                "language": "eng",
                "games_count": 2569,
                "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
            },
            {
                "id": 42391,
                "name": "Средневековье",
                "slug": "srednevekove",
                "language": "rus",
                "games_count": 1644,
                "image_background": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
            },
            {
                "id": 66,
                "name": "Medieval",
                "slug": "medieval",
                "language": "eng",
                "games_count": 4359,
                "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
            },
            {
                "id": 82,
                "name": "Magic",
                "slug": "magic",
                "language": "eng",
                "games_count": 6924,
                "image_background": "https://media.rawg.io/media/games/de4/de4b7cb80b39d95943f2931093b46932.jpg"
            },
            {
                "id": 42478,
                "name": "Магия",
                "slug": "magiia",
                "language": "rus",
                "games_count": 1981,
                "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
            },
            {
                "id": 42508,
                "name": "Нелинейность",
                "slug": "nelineinost",
                "language": "rus",
                "games_count": 1022,
                "image_background": "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg"
            },
            {
                "id": 218,
                "name": "Multiple Endings",
                "slug": "multiple-endings",
                "language": "eng",
                "games_count": 5556,
                "image_background": "https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature",
            "name_en": "Mature",
            "name_ru": "С 17 лет"
        },
        "user_game": null,
        "reviews_count": 5484,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
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
                "id": 3,
                "name": "Adventure",
                "slug": "adventure"
            },
            {
                "id": 4,
                "name": "Action",
                "slug": "action"
            },
            {
                "id": 5,
                "name": "RPG",
                "slug": "role-playing-games-rpg"
            }
        ]
    },
    {
        "slug": "the-elder-scrolls-v-skyrim",
        "name": "The Elder Scrolls V: Skyrim",
        "playtime": 46,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch"
                }
            },
            {
                "platform": {
                    "id": 14,
                    "name": "Xbox 360",
                    "slug": "xbox360"
                }
            },
            {
                "platform": {
                    "id": 16,
                    "name": "PlayStation 3",
                    "slug": "playstation3"
                }
            }
        ],
        "stores": [
            {
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam"
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
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            },
            {
                "store": {
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
                }
            }
        ],
        "released": "2011-11-11",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        "rating": 4.42,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 2289,
                "percent": 57.15
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1274,
                "percent": 31.81
            },
            {
                "id": 3,
                "title": "meh",
                "count": 357,
                "percent": 8.91
            },
            {
                "id": 1,
                "title": "skip",
                "count": 85,
                "percent": 2.12
            }
        ],
        "ratings_count": 3971,
        "reviews_text_count": 23,
        "added": 13463,
        "added_by_status": {
            "yet": 428,
            "owned": 8158,
            "beaten": 3135,
            "toplay": 326,
            "dropped": 1078,
            "playing": 338
        },
        "metacritic": 94,
        "suggestions_count": 583,
        "updated": "2022-07-26T03:18:34",
        "id": 5679,
        "score": null,
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 174439,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42396,
                "name": "Для одного игрока",
                "slug": "dlia-odnogo-igroka",
                "language": "rus",
                "games_count": 26247,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42417,
                "name": "Экшен",
                "slug": "ekshen",
                "language": "rus",
                "games_count": 27745,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            {
                "id": 42392,
                "name": "Приключение",
                "slug": "prikliuchenie",
                "language": "rus",
                "games_count": 25733,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "language": "eng",
                "games_count": 26597,
                "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23400,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 7808,
                "name": "steam-trading-cards",
                "slug": "steam-trading-cards",
                "language": "eng",
                "games_count": 7582,
                "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
            },
            {
                "id": 40849,
                "name": "Steam Cloud",
                "slug": "steam-cloud",
                "language": "eng",
                "games_count": 12102,
                "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
            },
            {
                "id": 42400,
                "name": "Атмосфера",
                "slug": "atmosfera",
                "language": "rus",
                "games_count": 6102,
                "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            },
            {
                "id": 42401,
                "name": "Отличный саундтрек",
                "slug": "otlichnyi-saundtrek",
                "language": "rus",
                "games_count": 4430,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3206,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            {
                "id": 42394,
                "name": "Глубокий сюжет",
                "slug": "glubokii-siuzhet",
                "language": "rus",
                "games_count": 6951,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "language": "eng",
                "games_count": 14908,
                "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
            },
            {
                "id": 42412,
                "name": "Ролевая игра",
                "slug": "rolevaia-igra",
                "language": "rus",
                "games_count": 11547,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 118,
                "name": "Story Rich",
                "slug": "story-rich",
                "language": "eng",
                "games_count": 15302,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 42442,
                "name": "Открытый мир",
                "slug": "otkrytyi-mir",
                "language": "rus",
                "games_count": 3605,
                "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
            },
            {
                "id": 36,
                "name": "Open World",
                "slug": "open-world",
                "language": "eng",
                "games_count": 5319,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42435,
                "name": "Шедевр",
                "slug": "shedevr",
                "language": "rus",
                "games_count": 1059,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 8,
                "name": "First-Person",
                "slug": "first-person",
                "language": "eng",
                "games_count": 22942,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 42429,
                "name": "От первого лица",
                "slug": "ot-pervogo-litsa",
                "language": "rus",
                "games_count": 5777,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 149,
                "name": "Third Person",
                "slug": "third-person",
                "language": "eng",
                "games_count": 7500,
                "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
            },
            {
                "id": 42441,
                "name": "От третьего лица",
                "slug": "ot-tretego-litsa",
                "language": "rus",
                "games_count": 3671,
                "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
            },
            {
                "id": 40845,
                "name": "Partial Controller Support",
                "slug": "partial-controller-support",
                "language": "eng",
                "games_count": 8613,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 42480,
                "name": "Фэнтези",
                "slug": "fentezi",
                "language": "rus",
                "games_count": 6107,
                "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            },
            {
                "id": 64,
                "name": "Fantasy",
                "slug": "fantasy",
                "language": "eng",
                "games_count": 20564,
                "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
            },
            {
                "id": 37,
                "name": "Sandbox",
                "slug": "sandbox",
                "language": "eng",
                "games_count": 5069,
                "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
            },
            {
                "id": 42444,
                "name": "Песочница",
                "slug": "pesochnitsa",
                "language": "rus",
                "games_count": 2520,
                "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
            },
            {
                "id": 97,
                "name": "Action RPG",
                "slug": "action-rpg",
                "language": "eng",
                "games_count": 4930,
                "image_background": "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg"
            },
            {
                "id": 42489,
                "name": "Ролевой экшен",
                "slug": "rolevoi-ekshen",
                "language": "rus",
                "games_count": 1962,
                "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
            },
            {
                "id": 40852,
                "name": "Steam Workshop",
                "slug": "steam-workshop",
                "language": "eng",
                "games_count": 1211,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
            },
            {
                "id": 62,
                "name": "Moddable",
                "slug": "moddable",
                "language": "eng",
                "games_count": 704,
                "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
            },
            {
                "id": 468,
                "name": "role-playing",
                "slug": "role-playing",
                "language": "eng",
                "games_count": 1351,
                "image_background": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg"
            },
            {
                "id": 42438,
                "name": "Поддержка модификаций",
                "slug": "podderzhka-modifikatsii",
                "language": "rus",
                "games_count": 504,
                "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
            },
            {
                "id": 42530,
                "name": "Кастомизация персонажа",
                "slug": "kastomizatsiia-personazha",
                "language": "rus",
                "games_count": 1967,
                "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
            },
            {
                "id": 121,
                "name": "Character Customization",
                "slug": "character-customization",
                "language": "eng",
                "games_count": 2674,
                "image_background": "https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg"
            },
            {
                "id": 40,
                "name": "Dark Fantasy",
                "slug": "dark-fantasy",
                "language": "eng",
                "games_count": 2569,
                "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
            },
            {
                "id": 42391,
                "name": "Средневековье",
                "slug": "srednevekove",
                "language": "rus",
                "games_count": 1644,
                "image_background": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
            },
            {
                "id": 66,
                "name": "Medieval",
                "slug": "medieval",
                "language": "eng",
                "games_count": 4359,
                "image_background": "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg"
            },
            {
                "id": 82,
                "name": "Magic",
                "slug": "magic",
                "language": "eng",
                "games_count": 6924,
                "image_background": "https://media.rawg.io/media/games/de4/de4b7cb80b39d95943f2931093b46932.jpg"
            },
            {
                "id": 42478,
                "name": "Магия",
                "slug": "magiia",
                "language": "rus",
                "games_count": 1981,
                "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
            },
            {
                "id": 205,
                "name": "Lore-Rich",
                "slug": "lore-rich",
                "language": "eng",
                "games_count": 512,
                "image_background": "https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg"
            },
            {
                "id": 215,
                "name": "Dragons",
                "slug": "dragons",
                "language": "eng",
                "games_count": 2208,
                "image_background": "https://media.rawg.io/media/games/58a/58ac7f6569259dcc0b60b921869b19fc.jpg"
            },
            {
                "id": 42594,
                "name": "Проработанная вселенная",
                "slug": "prorabotannaia-vselennaia",
                "language": "rus",
                "games_count": 540,
                "image_background": "https://media.rawg.io/media/games/4a1/4a1ee7cf3792722dcd11638e542405c3.jpg"
            },
            {
                "id": 42614,
                "name": "Драконы",
                "slug": "drakony",
                "language": "rus",
                "games_count": 395,
                "image_background": "https://media.rawg.io/media/games/736/736e1e2e7670169114a48b5f65f66bdb.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature",
            "name_en": "Mature",
            "name_ru": "С 17 лет"
        },
        "user_game": null,
        "reviews_count": 4005,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            },
            {
                "id": 118307,
                "image": "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg"
            },
            {
                "id": 118308,
                "image": "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg"
            },
            {
                "id": 118309,
                "image": "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg"
            },
            {
                "id": 118310,
                "image": "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg"
            },
            {
                "id": 118311,
                "image": "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg"
            },
            {
                "id": 118312,
                "image": "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg"
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
                "slug": "action"
            },
            {
                "id": 5,
                "name": "RPG",
                "slug": "role-playing-games-rpg"
            }
        ]
    },
    {
        "slug": "bioshock-infinite",
        "name": "BioShock Infinite",
        "playtime": 12,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one"
                }
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch"
                }
            },
            {
                "platform": {
                    "id": 6,
                    "name": "Linux",
                    "slug": "linux"
                }
            },
            {
                "platform": {
                    "id": 14,
                    "name": "Xbox 360",
                    "slug": "xbox360"
                }
            },
            {
                "platform": {
                    "id": 16,
                    "name": "PlayStation 3",
                    "slug": "playstation3"
                }
            }
        ],
        "stores": [
            {
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam"
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
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store"
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
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            },
            {
                "store": {
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
                }
            }
        ],
        "released": "2013-03-26",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        "rating": 4.39,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 1951,
                "percent": 55.11
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1189,
                "percent": 33.59
            },
            {
                "id": 3,
                "title": "meh",
                "count": 309,
                "percent": 8.73
            },
            {
                "id": 1,
                "title": "skip",
                "count": 91,
                "percent": 2.57
            }
        ],
        "ratings_count": 3509,
        "reviews_text_count": 20,
        "added": 12916,
        "added_by_status": {
            "yet": 693,
            "owned": 7734,
            "beaten": 3690,
            "toplay": 320,
            "dropped": 393,
            "playing": 86
        },
        "metacritic": 94,
        "suggestions_count": 603,
        "updated": "2022-07-25T22:26:03",
        "id": 4062,
        "score": null,
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 174439,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42396,
                "name": "Для одного игрока",
                "slug": "dlia-odnogo-igroka",
                "language": "rus",
                "games_count": 26247,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42417,
                "name": "Экшен",
                "slug": "ekshen",
                "language": "rus",
                "games_count": 27745,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            {
                "id": 42392,
                "name": "Приключение",
                "slug": "prikliuchenie",
                "language": "rus",
                "games_count": 25733,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "language": "eng",
                "games_count": 26597,
                "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23400,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 7808,
                "name": "steam-trading-cards",
                "slug": "steam-trading-cards",
                "language": "eng",
                "games_count": 7582,
                "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12381,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
            },
            {
                "id": 40849,
                "name": "Steam Cloud",
                "slug": "steam-cloud",
                "language": "eng",
                "games_count": 12102,
                "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
            },
            {
                "id": 42400,
                "name": "Атмосфера",
                "slug": "atmosfera",
                "language": "rus",
                "games_count": 6102,
                "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            },
            {
                "id": 42401,
                "name": "Отличный саундтрек",
                "slug": "otlichnyi-saundtrek",
                "language": "rus",
                "games_count": 4430,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3206,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            {
                "id": 42394,
                "name": "Глубокий сюжет",
                "slug": "glubokii-siuzhet",
                "language": "rus",
                "games_count": 6951,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "language": "eng",
                "games_count": 14908,
                "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
            },
            {
                "id": 42412,
                "name": "Ролевая игра",
                "slug": "rolevaia-igra",
                "language": "rus",
                "games_count": 11547,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 118,
                "name": "Story Rich",
                "slug": "story-rich",
                "language": "eng",
                "games_count": 15302,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 42428,
                "name": "Шутер",
                "slug": "shuter",
                "language": "rus",
                "games_count": 5313,
                "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
            },
            {
                "id": 42435,
                "name": "Шедевр",
                "slug": "shedevr",
                "language": "rus",
                "games_count": 1059,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 8,
                "name": "First-Person",
                "slug": "first-person",
                "language": "eng",
                "games_count": 22942,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 42429,
                "name": "От первого лица",
                "slug": "ot-pervogo-litsa",
                "language": "rus",
                "games_count": 5777,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 32,
                "name": "Sci-fi",
                "slug": "sci-fi",
                "language": "eng",
                "games_count": 14901,
                "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            },
            {
                "id": 42423,
                "name": "Научная фантастика",
                "slug": "nauchnaia-fantastika",
                "language": "rus",
                "games_count": 4865,
                "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
            },
            {
                "id": 30,
                "name": "FPS",
                "slug": "fps",
                "language": "eng",
                "games_count": 10879,
                "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
            },
            {
                "id": 42427,
                "name": "Шутер от первого лица",
                "slug": "shuter-ot-pervogo-litsa",
                "language": "rus",
                "games_count": 3329,
                "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
            },
            {
                "id": 42480,
                "name": "Фэнтези",
                "slug": "fentezi",
                "language": "rus",
                "games_count": 6107,
                "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
            },
            {
                "id": 64,
                "name": "Fantasy",
                "slug": "fantasy",
                "language": "eng",
                "games_count": 20564,
                "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
            },
            {
                "id": 42491,
                "name": "Мясо",
                "slug": "miaso",
                "language": "rus",
                "games_count": 3536,
                "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
            },
            {
                "id": 26,
                "name": "Gore",
                "slug": "gore",
                "language": "eng",
                "games_count": 4556,
                "image_background": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg"
            },
            {
                "id": 115,
                "name": "Controller",
                "slug": "controller",
                "language": "eng",
                "games_count": 7761,
                "image_background": "https://media.rawg.io/media/games/a28/a289e23b4d4d84f26ab59125e3be4483.jpg"
            },
            {
                "id": 119,
                "name": "Dystopian",
                "slug": "dystopian",
                "language": "eng",
                "games_count": 1518,
                "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
            },
            {
                "id": 42665,
                "name": "Антиутопия",
                "slug": "antiutopiia",
                "language": "rus",
                "games_count": 633,
                "image_background": "https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg"
            },
            {
                "id": 42690,
                "name": "Красивая",
                "slug": "krasivaia",
                "language": "rus",
                "games_count": 529,
                "image_background": "https://media.rawg.io/media/games/956/95640d5ea0288c187dbce849a4254a41.jpg"
            },
            {
                "id": 154,
                "name": "Steampunk",
                "slug": "steampunk",
                "language": "eng",
                "games_count": 961,
                "image_background": "https://media.rawg.io/media/games/b17/b175178f8842276b8b18b339fe3146a1.jpg"
            },
            {
                "id": 42629,
                "name": "Стимпанк",
                "slug": "stimpank",
                "language": "rus",
                "games_count": 331,
                "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
            },
            {
                "id": 305,
                "name": "Linear",
                "slug": "linear",
                "language": "eng",
                "games_count": 2591,
                "image_background": "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg"
            },
            {
                "id": 42437,
                "name": "Линейная",
                "slug": "lineinaia",
                "language": "rus",
                "games_count": 2543,
                "image_background": "https://media.rawg.io/media/screenshots/443/44313191546d1280d72ee98e82d95e51.jpg"
            },
            {
                "id": 42566,
                "name": "Альтернативная история",
                "slug": "alternativnaia-istoriia",
                "language": "rus",
                "games_count": 572,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 208,
                "name": "Alternate History",
                "slug": "alternate-history",
                "language": "eng",
                "games_count": 1260,
                "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
            },
            {
                "id": 317,
                "name": "Time Travel",
                "slug": "time-travel",
                "language": "eng",
                "games_count": 1478,
                "image_background": "https://media.rawg.io/media/games/d87/d8788f5bdc90c142f60f66f99cfdd97b.jpg"
            },
            {
                "id": 42621,
                "name": "Путешествия во времени",
                "slug": "puteshestviia-vo-vremeni",
                "language": "rus",
                "games_count": 272,
                "image_background": "https://media.rawg.io/media/screenshots/2b8/2b86c68a911ca1dd4828e22364e077ea.jpg"
            },
            {
                "id": 287,
                "name": "Political",
                "slug": "political",
                "language": "eng",
                "games_count": 441,
                "image_background": "https://media.rawg.io/media/screenshots/2f3/2f39e67948648417709e746748a903b8.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature",
            "name_en": "Mature",
            "name_ru": "С 17 лет"
        },
        "user_game": null,
        "reviews_count": 3540,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
            },
            {
                "id": 98549,
                "image": "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg"
            },
            {
                "id": 98550,
                "image": "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg"
            },
            {
                "id": 98551,
                "image": "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg"
            },
            {
                "id": 98552,
                "image": "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg"
            },
            {
                "id": 98553,
                "image": "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg"
            },
            {
                "id": 98554,
                "image": "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg"
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
                    "id": 6,
                    "name": "Linux",
                    "slug": "linux"
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
                "id": 2,
                "name": "Shooter",
                "slug": "shooter"
            },
            {
                "id": 4,
                "name": "Action",
                "slug": "action"
            }
        ]
    },
    {
        "slug": "limbo",
        "name": "Limbo",
        "playtime": 3,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one"
                }
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch"
                }
            },
            {
                "platform": {
                    "id": 3,
                    "name": "iOS",
                    "slug": "ios"
                }
            },
            {
                "platform": {
                    "id": 21,
                    "name": "Android",
                    "slug": "android"
                }
            },
            {
                "platform": {
                    "id": 5,
                    "name": "macOS",
                    "slug": "macos"
                }
            },
            {
                "platform": {
                    "id": 6,
                    "name": "Linux",
                    "slug": "linux"
                }
            },
            {
                "platform": {
                    "id": 14,
                    "name": "Xbox 360",
                    "slug": "xbox360"
                }
            },
            {
                "platform": {
                    "id": 16,
                    "name": "PlayStation 3",
                    "slug": "playstation3"
                }
            },
            {
                "platform": {
                    "id": 19,
                    "name": "PS Vita",
                    "slug": "ps-vita"
                }
            }
        ],
        "stores": [
            {
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam"
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
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store"
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
                    "id": 5,
                    "name": "GOG",
                    "slug": "gog"
                }
            },
            {
                "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            },
            {
                "store": {
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
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
        ],
        "released": "2010-07-21",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
        "rating": 4.16,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 1512,
                "percent": 52.3
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 1013,
                "percent": 35.04
            },
            {
                "id": 3,
                "title": "meh",
                "count": 277,
                "percent": 9.58
            },
            {
                "id": 1,
                "title": "skip",
                "count": 89,
                "percent": 3.08
            }
        ],
        "ratings_count": 2857,
        "reviews_text_count": 23,
        "added": 11509,
        "added_by_status": {
            "yet": 480,
            "owned": 7342,
            "beaten": 2773,
            "toplay": 247,
            "dropped": 584,
            "playing": 83
        },
        "metacritic": 88,
        "suggestions_count": 181,
        "updated": "2022-07-24T20:40:43",
        "id": 1030,
        "score": null,
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 174439,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42396,
                "name": "Для одного игрока",
                "slug": "dlia-odnogo-igroka",
                "language": "rus",
                "games_count": 26247,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42417,
                "name": "Экшен",
                "slug": "ekshen",
                "language": "rus",
                "games_count": 27745,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            {
                "id": 42392,
                "name": "Приключение",
                "slug": "prikliuchenie",
                "language": "rus",
                "games_count": 25733,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 42398,
                "name": "Инди",
                "slug": "indi-2",
                "language": "rus",
                "games_count": 41160,
                "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23400,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12381,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
            },
            {
                "id": 42400,
                "name": "Атмосфера",
                "slug": "atmosfera",
                "language": "rus",
                "games_count": 6102,
                "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            },
            {
                "id": 42435,
                "name": "Шедевр",
                "slug": "shedevr",
                "language": "rus",
                "games_count": 1059,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 42399,
                "name": "Казуальная игра",
                "slug": "kazualnaia-igra",
                "language": "rus",
                "games_count": 26541,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            {
                "id": 45,
                "name": "2D",
                "slug": "2d",
                "language": "eng",
                "games_count": 168831,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
            },
            {
                "id": 16,
                "name": "Horror",
                "slug": "horror",
                "language": "eng",
                "games_count": 34857,
                "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
            },
            {
                "id": 42465,
                "name": "Головоломка",
                "slug": "golovolomka",
                "language": "rus",
                "games_count": 9267,
                "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
            },
            {
                "id": 42420,
                "name": "Сложная",
                "slug": "slozhnaia",
                "language": "rus",
                "games_count": 4008,
                "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
            },
            {
                "id": 49,
                "name": "Difficult",
                "slug": "difficult",
                "language": "eng",
                "games_count": 11344,
                "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
            },
            {
                "id": 42463,
                "name": "Платформер",
                "slug": "platformer-2",
                "language": "rus",
                "games_count": 5313,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            },
            {
                "id": 115,
                "name": "Controller",
                "slug": "controller",
                "language": "eng",
                "games_count": 7761,
                "image_background": "https://media.rawg.io/media/games/a28/a289e23b4d4d84f26ab59125e3be4483.jpg"
            },
            {
                "id": 42477,
                "name": "Мрачная",
                "slug": "mrachnaia",
                "language": "rus",
                "games_count": 2649,
                "image_background": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
            },
            {
                "id": 41,
                "name": "Dark",
                "slug": "dark",
                "language": "eng",
                "games_count": 11431,
                "image_background": "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg"
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
                "id": 111,
                "name": "Short",
                "slug": "short",
                "language": "eng",
                "games_count": 46677,
                "image_background": "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg"
            },
            {
                "id": 42457,
                "name": "Короткая",
                "slug": "korotkaia",
                "language": "rus",
                "games_count": 1188,
                "image_background": "https://media.rawg.io/media/games/657/657574cd437df9102f511b3be095b0ea.jpg"
            },
            {
                "id": 42469,
                "name": "Вид сбоку",
                "slug": "vid-sboku",
                "language": "rus",
                "games_count": 2385,
                "image_background": "https://media.rawg.io/media/games/598/59851e152a6898c8bf79069b5bf2f4db.jpg"
            },
            {
                "id": 113,
                "name": "Side Scroller",
                "slug": "side-scroller",
                "language": "eng",
                "games_count": 8111,
                "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
            },
            {
                "id": 42500,
                "name": "Физика",
                "slug": "fizika",
                "language": "rus",
                "games_count": 2850,
                "image_background": "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg"
            },
            {
                "id": 114,
                "name": "Physics",
                "slug": "physics",
                "language": "eng",
                "games_count": 16247,
                "image_background": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg"
            },
            {
                "id": 110,
                "name": "Cinematic",
                "slug": "cinematic",
                "language": "eng",
                "games_count": 991,
                "image_background": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg"
            },
            {
                "id": 42468,
                "name": "Головоломка-платформер",
                "slug": "golovolomka-platformer",
                "language": "rus",
                "games_count": 2210,
                "image_background": "https://media.rawg.io/media/games/cfe/cfe114c081281960bd79ace5209c0a4a.jpg"
            },
            {
                "id": 42623,
                "name": "Кинематографичная",
                "slug": "kinematografichnaia",
                "language": "rus",
                "games_count": 906,
                "image_background": "https://media.rawg.io/media/games/943/9432de383089b0a427a3cdf3687b2b73.jpg"
            },
            {
                "id": 42672,
                "name": "Сюрреалистичная",
                "slug": "siurrealistichnaia",
                "language": "rus",
                "games_count": 1238,
                "image_background": "https://media.rawg.io/media/games/51c/51c430f1795c79b78f863a9f22dc422d.jpg"
            },
            {
                "id": 83,
                "name": "Puzzle-Platformer",
                "slug": "puzzle-platformer",
                "language": "eng",
                "games_count": 8994,
                "image_background": "https://media.rawg.io/media/screenshots/2bb/2bbcb4cbb748512b386eedc0d2f1cfc7.jpg"
            },
            {
                "id": 46,
                "name": "Surreal",
                "slug": "surreal",
                "language": "eng",
                "games_count": 3936,
                "image_background": "https://media.rawg.io/media/screenshots/0de/0de6cfe8744a8d5b08b448ff485f2101.jpg"
            },
            {
                "id": 42582,
                "name": "Минимализм",
                "slug": "minimalizm",
                "language": "rus",
                "games_count": 2834,
                "image_background": "https://media.rawg.io/media/screenshots/120/120d930368bc171c42f9caab94e33c65.jpg"
            },
            {
                "id": 112,
                "name": "Minimalist",
                "slug": "minimalist",
                "language": "eng",
                "games_count": 12170,
                "image_background": "https://media.rawg.io/media/screenshots/5a3/5a335ee04477c97d393e8ba03f8e6d91.jpg"
            }
        ],
        "esrb_rating": {
            "id": 3,
            "name": "Teen",
            "slug": "teen",
            "name_en": "Teen",
            "name_ru": "С 13 лет"
        },
        "user_game": null,
        "reviews_count": 2891,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 30985,
                "image": "https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg"
            },
            {
                "id": 30986,
                "image": "https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg"
            },
            {
                "id": 30987,
                "image": "https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg"
            },
            {
                "id": 30988,
                "image": "https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg"
            },
            {
                "id": 30989,
                "image": "https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg"
            },
            {
                "id": 30991,
                "image": "https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg"
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
                    "id": 4,
                    "name": "iOS",
                    "slug": "ios"
                }
            },
            {
                "platform": {
                    "id": 8,
                    "name": "Android",
                    "slug": "android"
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
                "id": 51,
                "name": "Indie",
                "slug": "indie"
            },
            {
                "id": 83,
                "name": "Platformer",
                "slug": "platformer"
            },
            {
                "id": 3,
                "name": "Adventure",
                "slug": "adventure"
            },
            {
                "id": 7,
                "name": "Puzzle",
                "slug": "puzzle"
            }
        ]
    },
    {
        "slug": "doom",
        "name": "DOOM (2016)",
        "playtime": 10,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one"
                }
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch"
                }
            }
        ],
        "stores": [
            {
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam"
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
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store"
                }
            },
            {
                "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            }
        ],
        "released": "2016-05-13",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
        "rating": 4.39,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 1645,
                "percent": 52.93
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1170,
                "percent": 37.64
            },
            {
                "id": 3,
                "title": "meh",
                "count": 224,
                "percent": 7.21
            },
            {
                "id": 1,
                "title": "skip",
                "count": 69,
                "percent": 2.22
            }
        ],
        "ratings_count": 3073,
        "reviews_text_count": 26,
        "added": 11192,
        "added_by_status": {
            "yet": 493,
            "owned": 7015,
            "beaten": 2380,
            "toplay": 418,
            "dropped": 595,
            "playing": 291
        },
        "metacritic": 85,
        "suggestions_count": 633,
        "updated": "2022-07-19T07:56:20",
        "id": 2454,
        "score": null,
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 174439,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42396,
                "name": "Для одного игрока",
                "slug": "dlia-odnogo-igroka",
                "language": "rus",
                "games_count": 26247,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42417,
                "name": "Экшен",
                "slug": "ekshen",
                "language": "rus",
                "games_count": 27745,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            {
                "id": 42392,
                "name": "Приключение",
                "slug": "prikliuchenie",
                "language": "rus",
                "games_count": 25733,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 42398,
                "name": "Инди",
                "slug": "indi-2",
                "language": "rus",
                "games_count": 41160,
                "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 31969,
                "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23400,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 42400,
                "name": "Атмосфера",
                "slug": "atmosfera",
                "language": "rus",
                "games_count": 6102,
                "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            },
            {
                "id": 42425,
                "name": "Для нескольких игроков",
                "slug": "dlia-neskolkikh-igrokov",
                "language": "rus",
                "games_count": 6572,
                "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
            },
            {
                "id": 42401,
                "name": "Отличный саундтрек",
                "slug": "otlichnyi-saundtrek",
                "language": "rus",
                "games_count": 4430,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3206,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            {
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 8626,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
            },
            {
                "id": 42412,
                "name": "Ролевая игра",
                "slug": "rolevaia-igra",
                "language": "rus",
                "games_count": 11547,
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
                "id": 42421,
                "name": "Стратегия",
                "slug": "strategiia",
                "language": "rus",
                "games_count": 12782,
                "image_background": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg"
            },
            {
                "id": 42428,
                "name": "Шутер",
                "slug": "shuter",
                "language": "rus",
                "games_count": 5313,
                "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
            },
            {
                "id": 8,
                "name": "First-Person",
                "slug": "first-person",
                "language": "eng",
                "games_count": 22942,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 42429,
                "name": "От первого лица",
                "slug": "ot-pervogo-litsa",
                "language": "rus",
                "games_count": 5777,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 32,
                "name": "Sci-fi",
                "slug": "sci-fi",
                "language": "eng",
                "games_count": 14901,
                "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            },
            {
                "id": 42423,
                "name": "Научная фантастика",
                "slug": "nauchnaia-fantastika",
                "language": "rus",
                "games_count": 4865,
                "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
            },
            {
                "id": 40845,
                "name": "Partial Controller Support",
                "slug": "partial-controller-support",
                "language": "eng",
                "games_count": 8613,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 16,
                "name": "Horror",
                "slug": "horror",
                "language": "eng",
                "games_count": 34857,
                "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
            },
            {
                "id": 30,
                "name": "FPS",
                "slug": "fps",
                "language": "eng",
                "games_count": 10879,
                "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
            },
            {
                "id": 42427,
                "name": "Шутер от первого лица",
                "slug": "shuter-ot-pervogo-litsa",
                "language": "rus",
                "games_count": 3329,
                "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
            },
            {
                "id": 42420,
                "name": "Сложная",
                "slug": "slozhnaia",
                "language": "rus",
                "games_count": 4008,
                "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
            },
            {
                "id": 42461,
                "name": "Классика",
                "slug": "klassika",
                "language": "rus",
                "games_count": 1365,
                "image_background": "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg"
            },
            {
                "id": 42491,
                "name": "Мясо",
                "slug": "miaso",
                "language": "rus",
                "games_count": 3536,
                "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
            },
            {
                "id": 49,
                "name": "Difficult",
                "slug": "difficult",
                "language": "eng",
                "games_count": 11344,
                "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
            },
            {
                "id": 26,
                "name": "Gore",
                "slug": "gore",
                "language": "eng",
                "games_count": 4556,
                "image_background": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg"
            },
            {
                "id": 193,
                "name": "Classic",
                "slug": "classic",
                "language": "eng",
                "games_count": 1696,
                "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
            },
            {
                "id": 63,
                "name": "Zombies",
                "slug": "zombies",
                "language": "eng",
                "games_count": 8828,
                "image_background": "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg"
            },
            {
                "id": 42544,
                "name": "Зомби",
                "slug": "zombi-2",
                "language": "rus",
                "games_count": 1639,
                "image_background": "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg"
            },
            {
                "id": 42612,
                "name": "Быстрая",
                "slug": "bystraia",
                "language": "rus",
                "games_count": 1376,
                "image_background": "https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg"
            },
            {
                "id": 131,
                "name": "Fast-Paced",
                "slug": "fast-paced",
                "language": "eng",
                "games_count": 9454,
                "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
            },
            {
                "id": 120,
                "name": "Memes",
                "slug": "memes",
                "language": "eng",
                "games_count": 1425,
                "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
            },
            {
                "id": 42561,
                "name": "Мемы",
                "slug": "memy",
                "language": "rus",
                "games_count": 1253,
                "image_background": "https://media.rawg.io/media/games/11b/11b81edff7f45024e36b88e880d86585.jpg"
            },
            {
                "id": 42466,
                "name": "Римейк",
                "slug": "rimeik",
                "language": "rus",
                "games_count": 206,
                "image_background": "https://media.rawg.io/media/screenshots/f7e/f7e70957c14ead1fa187a616dfa83e09.jpg"
            },
            {
                "id": 271,
                "name": "Remake",
                "slug": "remake",
                "language": "eng",
                "games_count": 1527,
                "image_background": "https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg"
            },
            {
                "id": 270,
                "name": "Blood",
                "slug": "blood",
                "language": "eng",
                "games_count": 1751,
                "image_background": "https://media.rawg.io/media/games/4fe/4feffcec6315c5f5a96442a8444431ca.jpg"
            },
            {
                "id": 42577,
                "name": "Кровь",
                "slug": "krov",
                "language": "rus",
                "games_count": 318,
                "image_background": "https://media.rawg.io/media/games/9d5/9d5aa70db8c16566d79712df6417d13a.jpg"
            },
            {
                "id": 187,
                "name": "Demons",
                "slug": "demons",
                "language": "eng",
                "games_count": 1550,
                "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
            },
            {
                "id": 42545,
                "name": "Демоны",
                "slug": "demony",
                "language": "rus",
                "games_count": 780,
                "image_background": "https://media.rawg.io/media/screenshots/75c/75c9b2a8e308bb44059d52ff59006e16.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature",
            "name_en": "Mature",
            "name_ru": "С 17 лет"
        },
        "user_game": null,
        "reviews_count": 3108,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
            },
            {
                "id": 22393,
                "image": "https://media.rawg.io/media/screenshots/353/353c1e834e7da7d6ceaa6beaff529c29.jpg"
            },
            {
                "id": 22394,
                "image": "https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg"
            },
            {
                "id": 22398,
                "image": "https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg"
            },
            {
                "id": 22400,
                "image": "https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg"
            },
            {
                "id": 22402,
                "image": "https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg"
            },
            {
                "id": 22404,
                "image": "https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg"
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
                "id": 2,
                "name": "Shooter",
                "slug": "shooter"
            },
            {
                "id": 4,
                "name": "Action",
                "slug": "action"
            }
        ]
    },
    {
        "slug": "payday-2",
        "name": "PAYDAY 2",
        "playtime": 9,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one"
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
        "stores": [
            {
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam"
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
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            },
            {
                "store": {
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
                }
            }
        ],
        "released": "2013-08-13",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        "rating": 3.5,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 938,
                "percent": 51.4
            },
            {
                "id": 3,
                "title": "meh",
                "count": 515,
                "percent": 28.22
            },
            {
                "id": 1,
                "title": "skip",
                "count": 192,
                "percent": 10.52
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 180,
                "percent": 9.86
            }
        ],
        "ratings_count": 1810,
        "reviews_text_count": 13,
        "added": 10756,
        "added_by_status": {
            "yet": 413,
            "owned": 8416,
            "beaten": 617,
            "toplay": 76,
            "dropped": 1133,
            "playing": 101
        },
        "metacritic": 79,
        "suggestions_count": 420,
        "updated": "2022-07-25T16:06:52",
        "id": 3939,
        "score": null,
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 174439,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42396,
                "name": "Для одного игрока",
                "slug": "dlia-odnogo-igroka",
                "language": "rus",
                "games_count": 26247,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42417,
                "name": "Экшен",
                "slug": "ekshen",
                "language": "rus",
                "games_count": 27745,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            {
                "id": 42392,
                "name": "Приключение",
                "slug": "prikliuchenie",
                "language": "rus",
                "games_count": 25733,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "language": "eng",
                "games_count": 26597,
                "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 31969,
                "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
            },
            {
                "id": 7808,
                "name": "steam-trading-cards",
                "slug": "steam-trading-cards",
                "language": "eng",
                "games_count": 7582,
                "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12381,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
            },
            {
                "id": 42425,
                "name": "Для нескольких игроков",
                "slug": "dlia-neskolkikh-igrokov",
                "language": "rus",
                "games_count": 6572,
                "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
            },
            {
                "id": 42401,
                "name": "Отличный саундтрек",
                "slug": "otlichnyi-saundtrek",
                "language": "rus",
                "games_count": 4430,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3206,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            {
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 8626,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
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
                "id": 42421,
                "name": "Стратегия",
                "slug": "strategiia",
                "language": "rus",
                "games_count": 12782,
                "image_background": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg"
            },
            {
                "id": 42428,
                "name": "Шутер",
                "slug": "shuter",
                "language": "rus",
                "games_count": 5313,
                "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
            },
            {
                "id": 8,
                "name": "First-Person",
                "slug": "first-person",
                "language": "eng",
                "games_count": 22942,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 42429,
                "name": "От первого лица",
                "slug": "ot-pervogo-litsa",
                "language": "rus",
                "games_count": 5777,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 30,
                "name": "FPS",
                "slug": "fps",
                "language": "eng",
                "games_count": 10879,
                "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
            },
            {
                "id": 42427,
                "name": "Шутер от первого лица",
                "slug": "shuter-ot-pervogo-litsa",
                "language": "rus",
                "games_count": 3329,
                "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
            },
            {
                "id": 42482,
                "name": "Смешная",
                "slug": "smeshnaia",
                "language": "rus",
                "games_count": 5192,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 42413,
                "name": "Симулятор",
                "slug": "simuliator",
                "language": "rus",
                "games_count": 12785,
                "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
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
                "id": 4,
                "name": "Funny",
                "slug": "funny",
                "language": "eng",
                "games_count": 19555,
                "image_background": "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg"
            },
            {
                "id": 42433,
                "name": "Совместная игра по сети",
                "slug": "sovmestnaia-igra-po-seti",
                "language": "rus",
                "games_count": 1229,
                "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
            },
            {
                "id": 15,
                "name": "Stealth",
                "slug": "stealth",
                "language": "eng",
                "games_count": 5077,
                "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
            },
            {
                "id": 42439,
                "name": "Стелс",
                "slug": "stels",
                "language": "rus",
                "games_count": 1229,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            },
            {
                "id": 42436,
                "name": "Тактика",
                "slug": "taktika",
                "language": "rus",
                "games_count": 2105,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 80,
                "name": "Tactical",
                "slug": "tactical",
                "language": "eng",
                "games_count": 3388,
                "image_background": "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg"
            },
            {
                "id": 40837,
                "name": "In-App Purchases",
                "slug": "in-app-purchases",
                "language": "eng",
                "games_count": 1752,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 11,
                "name": "Team-Based",
                "slug": "team-based",
                "language": "eng",
                "games_count": 1087,
                "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            },
            {
                "id": 42450,
                "name": "Командная",
                "slug": "komandnaia",
                "language": "rus",
                "games_count": 790,
                "image_background": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg"
            },
            {
                "id": 144,
                "name": "Crime",
                "slug": "crime",
                "language": "eng",
                "games_count": 2285,
                "image_background": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg"
            },
            {
                "id": 42443,
                "name": "Криминал",
                "slug": "kriminal",
                "language": "rus",
                "games_count": 511,
                "image_background": "https://media.rawg.io/media/games/546/546cf59a24b0ae308e311a07611ca22f.jpg"
            },
            {
                "id": 42567,
                "name": "Игра против ИИ",
                "slug": "igra-protiv-ii",
                "language": "rus",
                "games_count": 1888,
                "image_background": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg"
            },
            {
                "id": 171,
                "name": "PvE",
                "slug": "pve",
                "language": "eng",
                "games_count": 2062,
                "image_background": "https://media.rawg.io/media/games/5f2/5f25cf08217b40b9d8f02f95db1fdc1d.jpg"
            },
            {
                "id": 216,
                "name": "Heist",
                "slug": "heist",
                "language": "eng",
                "games_count": 364,
                "image_background": "https://media.rawg.io/media/games/546/546cf59a24b0ae308e311a07611ca22f.jpg"
            },
            {
                "id": 42447,
                "name": "Ограбления",
                "slug": "ogrableniia",
                "language": "rus",
                "games_count": 149,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 42652,
                "name": "Кастомизация оружия",
                "slug": "kastomizatsiia-oruzhiia",
                "language": "rus",
                "games_count": 295,
                "image_background": "https://media.rawg.io/media/screenshots/28c/28cd63afbeb6c3416c21e88532e5786f.jpg"
            },
            {
                "id": 274,
                "name": "Gun Customization",
                "slug": "gun-customization",
                "language": "eng",
                "games_count": 279,
                "image_background": "https://media.rawg.io/media/screenshots/d17/d177d130ff350fc5cee6d51345d397e0.jpg"
            }
        ],
        "esrb_rating": {
            "id": 5,
            "name": "Adults Only",
            "slug": "adults-only",
            "name_en": "Adults Only",
            "name_ru": "Только для взрослых"
        },
        "user_game": null,
        "reviews_count": 1825,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 74194,
                "image": "https://media.rawg.io/media/screenshots/c38/c38f5aa479eebab20cedcdae370e6e18.jpg"
            },
            {
                "id": 74195,
                "image": "https://media.rawg.io/media/screenshots/442/442be5656b314e3289ecd1486b5282f1.jpg"
            },
            {
                "id": 74196,
                "image": "https://media.rawg.io/media/screenshots/c2c/c2ccfeaeda357f932d1899a91f298850.jpg"
            },
            {
                "id": 74197,
                "image": "https://media.rawg.io/media/screenshots/a18/a18da938def6ce6e5b571f1c20272ab0.jpg"
            },
            {
                "id": 74198,
                "image": "https://media.rawg.io/media/screenshots/a5d/a5da0d01195f01cdedec974d52892128.jpg"
            },
            {
                "id": 74199,
                "image": "https://media.rawg.io/media/screenshots/4ee/4ee5c3c8b850ab4ba8e04b9f5d5ab060.jpg"
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
                "slug": "shooter"
            },
            {
                "id": 4,
                "name": "Action",
                "slug": "action"
            }
        ]
    },
    {
        "slug": "rocket-league",
        "name": "Rocket League",
        "playtime": 19,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one"
                }
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch"
                }
            },
            {
                "platform": {
                    "id": 5,
                    "name": "macOS",
                    "slug": "macos"
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
        "stores": [
            {
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam"
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
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store"
                }
            },
            {
                "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            },
            {
                "store": {
                    "id": 11,
                    "name": "Epic Games",
                    "slug": "epic-games"
                }
            }
        ],
        "released": "2015-07-07",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        "rating": 3.97,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 1350,
                "percent": 54.7
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 641,
                "percent": 25.97
            },
            {
                "id": 3,
                "title": "meh",
                "count": 362,
                "percent": 14.67
            },
            {
                "id": 1,
                "title": "skip",
                "count": 115,
                "percent": 4.66
            }
        ],
        "ratings_count": 2450,
        "reviews_text_count": 14,
        "added": 10416,
        "added_by_status": {
            "yet": 167,
            "owned": 7642,
            "beaten": 691,
            "toplay": 97,
            "dropped": 1303,
            "playing": 516
        },
        "metacritic": 86,
        "suggestions_count": 598,
        "updated": "2022-07-24T02:17:14",
        "id": 3272,
        "score": null,
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 174439,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42396,
                "name": "Для одного игрока",
                "slug": "dlia-odnogo-igroka",
                "language": "rus",
                "games_count": 26247,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42417,
                "name": "Экшен",
                "slug": "ekshen",
                "language": "rus",
                "games_count": 27745,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            {
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "language": "eng",
                "games_count": 26597,
                "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
            },
            {
                "id": 42398,
                "name": "Инди",
                "slug": "indi-2",
                "language": "rus",
                "games_count": 41160,
                "image_background": "https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 31969,
                "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
            },
            {
                "id": 7808,
                "name": "steam-trading-cards",
                "slug": "steam-trading-cards",
                "language": "eng",
                "games_count": 7582,
                "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12381,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
            },
            {
                "id": 40849,
                "name": "Steam Cloud",
                "slug": "steam-cloud",
                "language": "eng",
                "games_count": 12102,
                "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
            },
            {
                "id": 42425,
                "name": "Для нескольких игроков",
                "slug": "dlia-neskolkikh-igrokov",
                "language": "rus",
                "games_count": 6572,
                "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
            },
            {
                "id": 42401,
                "name": "Отличный саундтрек",
                "slug": "otlichnyi-saundtrek",
                "language": "rus",
                "games_count": 4430,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3206,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            {
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 8626,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
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
                "id": 42399,
                "name": "Казуальная игра",
                "slug": "kazualnaia-igra",
                "language": "rus",
                "games_count": 26541,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
            },
            {
                "id": 42482,
                "name": "Смешная",
                "slug": "smeshnaia",
                "language": "rus",
                "games_count": 5192,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
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
                "id": 4,
                "name": "Funny",
                "slug": "funny",
                "language": "eng",
                "games_count": 19555,
                "image_background": "https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg"
            },
            {
                "id": 42433,
                "name": "Совместная игра по сети",
                "slug": "sovmestnaia-igra-po-seti",
                "language": "rus",
                "games_count": 1229,
                "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
            },
            {
                "id": 42449,
                "name": "Локальный мультиплеер",
                "slug": "lokalnyi-multipleer",
                "language": "rus",
                "games_count": 2544,
                "image_background": "https://media.rawg.io/media/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg"
            },
            {
                "id": 198,
                "name": "Split Screen",
                "slug": "split-screen",
                "language": "eng",
                "games_count": 4976,
                "image_background": "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg"
            },
            {
                "id": 75,
                "name": "Local Co-Op",
                "slug": "local-co-op",
                "language": "eng",
                "games_count": 4571,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 72,
                "name": "Local Multiplayer",
                "slug": "local-multiplayer",
                "language": "eng",
                "games_count": 11631,
                "image_background": "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg"
            },
            {
                "id": 11669,
                "name": "stats",
                "slug": "stats",
                "language": "eng",
                "games_count": 4178,
                "image_background": "https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg"
            },
            {
                "id": 40852,
                "name": "Steam Workshop",
                "slug": "steam-workshop",
                "language": "eng",
                "games_count": 1211,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
            },
            {
                "id": 40832,
                "name": "Cross-Platform Multiplayer",
                "slug": "cross-platform-multiplayer",
                "language": "eng",
                "games_count": 1981,
                "image_background": "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg"
            },
            {
                "id": 42612,
                "name": "Быстрая",
                "slug": "bystraia",
                "language": "rus",
                "games_count": 1376,
                "image_background": "https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg"
            },
            {
                "id": 42496,
                "name": "Гонки",
                "slug": "gonki",
                "language": "rus",
                "games_count": 2452,
                "image_background": "https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg"
            },
            {
                "id": 11,
                "name": "Team-Based",
                "slug": "team-based",
                "language": "eng",
                "games_count": 1087,
                "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
            },
            {
                "id": 42450,
                "name": "Командная",
                "slug": "komandnaia",
                "language": "rus",
                "games_count": 790,
                "image_background": "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg"
            },
            {
                "id": 42476,
                "name": "Соревновательная",
                "slug": "sorevnovatelnaia",
                "language": "rus",
                "games_count": 766,
                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
            },
            {
                "id": 131,
                "name": "Fast-Paced",
                "slug": "fast-paced",
                "language": "eng",
                "games_count": 9454,
                "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
            },
            {
                "id": 170,
                "name": "Competitive",
                "slug": "competitive",
                "language": "eng",
                "games_count": 925,
                "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
            },
            {
                "id": 42531,
                "name": "Спортивная игра",
                "slug": "sportivnaia-igra",
                "language": "rus",
                "games_count": 3006,
                "image_background": "https://media.rawg.io/media/games/05a/05a6ca96307b25626d1af5607a8c96a8.jpg"
            },
            {
                "id": 42639,
                "name": "Локальная игра на четверых",
                "slug": "lokalnaia-igra-na-chetverykh",
                "language": "rus",
                "games_count": 926,
                "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
            },
            {
                "id": 182,
                "name": "4 Player Local",
                "slug": "4-player-local",
                "language": "eng",
                "games_count": 776,
                "image_background": "https://media.rawg.io/media/games/843/843499f98a871098e3e365a80b5c8768.jpg"
            },
            {
                "id": 42613,
                "name": "Разделение экрана",
                "slug": "razdelenie-ekrana",
                "language": "rus",
                "games_count": 375,
                "image_background": "https://media.rawg.io/media/games/1fa/1fa75f0895240b12fc65cc98ae9649fd.jpg"
            },
            {
                "id": 191,
                "name": "Football",
                "slug": "football",
                "language": "eng",
                "games_count": 1915,
                "image_background": "https://media.rawg.io/media/games/2ed/2ed38a102fe66a0ea98a8e09c660a458.jpg"
            },
            {
                "id": 190,
                "name": "Soccer",
                "slug": "soccer",
                "language": "eng",
                "games_count": 1725,
                "image_background": "https://media.rawg.io/media/screenshots/238/238b9bcc2b658e38be965b16c9e39075.jpg"
            },
            {
                "id": 42636,
                "name": "Американский футбол",
                "slug": "amerikanskii-futbol",
                "language": "rus",
                "games_count": 158,
                "image_background": "https://media.rawg.io/media/games/07a/07a68ba6b48089646960bbbdcfd3c875.jpg"
            },
            {
                "id": 42635,
                "name": "Футбол",
                "slug": "futbol-2",
                "language": "rus",
                "games_count": 159,
                "image_background": "https://media.rawg.io/media/screenshots/561/561b785e7414bd1eb27afa3c019c848e.jpg"
            }
        ],
        "esrb_rating": {
            "id": 1,
            "name": "Everyone",
            "slug": "everyone",
            "name_en": "Everyone",
            "name_ru": "Для всех"
        },
        "user_game": null,
        "reviews_count": 2468,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
            },
            {
                "id": 29880,
                "image": "https://media.rawg.io/media/screenshots/6a0/6a0745d9dcd0f7a368d372260baf91aa.jpg"
            },
            {
                "id": 29881,
                "image": "https://media.rawg.io/media/screenshots/5ea/5ea8ab6a35f189489b2ec8713d4f1619.jpg"
            },
            {
                "id": 29882,
                "image": "https://media.rawg.io/media/screenshots/508/5083fd170bf10606afd12afc7d17db04.jpg"
            },
            {
                "id": 29883,
                "image": "https://media.rawg.io/media/screenshots/02d/02d36e8e01a9f1063c6431ce09324e24.jpg"
            },
            {
                "id": 29884,
                "image": "https://media.rawg.io/media/screenshots/036/036ddade8156ac52ecf8de593123d12c.jpg"
            },
            {
                "id": 29885,
                "image": "https://media.rawg.io/media/screenshots/861/8615727f6e52f1632ae38d71e9e4c800.jpg"
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
                "id": 1,
                "name": "Racing",
                "slug": "racing"
            },
            {
                "id": 51,
                "name": "Indie",
                "slug": "indie"
            },
            {
                "id": 15,
                "name": "Sports",
                "slug": "sports"
            }
        ]
    },
    {
        "slug": "warframe",
        "name": "Warframe",
        "playtime": 7,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 187,
                    "name": "PlayStation 5",
                    "slug": "playstation5"
                }
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one"
                }
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4"
                }
            },
            {
                "platform": {
                    "id": 186,
                    "name": "Xbox Series S/X",
                    "slug": "xbox-series-x"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch"
                }
            }
        ],
        "stores": [
            {
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam"
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
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store"
                }
            },
            {
                "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            },
            {
                "store": {
                    "id": 11,
                    "name": "Epic Games",
                    "slug": "epic-games"
                }
            }
        ],
        "released": "2013-03-25",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        "rating": 3.42,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 737,
                "percent": 41.85
            },
            {
                "id": 3,
                "title": "meh",
                "count": 564,
                "percent": 32.03
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 232,
                "percent": 13.17
            },
            {
                "id": 1,
                "title": "skip",
                "count": 228,
                "percent": 12.95
            }
        ],
        "ratings_count": 1751,
        "reviews_text_count": 8,
        "added": 9942,
        "added_by_status": {
            "yet": 254,
            "owned": 7961,
            "beaten": 198,
            "toplay": 53,
            "dropped": 1246,
            "playing": 230
        },
        "metacritic": 73,
        "suggestions_count": 707,
        "updated": "2022-07-25T16:29:30",
        "id": 766,
        "score": null,
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 174439,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42396,
                "name": "Для одного игрока",
                "slug": "dlia-odnogo-igroka",
                "language": "rus",
                "games_count": 26247,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42417,
                "name": "Экшен",
                "slug": "ekshen",
                "language": "rus",
                "games_count": 27745,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 31969,
                "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
            },
            {
                "id": 7808,
                "name": "steam-trading-cards",
                "slug": "steam-trading-cards",
                "language": "eng",
                "games_count": 7582,
                "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
            },
            {
                "id": 42425,
                "name": "Для нескольких игроков",
                "slug": "dlia-neskolkikh-igrokov",
                "language": "rus",
                "games_count": 6572,
                "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
            },
            {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "language": "eng",
                "games_count": 14908,
                "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
            },
            {
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 8626,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
            },
            {
                "id": 42412,
                "name": "Ролевая игра",
                "slug": "rolevaia-igra",
                "language": "rus",
                "games_count": 11547,
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
                "id": 42428,
                "name": "Шутер",
                "slug": "shuter",
                "language": "rus",
                "games_count": 5313,
                "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
            },
            {
                "id": 149,
                "name": "Third Person",
                "slug": "third-person",
                "language": "eng",
                "games_count": 7500,
                "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
            },
            {
                "id": 32,
                "name": "Sci-fi",
                "slug": "sci-fi",
                "language": "eng",
                "games_count": 14901,
                "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            },
            {
                "id": 42423,
                "name": "Научная фантастика",
                "slug": "nauchnaia-fantastika",
                "language": "rus",
                "games_count": 4865,
                "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
            },
            {
                "id": 42441,
                "name": "От третьего лица",
                "slug": "ot-tretego-litsa",
                "language": "rus",
                "games_count": 3671,
                "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
            },
            {
                "id": 40845,
                "name": "Partial Controller Support",
                "slug": "partial-controller-support",
                "language": "eng",
                "games_count": 8613,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 30,
                "name": "FPS",
                "slug": "fps",
                "language": "eng",
                "games_count": 10879,
                "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
            },
            {
                "id": 42427,
                "name": "Шутер от первого лица",
                "slug": "shuter-ot-pervogo-litsa",
                "language": "rus",
                "games_count": 3329,
                "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
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
                "id": 42433,
                "name": "Совместная игра по сети",
                "slug": "sovmestnaia-igra-po-seti",
                "language": "rus",
                "games_count": 1229,
                "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
            },
            {
                "id": 79,
                "name": "Free to Play",
                "slug": "free-to-play",
                "language": "eng",
                "games_count": 4650,
                "image_background": "https://media.rawg.io/media/games/58a/58ac7f6569259dcc0b60b921869b19fc.jpg"
            },
            {
                "id": 42538,
                "name": "Бесплатная игра",
                "slug": "besplatnaia-igra",
                "language": "rus",
                "games_count": 4645,
                "image_background": "https://media.rawg.io/media/games/fba/fbae1bcfae1feffda6a11fbc1c939420.jpg"
            },
            {
                "id": 42446,
                "name": "Шутер от третьего лица",
                "slug": "shuter-ot-tretego-litsa",
                "language": "rus",
                "games_count": 1185,
                "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
            },
            {
                "id": 150,
                "name": "Third-Person Shooter",
                "slug": "third-person-shooter",
                "language": "eng",
                "games_count": 2432,
                "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
            },
            {
                "id": 25,
                "name": "Space",
                "slug": "space",
                "language": "eng",
                "games_count": 37873,
                "image_background": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg"
            },
            {
                "id": 468,
                "name": "role-playing",
                "slug": "role-playing",
                "language": "eng",
                "games_count": 1351,
                "image_background": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg"
            },
            {
                "id": 42487,
                "name": "Слэшер",
                "slug": "slesher",
                "language": "rus",
                "games_count": 1476,
                "image_background": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg"
            },
            {
                "id": 42422,
                "name": "Космос",
                "slug": "kosmos-2",
                "language": "rus",
                "games_count": 2579,
                "image_background": "https://media.rawg.io/media/games/2fd/2fd1b58116b10cc1f4442bee5593ca7c.jpg"
            },
            {
                "id": 68,
                "name": "Hack and Slash",
                "slug": "hack-and-slash",
                "language": "eng",
                "games_count": 2785,
                "image_background": "https://media.rawg.io/media/games/8e6/8e699e91cf77c2060b6d515e2135b1b1.jpg"
            },
            {
                "id": 42453,
                "name": "ММО",
                "slug": "mmo-2",
                "language": "rus",
                "games_count": 1948,
                "image_background": "https://media.rawg.io/media/screenshots/2b9/2b9a49e89c1ba892a648620194dcf327.jpg"
            },
            {
                "id": 40837,
                "name": "In-App Purchases",
                "slug": "in-app-purchases",
                "language": "eng",
                "games_count": 1752,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
            },
            {
                "id": 167,
                "name": "Futuristic",
                "slug": "futuristic",
                "language": "eng",
                "games_count": 3508,
                "image_background": "https://media.rawg.io/media/games/963/963815b2a1a88475a31f311b591e70fb.jpg"
            },
            {
                "id": 42643,
                "name": "Паркур",
                "slug": "parkur-2",
                "language": "rus",
                "games_count": 640,
                "image_background": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
            },
            {
                "id": 42451,
                "name": "Будущее",
                "slug": "budushchee",
                "language": "rus",
                "games_count": 1787,
                "image_background": "https://media.rawg.io/media/screenshots/72c/72c1405b3524e40c44c7860f2b5fa7f9.jpg"
            },
            {
                "id": 188,
                "name": "Parkour",
                "slug": "parkour",
                "language": "eng",
                "games_count": 2782,
                "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
            },
            {
                "id": 42470,
                "name": "Киберпанк",
                "slug": "kiberpank",
                "language": "rus",
                "games_count": 1058,
                "image_background": "https://media.rawg.io/media/games/345/34589f72fe291f0f38f12488f28c8f43.jpg"
            },
            {
                "id": 226,
                "name": "Cyberpunk",
                "slug": "cyberpunk",
                "language": "eng",
                "games_count": 3503,
                "image_background": "https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg"
            },
            {
                "id": 42567,
                "name": "Игра против ИИ",
                "slug": "igra-protiv-ii",
                "language": "rus",
                "games_count": 1888,
                "image_background": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg"
            },
            {
                "id": 171,
                "name": "PvE",
                "slug": "pve",
                "language": "eng",
                "games_count": 2062,
                "image_background": "https://media.rawg.io/media/games/5f2/5f25cf08217b40b9d8f02f95db1fdc1d.jpg"
            },
            {
                "id": 42584,
                "name": "Ниндзя",
                "slug": "nindzia",
                "language": "rus",
                "games_count": 308,
                "image_background": "https://media.rawg.io/media/games/c2f/c2fe235e65ccca9ce3ac83d25dfab400.jpg"
            },
            {
                "id": 186,
                "name": "Ninja",
                "slug": "ninja",
                "language": "eng",
                "games_count": 2103,
                "image_background": "https://media.rawg.io/media/screenshots/f7e/f7e70957c14ead1fa187a616dfa83e09.jpg"
            },
            {
                "id": 38844,
                "name": "looter shooter",
                "slug": "looter-shooter",
                "language": "eng",
                "games_count": 235,
                "image_background": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature",
            "name_en": "Mature",
            "name_ru": "С 17 лет"
        },
        "user_game": null,
        "reviews_count": 1761,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
            },
            {
                "id": 6718,
                "image": "https://media.rawg.io/media/screenshots/2e1/2e15c9f4cca692ebca67b7652e559f6d.jpg"
            },
            {
                "id": 6730,
                "image": "https://media.rawg.io/media/screenshots/70d/70de629465e39f8108aa533df9cff554.jpg"
            },
            {
                "id": 6734,
                "image": "https://media.rawg.io/media/screenshots/b3a/b3a368123558e7f4010e8b68518d6412.jpg"
            },
            {
                "id": 6736,
                "image": "https://media.rawg.io/media/screenshots/fd2/fd2225327c9dca60c9acea0edca8c5fc.jpg"
            },
            {
                "id": 6740,
                "image": "https://media.rawg.io/media/screenshots/34e/34e3c0d71551f07c3bb709fe12f18ca2.jpg"
            },
            {
                "id": 6743,
                "image": "https://media.rawg.io/media/screenshots/977/977735a2fad2bc47917424e20e9dff56.jpg"
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
                "id": 2,
                "name": "Shooter",
                "slug": "shooter"
            },
            {
                "id": 59,
                "name": "Massively Multiplayer",
                "slug": "massively-multiplayer"
            },
            {
                "id": 4,
                "name": "Action",
                "slug": "action"
            }
        ]
    },
    {
        "slug": "terraria",
        "name": "Terraria",
        "playtime": 13,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one"
                }
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch"
                }
            },
            {
                "platform": {
                    "id": 3,
                    "name": "iOS",
                    "slug": "ios"
                }
            },
            {
                "platform": {
                    "id": 21,
                    "name": "Android",
                    "slug": "android"
                }
            },
            {
                "platform": {
                    "id": 8,
                    "name": "Nintendo 3DS",
                    "slug": "nintendo-3ds"
                }
            },
            {
                "platform": {
                    "id": 5,
                    "name": "macOS",
                    "slug": "macos"
                }
            },
            {
                "platform": {
                    "id": 6,
                    "name": "Linux",
                    "slug": "linux"
                }
            },
            {
                "platform": {
                    "id": 14,
                    "name": "Xbox 360",
                    "slug": "xbox360"
                }
            },
            {
                "platform": {
                    "id": 16,
                    "name": "PlayStation 3",
                    "slug": "playstation3"
                }
            },
            {
                "platform": {
                    "id": 19,
                    "name": "PS Vita",
                    "slug": "ps-vita"
                }
            },
            {
                "platform": {
                    "id": 10,
                    "name": "Wii U",
                    "slug": "wii-u"
                }
            }
        ],
        "stores": [
            {
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam"
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
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store"
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
                    "id": 5,
                    "name": "GOG",
                    "slug": "gog"
                }
            },
            {
                "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            },
            {
                "store": {
                    "id": 8,
                    "name": "Google Play",
                    "slug": "google-play"
                }
            }
        ],
        "released": "2011-05-16",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        "rating": 4.04,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 842,
                "percent": 43.6
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 686,
                "percent": 35.53
            },
            {
                "id": 3,
                "title": "meh",
                "count": 298,
                "percent": 15.43
            },
            {
                "id": 1,
                "title": "skip",
                "count": 105,
                "percent": 5.44
            }
        ],
        "ratings_count": 1916,
        "reviews_text_count": 9,
        "added": 9907,
        "added_by_status": {
            "yet": 316,
            "owned": 7332,
            "beaten": 922,
            "toplay": 140,
            "dropped": 1020,
            "playing": 177
        },
        "metacritic": 81,
        "suggestions_count": 290,
        "updated": "2022-07-24T14:29:49",
        "id": 422,
        "score": null,
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 174439,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "language": "eng",
                "games_count": 26597,
                "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 31969,
                "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23400,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 7808,
                "name": "steam-trading-cards",
                "slug": "steam-trading-cards",
                "language": "eng",
                "games_count": 7582,
                "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12381,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
            },
            {
                "id": 40849,
                "name": "Steam Cloud",
                "slug": "steam-cloud",
                "language": "eng",
                "games_count": 12102,
                "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
            },
            {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "language": "eng",
                "games_count": 14908,
                "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
            },
            {
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 8626,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
            },
            {
                "id": 36,
                "name": "Open World",
                "slug": "open-world",
                "language": "eng",
                "games_count": 5319,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 45,
                "name": "2D",
                "slug": "2d",
                "language": "eng",
                "games_count": 168831,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
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
                "id": 37,
                "name": "Sandbox",
                "slug": "sandbox",
                "language": "eng",
                "games_count": 5069,
                "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
            },
            {
                "id": 1,
                "name": "Survival",
                "slug": "survival",
                "language": "eng",
                "games_count": 6183,
                "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
            },
            {
                "id": 6,
                "name": "Exploration",
                "slug": "exploration",
                "language": "eng",
                "games_count": 16137,
                "image_background": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg"
            },
            {
                "id": 397,
                "name": "Online multiplayer",
                "slug": "online-multiplayer",
                "language": "eng",
                "games_count": 3808,
                "image_background": "https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg"
            },
            {
                "id": 122,
                "name": "Pixel Graphics",
                "slug": "pixel-graphics",
                "language": "eng",
                "games_count": 78278,
                "image_background": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg"
            },
            {
                "id": 468,
                "name": "role-playing",
                "slug": "role-playing",
                "language": "eng",
                "games_count": 1351,
                "image_background": "https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg"
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
                "id": 5,
                "name": "Replay Value",
                "slug": "replay-value",
                "language": "eng",
                "games_count": 1112,
                "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
            },
            {
                "id": 107,
                "name": "Family Friendly",
                "slug": "family-friendly",
                "language": "eng",
                "games_count": 3746,
                "image_background": "https://media.rawg.io/media/games/a87/a8743bdee8627c55bb9f2f01b9136ac1.jpg"
            },
            {
                "id": 125,
                "name": "Crafting",
                "slug": "crafting",
                "language": "eng",
                "games_count": 2746,
                "image_background": "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg"
            },
            {
                "id": 39,
                "name": "Building",
                "slug": "building",
                "language": "eng",
                "games_count": 4393,
                "image_background": "https://media.rawg.io/media/games/5cb/5cbbc5cd24677331c85253f961cad72a.jpg"
            },
            {
                "id": 337,
                "name": "overlay",
                "slug": "overlay",
                "language": "eng",
                "games_count": 213,
                "image_background": "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg"
            }
        ],
        "esrb_rating": {
            "id": 3,
            "name": "Teen",
            "slug": "teen",
            "name_en": "Teen",
            "name_ru": "С 13 лет"
        },
        "user_game": null,
        "reviews_count": 1931,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
            },
            {
                "id": 59698,
                "image": "https://media.rawg.io/media/screenshots/3af/3afd69426804e7162edbe03cd9f8d0f4.jpg"
            },
            {
                "id": 59703,
                "image": "https://media.rawg.io/media/screenshots/48c/48c7e3e1268467b91b24c7da7c6539df.jpg"
            },
            {
                "id": 59705,
                "image": "https://media.rawg.io/media/screenshots/84b/84b447d4df99d42ffe479c7feb438171.jpg"
            },
            {
                "id": 59711,
                "image": "https://media.rawg.io/media/screenshots/de0/de053efd6104719567d23fb0dad58b92.jpg"
            },
            {
                "id": 59714,
                "image": "https://media.rawg.io/media/screenshots/490/4907be07a7771c8a7f0eb30c3a1fadc0.jpg"
            },
            {
                "id": 59718,
                "image": "https://media.rawg.io/media/screenshots/485/485ce1d6c733357664be153777097af1.jpg"
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
                    "id": 4,
                    "name": "iOS",
                    "slug": "ios"
                }
            },
            {
                "platform": {
                    "id": 8,
                    "name": "Android",
                    "slug": "android"
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
                "id": 83,
                "name": "Platformer",
                "slug": "platformer"
            },
            {
                "id": 51,
                "name": "Indie",
                "slug": "indie"
            },
            {
                "id": 4,
                "name": "Action",
                "slug": "action"
            }
        ]
    },
    {
        "slug": "the-walking-dead",
        "name": "The Walking Dead: Season 1",
        "playtime": 9,
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 18,
                    "name": "PlayStation 4",
                    "slug": "playstation4"
                }
            },
            {
                "platform": {
                    "id": 1,
                    "name": "Xbox One",
                    "slug": "xbox-one"
                }
            },
            {
                "platform": {
                    "id": 7,
                    "name": "Nintendo Switch",
                    "slug": "nintendo-switch"
                }
            },
            {
                "platform": {
                    "id": 3,
                    "name": "iOS",
                    "slug": "ios"
                }
            },
            {
                "platform": {
                    "id": 21,
                    "name": "Android",
                    "slug": "android"
                }
            },
            {
                "platform": {
                    "id": 5,
                    "name": "macOS",
                    "slug": "macos"
                }
            },
            {
                "platform": {
                    "id": 14,
                    "name": "Xbox 360",
                    "slug": "xbox360"
                }
            },
            {
                "platform": {
                    "id": 16,
                    "name": "PlayStation 3",
                    "slug": "playstation3"
                }
            },
            {
                "platform": {
                    "id": 19,
                    "name": "PS Vita",
                    "slug": "ps-vita"
                }
            }
        ],
        "stores": [
            {
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam"
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
                    "id": 2,
                    "name": "Xbox Store",
                    "slug": "xbox-store"
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
                    "id": 5,
                    "name": "GOG",
                    "slug": "gog"
                }
            },
            {
                "store": {
                    "id": 6,
                    "name": "Nintendo Store",
                    "slug": "nintendo"
                }
            },
            {
                "store": {
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
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
        ],
        "released": "2012-04-23",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        "rating": 4.31,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 1069,
                "percent": 51.32
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 757,
                "percent": 36.34
            },
            {
                "id": 3,
                "title": "meh",
                "count": 176,
                "percent": 8.45
            },
            {
                "id": 1,
                "title": "skip",
                "count": 81,
                "percent": 3.89
            }
        ],
        "ratings_count": 2069,
        "reviews_text_count": 11,
        "added": 9654,
        "added_by_status": {
            "yet": 299,
            "owned": 6704,
            "beaten": 2207,
            "toplay": 124,
            "dropped": 284,
            "playing": 36
        },
        "metacritic": null,
        "suggestions_count": 625,
        "updated": "2022-07-24T22:52:46",
        "id": 23027,
        "score": null,
        "clip": null,
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 174439,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            {
                "id": 42396,
                "name": "Для одного игрока",
                "slug": "dlia-odnogo-igroka",
                "language": "rus",
                "games_count": 26247,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42417,
                "name": "Экшен",
                "slug": "ekshen",
                "language": "rus",
                "games_count": 27745,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            {
                "id": 42392,
                "name": "Приключение",
                "slug": "prikliuchenie",
                "language": "rus",
                "games_count": 25733,
                "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 23400,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "language": "eng",
                "games_count": 12381,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
            },
            {
                "id": 42400,
                "name": "Атмосфера",
                "slug": "atmosfera",
                "language": "rus",
                "games_count": 6102,
                "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            },
            {
                "id": 42394,
                "name": "Глубокий сюжет",
                "slug": "glubokii-siuzhet",
                "language": "rus",
                "games_count": 6951,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 118,
                "name": "Story Rich",
                "slug": "story-rich",
                "language": "eng",
                "games_count": 15302,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 42435,
                "name": "Шедевр",
                "slug": "shedevr",
                "language": "rus",
                "games_count": 1059,
                "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
                "id": 149,
                "name": "Third Person",
                "slug": "third-person",
                "language": "eng",
                "games_count": 7500,
                "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
            },
            {
                "id": 16,
                "name": "Horror",
                "slug": "horror",
                "language": "eng",
                "games_count": 34857,
                "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
            },
            {
                "id": 42491,
                "name": "Мясо",
                "slug": "miaso",
                "language": "rus",
                "games_count": 3536,
                "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
            },
            {
                "id": 26,
                "name": "Gore",
                "slug": "gore",
                "language": "eng",
                "games_count": 4556,
                "image_background": "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg"
            },
            {
                "id": 1,
                "name": "Survival",
                "slug": "survival",
                "language": "eng",
                "games_count": 6183,
                "image_background": "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
            },
            {
                "id": 42452,
                "name": "Выживание",
                "slug": "vyzhivanie",
                "language": "rus",
                "games_count": 3795,
                "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
            },
            {
                "id": 63,
                "name": "Zombies",
                "slug": "zombies",
                "language": "eng",
                "games_count": 8828,
                "image_background": "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg"
            },
            {
                "id": 141,
                "name": "Point & Click",
                "slug": "point-click",
                "language": "eng",
                "games_count": 10158,
                "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
            },
            {
                "id": 42544,
                "name": "Зомби",
                "slug": "zombi-2",
                "language": "rus",
                "games_count": 1639,
                "image_background": "https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg"
            },
            {
                "id": 43,
                "name": "Post-apocalyptic",
                "slug": "post-apocalyptic",
                "language": "eng",
                "games_count": 2742,
                "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
            },
            {
                "id": 42390,
                "name": "Решения с последствиями",
                "slug": "resheniia-s-posledstviiami",
                "language": "rus",
                "games_count": 2681,
                "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
            },
            {
                "id": 42488,
                "name": "Пост-апокалипсис",
                "slug": "post-apokalipsis",
                "language": "rus",
                "games_count": 749,
                "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
            },
            {
                "id": 42529,
                "name": "Для взрослых",
                "slug": "dlia-vzroslykh",
                "language": "rus",
                "games_count": 1357,
                "image_background": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
            },
            {
                "id": 192,
                "name": "Mature",
                "slug": "mature",
                "language": "eng",
                "games_count": 1526,
                "image_background": "https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg"
            },
            {
                "id": 145,
                "name": "Choices Matter",
                "slug": "choices-matter",
                "language": "eng",
                "games_count": 2399,
                "image_background": "https://media.rawg.io/media/games/704/704f831d2d132e9614931f1c4eab9e86.jpg"
            },
            {
                "id": 90,
                "name": "Visual Novel",
                "slug": "visual-novel",
                "language": "eng",
                "games_count": 3462,
                "image_background": "https://media.rawg.io/media/games/c60/c60be8ddf91ede65c65b13eff2e06c37.jpg"
            },
            {
                "id": 42445,
                "name": "Сериал",
                "slug": "serial-2",
                "language": "rus",
                "games_count": 142,
                "image_background": "https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg"
            },
            {
                "id": 232,
                "name": "Episodic",
                "slug": "episodic",
                "language": "eng",
                "games_count": 416,
                "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
            },
            {
                "id": 209,
                "name": "Drama",
                "slug": "drama",
                "language": "eng",
                "games_count": 2015,
                "image_background": "https://media.rawg.io/media/games/e35/e355efef97722d50bec3482a2263b962.jpg"
            },
            {
                "id": 42691,
                "name": "Эмоциональная",
                "slug": "emotsionalnaia",
                "language": "rus",
                "games_count": 1107,
                "image_background": "https://media.rawg.io/media/screenshots/750/75092895cb37edc24b83bebf1ebbf4e7.jpg"
            },
            {
                "id": 268,
                "name": "Comic Book",
                "slug": "comic-book",
                "language": "eng",
                "games_count": 597,
                "image_background": "https://media.rawg.io/media/games/24d/24de02677ce93c7c9fd0b08ae78a17aa.jpg"
            },
            {
                "id": 42525,
                "name": "По комиксу",
                "slug": "po-komiksu",
                "language": "rus",
                "games_count": 620,
                "image_background": "https://media.rawg.io/media/games/7a5/7a5f7a3e58593bfda983507c2ddbc891.jpg"
            },
            {
                "id": 42650,
                "name": "Драма",
                "slug": "drama-2",
                "language": "rus",
                "games_count": 1449,
                "image_background": "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg"
            },
            {
                "id": 269,
                "name": "Quick-Time Events",
                "slug": "quick-time-events",
                "language": "eng",
                "games_count": 277,
                "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            },
            {
                "id": 42602,
                "name": "Свобода выбора",
                "slug": "svoboda-vybora",
                "language": "rus",
                "games_count": 786,
                "image_background": "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg"
            },
            {
                "id": 222,
                "name": "Choose Your Own Adventure",
                "slug": "choose-your-own-adventure",
                "language": "eng",
                "games_count": 1439,
                "image_background": "https://media.rawg.io/media/games/41a/41a648b954d9a750b2595995b113e684.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature",
            "name_en": "Mature",
            "name_ru": "С 17 лет"
        },
        "user_game": null,
        "reviews_count": 2083,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
            },
            {
                "id": 227608,
                "image": "https://media.rawg.io/media/screenshots/d38/d38c78ec9cc707bf42652452235dbe8c.jpg"
            },
            {
                "id": 227609,
                "image": "https://media.rawg.io/media/screenshots/bdb/bdb7dd4891bfbb0a80cd49b36ffd1a20.jpg"
            },
            {
                "id": 227610,
                "image": "https://media.rawg.io/media/screenshots/72b/72b67d15b5ae5538734bac2b195f2976.jpg"
            },
            {
                "id": 227611,
                "image": "https://media.rawg.io/media/screenshots/74d/74d6a18a7b5592777de8f6a7cdbc91f8.jpg"
            },
            {
                "id": 227612,
                "image": "https://media.rawg.io/media/screenshots/52a/52aca015b4748b1b0bbbacf33110e983.jpg"
            },
            {
                "id": 227613,
                "image": "https://media.rawg.io/media/screenshots/94b/94b6701276d06b5b562890601fd6abaa.jpg"
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
                    "id": 4,
                    "name": "iOS",
                    "slug": "ios"
                }
            },
            {
                "platform": {
                    "id": 8,
                    "name": "Android",
                    "slug": "android"
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
                    "id": 7,
                    "name": "Nintendo",
                    "slug": "nintendo"
                }
            }
        ],
        "genres": [
            {
                "id": 3,
                "name": "Adventure",
                "slug": "adventure"
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
  return (
    <NestedLayout>
        <div className="container">
            <GenreHeader content={HeaderContent}/>
            <GameList name='For You' content={GameListContent} swipeable/>
            <GameList name='Top Games of the Year' content={GameListContent} swipeable/>
            <GameList name='Based on Your Platform' content={GameListContent} filter filterList={gameListFilter} listLinks='Platforms' />
            <GameList name='All games' content={GameListContent}/>
        </div>
    </NestedLayout>
  )
}
