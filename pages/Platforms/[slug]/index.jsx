import React from 'react';
import Components from '../../../components'

export default function TagsPages() {
    const {NestedLayout,GenreHeader, GameList} = Components();
    const HeaderContent ={
        "id": 7,
        "name": "Nintendo Switch",
        "slug": "nintendo-switch",
        "games_count": 4894,
        "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
        "description": "<p>Nintendo Switch is a hybrid video game console made by Nintendo. The system represents a tablet-like device with a touchscreen with detachable controllers on the sides. The system can be inserted into a docking station connected to the TV and serve as a home console. This allows the games on the system to be played both on a big screen or in the handheld with no need to reset the system to change the modes. The central controller for the Switch is a pair of Joy-Cons – small controllers both of which feature four face buttons, an analog stick, two side buttons, and high-definition vibration. The controllers can be used separately by different players, together using a grip accessory or attached to the system in handheld mode.<br />\nUnlike many previous Nintendo consoles, as for 2019, the system has strong support from third-party developers, especially from the indie scene. The Switch introduced Nintendo Switch Online, a subscription-based service that resembles Xbox Live Gold and PlayStation Plus. It allows players to play online multiplayer, offers a selection of classic Nintendo games and lets players use cloud saves.</p>",
        "image": null,
        "year_start": null,
        "year_end": null
    }
     const GameListContent = [
    {
        "slug": "grand-theft-auto-v",
        "name": "Grand Theft Auto V",
        "playtime": 72,
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
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
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
        "released": "2013-09-17",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "rating": 4.48,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 3475,
                "percent": 59.26
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1911,
                "percent": 32.59
            },
            {
                "id": 3,
                "title": "meh",
                "count": 373,
                "percent": 6.36
            },
            {
                "id": 1,
                "title": "skip",
                "count": 105,
                "percent": 1.79
            }
        ],
        "ratings_count": 5789,
        "reviews_text_count": 43,
        "added": 17760,
        "added_by_status": {
            "yet": 445,
            "owned": 10404,
            "beaten": 4853,
            "toplay": 520,
            "dropped": 894,
            "playing": 644
        },
        "metacritic": 91,
        "suggestions_count": 410,
        "updated": "2022-07-25T16:45:51",
        "id": 3498,
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
                "id": 42482,
                "name": "Смешная",
                "slug": "smeshnaia",
                "language": "rus",
                "games_count": 5192,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
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
                "id": 37,
                "name": "Sandbox",
                "slug": "sandbox",
                "language": "eng",
                "games_count": 5069,
                "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
            },
            {
                "id": 42481,
                "name": "Юмор",
                "slug": "iumor",
                "language": "rus",
                "games_count": 3357,
                "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
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
                "id": 123,
                "name": "Comedy",
                "slug": "comedy",
                "language": "eng",
                "games_count": 9307,
                "image_background": "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg"
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
                "id": 62,
                "name": "Moddable",
                "slug": "moddable",
                "language": "eng",
                "games_count": 704,
                "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
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
                "id": 42529,
                "name": "Для взрослых",
                "slug": "dlia-vzroslykh",
                "language": "rus",
                "games_count": 1357,
                "image_background": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
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
            "slug": "mature",
            "name_en": "Mature",
            "name_ru": "С 17 лет"
        },
        "user_game": null,
        "reviews_count": 5864,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
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
                "id": 3,
                "name": "Adventure",
                "slug": "adventure"
            },
            {
                "id": 4,
                "name": "Action",
                "slug": "action"
            }
        ]
    },
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
        "slug": "portal-2",
        "name": "Portal 2",
        "playtime": 11,
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
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
                }
            }
        ],
        "released": "2011-04-18",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "rating": 4.61,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 3390,
                "percent": 70.26
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1201,
                "percent": 24.89
            },
            {
                "id": 3,
                "title": "meh",
                "count": 133,
                "percent": 2.76
            },
            {
                "id": 1,
                "title": "skip",
                "count": 101,
                "percent": 2.09
            }
        ],
        "ratings_count": 4784,
        "reviews_text_count": 28,
        "added": 15554,
        "added_by_status": {
            "yet": 520,
            "owned": 9588,
            "beaten": 4558,
            "toplay": 301,
            "dropped": 461,
            "playing": 126
        },
        "metacritic": 95,
        "suggestions_count": 545,
        "updated": "2022-07-24T20:40:09",
        "id": 4200,
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
                "id": 42425,
                "name": "Для нескольких игроков",
                "slug": "dlia-neskolkikh-igrokov",
                "language": "rus",
                "games_count": 6572,
                "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
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
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 8626,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
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
                "id": 42482,
                "name": "Смешная",
                "slug": "smeshnaia",
                "language": "rus",
                "games_count": 5192,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
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
                "id": 42481,
                "name": "Юмор",
                "slug": "iumor",
                "language": "rus",
                "games_count": 3357,
                "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
            },
            {
                "id": 189,
                "name": "Female Protagonist",
                "slug": "female-protagonist",
                "language": "eng",
                "games_count": 8717,
                "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
            },
            {
                "id": 42404,
                "name": "Женщина-протагонист",
                "slug": "zhenshchina-protagonist",
                "language": "rus",
                "games_count": 2416,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
            },
            {
                "id": 123,
                "name": "Comedy",
                "slug": "comedy",
                "language": "eng",
                "games_count": 9307,
                "image_background": "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg"
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
                "id": 75,
                "name": "Local Co-Op",
                "slug": "local-co-op",
                "language": "eng",
                "games_count": 4571,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
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
                "id": 25,
                "name": "Space",
                "slug": "space",
                "language": "eng",
                "games_count": 37873,
                "image_background": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg"
            },
            {
                "id": 40838,
                "name": "Includes level editor",
                "slug": "includes-level-editor",
                "language": "eng",
                "games_count": 1517,
                "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
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
                "id": 40833,
                "name": "Captions available",
                "slug": "captions-available",
                "language": "eng",
                "games_count": 1175,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
            },
            {
                "id": 40834,
                "name": "Commentary available",
                "slug": "commentary-available",
                "language": "eng",
                "games_count": 245,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 87,
                "name": "Science",
                "slug": "science",
                "language": "eng",
                "games_count": 1353,
                "image_background": "https://media.rawg.io/media/games/bda/bdab2603c0dc67268d0610449bc7df16.jpg"
            },
            {
                "id": 42501,
                "name": "Наука",
                "slug": "nauka",
                "language": "rus",
                "games_count": 459,
                "image_background": "https://media.rawg.io/media/screenshots/18c/18c0bf89ecef8170cdd97075dbbadded.jpg"
            }
        ],
        "esrb_rating": {
            "id": 2,
            "name": "Everyone 10+",
            "slug": "everyone-10-plus",
            "name_en": "Everyone 10+",
            "name_ru": "С 10 лет"
        },
        "user_game": null,
        "reviews_count": 4825,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
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
                "slug": "shooter"
            },
            {
                "id": 7,
                "name": "Puzzle",
                "slug": "puzzle"
            }
        ]
    },
    {
        "slug": "tomb-raider",
        "name": "Tomb Raider (2013)",
        "playtime": 11,
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
                    "id": 4,
                    "name": "App Store",
                    "slug": "apple-appstore"
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
        "released": "2013-03-05",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "rating": 4.05,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 2042,
                "percent": 60.29
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 862,
                "percent": 25.45
            },
            {
                "id": 3,
                "title": "meh",
                "count": 385,
                "percent": 11.37
            },
            {
                "id": 1,
                "title": "skip",
                "count": 98,
                "percent": 2.89
            }
        ],
        "ratings_count": 3365,
        "reviews_text_count": 10,
        "added": 13910,
        "added_by_status": {
            "yet": 559,
            "owned": 9082,
            "beaten": 3541,
            "toplay": 207,
            "dropped": 424,
            "playing": 97
        },
        "metacritic": 86,
        "suggestions_count": 621,
        "updated": "2022-07-25T17:43:55",
        "id": 5286,
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
                "id": 42425,
                "name": "Для нескольких игроков",
                "slug": "dlia-neskolkikh-igrokov",
                "language": "rus",
                "games_count": 6572,
                "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
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
                "id": 42465,
                "name": "Головоломка",
                "slug": "golovolomka",
                "language": "rus",
                "games_count": 9267,
                "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
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
                "id": 193,
                "name": "Classic",
                "slug": "classic",
                "language": "eng",
                "games_count": 1696,
                "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
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
                "id": 189,
                "name": "Female Protagonist",
                "slug": "female-protagonist",
                "language": "eng",
                "games_count": 8717,
                "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
            },
            {
                "id": 42404,
                "name": "Женщина-протагонист",
                "slug": "zhenshchina-protagonist",
                "language": "rus",
                "games_count": 2416,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
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
                "id": 42464,
                "name": "Исследование",
                "slug": "issledovanie",
                "language": "rus",
                "games_count": 2989,
                "image_background": "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg"
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
                "id": 42467,
                "name": "Ретро",
                "slug": "retro-2",
                "language": "rus",
                "games_count": 4556,
                "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
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
                "id": 74,
                "name": "Retro",
                "slug": "retro",
                "language": "eng",
                "games_count": 33226,
                "image_background": "https://media.rawg.io/media/games/6c0/6c00ee85d1344f58c469e8e47fd8ae7c.jpg"
            },
            {
                "id": 69,
                "name": "Action-Adventure",
                "slug": "action-adventure",
                "language": "eng",
                "games_count": 11516,
                "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
            },
            {
                "id": 42490,
                "name": "Приключенческий экшен",
                "slug": "prikliuchencheskii-ekshen",
                "language": "rus",
                "games_count": 4125,
                "image_background": "https://media.rawg.io/media/games/032/0329db96e252aa41e672da2ba16f914c.jpg"
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
                "id": 42484,
                "name": "90-е",
                "slug": "90-e",
                "language": "rus",
                "games_count": 1247,
                "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
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
                "id": 42512,
                "name": "Олдскул",
                "slug": "oldskul",
                "language": "rus",
                "games_count": 1850,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            },
            {
                "id": 42494,
                "name": "3D-платформер",
                "slug": "3d-platformer-2",
                "language": "rus",
                "games_count": 1920,
                "image_background": "https://media.rawg.io/media/screenshots/afc/afc146e4644b7a15282e4ad4af9b2444.jpg"
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
                "id": 126,
                "name": "Dinosaurs",
                "slug": "dinosaurs",
                "language": "eng",
                "games_count": 1484,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            },
            {
                "id": 42716,
                "name": "Лара Крофт",
                "slug": "lara-kroft",
                "language": "rus",
                "games_count": 14,
                "image_background": "https://media.rawg.io/media/games/9f1/9f14ee1ccd4995ba93be9b80d0ee30d7.jpg"
            },
            {
                "id": 306,
                "name": "Lara Croft",
                "slug": "lara-croft",
                "language": "eng",
                "games_count": 14,
                "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
            },
            {
                "id": 42651,
                "name": "Динозавры",
                "slug": "dinozavry",
                "language": "rus",
                "games_count": 238,
                "image_background": "https://media.rawg.io/media/games/ea6/ea6d85ea0239943ff31a86097fb3fbc3.jpg"
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
        "reviews_count": 3387,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
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
                "id": 3,
                "name": "Adventure",
                "slug": "adventure"
            },
            {
                "id": 4,
                "name": "Action",
                "slug": "action"
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
        "slug": "counter-strike-global-offensive",
        "name": "Counter-Strike: Global Offensive",
        "playtime": 65,
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
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
                }
            }
        ],
        "released": "2012-08-21",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        "rating": 3.57,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 1377,
                "percent": 46.98
            },
            {
                "id": 3,
                "title": "meh",
                "count": 774,
                "percent": 26.41
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 461,
                "percent": 15.73
            },
            {
                "id": 1,
                "title": "skip",
                "count": 319,
                "percent": 10.88
            }
        ],
        "ratings_count": 2905,
        "reviews_text_count": 20,
        "added": 13459,
        "added_by_status": {
            "yet": 215,
            "owned": 10253,
            "beaten": 794,
            "toplay": 64,
            "dropped": 1573,
            "playing": 560
        },
        "metacritic": 81,
        "suggestions_count": 579,
        "updated": "2022-07-24T16:37:13",
        "id": 4291,
        "score": null,
        "clip": null,
        "tags": [
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
                "id": 42420,
                "name": "Сложная",
                "slug": "slozhnaia",
                "language": "rus",
                "games_count": 4008,
                "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
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
                "id": 62,
                "name": "Moddable",
                "slug": "moddable",
                "language": "eng",
                "games_count": 704,
                "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
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
                "id": 157,
                "name": "PvP",
                "slug": "pvp",
                "language": "eng",
                "games_count": 5833,
                "image_background": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg"
            },
            {
                "id": 70,
                "name": "War",
                "slug": "war",
                "language": "eng",
                "games_count": 7999,
                "image_background": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
            },
            {
                "id": 42434,
                "name": "Игрок против игрока",
                "slug": "igrok-protiv-igroka",
                "language": "rus",
                "games_count": 2570,
                "image_background": "https://media.rawg.io/media/games/f54/f54e9fb2f4aac37810ea1a69a3e4480a.jpg"
            },
            {
                "id": 42430,
                "name": "Война",
                "slug": "voina",
                "language": "rus",
                "games_count": 1391,
                "image_background": "https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg"
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
                "id": 42612,
                "name": "Быстрая",
                "slug": "bystraia",
                "language": "rus",
                "games_count": 1376,
                "image_background": "https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg"
            },
            {
                "id": 42460,
                "name": "Реализм",
                "slug": "realizm",
                "language": "rus",
                "games_count": 2686,
                "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
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
                "id": 77,
                "name": "Realistic",
                "slug": "realistic",
                "language": "eng",
                "games_count": 2705,
                "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
            },
            {
                "id": 42431,
                "name": "Военные действия",
                "slug": "voennye-deistviia",
                "language": "rus",
                "games_count": 1049,
                "image_background": "https://media.rawg.io/media/games/fcf/fcf81e19683092d40d519a6d6a9bcf6e.jpg"
            },
            {
                "id": 81,
                "name": "Military",
                "slug": "military",
                "language": "eng",
                "games_count": 1061,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
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
                "id": 40856,
                "name": "Valve Anti-Cheat enabled",
                "slug": "valve-anti-cheat-enabled",
                "language": "eng",
                "games_count": 104,
                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
            },
            {
                "id": 42588,
                "name": "Киберспорт",
                "slug": "kibersport",
                "language": "rus",
                "games_count": 384,
                "image_background": "https://media.rawg.io/media/games/96f/96f0c07b6c156f05cb76b2ffba32bffc.jpg"
            },
            {
                "id": 73,
                "name": "e-sports",
                "slug": "e-sports",
                "language": "eng",
                "games_count": 80,
                "image_background": "https://media.rawg.io/media/screenshots/316/31651e0ec39c6718c5136ab624431e7f.jpg"
            },
            {
                "id": 245,
                "name": "Trading",
                "slug": "trading",
                "language": "eng",
                "games_count": 872,
                "image_background": "https://media.rawg.io/media/screenshots/fef/fefb9cd7cedb7bf1c2e69f159edb1272.jpg"
            },
            {
                "id": 42498,
                "name": "Обмен",
                "slug": "obmen",
                "language": "rus",
                "games_count": 233,
                "image_background": "https://media.rawg.io/media/screenshots/7fd/7fd4b29fa06a34e2ebda37283265faeb.jpg"
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
        "reviews_count": 2931,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
            },
            {
                "id": 81644,
                "image": "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg"
            },
            {
                "id": 81645,
                "image": "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg"
            },
            {
                "id": 81646,
                "image": "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg"
            },
            {
                "id": 81647,
                "image": "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg"
            },
            {
                "id": 81648,
                "image": "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg"
            },
            {
                "id": 81649,
                "image": "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
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
        "slug": "left-4-dead-2",
        "name": "Left 4 Dead 2",
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
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
                }
            }
        ],
        "released": "2009-11-17",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "rating": 4.09,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 1496,
                "percent": 53.28
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 879,
                "percent": 31.3
            },
            {
                "id": 3,
                "title": "meh",
                "count": 330,
                "percent": 11.75
            },
            {
                "id": 1,
                "title": "skip",
                "count": 103,
                "percent": 3.67
            }
        ],
        "ratings_count": 2793,
        "reviews_text_count": 8,
        "added": 13275,
        "added_by_status": {
            "yet": 333,
            "owned": 9717,
            "beaten": 2084,
            "toplay": 84,
            "dropped": 930,
            "playing": 127
        },
        "metacritic": 89,
        "suggestions_count": 577,
        "updated": "2022-07-24T16:37:26",
        "id": 12020,
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
                "id": 9,
                "name": "Online Co-Op",
                "slug": "online-co-op",
                "language": "eng",
                "games_count": 3638,
                "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
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
                "id": 75,
                "name": "Local Co-Op",
                "slug": "local-co-op",
                "language": "eng",
                "games_count": 4571,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
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
                "id": 63,
                "name": "Zombies",
                "slug": "zombies",
                "language": "eng",
                "games_count": 8828,
                "image_background": "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg"
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
                "id": 42438,
                "name": "Поддержка модификаций",
                "slug": "podderzhka-modifikatsii",
                "language": "rus",
                "games_count": 504,
                "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
            },
            {
                "id": 42520,
                "name": "Реиграбельность",
                "slug": "reigrabelnost",
                "language": "rus",
                "games_count": 1662,
                "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
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
                "id": 40833,
                "name": "Captions available",
                "slug": "captions-available",
                "language": "eng",
                "games_count": 1175,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
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
                "id": 17,
                "name": "Survival Horror",
                "slug": "survival-horror",
                "language": "eng",
                "games_count": 6537,
                "image_background": "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg"
            },
            {
                "id": 42471,
                "name": "Хоррор на выживание",
                "slug": "khorror-na-vyzhivanie",
                "language": "rus",
                "games_count": 1710,
                "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
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
                "id": 40856,
                "name": "Valve Anti-Cheat enabled",
                "slug": "valve-anti-cheat-enabled",
                "language": "eng",
                "games_count": 104,
                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
            },
            {
                "id": 40834,
                "name": "Commentary available",
                "slug": "commentary-available",
                "language": "eng",
                "games_count": 245,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 40839,
                "name": "Includes Source SDK",
                "slug": "includes-source-sdk",
                "language": "eng",
                "games_count": 56,
                "image_background": "https://media.rawg.io/media/screenshots/3b0/3b0240fb639701e6008e9c37f2db0a2c.jpg"
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
        "reviews_count": 2808,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 99748,
                "image": "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg"
            },
            {
                "id": 99749,
                "image": "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg"
            },
            {
                "id": 99750,
                "image": "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg"
            },
            {
                "id": 99751,
                "image": "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg"
            },
            {
                "id": 99752,
                "image": "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg"
            },
            {
                "id": 99753,
                "image": "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
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
        "slug": "portal",
        "name": "Portal",
        "playtime": 4,
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
                    "id": 8,
                    "name": "Google Play",
                    "slug": "google-play"
                }
            }
        ],
        "released": "2007-10-09",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "rating": 4.51,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 2442,
                "percent": 60.88
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1329,
                "percent": 33.13
            },
            {
                "id": 3,
                "title": "meh",
                "count": 158,
                "percent": 3.94
            },
            {
                "id": 1,
                "title": "skip",
                "count": 82,
                "percent": 2.04
            }
        ],
        "ratings_count": 3981,
        "reviews_text_count": 21,
        "added": 13173,
        "added_by_status": {
            "yet": 366,
            "owned": 8134,
            "beaten": 4105,
            "toplay": 200,
            "dropped": 300,
            "playing": 68
        },
        "metacritic": 90,
        "suggestions_count": 289,
        "updated": "2022-07-26T03:58:27",
        "id": 13536,
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
                "id": 42465,
                "name": "Головоломка",
                "slug": "golovolomka",
                "language": "rus",
                "games_count": 9267,
                "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
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
                "id": 42461,
                "name": "Классика",
                "slug": "klassika",
                "language": "rus",
                "games_count": 1365,
                "image_background": "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg"
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
                "id": 42481,
                "name": "Юмор",
                "slug": "iumor",
                "language": "rus",
                "games_count": 3357,
                "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
            },
            {
                "id": 189,
                "name": "Female Protagonist",
                "slug": "female-protagonist",
                "language": "eng",
                "games_count": 8717,
                "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
            },
            {
                "id": 42404,
                "name": "Женщина-протагонист",
                "slug": "zhenshchina-protagonist",
                "language": "rus",
                "games_count": 2416,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
            },
            {
                "id": 123,
                "name": "Comedy",
                "slug": "comedy",
                "language": "eng",
                "games_count": 9307,
                "image_background": "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg"
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
                "id": 40838,
                "name": "Includes level editor",
                "slug": "includes-level-editor",
                "language": "eng",
                "games_count": 1517,
                "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
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
                "id": 40833,
                "name": "Captions available",
                "slug": "captions-available",
                "language": "eng",
                "games_count": 1175,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
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
                "id": 42502,
                "name": "Чёрный юмор",
                "slug": "chiornyi-iumor",
                "language": "rus",
                "games_count": 894,
                "image_background": "https://media.rawg.io/media/games/1ad/1ad3737af2c4a4ff8e7f5540b5dcade8.jpg"
            },
            {
                "id": 148,
                "name": "Dark Humor",
                "slug": "dark-humor",
                "language": "eng",
                "games_count": 2127,
                "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
            },
            {
                "id": 40834,
                "name": "Commentary available",
                "slug": "commentary-available",
                "language": "eng",
                "games_count": 245,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 40839,
                "name": "Includes Source SDK",
                "slug": "includes-source-sdk",
                "language": "eng",
                "games_count": 56,
                "image_background": "https://media.rawg.io/media/screenshots/3b0/3b0240fb639701e6008e9c37f2db0a2c.jpg"
            },
            {
                "id": 87,
                "name": "Science",
                "slug": "science",
                "language": "eng",
                "games_count": 1353,
                "image_background": "https://media.rawg.io/media/games/bda/bdab2603c0dc67268d0610449bc7df16.jpg"
            },
            {
                "id": 42501,
                "name": "Наука",
                "slug": "nauka",
                "language": "rus",
                "games_count": 459,
                "image_background": "https://media.rawg.io/media/screenshots/18c/18c0bf89ecef8170cdd97075dbbadded.jpg"
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
        "reviews_count": 4011,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 115793,
                "image": "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg"
            },
            {
                "id": 115794,
                "image": "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg"
            },
            {
                "id": 115795,
                "image": "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"
            },
            {
                "id": 115796,
                "image": "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg"
            },
            {
                "id": 115797,
                "image": "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg"
            },
            {
                "id": 115798,
                "image": "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
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
            }
        ],
        "genres": [
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
        "slug": "life-is-strange-episode-1-2",
        "name": "Life is Strange",
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
            }
        ],
        "released": "2015-01-29",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        "rating": 4.11,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 1411,
                "percent": 43.79
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1169,
                "percent": 36.28
            },
            {
                "id": 3,
                "title": "meh",
                "count": 434,
                "percent": 13.47
            },
            {
                "id": 1,
                "title": "skip",
                "count": 208,
                "percent": 6.46
            }
        ],
        "ratings_count": 3187,
        "reviews_text_count": 22,
        "added": 12819,
        "added_by_status": {
            "yet": 687,
            "owned": 8279,
            "beaten": 2893,
            "toplay": 293,
            "dropped": 526,
            "playing": 141
        },
        "metacritic": 83,
        "suggestions_count": 520,
        "updated": "2022-07-25T22:49:25",
        "id": 3439,
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
                "id": 42399,
                "name": "Казуальная игра",
                "slug": "kazualnaia-igra",
                "language": "rus",
                "games_count": 26541,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
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
                "id": 189,
                "name": "Female Protagonist",
                "slug": "female-protagonist",
                "language": "eng",
                "games_count": 8717,
                "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
            },
            {
                "id": 42404,
                "name": "Женщина-протагонист",
                "slug": "zhenshchina-protagonist",
                "language": "rus",
                "games_count": 2416,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
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
                "id": 141,
                "name": "Point & Click",
                "slug": "point-click",
                "language": "eng",
                "games_count": 10158,
                "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
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
                "id": 42390,
                "name": "Решения с последствиями",
                "slug": "resheniia-s-posledstviiami",
                "language": "rus",
                "games_count": 2681,
                "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
            },
            {
                "id": 42556,
                "name": "Тайна",
                "slug": "taina",
                "language": "rus",
                "games_count": 2798,
                "image_background": "https://media.rawg.io/media/screenshots/9d2/9d22689a1c2a7ced9d1690e0c5c66871.jpg"
            },
            {
                "id": 117,
                "name": "Mystery",
                "slug": "mystery",
                "language": "eng",
                "games_count": 10055,
                "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
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
                "id": 42555,
                "name": "Симулятор ходьбы",
                "slug": "simuliator-khodby",
                "language": "rus",
                "games_count": 1382,
                "image_background": "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg"
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
                "id": 91,
                "name": "Walking Simulator",
                "slug": "walking-simulator",
                "language": "eng",
                "games_count": 5480,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
            },
            {
                "id": 406,
                "name": "Story",
                "slug": "story",
                "language": "eng",
                "games_count": 10559,
                "image_background": "https://media.rawg.io/media/screenshots/4f2/4f2246a85225b7a91d63990fe540b7c4.jpg"
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
                "id": 295,
                "name": "Soundtrack",
                "slug": "soundtrack",
                "language": "eng",
                "games_count": 2557,
                "image_background": "https://media.rawg.io/media/games/510/51039d0ec5dc8c3e08ae4374dfceecec.jpg"
            },
            {
                "id": 42570,
                "name": "Контроль времени",
                "slug": "kontrol-vremeni",
                "language": "rus",
                "games_count": 324,
                "image_background": "https://media.rawg.io/media/games/af8/af81c1cc5aad59f0ce1b3b7cee207220.jpg"
            },
            {
                "id": 302,
                "name": "Time Manipulation",
                "slug": "time-manipulation",
                "language": "eng",
                "games_count": 299,
                "image_background": "https://media.rawg.io/media/games/702/7020d1319d09e0c6a840aa08c5ce120f.jpg"
            },
            {
                "id": 992,
                "name": "student",
                "slug": "student",
                "language": "eng",
                "games_count": 1369,
                "image_background": "https://media.rawg.io/media/screenshots/14e/14e8044e7e97fc9d23fcf53c2b78b9a1.jpg"
            },
            {
                "id": 2682,
                "name": "strange",
                "slug": "strange",
                "language": "eng",
                "games_count": 334,
                "image_background": "https://media.rawg.io/media/screenshots/cd8/cd87f13df436ca4df58028522836048d.jpg"
            },
            {
                "id": 3197,
                "name": "photography",
                "slug": "photography",
                "language": "eng",
                "games_count": 185,
                "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
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
        "reviews_count": 3222,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
            },
            {
                "id": 1826487,
                "image": "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg"
            },
            {
                "id": 1826488,
                "image": "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg"
            },
            {
                "id": 1826489,
                "image": "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg"
            },
            {
                "id": 1826490,
                "image": "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg"
            },
            {
                "id": 1826491,
                "image": "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg"
            },
            {
                "id": 1826492,
                "image": "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg"
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
        "slug": "grand-theft-auto-v",
        "name": "Grand Theft Auto V",
        "playtime": 72,
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
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
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
        "released": "2013-09-17",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "rating": 4.48,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 3475,
                "percent": 59.26
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1911,
                "percent": 32.59
            },
            {
                "id": 3,
                "title": "meh",
                "count": 373,
                "percent": 6.36
            },
            {
                "id": 1,
                "title": "skip",
                "count": 105,
                "percent": 1.79
            }
        ],
        "ratings_count": 5789,
        "reviews_text_count": 43,
        "added": 17760,
        "added_by_status": {
            "yet": 445,
            "owned": 10404,
            "beaten": 4853,
            "toplay": 520,
            "dropped": 894,
            "playing": 644
        },
        "metacritic": 91,
        "suggestions_count": 410,
        "updated": "2022-07-25T16:45:51",
        "id": 3498,
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
                "id": 42482,
                "name": "Смешная",
                "slug": "smeshnaia",
                "language": "rus",
                "games_count": 5192,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
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
                "id": 37,
                "name": "Sandbox",
                "slug": "sandbox",
                "language": "eng",
                "games_count": 5069,
                "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
            },
            {
                "id": 42481,
                "name": "Юмор",
                "slug": "iumor",
                "language": "rus",
                "games_count": 3357,
                "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
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
                "id": 123,
                "name": "Comedy",
                "slug": "comedy",
                "language": "eng",
                "games_count": 9307,
                "image_background": "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg"
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
                "id": 62,
                "name": "Moddable",
                "slug": "moddable",
                "language": "eng",
                "games_count": 704,
                "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
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
                "id": 42529,
                "name": "Для взрослых",
                "slug": "dlia-vzroslykh",
                "language": "rus",
                "games_count": 1357,
                "image_background": "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
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
            "slug": "mature",
            "name_en": "Mature",
            "name_ru": "С 17 лет"
        },
        "user_game": null,
        "reviews_count": 5864,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
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
                "id": 3,
                "name": "Adventure",
                "slug": "adventure"
            },
            {
                "id": 4,
                "name": "Action",
                "slug": "action"
            }
        ]
    },
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
        "slug": "portal-2",
        "name": "Portal 2",
        "playtime": 11,
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
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
                }
            }
        ],
        "released": "2011-04-18",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "rating": 4.61,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 3390,
                "percent": 70.26
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1201,
                "percent": 24.89
            },
            {
                "id": 3,
                "title": "meh",
                "count": 133,
                "percent": 2.76
            },
            {
                "id": 1,
                "title": "skip",
                "count": 101,
                "percent": 2.09
            }
        ],
        "ratings_count": 4784,
        "reviews_text_count": 28,
        "added": 15554,
        "added_by_status": {
            "yet": 520,
            "owned": 9588,
            "beaten": 4558,
            "toplay": 301,
            "dropped": 461,
            "playing": 126
        },
        "metacritic": 95,
        "suggestions_count": 545,
        "updated": "2022-07-24T20:40:09",
        "id": 4200,
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
                "id": 42425,
                "name": "Для нескольких игроков",
                "slug": "dlia-neskolkikh-igrokov",
                "language": "rus",
                "games_count": 6572,
                "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
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
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "language": "eng",
                "games_count": 8626,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
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
                "id": 42482,
                "name": "Смешная",
                "slug": "smeshnaia",
                "language": "rus",
                "games_count": 5192,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
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
                "id": 42481,
                "name": "Юмор",
                "slug": "iumor",
                "language": "rus",
                "games_count": 3357,
                "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
            },
            {
                "id": 189,
                "name": "Female Protagonist",
                "slug": "female-protagonist",
                "language": "eng",
                "games_count": 8717,
                "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
            },
            {
                "id": 42404,
                "name": "Женщина-протагонист",
                "slug": "zhenshchina-protagonist",
                "language": "rus",
                "games_count": 2416,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
            },
            {
                "id": 123,
                "name": "Comedy",
                "slug": "comedy",
                "language": "eng",
                "games_count": 9307,
                "image_background": "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg"
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
                "id": 75,
                "name": "Local Co-Op",
                "slug": "local-co-op",
                "language": "eng",
                "games_count": 4571,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
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
                "id": 25,
                "name": "Space",
                "slug": "space",
                "language": "eng",
                "games_count": 37873,
                "image_background": "https://media.rawg.io/media/games/315/3156817d3ac1f341da73de6495fb28f5.jpg"
            },
            {
                "id": 40838,
                "name": "Includes level editor",
                "slug": "includes-level-editor",
                "language": "eng",
                "games_count": 1517,
                "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
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
                "id": 40833,
                "name": "Captions available",
                "slug": "captions-available",
                "language": "eng",
                "games_count": 1175,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
            },
            {
                "id": 40834,
                "name": "Commentary available",
                "slug": "commentary-available",
                "language": "eng",
                "games_count": 245,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 87,
                "name": "Science",
                "slug": "science",
                "language": "eng",
                "games_count": 1353,
                "image_background": "https://media.rawg.io/media/games/bda/bdab2603c0dc67268d0610449bc7df16.jpg"
            },
            {
                "id": 42501,
                "name": "Наука",
                "slug": "nauka",
                "language": "rus",
                "games_count": 459,
                "image_background": "https://media.rawg.io/media/screenshots/18c/18c0bf89ecef8170cdd97075dbbadded.jpg"
            }
        ],
        "esrb_rating": {
            "id": 2,
            "name": "Everyone 10+",
            "slug": "everyone-10-plus",
            "name_en": "Everyone 10+",
            "name_ru": "С 10 лет"
        },
        "user_game": null,
        "reviews_count": 4825,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
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
                "slug": "shooter"
            },
            {
                "id": 7,
                "name": "Puzzle",
                "slug": "puzzle"
            }
        ]
    },
    {
        "slug": "tomb-raider",
        "name": "Tomb Raider (2013)",
        "playtime": 11,
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
                    "id": 4,
                    "name": "App Store",
                    "slug": "apple-appstore"
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
        "released": "2013-03-05",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "rating": 4.05,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 2042,
                "percent": 60.29
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 862,
                "percent": 25.45
            },
            {
                "id": 3,
                "title": "meh",
                "count": 385,
                "percent": 11.37
            },
            {
                "id": 1,
                "title": "skip",
                "count": 98,
                "percent": 2.89
            }
        ],
        "ratings_count": 3365,
        "reviews_text_count": 10,
        "added": 13910,
        "added_by_status": {
            "yet": 559,
            "owned": 9082,
            "beaten": 3541,
            "toplay": 207,
            "dropped": 424,
            "playing": 97
        },
        "metacritic": 86,
        "suggestions_count": 621,
        "updated": "2022-07-25T17:43:55",
        "id": 5286,
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
                "id": 42425,
                "name": "Для нескольких игроков",
                "slug": "dlia-neskolkikh-igrokov",
                "language": "rus",
                "games_count": 6572,
                "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
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
                "id": 42465,
                "name": "Головоломка",
                "slug": "golovolomka",
                "language": "rus",
                "games_count": 9267,
                "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
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
                "id": 193,
                "name": "Classic",
                "slug": "classic",
                "language": "eng",
                "games_count": 1696,
                "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
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
                "id": 189,
                "name": "Female Protagonist",
                "slug": "female-protagonist",
                "language": "eng",
                "games_count": 8717,
                "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
            },
            {
                "id": 42404,
                "name": "Женщина-протагонист",
                "slug": "zhenshchina-protagonist",
                "language": "rus",
                "games_count": 2416,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
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
                "id": 42464,
                "name": "Исследование",
                "slug": "issledovanie",
                "language": "rus",
                "games_count": 2989,
                "image_background": "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg"
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
                "id": 42467,
                "name": "Ретро",
                "slug": "retro-2",
                "language": "rus",
                "games_count": 4556,
                "image_background": "https://media.rawg.io/media/games/9cc/9cc11e2e81403186c7fa9c00c143d6e4.jpg"
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
                "id": 74,
                "name": "Retro",
                "slug": "retro",
                "language": "eng",
                "games_count": 33226,
                "image_background": "https://media.rawg.io/media/games/6c0/6c00ee85d1344f58c469e8e47fd8ae7c.jpg"
            },
            {
                "id": 69,
                "name": "Action-Adventure",
                "slug": "action-adventure",
                "language": "eng",
                "games_count": 11516,
                "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
            },
            {
                "id": 42490,
                "name": "Приключенческий экшен",
                "slug": "prikliuchencheskii-ekshen",
                "language": "rus",
                "games_count": 4125,
                "image_background": "https://media.rawg.io/media/games/032/0329db96e252aa41e672da2ba16f914c.jpg"
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
                "id": 42484,
                "name": "90-е",
                "slug": "90-e",
                "language": "rus",
                "games_count": 1247,
                "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
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
                "id": 42512,
                "name": "Олдскул",
                "slug": "oldskul",
                "language": "rus",
                "games_count": 1850,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            },
            {
                "id": 42494,
                "name": "3D-платформер",
                "slug": "3d-platformer-2",
                "language": "rus",
                "games_count": 1920,
                "image_background": "https://media.rawg.io/media/screenshots/afc/afc146e4644b7a15282e4ad4af9b2444.jpg"
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
                "id": 126,
                "name": "Dinosaurs",
                "slug": "dinosaurs",
                "language": "eng",
                "games_count": 1484,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
            },
            {
                "id": 42716,
                "name": "Лара Крофт",
                "slug": "lara-kroft",
                "language": "rus",
                "games_count": 14,
                "image_background": "https://media.rawg.io/media/games/9f1/9f14ee1ccd4995ba93be9b80d0ee30d7.jpg"
            },
            {
                "id": 306,
                "name": "Lara Croft",
                "slug": "lara-croft",
                "language": "eng",
                "games_count": 14,
                "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
            },
            {
                "id": 42651,
                "name": "Динозавры",
                "slug": "dinozavry",
                "language": "rus",
                "games_count": 238,
                "image_background": "https://media.rawg.io/media/games/ea6/ea6d85ea0239943ff31a86097fb3fbc3.jpg"
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
        "reviews_count": 3387,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
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
                "id": 3,
                "name": "Adventure",
                "slug": "adventure"
            },
            {
                "id": 4,
                "name": "Action",
                "slug": "action"
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
        "slug": "counter-strike-global-offensive",
        "name": "Counter-Strike: Global Offensive",
        "playtime": 65,
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
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
                }
            }
        ],
        "released": "2012-08-21",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        "rating": 3.57,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 1377,
                "percent": 46.98
            },
            {
                "id": 3,
                "title": "meh",
                "count": 774,
                "percent": 26.41
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 461,
                "percent": 15.73
            },
            {
                "id": 1,
                "title": "skip",
                "count": 319,
                "percent": 10.88
            }
        ],
        "ratings_count": 2905,
        "reviews_text_count": 20,
        "added": 13459,
        "added_by_status": {
            "yet": 215,
            "owned": 10253,
            "beaten": 794,
            "toplay": 64,
            "dropped": 1573,
            "playing": 560
        },
        "metacritic": 81,
        "suggestions_count": 579,
        "updated": "2022-07-24T16:37:13",
        "id": 4291,
        "score": null,
        "clip": null,
        "tags": [
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
                "id": 42420,
                "name": "Сложная",
                "slug": "slozhnaia",
                "language": "rus",
                "games_count": 4008,
                "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
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
                "id": 62,
                "name": "Moddable",
                "slug": "moddable",
                "language": "eng",
                "games_count": 704,
                "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
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
                "id": 157,
                "name": "PvP",
                "slug": "pvp",
                "language": "eng",
                "games_count": 5833,
                "image_background": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg"
            },
            {
                "id": 70,
                "name": "War",
                "slug": "war",
                "language": "eng",
                "games_count": 7999,
                "image_background": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
            },
            {
                "id": 42434,
                "name": "Игрок против игрока",
                "slug": "igrok-protiv-igroka",
                "language": "rus",
                "games_count": 2570,
                "image_background": "https://media.rawg.io/media/games/f54/f54e9fb2f4aac37810ea1a69a3e4480a.jpg"
            },
            {
                "id": 42430,
                "name": "Война",
                "slug": "voina",
                "language": "rus",
                "games_count": 1391,
                "image_background": "https://media.rawg.io/media/games/ac7/ac7b8327343da12c971cfc418f390a11.jpg"
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
                "id": 42612,
                "name": "Быстрая",
                "slug": "bystraia",
                "language": "rus",
                "games_count": 1376,
                "image_background": "https://media.rawg.io/media/games/367/367463d43c2a1465f27e830b5b1334ee.jpg"
            },
            {
                "id": 42460,
                "name": "Реализм",
                "slug": "realizm",
                "language": "rus",
                "games_count": 2686,
                "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
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
                "id": 77,
                "name": "Realistic",
                "slug": "realistic",
                "language": "eng",
                "games_count": 2705,
                "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
            },
            {
                "id": 42431,
                "name": "Военные действия",
                "slug": "voennye-deistviia",
                "language": "rus",
                "games_count": 1049,
                "image_background": "https://media.rawg.io/media/games/fcf/fcf81e19683092d40d519a6d6a9bcf6e.jpg"
            },
            {
                "id": 81,
                "name": "Military",
                "slug": "military",
                "language": "eng",
                "games_count": 1061,
                "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
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
                "id": 40856,
                "name": "Valve Anti-Cheat enabled",
                "slug": "valve-anti-cheat-enabled",
                "language": "eng",
                "games_count": 104,
                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
            },
            {
                "id": 42588,
                "name": "Киберспорт",
                "slug": "kibersport",
                "language": "rus",
                "games_count": 384,
                "image_background": "https://media.rawg.io/media/games/96f/96f0c07b6c156f05cb76b2ffba32bffc.jpg"
            },
            {
                "id": 73,
                "name": "e-sports",
                "slug": "e-sports",
                "language": "eng",
                "games_count": 80,
                "image_background": "https://media.rawg.io/media/screenshots/316/31651e0ec39c6718c5136ab624431e7f.jpg"
            },
            {
                "id": 245,
                "name": "Trading",
                "slug": "trading",
                "language": "eng",
                "games_count": 872,
                "image_background": "https://media.rawg.io/media/screenshots/fef/fefb9cd7cedb7bf1c2e69f159edb1272.jpg"
            },
            {
                "id": 42498,
                "name": "Обмен",
                "slug": "obmen",
                "language": "rus",
                "games_count": 233,
                "image_background": "https://media.rawg.io/media/screenshots/7fd/7fd4b29fa06a34e2ebda37283265faeb.jpg"
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
        "reviews_count": 2931,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
            },
            {
                "id": 81644,
                "image": "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg"
            },
            {
                "id": 81645,
                "image": "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg"
            },
            {
                "id": 81646,
                "image": "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg"
            },
            {
                "id": 81647,
                "image": "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg"
            },
            {
                "id": 81648,
                "image": "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg"
            },
            {
                "id": 81649,
                "image": "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
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
        "slug": "left-4-dead-2",
        "name": "Left 4 Dead 2",
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
                    "id": 7,
                    "name": "Xbox 360 Store",
                    "slug": "xbox360"
                }
            }
        ],
        "released": "2009-11-17",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "rating": 4.09,
        "rating_top": 4,
        "ratings": [
            {
                "id": 4,
                "title": "recommended",
                "count": 1496,
                "percent": 53.28
            },
            {
                "id": 5,
                "title": "exceptional",
                "count": 879,
                "percent": 31.3
            },
            {
                "id": 3,
                "title": "meh",
                "count": 330,
                "percent": 11.75
            },
            {
                "id": 1,
                "title": "skip",
                "count": 103,
                "percent": 3.67
            }
        ],
        "ratings_count": 2793,
        "reviews_text_count": 8,
        "added": 13275,
        "added_by_status": {
            "yet": 333,
            "owned": 9717,
            "beaten": 2084,
            "toplay": 84,
            "dropped": 930,
            "playing": 127
        },
        "metacritic": 89,
        "suggestions_count": 577,
        "updated": "2022-07-24T16:37:26",
        "id": 12020,
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
                "id": 9,
                "name": "Online Co-Op",
                "slug": "online-co-op",
                "language": "eng",
                "games_count": 3638,
                "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
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
                "id": 75,
                "name": "Local Co-Op",
                "slug": "local-co-op",
                "language": "eng",
                "games_count": 4571,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
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
                "id": 63,
                "name": "Zombies",
                "slug": "zombies",
                "language": "eng",
                "games_count": 8828,
                "image_background": "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg"
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
                "id": 42438,
                "name": "Поддержка модификаций",
                "slug": "podderzhka-modifikatsii",
                "language": "rus",
                "games_count": 504,
                "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
            },
            {
                "id": 42520,
                "name": "Реиграбельность",
                "slug": "reigrabelnost",
                "language": "rus",
                "games_count": 1662,
                "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
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
                "id": 40833,
                "name": "Captions available",
                "slug": "captions-available",
                "language": "eng",
                "games_count": 1175,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
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
                "id": 17,
                "name": "Survival Horror",
                "slug": "survival-horror",
                "language": "eng",
                "games_count": 6537,
                "image_background": "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg"
            },
            {
                "id": 42471,
                "name": "Хоррор на выживание",
                "slug": "khorror-na-vyzhivanie",
                "language": "rus",
                "games_count": 1710,
                "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg"
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
                "id": 40856,
                "name": "Valve Anti-Cheat enabled",
                "slug": "valve-anti-cheat-enabled",
                "language": "eng",
                "games_count": 104,
                "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
            },
            {
                "id": 40834,
                "name": "Commentary available",
                "slug": "commentary-available",
                "language": "eng",
                "games_count": 245,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 40839,
                "name": "Includes Source SDK",
                "slug": "includes-source-sdk",
                "language": "eng",
                "games_count": 56,
                "image_background": "https://media.rawg.io/media/screenshots/3b0/3b0240fb639701e6008e9c37f2db0a2c.jpg"
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
        "reviews_count": 2808,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 99748,
                "image": "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg"
            },
            {
                "id": 99749,
                "image": "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg"
            },
            {
                "id": 99750,
                "image": "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg"
            },
            {
                "id": 99751,
                "image": "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg"
            },
            {
                "id": 99752,
                "image": "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg"
            },
            {
                "id": 99753,
                "image": "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
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
        "slug": "portal",
        "name": "Portal",
        "playtime": 4,
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
                    "id": 8,
                    "name": "Google Play",
                    "slug": "google-play"
                }
            }
        ],
        "released": "2007-10-09",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "rating": 4.51,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 2442,
                "percent": 60.88
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1329,
                "percent": 33.13
            },
            {
                "id": 3,
                "title": "meh",
                "count": 158,
                "percent": 3.94
            },
            {
                "id": 1,
                "title": "skip",
                "count": 82,
                "percent": 2.04
            }
        ],
        "ratings_count": 3981,
        "reviews_text_count": 21,
        "added": 13173,
        "added_by_status": {
            "yet": 366,
            "owned": 8134,
            "beaten": 4105,
            "toplay": 200,
            "dropped": 300,
            "playing": 68
        },
        "metacritic": 90,
        "suggestions_count": 289,
        "updated": "2022-07-26T03:58:27",
        "id": 13536,
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
                "id": 42465,
                "name": "Головоломка",
                "slug": "golovolomka",
                "language": "rus",
                "games_count": 9267,
                "image_background": "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg"
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
                "id": 42461,
                "name": "Классика",
                "slug": "klassika",
                "language": "rus",
                "games_count": 1365,
                "image_background": "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg"
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
                "id": 42481,
                "name": "Юмор",
                "slug": "iumor",
                "language": "rus",
                "games_count": 3357,
                "image_background": "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
            },
            {
                "id": 189,
                "name": "Female Protagonist",
                "slug": "female-protagonist",
                "language": "eng",
                "games_count": 8717,
                "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
            },
            {
                "id": 42404,
                "name": "Женщина-протагонист",
                "slug": "zhenshchina-protagonist",
                "language": "rus",
                "games_count": 2416,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
            },
            {
                "id": 123,
                "name": "Comedy",
                "slug": "comedy",
                "language": "eng",
                "games_count": 9307,
                "image_background": "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg"
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
                "id": 40838,
                "name": "Includes level editor",
                "slug": "includes-level-editor",
                "language": "eng",
                "games_count": 1517,
                "image_background": "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
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
                "id": 40833,
                "name": "Captions available",
                "slug": "captions-available",
                "language": "eng",
                "games_count": 1175,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
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
                "id": 42502,
                "name": "Чёрный юмор",
                "slug": "chiornyi-iumor",
                "language": "rus",
                "games_count": 894,
                "image_background": "https://media.rawg.io/media/games/1ad/1ad3737af2c4a4ff8e7f5540b5dcade8.jpg"
            },
            {
                "id": 148,
                "name": "Dark Humor",
                "slug": "dark-humor",
                "language": "eng",
                "games_count": 2127,
                "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
            },
            {
                "id": 40834,
                "name": "Commentary available",
                "slug": "commentary-available",
                "language": "eng",
                "games_count": 245,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 40839,
                "name": "Includes Source SDK",
                "slug": "includes-source-sdk",
                "language": "eng",
                "games_count": 56,
                "image_background": "https://media.rawg.io/media/screenshots/3b0/3b0240fb639701e6008e9c37f2db0a2c.jpg"
            },
            {
                "id": 87,
                "name": "Science",
                "slug": "science",
                "language": "eng",
                "games_count": 1353,
                "image_background": "https://media.rawg.io/media/games/bda/bdab2603c0dc67268d0610449bc7df16.jpg"
            },
            {
                "id": 42501,
                "name": "Наука",
                "slug": "nauka",
                "language": "rus",
                "games_count": 459,
                "image_background": "https://media.rawg.io/media/screenshots/18c/18c0bf89ecef8170cdd97075dbbadded.jpg"
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
        "reviews_count": 4011,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 115793,
                "image": "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg"
            },
            {
                "id": 115794,
                "image": "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg"
            },
            {
                "id": 115795,
                "image": "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"
            },
            {
                "id": 115796,
                "image": "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg"
            },
            {
                "id": 115797,
                "image": "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg"
            },
            {
                "id": 115798,
                "image": "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
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
            }
        ],
        "genres": [
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
        "slug": "life-is-strange-episode-1-2",
        "name": "Life is Strange",
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
            }
        ],
        "released": "2015-01-29",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        "rating": 4.11,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 1411,
                "percent": 43.79
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 1169,
                "percent": 36.28
            },
            {
                "id": 3,
                "title": "meh",
                "count": 434,
                "percent": 13.47
            },
            {
                "id": 1,
                "title": "skip",
                "count": 208,
                "percent": 6.46
            }
        ],
        "ratings_count": 3187,
        "reviews_text_count": 22,
        "added": 12819,
        "added_by_status": {
            "yet": 687,
            "owned": 8279,
            "beaten": 2893,
            "toplay": 293,
            "dropped": 526,
            "playing": 141
        },
        "metacritic": 83,
        "suggestions_count": 520,
        "updated": "2022-07-25T22:49:25",
        "id": 3439,
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
                "id": 42399,
                "name": "Казуальная игра",
                "slug": "kazualnaia-igra",
                "language": "rus",
                "games_count": 26541,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
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
                "id": 189,
                "name": "Female Protagonist",
                "slug": "female-protagonist",
                "language": "eng",
                "games_count": 8717,
                "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
            },
            {
                "id": 42404,
                "name": "Женщина-протагонист",
                "slug": "zhenshchina-protagonist",
                "language": "rus",
                "games_count": 2416,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
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
                "id": 141,
                "name": "Point & Click",
                "slug": "point-click",
                "language": "eng",
                "games_count": 10158,
                "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
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
                "id": 42390,
                "name": "Решения с последствиями",
                "slug": "resheniia-s-posledstviiami",
                "language": "rus",
                "games_count": 2681,
                "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
            },
            {
                "id": 42556,
                "name": "Тайна",
                "slug": "taina",
                "language": "rus",
                "games_count": 2798,
                "image_background": "https://media.rawg.io/media/screenshots/9d2/9d22689a1c2a7ced9d1690e0c5c66871.jpg"
            },
            {
                "id": 117,
                "name": "Mystery",
                "slug": "mystery",
                "language": "eng",
                "games_count": 10055,
                "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
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
                "id": 42555,
                "name": "Симулятор ходьбы",
                "slug": "simuliator-khodby",
                "language": "rus",
                "games_count": 1382,
                "image_background": "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg"
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
                "id": 91,
                "name": "Walking Simulator",
                "slug": "walking-simulator",
                "language": "eng",
                "games_count": 5480,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
            },
            {
                "id": 406,
                "name": "Story",
                "slug": "story",
                "language": "eng",
                "games_count": 10559,
                "image_background": "https://media.rawg.io/media/screenshots/4f2/4f2246a85225b7a91d63990fe540b7c4.jpg"
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
                "id": 295,
                "name": "Soundtrack",
                "slug": "soundtrack",
                "language": "eng",
                "games_count": 2557,
                "image_background": "https://media.rawg.io/media/games/510/51039d0ec5dc8c3e08ae4374dfceecec.jpg"
            },
            {
                "id": 42570,
                "name": "Контроль времени",
                "slug": "kontrol-vremeni",
                "language": "rus",
                "games_count": 324,
                "image_background": "https://media.rawg.io/media/games/af8/af81c1cc5aad59f0ce1b3b7cee207220.jpg"
            },
            {
                "id": 302,
                "name": "Time Manipulation",
                "slug": "time-manipulation",
                "language": "eng",
                "games_count": 299,
                "image_background": "https://media.rawg.io/media/games/702/7020d1319d09e0c6a840aa08c5ce120f.jpg"
            },
            {
                "id": 992,
                "name": "student",
                "slug": "student",
                "language": "eng",
                "games_count": 1369,
                "image_background": "https://media.rawg.io/media/screenshots/14e/14e8044e7e97fc9d23fcf53c2b78b9a1.jpg"
            },
            {
                "id": 2682,
                "name": "strange",
                "slug": "strange",
                "language": "eng",
                "games_count": 334,
                "image_background": "https://media.rawg.io/media/screenshots/cd8/cd87f13df436ca4df58028522836048d.jpg"
            },
            {
                "id": 3197,
                "name": "photography",
                "slug": "photography",
                "language": "eng",
                "games_count": 185,
                "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
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
        "reviews_count": 3222,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [
            {
                "id": -1,
                "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
            },
            {
                "id": 1826487,
                "image": "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg"
            },
            {
                "id": 1826488,
                "image": "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg"
            },
            {
                "id": 1826489,
                "image": "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg"
            },
            {
                "id": 1826490,
                "image": "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg"
            },
            {
                "id": 1826491,
                "image": "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg"
            },
            {
                "id": 1826492,
                "image": "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg"
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
  return (
    <NestedLayout>
        <GenreHeader content={HeaderContent}/>
        <GameList name='For You' content={GameListContent} swipeable/>
        <GameList name='Top Games of the Year' content={GameListContent} swipeable/>
        <GameList name='All games' content={GameListContent}/>
    </NestedLayout>
  )
}