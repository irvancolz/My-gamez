import React from 'react';
import Components from '../../../components';

export default function DevPages() {
    const {NestedLayout, GenreHeader, GameList} = Components();
    const headerContent = {
        "id": 405,
        "name": "Ubisoft",
        "slug": "ubisoft",
        "games_count": 334,
        "image_background": "https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg",
        "description": ""
    }
    const gameContent = [
        {
            "slug": "far-cry-3",
            "name": "Far Cry 3",
            "playtime": 16,
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
            "released": "2012-11-28",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
            "rating": 4.24,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 1174,
                    "percent": 49.16
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 948,
                    "percent": 39.7
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 211,
                    "percent": 8.84
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 55,
                    "percent": 2.3
                }
            ],
            "ratings_count": 2366,
            "reviews_text_count": 11,
            "added": 8446,
            "added_by_status": {
                "yet": 249,
                "owned": 4788,
                "beaten": 2756,
                "toplay": 163,
                "dropped": 433,
                "playing": 57
            },
            "metacritic": 88,
            "suggestions_count": 626,
            "updated": "2022-07-24T20:42:14",
            "id": 4161,
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
                    "id": 42452,
                    "name": "Выживание",
                    "slug": "vyzhivanie",
                    "language": "rus",
                    "games_count": 3795,
                    "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
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
                    "id": 42601,
                    "name": "Цветастая",
                    "slug": "tsvetastaia",
                    "language": "rus",
                    "games_count": 6615,
                    "image_background": "https://media.rawg.io/media/screenshots/375/375f84d018242d7519a230f623981217.jpg"
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
                    "id": 42497,
                    "name": "Крафтинг",
                    "slug": "krafting",
                    "language": "rus",
                    "games_count": 1545,
                    "image_background": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg"
                },
                {
                    "id": 165,
                    "name": "Colorful",
                    "slug": "colorful",
                    "language": "eng",
                    "games_count": 14753,
                    "image_background": "https://media.rawg.io/media/games/bc7/bc77b1eb8e35df2d90b952bac5342c75.jpg"
                },
                {
                    "id": 181,
                    "name": "Hunting",
                    "slug": "hunting",
                    "language": "eng",
                    "games_count": 761,
                    "image_background": "https://media.rawg.io/media/games/f79/f79662d3267e50434ab6c674d47aa1f1.jpg"
                },
                {
                    "id": 42598,
                    "name": "Охота",
                    "slug": "okhota",
                    "language": "rus",
                    "games_count": 263,
                    "image_background": "https://media.rawg.io/media/screenshots/13b/13bc58f642143c97c3d0a5c1c0f4314b.jpg"
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
            "reviews_count": 2388,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                },
                {
                    "id": 161732,
                    "image": "https://media.rawg.io/media/screenshots/98e/98e4c2a0c3e84b3d2718f8801bba0fcc.jpg"
                },
                {
                    "id": 161733,
                    "image": "https://media.rawg.io/media/screenshots/87e/87e9ca5542b3e8da43d488c9252e20fe.jpg"
                },
                {
                    "id": 161734,
                    "image": "https://media.rawg.io/media/screenshots/0a9/0a9ff8bbfa49024159bcd884ce7128c3.jpg"
                },
                {
                    "id": 161735,
                    "image": "https://media.rawg.io/media/screenshots/971/971d3582a42ede482b9d90b47b50ac32.jpg"
                },
                {
                    "id": 161736,
                    "image": "https://media.rawg.io/media/screenshots/174/174333d080f475d5718219ef6e01d3f4.jpg"
                },
                {
                    "id": 161737,
                    "image": "https://media.rawg.io/media/screenshots/03d/03dcdb4292bcc6ccc2719c88202f4965.jpg"
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
            "slug": "for-honor",
            "name": "For Honor",
            "playtime": 8,
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
                        "id": 11,
                        "name": "Epic Games",
                        "slug": "epic-games"
                    }
                }
            ],
            "released": "2017-02-13",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
            "rating": 3.31,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 619,
                    "percent": 41.57
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 573,
                    "percent": 38.48
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 187,
                    "percent": 12.56
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 110,
                    "percent": 7.39
                }
            ],
            "ratings_count": 1481,
            "reviews_text_count": 6,
            "added": 7879,
            "added_by_status": {
                "yet": 552,
                "owned": 5913,
                "beaten": 278,
                "toplay": 92,
                "dropped": 943,
                "playing": 101
            },
            "metacritic": 76,
            "suggestions_count": 702,
            "updated": "2022-07-25T16:20:24",
            "id": 362,
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
                    "id": 9,
                    "name": "Online Co-Op",
                    "slug": "online-co-op",
                    "language": "eng",
                    "games_count": 3638,
                    "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
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
                    "id": 42433,
                    "name": "Совместная игра по сети",
                    "slug": "sovmestnaia-igra-po-seti",
                    "language": "rus",
                    "games_count": 1229,
                    "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
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
                    "id": 42487,
                    "name": "Слэшер",
                    "slug": "slesher",
                    "language": "rus",
                    "games_count": 1476,
                    "image_background": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg"
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
                    "id": 42460,
                    "name": "Реализм",
                    "slug": "realizm",
                    "language": "rus",
                    "games_count": 2686,
                    "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
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
                    "id": 77,
                    "name": "Realistic",
                    "slug": "realistic",
                    "language": "eng",
                    "games_count": 2705,
                    "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
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
                    "id": 42527,
                    "name": "Файтинг",
                    "slug": "faiting",
                    "language": "rus",
                    "games_count": 856,
                    "image_background": "https://media.rawg.io/media/screenshots/a8d/a8de8a8f3054b66362acb540aeea3f39.jpg"
                },
                {
                    "id": 169,
                    "name": "MOBA",
                    "slug": "moba",
                    "language": "eng",
                    "games_count": 454,
                    "image_background": "https://media.rawg.io/media/screenshots/968/968df3dbb85d2d7aa96ace33a7b2c9af.jpg"
                },
                {
                    "id": 42507,
                    "name": "Сражения на мечах",
                    "slug": "srazheniia-na-mechakh",
                    "language": "rus",
                    "games_count": 400,
                    "image_background": "https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg"
                },
                {
                    "id": 185,
                    "name": "Swordplay",
                    "slug": "swordplay",
                    "language": "eng",
                    "games_count": 374,
                    "image_background": "https://media.rawg.io/media/screenshots/160/1601c86a8cadf27346ff6f5655ec77a2.jpg"
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
            "reviews_count": 1489,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg"
                },
                {
                    "id": 3037,
                    "image": "https://media.rawg.io/media/screenshots/94a/94a1434ca101d9e0de78752df2f9c164.jpg"
                },
                {
                    "id": 3039,
                    "image": "https://media.rawg.io/media/screenshots/238/2388ad0c8587adfe37c0a95eec893b67.jpg"
                },
                {
                    "id": 3041,
                    "image": "https://media.rawg.io/media/screenshots/46f/46f57d204df589000ae2ebb6d567f3cb.jpg"
                },
                {
                    "id": 3042,
                    "image": "https://media.rawg.io/media/screenshots/150/1500590c3239c6732ce00c42cac105ca.jpg"
                },
                {
                    "id": 3045,
                    "image": "https://media.rawg.io/media/screenshots/60c/60c7557e75c1cecdb153818ff01890fa.jpg"
                },
                {
                    "id": 3050,
                    "image": "https://media.rawg.io/media/screenshots/135/1350c3eef2f346d70717f462469a3178.jpg"
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
            "slug": "assassins-creed-iv-black-flag",
            "name": "Assassin’s Creed IV: Black Flag",
            "playtime": 26,
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
            "released": "2013-10-29",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
            "rating": 4.12,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 1023,
                    "percent": 48.3
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 746,
                    "percent": 35.22
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 280,
                    "percent": 13.22
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 69,
                    "percent": 3.26
                }
            ],
            "ratings_count": 2104,
            "reviews_text_count": 10,
            "added": 7770,
            "added_by_status": {
                "yet": 374,
                "owned": 4408,
                "beaten": 2145,
                "toplay": 202,
                "dropped": 544,
                "playing": 97
            },
            "metacritic": 85,
            "suggestions_count": 683,
            "updated": "2022-07-25T21:43:40",
            "id": 3841,
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
                    "id": 37,
                    "name": "Sandbox",
                    "slug": "sandbox",
                    "language": "eng",
                    "games_count": 5069,
                    "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
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
                    "id": 42444,
                    "name": "Песочница",
                    "slug": "pesochnitsa",
                    "language": "rus",
                    "games_count": 2520,
                    "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
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
                    "id": 69,
                    "name": "Action-Adventure",
                    "slug": "action-adventure",
                    "language": "eng",
                    "games_count": 11516,
                    "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
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
                    "id": 42403,
                    "name": "История",
                    "slug": "istoriia",
                    "language": "rus",
                    "games_count": 941,
                    "image_background": "https://media.rawg.io/media/games/9f1/9f189c639f70f91166df415811a8b525.jpg"
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
                    "id": 89,
                    "name": "Historical",
                    "slug": "historical",
                    "language": "eng",
                    "games_count": 2082,
                    "image_background": "https://media.rawg.io/media/games/736/736c0eaec96d848d7824b33298a182f2.jpg"
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
                    "id": 42643,
                    "name": "Паркур",
                    "slug": "parkur-2",
                    "language": "rus",
                    "games_count": 640,
                    "image_background": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
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
                    "id": 278,
                    "name": "Assassin",
                    "slug": "assassin",
                    "language": "eng",
                    "games_count": 676,
                    "image_background": "https://media.rawg.io/media/games/5c0/5c03ff69b5fd6cb87e52824f847b45f4.jpg"
                },
                {
                    "id": 42440,
                    "name": "Ассассины",
                    "slug": "assassiny",
                    "language": "rus",
                    "games_count": 208,
                    "image_background": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
                },
                {
                    "id": 255,
                    "name": "Pirates",
                    "slug": "pirates",
                    "language": "eng",
                    "games_count": 1847,
                    "image_background": "https://media.rawg.io/media/games/458/4589f56845f867775404f7493810f078.jpg"
                },
                {
                    "id": 42499,
                    "name": "Пираты",
                    "slug": "piraty",
                    "language": "rus",
                    "games_count": 295,
                    "image_background": "https://media.rawg.io/media/screenshots/b4b/b4bc9b2b8be2fb16d20d7d437f86cd72.jpg"
                },
                {
                    "id": 42680,
                    "name": "Морские бои",
                    "slug": "morskie-boi",
                    "language": "rus",
                    "games_count": 174,
                    "image_background": "https://media.rawg.io/media/screenshots/360/3609a212ee012fad38d06f0cdd616091.jpg"
                },
                {
                    "id": 256,
                    "name": "Naval",
                    "slug": "naval",
                    "language": "eng",
                    "games_count": 217,
                    "image_background": "https://media.rawg.io/media/games/458/4589f56845f867775404f7493810f078.jpg"
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
            "reviews_count": 2118,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg"
                },
                {
                    "id": 32698,
                    "image": "https://media.rawg.io/media/screenshots/46d/46de97777c05efb26597b215735dcd84.jpg"
                },
                {
                    "id": 32699,
                    "image": "https://media.rawg.io/media/screenshots/162/162503bb903edd7cfddf2a49ecdf5b7d.jpg"
                },
                {
                    "id": 32700,
                    "image": "https://media.rawg.io/media/screenshots/9ad/9ad8aa17d3f2be9545273f895e481280.jpg"
                },
                {
                    "id": 32701,
                    "image": "https://media.rawg.io/media/screenshots/b02/b02b168d04889304aac23e47f5314721.jpg"
                },
                {
                    "id": 32702,
                    "image": "https://media.rawg.io/media/screenshots/ad8/ad8439bc9ed7d2f88deb836c9cff23d2.jpg"
                },
                {
                    "id": 32703,
                    "image": "https://media.rawg.io/media/screenshots/398/398abeb965880c1c3310a6a4ad9c71b8.jpg"
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
                }
            ]
        },
        {
            "slug": "watch-dogs",
            "name": "Watch Dogs",
            "playtime": 18,
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
                        "id": 11,
                        "name": "Epic Games",
                        "slug": "epic-games"
                    }
                }
            ],
            "released": "2014-05-27",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
            "rating": 3.55,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 888,
                    "percent": 48.63
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 607,
                    "percent": 33.24
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 196,
                    "percent": 10.73
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 135,
                    "percent": 7.39
                }
            ],
            "ratings_count": 1815,
            "reviews_text_count": 6,
            "added": 6719,
            "added_by_status": {
                "yet": 332,
                "owned": 3872,
                "beaten": 1599,
                "toplay": 181,
                "dropped": 681,
                "playing": 54
            },
            "metacritic": 77,
            "suggestions_count": 638,
            "updated": "2022-07-18T12:46:44",
            "id": 3687,
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
                    "id": 188,
                    "name": "Parkour",
                    "slug": "parkour",
                    "language": "eng",
                    "games_count": 2782,
                    "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
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
                    "id": 130,
                    "name": "Driving",
                    "slug": "driving",
                    "language": "eng",
                    "games_count": 4238,
                    "image_background": "https://media.rawg.io/media/games/470/470d21d6971de8f13ec0e1664a120cc0.jpg"
                },
                {
                    "id": 42600,
                    "name": "Вождение",
                    "slug": "vozhdenie",
                    "language": "rus",
                    "games_count": 871,
                    "image_background": "https://media.rawg.io/media/games/a1c/a1cea552040aecf9414548e209f9c0d8.jpg"
                },
                {
                    "id": 42611,
                    "name": "Эпичная",
                    "slug": "epichnaia",
                    "language": "rus",
                    "games_count": 95,
                    "image_background": "https://media.rawg.io/media/games/cbf/cbf8fea101b56c7d383ddf8cc500ff54.jpg"
                },
                {
                    "id": 227,
                    "name": "Hacking",
                    "slug": "hacking",
                    "language": "eng",
                    "games_count": 889,
                    "image_background": "https://media.rawg.io/media/screenshots/cfb/cfbacead71a46900fd2f90f01785ac43.jpg"
                },
                {
                    "id": 62348,
                    "name": "first person mod",
                    "slug": "first-person-mod",
                    "language": "eng",
                    "games_count": 15,
                    "image_background": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
                },
                {
                    "id": 42696,
                    "name": "Хакерство",
                    "slug": "khakerstvo",
                    "language": "rus",
                    "games_count": 252,
                    "image_background": "https://media.rawg.io/media/screenshots/e22/e22da89ed54225d0c4687a6ef5d0f765.jpeg"
                },
                {
                    "id": 42455,
                    "name": "Собака",
                    "slug": "sobaka",
                    "language": "rus",
                    "games_count": 82,
                    "image_background": "https://media.rawg.io/media/screenshots/38f/38f484631d76603231be8bedf658f646.jpg"
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
            "reviews_count": 1826,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg"
                },
                {
                    "id": 32351,
                    "image": "https://media.rawg.io/media/screenshots/6f0/6f072ce2d5d33350bfb2554e58e8a41b.jpg"
                },
                {
                    "id": 32352,
                    "image": "https://media.rawg.io/media/screenshots/8f4/8f47d4bfd8599ec9c3d0e81191ecd7c6.jpg"
                },
                {
                    "id": 32353,
                    "image": "https://media.rawg.io/media/screenshots/c87/c87c3e6fac1ceed68605f6da0bf40b30.jpg"
                },
                {
                    "id": 32354,
                    "image": "https://media.rawg.io/media/screenshots/2bd/2bd61fd5bad2458417e55f373a3097a2.jpg"
                },
                {
                    "id": 32355,
                    "image": "https://media.rawg.io/media/screenshots/a64/a64cf2b3fcfd721cd244a853549781a8.jpg"
                },
                {
                    "id": 32356,
                    "image": "https://media.rawg.io/media/screenshots/75d/75d8c7a73df54bc579ffde1662354791.jpg"
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
                }
            ]
        },
        {
            "slug": "far-cry-5",
            "name": "Far Cry 5",
            "playtime": 18,
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
                }
            ],
            "released": "2018-03-27",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg",
            "rating": 3.73,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 935,
                    "percent": 53.95
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 462,
                    "percent": 26.66
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 250,
                    "percent": 14.43
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 86,
                    "percent": 4.96
                }
            ],
            "ratings_count": 1703,
            "reviews_text_count": 22,
            "added": 6538,
            "added_by_status": {
                "yet": 315,
                "owned": 3661,
                "beaten": 1364,
                "toplay": 580,
                "dropped": 450,
                "playing": 168
            },
            "metacritic": 80,
            "suggestions_count": 381,
            "updated": "2022-07-24T20:42:57",
            "id": 23585,
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
                    "id": 7808,
                    "name": "steam-trading-cards",
                    "slug": "steam-trading-cards",
                    "language": "eng",
                    "games_count": 7582,
                    "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
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
                    "id": 189,
                    "name": "Female Protagonist",
                    "slug": "female-protagonist",
                    "language": "eng",
                    "games_count": 8717,
                    "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
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
                    "id": 42406,
                    "name": "Нагота",
                    "slug": "nagota",
                    "language": "rus",
                    "games_count": 3574,
                    "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
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
                    "id": 40833,
                    "name": "Captions available",
                    "slug": "captions-available",
                    "language": "eng",
                    "games_count": 1175,
                    "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
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
                    "id": 120,
                    "name": "Memes",
                    "slug": "memes",
                    "language": "eng",
                    "games_count": 1425,
                    "image_background": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
                },
                {
                    "id": 42405,
                    "name": "Сексуальный контент",
                    "slug": "seksualnyi-kontent",
                    "language": "rus",
                    "games_count": 3491,
                    "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
                },
                {
                    "id": 178,
                    "name": "Illuminati",
                    "slug": "illuminati",
                    "language": "eng",
                    "games_count": 270,
                    "image_background": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
                },
                {
                    "id": 78,
                    "name": "America",
                    "slug": "america",
                    "language": "eng",
                    "games_count": 347,
                    "image_background": "https://media.rawg.io/media/games/eb2/eb24800b4491701eca481e7c990bce4a.jpg"
                },
                {
                    "id": 181,
                    "name": "Hunting",
                    "slug": "hunting",
                    "language": "eng",
                    "games_count": 761,
                    "image_background": "https://media.rawg.io/media/games/f79/f79662d3267e50434ab6c674d47aa1f1.jpg"
                },
                {
                    "id": 42456,
                    "name": "Америка",
                    "slug": "amerika",
                    "language": "rus",
                    "games_count": 318,
                    "image_background": "https://media.rawg.io/media/screenshots/420/420f2619211aa70342c4d202c3e4fd36.jpg"
                },
                {
                    "id": 42598,
                    "name": "Охота",
                    "slug": "okhota",
                    "language": "rus",
                    "games_count": 263,
                    "image_background": "https://media.rawg.io/media/screenshots/13b/13bc58f642143c97c3d0a5c1c0f4314b.jpg"
                },
                {
                    "id": 31352,
                    "name": "microtransactions",
                    "slug": "microtransactions",
                    "language": "eng",
                    "games_count": 3,
                    "image_background": "https://media.rawg.io/media/games/c9b/c9b64ff3987a27a5e66fb62328154e60.jpg"
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
            "reviews_count": 1733,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
                },
                {
                    "id": 239766,
                    "image": "https://media.rawg.io/media/screenshots/5cf/5cf8e7fd61723cdd8f2673be38fa96d7.jpg"
                },
                {
                    "id": 239767,
                    "image": "https://media.rawg.io/media/screenshots/f10/f103b8facce20a692c632e92d75cb7dc.jpg"
                },
                {
                    "id": 239768,
                    "image": "https://media.rawg.io/media/screenshots/a75/a7559b87154002909f338f36ae4cf584.jpg"
                },
                {
                    "id": 239769,
                    "image": "https://media.rawg.io/media/screenshots/954/9543c597ffd856a12d9b0bd82733a370.jpg"
                },
                {
                    "id": 239770,
                    "image": "https://media.rawg.io/media/screenshots/406/40613f69f9f3b7ed28cf46cc55a9b06a.jpg"
                },
                {
                    "id": 239841,
                    "image": "https://media.rawg.io/media/screenshots/0ce/0ce9665ddbe8aef0086af7528ae44980.jpg"
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
            "slug": "assassins-creed-odyssey",
            "name": "Assassin's Creed Odyssey",
            "playtime": 31,
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
                },
                {
                    "store": {
                        "id": 11,
                        "name": "Epic Games",
                        "slug": "epic-games"
                    }
                }
            ],
            "released": "2018-10-05",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg",
            "rating": 4.02,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 832,
                    "percent": 49.64
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 513,
                    "percent": 30.61
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 255,
                    "percent": 15.21
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 76,
                    "percent": 4.53
                }
            ],
            "ratings_count": 1651,
            "reviews_text_count": 18,
            "added": 6313,
            "added_by_status": {
                "yet": 449,
                "owned": 3404,
                "beaten": 1043,
                "toplay": 652,
                "dropped": 402,
                "playing": 363
            },
            "metacritic": 85,
            "suggestions_count": 642,
            "updated": "2022-07-25T21:43:27",
            "id": 58616,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 31,
                    "name": "Singleplayer",
                    "slug": "singleplayer",
                    "language": "eng",
                    "games_count": 174433,
                    "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
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
                    "id": 7808,
                    "name": "steam-trading-cards",
                    "slug": "steam-trading-cards",
                    "language": "eng",
                    "games_count": 7582,
                    "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
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
                    "games_count": 15301,
                    "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
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
                    "id": 42491,
                    "name": "Мясо",
                    "slug": "miaso",
                    "language": "rus",
                    "games_count": 3536,
                    "image_background": "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg"
                },
                {
                    "id": 189,
                    "name": "Female Protagonist",
                    "slug": "female-protagonist",
                    "language": "eng",
                    "games_count": 8716,
                    "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
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
                    "id": 42402,
                    "name": "Насилие",
                    "slug": "nasilie",
                    "language": "rus",
                    "games_count": 4330,
                    "image_background": "https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg"
                },
                {
                    "id": 15,
                    "name": "Stealth",
                    "slug": "stealth",
                    "language": "eng",
                    "games_count": 5076,
                    "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
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
                    "id": 42406,
                    "name": "Нагота",
                    "slug": "nagota",
                    "language": "rus",
                    "games_count": 3574,
                    "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
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
                    "id": 42390,
                    "name": "Решения с последствиями",
                    "slug": "resheniia-s-posledstviiami",
                    "language": "rus",
                    "games_count": 2681,
                    "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
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
                    "id": 42403,
                    "name": "История",
                    "slug": "istoriia",
                    "language": "rus",
                    "games_count": 941,
                    "image_background": "https://media.rawg.io/media/games/9f1/9f189c639f70f91166df415811a8b525.jpg"
                },
                {
                    "id": 89,
                    "name": "Historical",
                    "slug": "historical",
                    "language": "eng",
                    "games_count": 2081,
                    "image_background": "https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg"
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
                    "id": 42405,
                    "name": "Сексуальный контент",
                    "slug": "seksualnyi-kontent",
                    "language": "rus",
                    "games_count": 3491,
                    "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
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
                    "id": 278,
                    "name": "Assassin",
                    "slug": "assassin",
                    "language": "eng",
                    "games_count": 676,
                    "image_background": "https://media.rawg.io/media/games/5c0/5c03ff69b5fd6cb87e52824f847b45f4.jpg"
                },
                {
                    "id": 42440,
                    "name": "Ассассины",
                    "slug": "assassiny",
                    "language": "rus",
                    "games_count": 208,
                    "image_background": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
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
            "reviews_count": 1676,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/c6b/c6bd26767c1053fef2b10bb852943559.jpg"
                },
                {
                    "id": 779118,
                    "image": "https://media.rawg.io/media/screenshots/412/412b1dd5c880b80d8404451d3ff44360.jpg"
                },
                {
                    "id": 779119,
                    "image": "https://media.rawg.io/media/screenshots/9b5/9b59a790deab688ea923e0cd7b0cadbd_sNpbwUf.jpg"
                },
                {
                    "id": 779120,
                    "image": "https://media.rawg.io/media/screenshots/b09/b09a53fb76ea832671599a5f287ab34a.jpg"
                },
                {
                    "id": 779121,
                    "image": "https://media.rawg.io/media/screenshots/2f9/2f993667330526171e4056c0a0663437.jpg"
                },
                {
                    "id": 779150,
                    "image": "https://media.rawg.io/media/screenshots/6d8/6d8c268dff506f890478e6a0a492858b.jpg"
                },
                {
                    "id": 779151,
                    "image": "https://media.rawg.io/media/screenshots/588/5883818edafd22c8a2e1a45bf6fe07b1.jpg"
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
            "slug": "tom-clancys-rainbow-six-siege-2",
            "name": "Tom Clancy's Rainbow Six Siege",
            "playtime": 29,
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
                        "id": 11,
                        "name": "Epic Games",
                        "slug": "epic-games"
                    }
                }
            ],
            "released": "2015-12-01",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg",
            "rating": 3.94,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 676,
                    "percent": 52.69
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 334,
                    "percent": 26.03
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 204,
                    "percent": 15.9
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 69,
                    "percent": 5.38
                }
            ],
            "ratings_count": 1272,
            "reviews_text_count": 7,
            "added": 6272,
            "added_by_status": {
                "yet": 114,
                "owned": 4781,
                "beaten": 306,
                "toplay": 64,
                "dropped": 663,
                "playing": 344
            },
            "metacritic": 74,
            "suggestions_count": 455,
            "updated": "2022-07-23T12:20:11",
            "id": 8488,
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
                    "id": 18,
                    "name": "Co-op",
                    "slug": "co-op",
                    "language": "eng",
                    "games_count": 8626,
                    "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg"
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
                    "id": 9,
                    "name": "Online Co-Op",
                    "slug": "online-co-op",
                    "language": "eng",
                    "games_count": 3638,
                    "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
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
                    "id": 80,
                    "name": "Tactical",
                    "slug": "tactical",
                    "language": "eng",
                    "games_count": 3388,
                    "image_background": "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg"
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
                    "id": 11,
                    "name": "Team-Based",
                    "slug": "team-based",
                    "language": "eng",
                    "games_count": 1087,
                    "image_background": "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
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
                    "id": 170,
                    "name": "Competitive",
                    "slug": "competitive",
                    "language": "eng",
                    "games_count": 925,
                    "image_background": "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
                },
                {
                    "id": 51,
                    "name": "Destruction",
                    "slug": "destruction",
                    "language": "eng",
                    "games_count": 3069,
                    "image_background": "https://media.rawg.io/media/screenshots/eef/eef872fddedf40e6d2236bb981725cc6.jpg"
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
            "reviews_count": 1283,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
                },
                {
                    "id": 60047,
                    "image": "https://media.rawg.io/media/screenshots/cde/cde4694574a78e355478cf6e438106ac.jpg"
                },
                {
                    "id": 60052,
                    "image": "https://media.rawg.io/media/screenshots/6c3/6c386356a134572ccac11bffa6a74820.jpg"
                },
                {
                    "id": 60059,
                    "image": "https://media.rawg.io/media/screenshots/2b3/2b38b4a3dcdd8993ae211dc1616f6ced.jpg"
                },
                {
                    "id": 60063,
                    "image": "https://media.rawg.io/media/screenshots/df2/df22920866e77c82a6a505776023d7d9.jpg"
                },
                {
                    "id": 60068,
                    "image": "https://media.rawg.io/media/screenshots/5c3/5c3b2517577b729ba9c59d1638fd3a48.jpg"
                },
                {
                    "id": 60073,
                    "image": "https://media.rawg.io/media/screenshots/004/004cd2d5e5bf8c06f24a526d2ccd6fff.jpg"
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
            "slug": "assassins-creed-origins",
            "name": "Assassin's Creed Origins",
            "playtime": 32,
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
                }
            ],
            "released": "2017-10-27",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/336/336c6bd63d83cf8e59937ab8895d1240.jpg",
            "rating": 4.0,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 894,
                    "percent": 52.43
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 468,
                    "percent": 27.45
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 282,
                    "percent": 16.54
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 61,
                    "percent": 3.58
                }
            ],
            "ratings_count": 1682,
            "reviews_text_count": 18,
            "added": 6222,
            "added_by_status": {
                "yet": 359,
                "owned": 3422,
                "beaten": 1391,
                "toplay": 413,
                "dropped": 410,
                "playing": 227
            },
            "metacritic": 81,
            "suggestions_count": 316,
            "updated": "2022-07-23T21:28:17",
            "id": 28153,
            "score": null,
            "clip": null,
            "tags": [
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
                    "id": 42394,
                    "name": "Глубокий сюжет",
                    "slug": "glubokii-siuzhet",
                    "language": "rus",
                    "games_count": 6951,
                    "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
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
                    "id": 42442,
                    "name": "Открытый мир",
                    "slug": "otkrytyi-mir",
                    "language": "rus",
                    "games_count": 3605,
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
                    "id": 42444,
                    "name": "Песочница",
                    "slug": "pesochnitsa",
                    "language": "rus",
                    "games_count": 2520,
                    "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
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
                    "id": 42439,
                    "name": "Стелс",
                    "slug": "stels",
                    "language": "rus",
                    "games_count": 1229,
                    "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
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
                    "id": 42403,
                    "name": "История",
                    "slug": "istoriia",
                    "language": "rus",
                    "games_count": 941,
                    "image_background": "https://media.rawg.io/media/games/9f1/9f189c639f70f91166df415811a8b525.jpg"
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
                    "id": 42643,
                    "name": "Паркур",
                    "slug": "parkur-2",
                    "language": "rus",
                    "games_count": 640,
                    "image_background": "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
                },
                {
                    "id": 42440,
                    "name": "Ассассины",
                    "slug": "assassiny",
                    "language": "rus",
                    "games_count": 208,
                    "image_background": "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
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
                    "id": 42448,
                    "name": "Иллюминаты",
                    "slug": "illiuminaty",
                    "language": "rus",
                    "games_count": 212,
                    "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
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
            "reviews_count": 1705,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/336/336c6bd63d83cf8e59937ab8895d1240.jpg"
                },
                {
                    "id": 269374,
                    "image": "https://media.rawg.io/media/screenshots/5c8/5c8c5889c81eb226b182e6df4018a29a.jpg"
                },
                {
                    "id": 269376,
                    "image": "https://media.rawg.io/media/screenshots/0cf/0cf5ed35a3906f32967cb476c11c5d49.jpg"
                },
                {
                    "id": 287526,
                    "image": "https://media.rawg.io/media/screenshots/313/3132876284966c4d055d752e7edc5509.jpg"
                },
                {
                    "id": 287529,
                    "image": "https://media.rawg.io/media/screenshots/b3f/b3fe4ade2ed930cbd8253269ff38ba28.jpg"
                },
                {
                    "id": 313977,
                    "image": "https://media.rawg.io/media/screenshots/2d7/2d7a5c1b08e5cc5bc7c371094376637c.jpg"
                },
                {
                    "id": 2408505,
                    "image": "https://media.rawg.io/media/screenshots/0a2/0a24d82ed3f2d35726d17e4c73593721.jpeg"
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
            "slug": "far-cry-4",
            "name": "Far Cry 4",
            "playtime": 20,
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
            "released": "2014-11-18",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/b39/b396dac1f3e0f538841aa0355dd066d3.jpg",
            "rating": 3.81,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 902,
                    "percent": 58.46
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 354,
                    "percent": 22.94
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 232,
                    "percent": 15.04
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 55,
                    "percent": 3.56
                }
            ],
            "ratings_count": 1528,
            "reviews_text_count": 9,
            "added": 6116,
            "added_by_status": {
                "yet": 237,
                "owned": 3678,
                "beaten": 1504,
                "toplay": 152,
                "dropped": 471,
                "playing": 74
            },
            "metacritic": 80,
            "suggestions_count": 485,
            "updated": "2022-07-24T20:42:35",
            "id": 3497,
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
                    "id": 42452,
                    "name": "Выживание",
                    "slug": "vyzhivanie",
                    "language": "rus",
                    "games_count": 3795,
                    "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
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
                    "id": 42433,
                    "name": "Совместная игра по сети",
                    "slug": "sovmestnaia-igra-po-seti",
                    "language": "rus",
                    "games_count": 1229,
                    "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
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
                    "id": 97,
                    "name": "Action RPG",
                    "slug": "action-rpg",
                    "language": "eng",
                    "games_count": 4930,
                    "image_background": "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg"
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
                    "id": 42497,
                    "name": "Крафтинг",
                    "slug": "krafting",
                    "language": "rus",
                    "games_count": 1545,
                    "image_background": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg"
                },
                {
                    "id": 181,
                    "name": "Hunting",
                    "slug": "hunting",
                    "language": "eng",
                    "games_count": 761,
                    "image_background": "https://media.rawg.io/media/games/f79/f79662d3267e50434ab6c674d47aa1f1.jpg"
                },
                {
                    "id": 42598,
                    "name": "Охота",
                    "slug": "okhota",
                    "language": "rus",
                    "games_count": 263,
                    "image_background": "https://media.rawg.io/media/screenshots/13b/13bc58f642143c97c3d0a5c1c0f4314b.jpg"
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
            "reviews_count": 1543,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/b39/b396dac1f3e0f538841aa0355dd066d3.jpg"
                },
                {
                    "id": 52181,
                    "image": "https://media.rawg.io/media/screenshots/62c/62c6f076bfb258f12e925ff12e56dad4.jpg"
                },
                {
                    "id": 52189,
                    "image": "https://media.rawg.io/media/screenshots/a6e/a6e31bb99bdd48ee3e6cef291a053e6a.jpg"
                },
                {
                    "id": 52191,
                    "image": "https://media.rawg.io/media/screenshots/8a1/8a160808e4bc188df008a6a6ac12ce22.jpg"
                },
                {
                    "id": 52199,
                    "image": "https://media.rawg.io/media/screenshots/f83/f8382bf9f3c4777f6883f0b1fff3f43a.jpg"
                },
                {
                    "id": 52205,
                    "image": "https://media.rawg.io/media/screenshots/796/7969e6a5c9c626960eb380de01a9c2ae.jpg"
                },
                {
                    "id": 52214,
                    "image": "https://media.rawg.io/media/screenshots/54f/54fcf6fc80548fe8baec46823097dc57.jpg"
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
                }
            ]
        },
        {
            "slug": "brawlhalla",
            "name": "Brawlhalla",
            "playtime": 2,
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
                        "id": 8,
                        "name": "Google Play",
                        "slug": "google-play"
                    }
                }
            ],
            "released": "2014-04-30",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg",
            "rating": 3.24,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 379,
                    "percent": 43.12
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 337,
                    "percent": 38.34
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 124,
                    "percent": 14.11
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 39,
                    "percent": 4.44
                }
            ],
            "ratings_count": 873,
            "reviews_text_count": 4,
            "added": 5785,
            "added_by_status": {
                "yet": 163,
                "owned": 4765,
                "beaten": 127,
                "toplay": 20,
                "dropped": 623,
                "playing": 87
            },
            "metacritic": null,
            "suggestions_count": 369,
            "updated": "2022-07-25T16:13:35",
            "id": 9830,
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
                    "id": 42463,
                    "name": "Платформер",
                    "slug": "platformer-2",
                    "language": "rus",
                    "games_count": 5313,
                    "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
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
                    "id": 397,
                    "name": "Online multiplayer",
                    "slug": "online-multiplayer",
                    "language": "eng",
                    "games_count": 3808,
                    "image_background": "https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg"
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
                    "id": 42416,
                    "name": "Контроллер",
                    "slug": "kontroller",
                    "language": "rus",
                    "games_count": 2582,
                    "image_background": "https://media.rawg.io/media/games/a5a/a5abaa1b5cc1567b026fa3aa9fbd828e.jpg"
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
                    "id": 72,
                    "name": "Local Multiplayer",
                    "slug": "local-multiplayer",
                    "language": "eng",
                    "games_count": 11631,
                    "image_background": "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg"
                },
                {
                    "id": 42411,
                    "name": "Ранний доступ",
                    "slug": "rannii-dostup",
                    "language": "rus",
                    "games_count": 9869,
                    "image_background": "https://media.rawg.io/media/games/fba/fbae1bcfae1feffda6a11fbc1c939420.jpg"
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
                    "id": 14,
                    "name": "Early Access",
                    "slug": "early-access",
                    "language": "eng",
                    "games_count": 10350,
                    "image_background": "https://media.rawg.io/media/games/009/009e4e84975d6a60173ec1199db25aa3.jpg"
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
                    "id": 203,
                    "name": "Beat 'em up",
                    "slug": "beat-em-up",
                    "language": "eng",
                    "games_count": 2340,
                    "image_background": "https://media.rawg.io/media/games/8e6/8e699e91cf77c2060b6d515e2135b1b1.jpg"
                },
                {
                    "id": 42527,
                    "name": "Файтинг",
                    "slug": "faiting",
                    "language": "rus",
                    "games_count": 856,
                    "image_background": "https://media.rawg.io/media/screenshots/a8d/a8de8a8f3054b66362acb540aeea3f39.jpg"
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
                    "id": 135,
                    "name": "2D Fighter",
                    "slug": "2d-fighter",
                    "language": "eng",
                    "games_count": 628,
                    "image_background": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg"
                },
                {
                    "id": 42579,
                    "name": "Двумерный файтинг",
                    "slug": "dvumernyi-faiting",
                    "language": "rus",
                    "games_count": 214,
                    "image_background": "https://media.rawg.io/media/screenshots/316/31651e0ec39c6718c5136ab624431e7f.jpg"
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
            "reviews_count": 879,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg"
                },
                {
                    "id": 73462,
                    "image": "https://media.rawg.io/media/screenshots/68e/68e9226c1c45af8bab290580f7456be2.jpg"
                },
                {
                    "id": 73463,
                    "image": "https://media.rawg.io/media/screenshots/440/4409227ccd02e3a1d4de7894d04ef62d.jpg"
                },
                {
                    "id": 73464,
                    "image": "https://media.rawg.io/media/screenshots/df9/df9063e1a20d9ab1bd1e1deb693c17b6.jpg"
                },
                {
                    "id": 73465,
                    "image": "https://media.rawg.io/media/screenshots/537/537f4a9f7cbc8be0e5e9a8943b09e124.jpg"
                },
                {
                    "id": 73466,
                    "image": "https://media.rawg.io/media/screenshots/50d/50d0c17d79e3210c20a4c6cc16b49e31.jpg"
                },
                {
                    "id": 73467,
                    "image": "https://media.rawg.io/media/screenshots/a8c/a8ca6fcb3c8df773c4cfd5101682edab.jpg"
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
                    "id": 40,
                    "name": "Casual",
                    "slug": "casual"
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
                },
                {
                    "id": 6,
                    "name": "Fighting",
                    "slug": "fighting"
                }
            ]
        }
    ]
  return (
    <NestedLayout>
        <div className="container">
            <GenreHeader content={headerContent} />
            <GameList name='All Games' content={gameContent} />
        </div>
    </NestedLayout>
  )
}
