import React from 'react';
import style from './platforms.module.css';
import Components from '../../components';

export default function Stores() {
    const platformsContent =[
        {
            "id": 4,
            "name": "PC",
            "slug": "pc",
            "games_count": 466078,
            "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17760
                },
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16543
                },
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15554
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13910
                },
                {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 13463
                },
                {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 13459
                }
            ]
        },
        {
            "id": 187,
            "name": "PlayStation 5",
            "slug": "playstation5",
            "games_count": 628,
            "image_background": "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
            "image": null,
            "year_start": 2020,
            "year_end": null,
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17760
                },
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16543
                },
                {
                    "id": 32,
                    "slug": "destiny-2",
                    "name": "Destiny 2",
                    "added": 11036
                },
                {
                    "id": 58175,
                    "slug": "god-of-war-2",
                    "name": "God of War",
                    "added": 10872
                },
                {
                    "id": 766,
                    "slug": "warframe",
                    "name": "Warframe",
                    "added": 9942
                },
                {
                    "id": 41494,
                    "slug": "cyberpunk-2077",
                    "name": "Cyberpunk 2077",
                    "added": 9524
                }
            ]
        },
        {
            "id": 1,
            "name": "Xbox One",
            "slug": "xbox-one",
            "games_count": 5341,
            "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17760
                },
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16543
                },
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15554
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13910
                },
                {
                    "id": 4062,
                    "slug": "bioshock-infinite",
                    "name": "BioShock Infinite",
                    "added": 12916
                },
                {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 12819
                }
            ]
        },
        {
            "id": 18,
            "name": "PlayStation 4",
            "slug": "playstation4",
            "games_count": 6430,
            "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17760
                },
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16543
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13910
                },
                {
                    "id": 4062,
                    "slug": "bioshock-infinite",
                    "name": "BioShock Infinite",
                    "added": 12916
                },
                {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 12819
                },
                {
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 12809
                }
            ]
        },
        {
            "id": 186,
            "name": "Xbox Series S/X",
            "slug": "xbox-series-x",
            "games_count": 564,
            "image_background": "https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg",
            "image": null,
            "year_start": 2020,
            "year_end": null,
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17760
                },
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16543
                },
                {
                    "id": 32,
                    "slug": "destiny-2",
                    "name": "Destiny 2",
                    "added": 11036
                },
                {
                    "id": 766,
                    "slug": "warframe",
                    "name": "Warframe",
                    "added": 9942
                },
                {
                    "id": 41494,
                    "slug": "cyberpunk-2077",
                    "name": "Cyberpunk 2077",
                    "added": 9524
                },
                {
                    "id": 58812,
                    "slug": "control",
                    "name": "Control",
                    "added": 7358
                }
            ]
        },
        {
            "id": 7,
            "name": "Nintendo Switch",
            "slug": "nintendo-switch",
            "games_count": 4894,
            "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16543
                },
                {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 13463
                },
                {
                    "id": 4062,
                    "slug": "bioshock-infinite",
                    "name": "BioShock Infinite",
                    "added": 12916
                },
                {
                    "id": 4286,
                    "slug": "bioshock",
                    "name": "BioShock",
                    "added": 11777
                },
                {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 11509
                },
                {
                    "id": 2454,
                    "slug": "doom",
                    "name": "DOOM (2016)",
                    "added": 11192
                }
            ]
        },
        {
            "id": 3,
            "name": "iOS",
            "slug": "ios",
            "games_count": 74938,
            "image_background": "https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 12819
                },
                {
                    "id": 4286,
                    "slug": "bioshock",
                    "name": "BioShock",
                    "added": 11777
                },
                {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 11509
                },
                {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 9907
                },
                {
                    "id": 23027,
                    "slug": "the-walking-dead",
                    "name": "The Walking Dead: Season 1",
                    "added": 9654
                },
                {
                    "id": 416,
                    "slug": "grand-theft-auto-san-andreas",
                    "name": "Grand Theft Auto: San Andreas",
                    "added": 9230
                }
            ]
        },
        {
            "id": 21,
            "name": "Android",
            "slug": "android",
            "games_count": 49349,
            "image_background": "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 13173
                },
                {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 12819
                },
                {
                    "id": 13537,
                    "slug": "half-life-2",
                    "name": "Half-Life 2",
                    "added": 11912
                },
                {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 11509
                },
                {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 9907
                },
                {
                    "id": 23027,
                    "slug": "the-walking-dead",
                    "name": "The Walking Dead: Season 1",
                    "added": 9654
                }
            ]
        },
        {
            "id": 8,
            "name": "Nintendo 3DS",
            "slug": "nintendo-3ds",
            "games_count": 1758,
            "image_background": "https://media.rawg.io/media/screenshots/375/375f84d018242d7519a230f623981217.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 9907
                },
                {
                    "id": 22509,
                    "slug": "minecraft",
                    "name": "Minecraft",
                    "added": 6487
                },
                {
                    "id": 2597,
                    "slug": "lego-lord-of-the-rings",
                    "name": "LEGO The Lord of the Rings",
                    "added": 4570
                },
                {
                    "id": 250,
                    "slug": "the-binding-of-isaac-rebirth",
                    "name": "The Binding of Isaac: Rebirth",
                    "added": 4444
                },
                {
                    "id": 3729,
                    "slug": "lego-the-hobbit",
                    "name": "LEGO The Hobbit",
                    "added": 4162
                },
                {
                    "id": 4331,
                    "slug": "sonic-generations",
                    "name": "Sonic Generations",
                    "added": 3518
                }
            ]
        },
        {
            "id": 9,
            "name": "Nintendo DS",
            "slug": "nintendo-ds",
            "games_count": 2442,
            "image_background": "https://media.rawg.io/media/screenshots/157/1571cdfb52888191eabaf53c2b897240.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 865,
                    "slug": "call-of-duty-black-ops",
                    "name": "Call of Duty: Black Ops",
                    "added": 5734
                },
                {
                    "id": 3486,
                    "slug": "syberia",
                    "name": "Syberia",
                    "added": 5345
                },
                {
                    "id": 5578,
                    "slug": "grid",
                    "name": "Race Driver: Grid",
                    "added": 4669
                },
                {
                    "id": 2597,
                    "slug": "lego-lord-of-the-rings",
                    "name": "LEGO The Lord of the Rings",
                    "added": 4570
                },
                {
                    "id": 4869,
                    "slug": "tomb-raider-underworld",
                    "name": "Tomb Raider: Underworld",
                    "added": 3839
                },
                {
                    "id": 5528,
                    "slug": "call-of-duty-world-at-war",
                    "name": "Call of Duty: World at War",
                    "added": 3746
                }
            ]
        },
        {
            "id": 13,
            "name": "Nintendo DSi",
            "slug": "nintendo-dsi",
            "games_count": 37,
            "image_background": "https://media.rawg.io/media/screenshots/078/078629e997421ca28e9098bd7a87cb10.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 19309,
                    "slug": "plants-vs-zombies-goty-edition",
                    "name": "Plants vs. Zombies GOTY Edition",
                    "added": 3007
                },
                {
                    "id": 949,
                    "slug": "cut-the-rope",
                    "name": "Cut the Rope",
                    "added": 534
                },
                {
                    "id": 5463,
                    "slug": "rayman",
                    "name": "Rayman",
                    "added": 255
                },
                {
                    "id": 22727,
                    "slug": "jagged-alliance",
                    "name": "Jagged Alliance",
                    "added": 113
                },
                {
                    "id": 53802,
                    "slug": "dragons-lair",
                    "name": "Dragon's Lair",
                    "added": 48
                },
                {
                    "id": 25953,
                    "slug": "mario-vs-donkey-kong-minis-march-again",
                    "name": "Mario vs. Donkey Kong: Minis March Again!",
                    "added": 34
                }
            ]
        },
        {
            "id": 5,
            "name": "macOS",
            "slug": "macos",
            "games_count": 95556,
            "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15554
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13910
                },
                {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 13275
                },
                {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 13173
                },
                {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 12819
                },
                {
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 12809
                }
            ]
        },
        {
            "id": 6,
            "name": "Linux",
            "slug": "linux",
            "games_count": 69671,
            "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15554
                },
                {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 13275
                },
                {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 13173
                },
                {
                    "id": 4062,
                    "slug": "bioshock-infinite",
                    "name": "BioShock Infinite",
                    "added": 12916
                },
                {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 12819
                },
                {
                    "id": 13537,
                    "slug": "half-life-2",
                    "name": "Half-Life 2",
                    "added": 11912
                }
            ]
        },
        {
            "id": 14,
            "name": "Xbox 360",
            "slug": "xbox360",
            "games_count": 2775,
            "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17760
                },
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15554
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13910
                },
                {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 13463
                },
                {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 13459
                },
                {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 13275
                }
            ]
        },
        {
            "id": 80,
            "name": "Xbox",
            "slug": "xbox-old",
            "games_count": 709,
            "image_background": "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 13537,
                    "slug": "half-life-2",
                    "name": "Half-Life 2",
                    "added": 11912
                },
                {
                    "id": 416,
                    "slug": "grand-theft-auto-san-andreas",
                    "name": "Grand Theft Auto: San Andreas",
                    "added": 9230
                },
                {
                    "id": 430,
                    "slug": "grand-theft-auto-vice-city",
                    "name": "Grand Theft Auto: Vice City",
                    "added": 7706
                },
                {
                    "id": 19301,
                    "slug": "counter-strike",
                    "name": "Counter-Strike",
                    "added": 6983
                },
                {
                    "id": 2361,
                    "slug": "psychonauts",
                    "name": "Psychonauts",
                    "added": 6794
                },
                {
                    "id": 432,
                    "slug": "grand-theft-auto-iii",
                    "name": "Grand Theft Auto III",
                    "added": 5876
                }
            ]
        },
        {
            "id": 16,
            "name": "PlayStation 3",
            "slug": "playstation3",
            "games_count": 3595,
            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17760
                },
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15554
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13910
                },
                {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 13463
                },
                {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 13459
                },
                {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 13173
                }
            ]
        },
        {
            "id": 15,
            "name": "PlayStation 2",
            "slug": "playstation2",
            "games_count": 1932,
            "image_background": "https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 416,
                    "slug": "grand-theft-auto-san-andreas",
                    "name": "Grand Theft Auto: San Andreas",
                    "added": 9230
                },
                {
                    "id": 18080,
                    "slug": "half-life",
                    "name": "Half-Life",
                    "added": 8082
                },
                {
                    "id": 430,
                    "slug": "grand-theft-auto-vice-city",
                    "name": "Grand Theft Auto: Vice City",
                    "added": 7706
                },
                {
                    "id": 2361,
                    "slug": "psychonauts",
                    "name": "Psychonauts",
                    "added": 6794
                },
                {
                    "id": 432,
                    "slug": "grand-theft-auto-iii",
                    "name": "Grand Theft Auto III",
                    "added": 5876
                },
                {
                    "id": 56184,
                    "slug": "resident-evil-4",
                    "name": "Resident Evil 4 (2005)",
                    "added": 5400
                }
            ]
        },
        {
            "id": 27,
            "name": "PlayStation",
            "slug": "playstation1",
            "games_count": 1589,
            "image_background": "https://media.rawg.io/media/screenshots/c9c/c9c4e6d1792b5e12676819f3b57e5e26.jpeg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 5193,
                    "slug": "oddworld-abes-oddysee",
                    "name": "Oddworld: Abe's Oddysee",
                    "added": 4806
                },
                {
                    "id": 5159,
                    "slug": "resident-evil-2",
                    "name": "Resident Evil 2 (1998)",
                    "added": 4785
                },
                {
                    "id": 3449,
                    "slug": "resident-evil",
                    "name": "Resident Evil",
                    "added": 4274
                },
                {
                    "id": 52939,
                    "slug": "final-fantasy-vii",
                    "name": "Final Fantasy VII (1997)",
                    "added": 3431
                },
                {
                    "id": 20569,
                    "slug": "ufo-enemy-unknown",
                    "name": "X-COM: UFO Defense",
                    "added": 3002
                },
                {
                    "id": 5488,
                    "slug": "crash-bandicoot",
                    "name": "Crash Bandicoot",
                    "added": 2625
                }
            ]
        },
        {
            "id": 19,
            "name": "PS Vita",
            "slug": "ps-vita",
            "games_count": 1940,
            "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 11509
                },
                {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 9907
                },
                {
                    "id": 23027,
                    "slug": "the-walking-dead",
                    "name": "The Walking Dead: Season 1",
                    "added": 9654
                },
                {
                    "id": 3612,
                    "slug": "hotline-miami",
                    "name": "Hotline Miami",
                    "added": 8715
                },
                {
                    "id": 9767,
                    "slug": "hollow-knight",
                    "name": "Hollow Knight",
                    "added": 8552
                },
                {
                    "id": 3144,
                    "slug": "super-meat-boy",
                    "name": "Super Meat Boy",
                    "added": 8082
                }
            ]
        },
        {
            "id": 17,
            "name": "PSP",
            "slug": "psp",
            "games_count": 1633,
            "image_background": "https://media.rawg.io/media/games/662/6625a20ca1d13699ee7c191b20a02408.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 5193,
                    "slug": "oddworld-abes-oddysee",
                    "name": "Oddworld: Abe's Oddysee",
                    "added": 4806
                },
                {
                    "id": 5159,
                    "slug": "resident-evil-2",
                    "name": "Resident Evil 2 (1998)",
                    "added": 4785
                },
                {
                    "id": 13886,
                    "slug": "star-wars-battlefront-ii-2",
                    "name": "STAR WARS Battlefront 2 (2005)",
                    "added": 3885
                },
                {
                    "id": 52939,
                    "slug": "final-fantasy-vii",
                    "name": "Final Fantasy VII (1997)",
                    "added": 3431
                },
                {
                    "id": 5298,
                    "slug": "tomb-raider-legend",
                    "name": "Tomb Raider: Legend",
                    "added": 3391
                },
                {
                    "id": 5297,
                    "slug": "tomb-raider-anniversary",
                    "name": "Tomb Raider: Anniversary",
                    "added": 3284
                }
            ]
        },
        {
            "id": 10,
            "name": "Wii U",
            "slug": "wii-u",
            "games_count": 1269,
            "image_background": "https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 9907
                },
                {
                    "id": 3144,
                    "slug": "super-meat-boy",
                    "name": "Super Meat Boy",
                    "added": 8082
                },
                {
                    "id": 3841,
                    "slug": "assassins-creed-iv-black-flag",
                    "name": "Assassin’s Creed IV: Black Flag",
                    "added": 7770
                },
                {
                    "id": 3687,
                    "slug": "watch-dogs",
                    "name": "Watch Dogs",
                    "added": 6719
                },
                {
                    "id": 22509,
                    "slug": "minecraft",
                    "name": "Minecraft",
                    "added": 6487
                },
                {
                    "id": 3876,
                    "slug": "deus-ex-human-revolution-directors-cut",
                    "name": "Deus Ex: Human Revolution - Director's Cut",
                    "added": 6165
                }
            ]
        },
        {
            "id": 11,
            "name": "Wii",
            "slug": "wii",
            "games_count": 2360,
            "image_background": "https://media.rawg.io/media/screenshots/157/1571cdfb52888191eabaf53c2b897240.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 865,
                    "slug": "call-of-duty-black-ops",
                    "name": "Call of Duty: Black Ops",
                    "added": 5734
                },
                {
                    "id": 56184,
                    "slug": "resident-evil-4",
                    "name": "Resident Evil 4 (2005)",
                    "added": 5400
                },
                {
                    "id": 11276,
                    "slug": "call-of-duty-modern-warfare-3",
                    "name": "Call of Duty: Modern Warfare 3",
                    "added": 5177
                },
                {
                    "id": 2597,
                    "slug": "lego-lord-of-the-rings",
                    "name": "LEGO The Lord of the Rings",
                    "added": 4570
                },
                {
                    "id": 4869,
                    "slug": "tomb-raider-underworld",
                    "name": "Tomb Raider: Underworld",
                    "added": 3839
                },
                {
                    "id": 1140,
                    "slug": "world-of-goo",
                    "name": "World of Goo",
                    "added": 3802
                }
            ]
        },
        {
            "id": 105,
            "name": "GameCube",
            "slug": "gamecube",
            "games_count": 640,
            "image_background": "https://media.rawg.io/media/screenshots/33c/33c4f185c9f312cfcf5243d496178b11.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 56184,
                    "slug": "resident-evil-4",
                    "name": "Resident Evil 4 (2005)",
                    "added": 5400
                },
                {
                    "id": 5159,
                    "slug": "resident-evil-2",
                    "name": "Resident Evil 2 (1998)",
                    "added": 4785
                },
                {
                    "id": 3449,
                    "slug": "resident-evil",
                    "name": "Resident Evil",
                    "added": 4274
                },
                {
                    "id": 19592,
                    "slug": "hitman-2-silent-assassin",
                    "name": "Hitman 2: Silent Assassin",
                    "added": 3717
                },
                {
                    "id": 5298,
                    "slug": "tomb-raider-legend",
                    "name": "Tomb Raider: Legend",
                    "added": 3391
                },
                {
                    "id": 12018,
                    "slug": "star-wars-jedi-knight-ii-jedi-outcast",
                    "name": "Star Wars Jedi Knight II: Jedi Outcast",
                    "added": 2963
                }
            ]
        },
        {
            "id": 83,
            "name": "Nintendo 64",
            "slug": "nintendo-64",
            "games_count": 362,
            "image_background": "https://media.rawg.io/media/games/3a0/3a0c8e9ed3a711c542218831b893a0fa.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 5159,
                    "slug": "resident-evil-2",
                    "name": "Resident Evil 2 (1998)",
                    "added": 4785
                },
                {
                    "id": 54491,
                    "slug": "quake",
                    "name": "Quake",
                    "added": 2511
                },
                {
                    "id": 20466,
                    "slug": "worms-armageddon",
                    "name": "Worms Armageddon",
                    "added": 2454
                },
                {
                    "id": 54492,
                    "slug": "quake-2",
                    "name": "Quake II",
                    "added": 1968
                },
                {
                    "id": 25097,
                    "slug": "the-legend-of-zelda-ocarina-of-time",
                    "name": "The Legend of Zelda: Ocarina of Time",
                    "added": 1398
                },
                {
                    "id": 28532,
                    "slug": "banjo-kazooie",
                    "name": "Banjo-Kazooie",
                    "added": 1330
                }
            ]
        },
        {
            "id": 24,
            "name": "Game Boy Advance",
            "slug": "game-boy-advance",
            "games_count": 958,
            "image_background": "https://media.rawg.io/media/games/dc6/dc68ca77e06ad993aade7faf645f5ec2.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 5159,
                    "slug": "resident-evil-2",
                    "name": "Resident Evil 2 (1998)",
                    "added": 4785
                },
                {
                    "id": 53341,
                    "slug": "jet-set-radio-2012",
                    "name": "Jet Set Radio",
                    "added": 4489
                },
                {
                    "id": 2518,
                    "slug": "max-payne",
                    "name": "Max Payne",
                    "added": 4398
                },
                {
                    "id": 17975,
                    "slug": "doom-ii",
                    "name": "DOOM II",
                    "added": 2549
                },
                {
                    "id": 19646,
                    "slug": "splinter-cell",
                    "name": "Tom Clancy's Splinter Cell",
                    "added": 1758
                },
                {
                    "id": 53446,
                    "slug": "need-for-speed-underground-2-2",
                    "name": "Need for Speed: Underground 2",
                    "added": 1534
                }
            ]
        },
        {
            "id": 43,
            "name": "Game Boy Color",
            "slug": "game-boy-color",
            "games_count": 408,
            "image_background": "https://media.rawg.io/media/screenshots/092/092fc1910f067a95a07c0fbfdbe25f03.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 20466,
                    "slug": "worms-armageddon",
                    "name": "Worms Armageddon",
                    "added": 2454
                },
                {
                    "id": 52997,
                    "slug": "grand-theft-auto-2-1999",
                    "name": "Grand Theft Auto 2",
                    "added": 1634
                },
                {
                    "id": 52998,
                    "slug": "grand-theft-auto-1998",
                    "name": "Grand Theft Auto",
                    "added": 1559
                },
                {
                    "id": 5192,
                    "slug": "oddworld-abes-exoddus",
                    "name": "Oddworld: Abe's Exoddus",
                    "added": 1253
                },
                {
                    "id": 25080,
                    "slug": "super-mario-bros",
                    "name": "Super Mario Bros.",
                    "added": 1168
                },
                {
                    "id": 24030,
                    "slug": "super-mario-bros-3",
                    "name": "Super Mario Bros. 3",
                    "added": 947
                }
            ]
        },
        {
            "id": 26,
            "name": "Game Boy",
            "slug": "game-boy",
            "games_count": 602,
            "image_background": "https://media.rawg.io/media/screenshots/a51/a519f93600f1427375260522f47e2e7b.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 5193,
                    "slug": "oddworld-abes-oddysee",
                    "name": "Oddworld: Abe's Oddysee",
                    "added": 4806
                },
                {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1762
                },
                {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1630
                },
                {
                    "id": 52998,
                    "slug": "grand-theft-auto-1998",
                    "name": "Grand Theft Auto",
                    "added": 1559
                },
                {
                    "id": 52175,
                    "slug": "battletoads",
                    "name": "Battletoads",
                    "added": 1512
                },
                {
                    "id": 14829,
                    "slug": "turok",
                    "name": "Turok: Dinosaur Hunter",
                    "added": 1089
                }
            ]
        },
        {
            "id": 79,
            "name": "SNES",
            "slug": "snes",
            "games_count": 926,
            "image_background": "https://media.rawg.io/media/screenshots/52b/52b958a7b263d4f264648b710e76a236.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1762
                },
                {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1630
                },
                {
                    "id": 4005,
                    "slug": "wolfenstein-3d",
                    "name": "Wolfenstein 3D",
                    "added": 1508
                },
                {
                    "id": 24899,
                    "slug": "super-mario-world",
                    "name": "Super Mario World",
                    "added": 1225
                },
                {
                    "id": 52884,
                    "slug": "doom-2",
                    "name": "DOOM",
                    "added": 1219
                },
                {
                    "id": 25080,
                    "slug": "super-mario-bros",
                    "name": "Super Mario Bros.",
                    "added": 1168
                }
            ]
        },
        {
            "id": 49,
            "name": "NES",
            "slug": "nes",
            "games_count": 951,
            "image_background": "https://media.rawg.io/media/games/e40/e4043e92866d08ec9fdd212dcd3a1224.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 54122,
                    "slug": "ultima-4-quest-of-the-avatar",
                    "name": "Ultima IV: Quest of the Avatar",
                    "added": 1709
                },
                {
                    "id": 52175,
                    "slug": "battletoads",
                    "name": "Battletoads",
                    "added": 1512
                },
                {
                    "id": 25080,
                    "slug": "super-mario-bros",
                    "name": "Super Mario Bros.",
                    "added": 1168
                },
                {
                    "id": 24030,
                    "slug": "super-mario-bros-3",
                    "name": "Super Mario Bros. 3",
                    "added": 947
                },
                {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 638
                },
                {
                    "id": 24072,
                    "slug": "the-legend-of-zelda",
                    "name": "The Legend of Zelda",
                    "added": 594
                }
            ]
        },
        {
            "id": 55,
            "name": "Classic Macintosh",
            "slug": "macintosh",
            "games_count": 674,
            "image_background": "https://media.rawg.io/media/games/0a5/0a56e2bb9ce95359e69ff9689c553a45.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 13554,
                    "slug": "fallout-a-post-nuclear-role-playing-game",
                    "name": "Fallout",
                    "added": 6654
                },
                {
                    "id": 2518,
                    "slug": "max-payne",
                    "name": "Max Payne",
                    "added": 4398
                },
                {
                    "id": 12018,
                    "slug": "star-wars-jedi-knight-ii-jedi-outcast",
                    "name": "Star Wars Jedi Knight II: Jedi Outcast",
                    "added": 2963
                },
                {
                    "id": 57908,
                    "slug": "tomb-raider-ii",
                    "name": "Tomb Raider II",
                    "added": 2570
                },
                {
                    "id": 17975,
                    "slug": "doom-ii",
                    "name": "DOOM II",
                    "added": 2549
                },
                {
                    "id": 15851,
                    "slug": "star-wars-dark-forces-2",
                    "name": "STAR WARS - Dark Forces",
                    "added": 2518
                }
            ]
        },
        {
            "id": 41,
            "name": "Apple II",
            "slug": "apple-ii",
            "games_count": 423,
            "image_background": "https://media.rawg.io/media/screenshots/5ad/5adb88d1c6b9fc4fde1f372c9b6e451b.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 30119,
                    "slug": "wasteland",
                    "name": "Wasteland",
                    "added": 1924
                },
                {
                    "id": 54122,
                    "slug": "ultima-4-quest-of-the-avatar",
                    "name": "Ultima IV: Quest of the Avatar",
                    "added": 1709
                },
                {
                    "id": 22991,
                    "slug": "akalabeth-world-of-doom-2",
                    "name": "Akalabeth: World of Doom",
                    "added": 1109
                },
                {
                    "id": 29908,
                    "slug": "another-world",
                    "name": "Another World",
                    "added": 728
                },
                {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 638
                },
                {
                    "id": 45957,
                    "slug": "prince-of-persia-nes",
                    "name": "Prince of Persia (1989)",
                    "added": 502
                }
            ]
        },
        {
            "id": 166,
            "name": "Commodore / Amiga",
            "slug": "commodore-amiga",
            "games_count": 2062,
            "image_background": "https://media.rawg.io/media/screenshots/f03/f031bb8244dd6b6553cf110f435966de.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 20569,
                    "slug": "ufo-enemy-unknown",
                    "name": "X-COM: UFO Defense",
                    "added": 3002
                },
                {
                    "id": 54491,
                    "slug": "quake",
                    "name": "Quake",
                    "added": 2511
                },
                {
                    "id": 22734,
                    "slug": "beneath-a-steel-sky",
                    "name": "Beneath a Steel Sky",
                    "added": 2067
                },
                {
                    "id": 54492,
                    "slug": "quake-2",
                    "name": "Quake II",
                    "added": 1968
                },
                {
                    "id": 30119,
                    "slug": "wasteland",
                    "name": "Wasteland",
                    "added": 1924
                },
                {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1762
                }
            ]
        },
        {
            "id": 28,
            "name": "Atari 7800",
            "slug": "atari-7800",
            "games_count": 64,
            "image_background": "https://media.rawg.io/media/screenshots/565/56504b28b184dbc630a7de118e39d822.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 3802,
                    "slug": "double-dragon",
                    "name": "Double Dragon",
                    "added": 390
                },
                {
                    "id": 52512,
                    "slug": "arcade-archives-donkey-kong",
                    "name": "Donkey Kong",
                    "added": 324
                },
                {
                    "id": 52434,
                    "slug": "mario-bros-1983",
                    "name": "Mario Bros. (1983)",
                    "added": 239
                },
                {
                    "id": 28279,
                    "slug": "joust",
                    "name": "Joust",
                    "added": 160
                },
                {
                    "id": 52513,
                    "slug": "donkey-kong-jr",
                    "name": "Donkey Kong Jr.",
                    "added": 114
                },
                {
                    "id": 53830,
                    "slug": "galaga-1981",
                    "name": "Galaga (1981)",
                    "added": 109
                }
            ]
        },
        {
            "id": 31,
            "name": "Atari 5200",
            "slug": "atari-5200",
            "games_count": 63,
            "image_background": "https://media.rawg.io/media/screenshots/c38/c381fe2913f790fc4d66620e8add37b0.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 638
                },
                {
                    "id": 52434,
                    "slug": "mario-bros-1983",
                    "name": "Mario Bros. (1983)",
                    "added": 239
                },
                {
                    "id": 28279,
                    "slug": "joust",
                    "name": "Joust",
                    "added": 160
                },
                {
                    "id": 52423,
                    "slug": "galaxian",
                    "name": "Galaxian",
                    "added": 129
                },
                {
                    "id": 52444,
                    "slug": "space-invaders-1978",
                    "name": "Space Invaders (1978)",
                    "added": 104
                },
                {
                    "id": 52567,
                    "slug": "popeye",
                    "name": "Popeye",
                    "added": 98
                }
            ]
        },
        {
            "id": 23,
            "name": "Atari 2600",
            "slug": "atari-2600",
            "games_count": 286,
            "image_background": "https://media.rawg.io/media/games/23e/23eecccb588a4a9c97f35ebf8f9f00ef.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 638
                },
                {
                    "id": 52623,
                    "slug": "tetris-1984",
                    "name": "Tetris (1984)",
                    "added": 464
                },
                {
                    "id": 3802,
                    "slug": "double-dragon",
                    "name": "Double Dragon",
                    "added": 390
                },
                {
                    "id": 52512,
                    "slug": "arcade-archives-donkey-kong",
                    "name": "Donkey Kong",
                    "added": 324
                },
                {
                    "id": 52434,
                    "slug": "mario-bros-1983",
                    "name": "Mario Bros. (1983)",
                    "added": 239
                },
                {
                    "id": 28279,
                    "slug": "joust",
                    "name": "Joust",
                    "added": 160
                }
            ]
        },
        {
            "id": 22,
            "name": "Atari Flashback",
            "slug": "atari-flashback",
            "games_count": 30,
            "image_background": "https://media.rawg.io/media/screenshots/2aa/2aa07f58491e14b0183333f8956bc802.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 53138,
                    "slug": "pong-1972",
                    "name": "Pong (1972)",
                    "added": 84
                },
                {
                    "id": 52391,
                    "slug": "adventure-game-atari",
                    "name": "Adventure",
                    "added": 54
                },
                {
                    "id": 52563,
                    "slug": "pitfall-1982",
                    "name": "Pitfall! (1982)",
                    "added": 47
                },
                {
                    "id": 52402,
                    "slug": "breakout-1976",
                    "name": "Breakout (1976)",
                    "added": 46
                },
                {
                    "id": 52436,
                    "slug": "missile-command-1980",
                    "name": "Missile Command (1980)",
                    "added": 40
                },
                {
                    "id": 52409,
                    "slug": "combat-1977",
                    "name": "Combat (1977)",
                    "added": 36
                }
            ]
        },
        {
            "id": 25,
            "name": "Atari 8-bit",
            "slug": "atari-8-bit",
            "games_count": 306,
            "image_background": "https://media.rawg.io/media/screenshots/518/5180f00f3d4626c94bdb0259a07a2903.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 54122,
                    "slug": "ultima-4-quest-of-the-avatar",
                    "name": "Ultima IV: Quest of the Avatar",
                    "added": 1709
                },
                {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 638
                },
                {
                    "id": 52512,
                    "slug": "arcade-archives-donkey-kong",
                    "name": "Donkey Kong",
                    "added": 324
                },
                {
                    "id": 52434,
                    "slug": "mario-bros-1983",
                    "name": "Mario Bros. (1983)",
                    "added": 239
                },
                {
                    "id": 28279,
                    "slug": "joust",
                    "name": "Joust",
                    "added": 160
                },
                {
                    "id": 25161,
                    "slug": "lode-runner",
                    "name": "Lode Runner",
                    "added": 141
                }
            ]
        },
        {
            "id": 34,
            "name": "Atari ST",
            "slug": "atari-st",
            "games_count": 836,
            "image_background": "https://media.rawg.io/media/screenshots/101/1015fe740ce5654eb97c9140f6da3c3e.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 54122,
                    "slug": "ultima-4-quest-of-the-avatar",
                    "name": "Ultima IV: Quest of the Avatar",
                    "added": 1709
                },
                {
                    "id": 22733,
                    "slug": "lure-of-the-temptress",
                    "name": "Lure of the Temptress",
                    "added": 1403
                },
                {
                    "id": 29908,
                    "slug": "another-world",
                    "name": "Another World",
                    "added": 728
                },
                {
                    "id": 16122,
                    "slug": "loom",
                    "name": "LOOM",
                    "added": 626
                },
                {
                    "id": 31542,
                    "slug": "indiana-jones-and-the-last-crusade",
                    "name": "Indiana Jones and the Last Crusade: The Graphic Adventure",
                    "added": 589
                },
                {
                    "id": 45957,
                    "slug": "prince-of-persia-nes",
                    "name": "Prince of Persia (1989)",
                    "added": 502
                }
            ]
        },
        {
            "id": 46,
            "name": "Atari Lynx",
            "slug": "atari-lynx",
            "games_count": 56,
            "image_background": "https://media.rawg.io/media/screenshots/575/575b2838392ed177dd7d2c734c682f93.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 29391,
                    "slug": "eye-of-the-beholder",
                    "name": "Eye of the Beholder",
                    "added": 925
                },
                {
                    "id": 3802,
                    "slug": "double-dragon",
                    "name": "Double Dragon",
                    "added": 390
                },
                {
                    "id": 30501,
                    "slug": "chips-challenge",
                    "name": "Chip's Challenge",
                    "added": 305
                },
                {
                    "id": 53467,
                    "slug": "paperboy",
                    "name": "Paperboy",
                    "added": 170
                },
                {
                    "id": 29371,
                    "slug": "batman-returns",
                    "name": "Batman Returns",
                    "added": 84
                },
                {
                    "id": 52438,
                    "slug": "ms-pac-man",
                    "name": "Ms. Pac-Man",
                    "added": 81
                }
            ]
        },
        {
            "id": 50,
            "name": "Atari XEGS",
            "slug": "atari-xegs",
            "games_count": 22,
            "image_background": "https://media.rawg.io/media/screenshots/769/7691726d70c23c029903df08858df001.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 52512,
                    "slug": "arcade-archives-donkey-kong",
                    "name": "Donkey Kong",
                    "added": 324
                },
                {
                    "id": 52434,
                    "slug": "mario-bros-1983",
                    "name": "Mario Bros. (1983)",
                    "added": 239
                },
                {
                    "id": 34571,
                    "slug": "lode-runner-1983",
                    "name": "Lode Runner (1983)",
                    "added": 108
                },
                {
                    "id": 53687,
                    "slug": "archon-the-light-and-the-dark",
                    "name": "Archon: The Light and the Dark",
                    "added": 12
                },
                {
                    "id": 52605,
                    "slug": "summer-games",
                    "name": "Summer Games",
                    "added": 13
                },
                {
                    "id": 52413,
                    "slug": "crossbow",
                    "name": "Crossbow",
                    "added": 14
                }
            ]
        },
        {
            "id": 167,
            "name": "Genesis",
            "slug": "genesis",
            "games_count": 829,
            "image_background": "https://media.rawg.io/media/games/637/637d7dc2f44d0f6ddd3ee2c0b1366962.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1762
                },
                {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1630
                },
                {
                    "id": 52175,
                    "slug": "battletoads",
                    "name": "Battletoads",
                    "added": 1512
                },
                {
                    "id": 53551,
                    "slug": "sonic-the-hedgehog",
                    "name": "Sonic the Hedgehog (1991)",
                    "added": 1314
                },
                {
                    "id": 2552,
                    "slug": "sonic-the-hedgehog-2",
                    "name": "Sonic the Hedgehog 2",
                    "added": 1160
                },
                {
                    "id": 4678,
                    "slug": "streets-of-rage-2",
                    "name": "Streets of Rage 2",
                    "added": 826
                }
            ]
        },
        {
            "id": 107,
            "name": "SEGA Saturn",
            "slug": "sega-saturn",
            "games_count": 328,
            "image_background": "https://media.rawg.io/media/screenshots/862/862f0a3da04a5e2d5146b35e75e0d85b.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 54491,
                    "slug": "quake",
                    "name": "Quake",
                    "added": 2511
                },
                {
                    "id": 28300,
                    "slug": "nights-into-dreams",
                    "name": "NiGHTS into dreams...",
                    "added": 2138
                },
                {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1762
                },
                {
                    "id": 52790,
                    "slug": "castlevania-sotn",
                    "name": "Castlevania: Symphony of the Night",
                    "added": 1420
                },
                {
                    "id": 52884,
                    "slug": "doom-2",
                    "name": "DOOM",
                    "added": 1219
                },
                {
                    "id": 56183,
                    "slug": "resident-evil-2002",
                    "name": "Resident Evil (2002)",
                    "added": 1082
                }
            ]
        },
        {
            "id": 119,
            "name": "SEGA CD",
            "slug": "sega-cd",
            "games_count": 158,
            "image_background": "https://media.rawg.io/media/games/951/951f914b28b246835a811894bbc38403.jpeg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 1559,
                    "slug": "sonic-cd",
                    "name": "Sonic CD",
                    "added": 1952
                },
                {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1630
                },
                {
                    "id": 29391,
                    "slug": "eye-of-the-beholder",
                    "name": "Eye of the Beholder",
                    "added": 925
                },
                {
                    "id": 45957,
                    "slug": "prince-of-persia-nes",
                    "name": "Prince of Persia (1989)",
                    "added": 502
                },
                {
                    "id": 25663,
                    "slug": "earthworm-jim",
                    "name": "Earthworm Jim",
                    "added": 583
                },
                {
                    "id": 29839,
                    "slug": "the-secret-of-monkey-island",
                    "name": "The Secret of Monkey Island",
                    "added": 313
                }
            ]
        },
        {
            "id": 117,
            "name": "SEGA 32X",
            "slug": "sega-32x",
            "games_count": 46,
            "image_background": "https://media.rawg.io/media/screenshots/f12/f1290d54a99f637def413baa6642fa0c.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 52884,
                    "slug": "doom-2",
                    "name": "DOOM",
                    "added": 1219
                },
                {
                    "id": 29426,
                    "slug": "mortal-kombat-2",
                    "name": "Mortal Kombat 2",
                    "added": 390
                },
                {
                    "id": 53781,
                    "slug": "darkwing-duck",
                    "name": "Disney's Darkwing Duck",
                    "added": 187
                },
                {
                    "id": 32519,
                    "slug": "wwf-wrestlemania-the-arcade-game",
                    "name": "WWF WrestleMania: The Arcade Game",
                    "added": 110
                },
                {
                    "id": 32252,
                    "slug": "blackthorne",
                    "name": "Blackthorne",
                    "added": 67
                },
                {
                    "id": 30645,
                    "slug": "primal-rage",
                    "name": "Primal Rage",
                    "added": 65
                }
            ]
        },
        {
            "id": 74,
            "name": "SEGA Master System",
            "slug": "sega-master-system",
            "games_count": 216,
            "image_background": "https://media.rawg.io/media/screenshots/9fb/9fb2f64404aeb409632ab479f2f51443.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 54122,
                    "slug": "ultima-4-quest-of-the-avatar",
                    "name": "Ultima IV: Quest of the Avatar",
                    "added": 1709
                },
                {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1630
                },
                {
                    "id": 4678,
                    "slug": "streets-of-rage-2",
                    "name": "Streets of Rage 2",
                    "added": 826
                },
                {
                    "id": 53207,
                    "slug": "comix-zone-1995",
                    "name": "Comix Zone",
                    "added": 663
                },
                {
                    "id": 914,
                    "slug": "wonder-boy-the-dragons-trap",
                    "name": "Wonder Boy: The Dragon's Trap",
                    "added": 668
                },
                {
                    "id": 25663,
                    "slug": "earthworm-jim",
                    "name": "Earthworm Jim",
                    "added": 583
                }
            ]
        },
        {
            "id": 106,
            "name": "Dreamcast",
            "slug": "dreamcast",
            "games_count": 345,
            "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 18080,
                    "slug": "half-life",
                    "name": "Half-Life",
                    "added": 8082
                },
                {
                    "id": 19542,
                    "slug": "half-life-blue-shift",
                    "name": "Half-Life: Blue Shift",
                    "added": 5283
                },
                {
                    "id": 5159,
                    "slug": "resident-evil-2",
                    "name": "Resident Evil 2 (1998)",
                    "added": 4785
                },
                {
                    "id": 53341,
                    "slug": "jet-set-radio-2012",
                    "name": "Jet Set Radio",
                    "added": 4489
                },
                {
                    "id": 20466,
                    "slug": "worms-armageddon",
                    "name": "Worms Armageddon",
                    "added": 2454
                },
                {
                    "id": 54629,
                    "slug": "crazy-taxi",
                    "name": "Crazy Taxi (1999)",
                    "added": 2267
                }
            ]
        },
        {
            "id": 111,
            "name": "3DO",
            "slug": "3do",
            "games_count": 92,
            "image_background": "https://media.rawg.io/media/screenshots/b45/b452e9b20e969a64d0088ae467d1dcab.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 4005,
                    "slug": "wolfenstein-3d",
                    "name": "Wolfenstein 3D",
                    "added": 1508
                },
                {
                    "id": 52884,
                    "slug": "doom-2",
                    "name": "DOOM",
                    "added": 1219
                },
                {
                    "id": 29908,
                    "slug": "another-world",
                    "name": "Another World",
                    "added": 728
                },
                {
                    "id": 4377,
                    "slug": "myst",
                    "name": "Myst",
                    "added": 351
                },
                {
                    "id": 5498,
                    "slug": "lemmings",
                    "name": "Lemmings",
                    "added": 276
                },
                {
                    "id": 15512,
                    "slug": "alone-in-the-dark-1",
                    "name": "Alone in the Dark 1",
                    "added": 266
                }
            ]
        },
        {
            "id": 112,
            "name": "Jaguar",
            "slug": "jaguar",
            "games_count": 37,
            "image_background": "https://media.rawg.io/media/screenshots/7dd/7dd630a9b38257450b53099932d3047d.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1762
                },
                {
                    "id": 4005,
                    "slug": "wolfenstein-3d",
                    "name": "Wolfenstein 3D",
                    "added": 1508
                },
                {
                    "id": 52884,
                    "slug": "doom-2",
                    "name": "DOOM",
                    "added": 1219
                },
                {
                    "id": 29908,
                    "slug": "another-world",
                    "name": "Another World",
                    "added": 728
                },
                {
                    "id": 4377,
                    "slug": "myst",
                    "name": "Myst",
                    "added": 351
                },
                {
                    "id": 5463,
                    "slug": "rayman",
                    "name": "Rayman",
                    "added": 255
                }
            ]
        },
        {
            "id": 77,
            "name": "Game Gear",
            "slug": "game-gear",
            "games_count": 202,
            "image_background": "https://media.rawg.io/media/games/373/373a9a1f664de6e4c31f08644729e2db.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1630
                },
                {
                    "id": 52175,
                    "slug": "battletoads",
                    "name": "Battletoads",
                    "added": 1512
                },
                {
                    "id": 53551,
                    "slug": "sonic-the-hedgehog",
                    "name": "Sonic the Hedgehog (1991)",
                    "added": 1314
                },
                {
                    "id": 2552,
                    "slug": "sonic-the-hedgehog-2",
                    "name": "Sonic the Hedgehog 2",
                    "added": 1160
                },
                {
                    "id": 4678,
                    "slug": "streets-of-rage-2",
                    "name": "Streets of Rage 2",
                    "added": 826
                },
                {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 638
                }
            ]
        },
        {
            "id": 12,
            "name": "Neo Geo",
            "slug": "neogeo",
            "games_count": 111,
            "image_background": "https://media.rawg.io/media/screenshots/35f/35fec4f3634887057d5ff72c5efa1cf0.jpg",
            "image": null,
            "year_start": null,
            "year_end": null,
            "games": [
                {
                    "id": 1488,
                    "slug": "metal-slug-3",
                    "name": "METAL SLUG 3",
                    "added": 2219
                },
                {
                    "id": 14948,
                    "slug": "metal-slug",
                    "name": "METAL SLUG",
                    "added": 921
                },
                {
                    "id": 23669,
                    "slug": "the-king-of-fighters-2002",
                    "name": "THE KING OF FIGHTERS 2002",
                    "added": 744
                },
                {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 638
                },
                {
                    "id": 6256,
                    "slug": "metal-slug-2",
                    "name": "METAL SLUG 2",
                    "added": 578
                },
                {
                    "id": 3802,
                    "slug": "double-dragon",
                    "name": "Double Dragon",
                    "added": 390
                }
            ]
        }
    ]
    const {NestedLayout, GameList} = Components();
  return (
    <NestedLayout>
        <GameList name='All Developers' content={platformsContent} listLinks='Platforms'/>
    </NestedLayout>
  )
}