import React from 'react';
import style from './genre.module.css';
import Components from '../../components';

export default function Genre() {
    const genreContent =[
        {
            "id": 4,
            "name": "Action",
            "slug": "action",
            "games_count": 157171,
            "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
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
            "id": 51,
            "name": "Indie",
            "slug": "indie",
            "games_count": 46098,
            "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
            "games": [
                {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 11509
                },
                {
                    "id": 3272,
                    "slug": "rocket-league",
                    "name": "Rocket League",
                    "added": 10416
                },
                {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 9907
                },
                {
                    "id": 3612,
                    "slug": "hotline-miami",
                    "name": "Hotline Miami",
                    "added": 8715
                },
                {
                    "id": 3790,
                    "slug": "outlast",
                    "name": "Outlast",
                    "added": 8594
                },
                {
                    "id": 9767,
                    "slug": "hollow-knight",
                    "name": "Hollow Knight",
                    "added": 8552
                }
            ]
        },
        {
            "id": 3,
            "name": "Adventure",
            "slug": "adventure",
            "games_count": 119016,
            "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
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
                    "id": 28,
                    "slug": "red-dead-redemption-2",
                    "name": "Red Dead Redemption 2",
                    "added": 12439
                }
            ]
        },
        {
            "id": 5,
            "name": "RPG",
            "slug": "role-playing-games-rpg",
            "games_count": 47883,
            "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
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
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 12809
                },
                {
                    "id": 3070,
                    "slug": "fallout-4",
                    "name": "Fallout 4",
                    "added": 11073
                },
                {
                    "id": 58175,
                    "slug": "god-of-war-2",
                    "name": "God of War",
                    "added": 10872
                },
                {
                    "id": 278,
                    "slug": "horizon-zero-dawn",
                    "name": "Horizon Zero Dawn",
                    "added": 10535
                }
            ]
        },
        {
            "id": 10,
            "name": "Strategy",
            "slug": "strategy",
            "games_count": 47855,
            "image_background": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg",
            "games": [
                {
                    "id": 13633,
                    "slug": "civilization-v",
                    "name": "Sid Meier's Civilization V",
                    "added": 7950
                },
                {
                    "id": 10243,
                    "slug": "company-of-heroes-2",
                    "name": "Company of Heroes 2",
                    "added": 7756
                },
                {
                    "id": 13910,
                    "slug": "xcom-enemy-unknown",
                    "name": "XCOM: Enemy Unknown",
                    "added": 7119
                },
                {
                    "id": 5525,
                    "slug": "brutal-legend",
                    "name": "Brutal Legend",
                    "added": 7069
                },
                {
                    "id": 10065,
                    "slug": "cities-skylines",
                    "name": "Cities: Skylines",
                    "added": 6696
                },
                {
                    "id": 10340,
                    "slug": "crusader-kings-ii",
                    "name": "Crusader Kings II",
                    "added": 6186
                }
            ]
        },
        {
            "id": 2,
            "name": "Shooter",
            "slug": "shooter",
            "games_count": 54676,
            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
            "games": [
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15554
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
                },
                {
                    "id": 4062,
                    "slug": "bioshock-infinite",
                    "name": "BioShock Infinite",
                    "added": 12916
                },
                {
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 12809
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
            "id": 40,
            "name": "Casual",
            "slug": "casual",
            "games_count": 39463,
            "image_background": "https://media.rawg.io/media/games/f86/f869253c68b38fa789f58cc5be2cb996.jpg",
            "games": [
                {
                    "id": 9721,
                    "slug": "garrys-mod",
                    "name": "Garry's Mod",
                    "added": 7808
                },
                {
                    "id": 326292,
                    "slug": "fall-guys",
                    "name": "Fall Guys: Ultimate Knockout",
                    "added": 6637
                },
                {
                    "id": 9830,
                    "slug": "brawlhalla",
                    "name": "Brawlhalla",
                    "added": 5785
                },
                {
                    "id": 356714,
                    "slug": "among-us",
                    "name": "Among Us",
                    "added": 5304
                },
                {
                    "id": 1959,
                    "slug": "goat-simulator",
                    "name": "Goat Simulator",
                    "added": 5246
                },
                {
                    "id": 16343,
                    "slug": "a-story-about-my-uncle",
                    "name": "A Story About My Uncle",
                    "added": 5035
                }
            ]
        },
        {
            "id": 14,
            "name": "Simulation",
            "slug": "simulation",
            "games_count": 59645,
            "image_background": "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
            "games": [
                {
                    "id": 10035,
                    "slug": "hitman",
                    "name": "Hitman",
                    "added": 9032
                },
                {
                    "id": 9721,
                    "slug": "garrys-mod",
                    "name": "Garry's Mod",
                    "added": 7808
                },
                {
                    "id": 10243,
                    "slug": "company-of-heroes-2",
                    "name": "Company of Heroes 2",
                    "added": 7756
                },
                {
                    "id": 654,
                    "slug": "stardew-valley",
                    "name": "Stardew Valley",
                    "added": 7667
                },
                {
                    "id": 9882,
                    "slug": "dont-starve-together",
                    "name": "Don't Starve Together",
                    "added": 7286
                },
                {
                    "id": 10065,
                    "slug": "cities-skylines",
                    "name": "Cities: Skylines",
                    "added": 6696
                }
            ]
        },
        {
            "id": 7,
            "name": "Puzzle",
            "slug": "puzzle",
            "games_count": 88895,
            "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
            "games": [
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15554
                },
                {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 13173
                },
                {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 11509
                },
                {
                    "id": 19709,
                    "slug": "half-life-2-episode-two",
                    "name": "Half-Life 2: Episode Two",
                    "added": 8850
                },
                {
                    "id": 18080,
                    "slug": "half-life",
                    "name": "Half-Life",
                    "added": 8082
                },
                {
                    "id": 1450,
                    "slug": "inside",
                    "name": "INSIDE",
                    "added": 6428
                }
            ]
        },
        {
            "id": 11,
            "name": "Arcade",
            "slug": "arcade",
            "games_count": 22505,
            "image_background": "https://media.rawg.io/media/games/37a/37a9536e92cf8fe3b60045aa75dbd41f.jpg",
            "games": [
                {
                    "id": 3612,
                    "slug": "hotline-miami",
                    "name": "Hotline Miami",
                    "added": 8715
                },
                {
                    "id": 17540,
                    "slug": "injustice-gods-among-us-ultimate-edition",
                    "name": "Injustice: Gods Among Us Ultimate Edition",
                    "added": 7981
                },
                {
                    "id": 22509,
                    "slug": "minecraft",
                    "name": "Minecraft",
                    "added": 6486
                },
                {
                    "id": 4003,
                    "slug": "grid-2",
                    "name": "GRID 2",
                    "added": 6382
                },
                {
                    "id": 3408,
                    "slug": "hotline-miami-2-wrong-number",
                    "name": "Hotline Miami 2: Wrong Number",
                    "added": 5043
                },
                {
                    "id": 16343,
                    "slug": "a-story-about-my-uncle",
                    "name": "A Story About My Uncle",
                    "added": 5035
                }
            ]
        },
        {
            "id": 83,
            "name": "Platformer",
            "slug": "platformer",
            "games_count": 91229,
            "image_background": "https://media.rawg.io/media/games/594/59487800889ebac294c7c2c070d02356.jpg",
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
                    "id": 9767,
                    "slug": "hollow-knight",
                    "name": "Hollow Knight",
                    "added": 8552
                },
                {
                    "id": 41,
                    "slug": "little-nightmares",
                    "name": "Little Nightmares",
                    "added": 8455
                },
                {
                    "id": 18080,
                    "slug": "half-life",
                    "name": "Half-Life",
                    "added": 8082
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
            "id": 1,
            "name": "Racing",
            "slug": "racing",
            "games_count": 22390,
            "image_background": "https://media.rawg.io/media/games/23d/23d78acedbb5f40c9fb64e73af5af65d.jpg",
            "games": [
                {
                    "id": 3272,
                    "slug": "rocket-league",
                    "name": "Rocket League",
                    "added": 10416
                },
                {
                    "id": 4003,
                    "slug": "grid-2",
                    "name": "GRID 2",
                    "added": 6382
                },
                {
                    "id": 2572,
                    "slug": "dirt-rally",
                    "name": "DiRT Rally",
                    "added": 5697
                },
                {
                    "id": 58753,
                    "slug": "forza-horizon-4",
                    "name": "Forza Horizon 4",
                    "added": 4863
                },
                {
                    "id": 5578,
                    "slug": "grid",
                    "name": "Race Driver: Grid",
                    "added": 4669
                },
                {
                    "id": 4347,
                    "slug": "dirt-showdown",
                    "name": "DiRT Showdown",
                    "added": 4113
                }
            ]
        },
        {
            "id": 59,
            "name": "Massively Multiplayer",
            "slug": "massively-multiplayer",
            "games_count": 2938,
            "image_background": "https://media.rawg.io/media/games/c3b/c3be1d5f55cb9324c97ccb7aaaf42ad4.jpg",
            "games": [
                {
                    "id": 32,
                    "slug": "destiny-2",
                    "name": "Destiny 2",
                    "added": 11036
                },
                {
                    "id": 10213,
                    "slug": "dota-2",
                    "name": "Dota 2",
                    "added": 10120
                },
                {
                    "id": 766,
                    "slug": "warframe",
                    "name": "Warframe",
                    "added": 9942
                },
                {
                    "id": 290856,
                    "slug": "apex-legends",
                    "name": "Apex Legends",
                    "added": 8438
                },
                {
                    "id": 10533,
                    "slug": "path-of-exile",
                    "name": "Path of Exile",
                    "added": 7926
                },
                {
                    "id": 362,
                    "slug": "for-honor",
                    "name": "For Honor",
                    "added": 7879
                }
            ]
        },
        {
            "id": 15,
            "name": "Sports",
            "slug": "sports",
            "games_count": 19384,
            "image_background": "https://media.rawg.io/media/games/9e5/9e52a797f049e701d4eee84774a99007.jpg",
            "games": [
                {
                    "id": 3272,
                    "slug": "rocket-league",
                    "name": "Rocket League",
                    "added": 10416
                },
                {
                    "id": 326292,
                    "slug": "fall-guys",
                    "name": "Fall Guys: Ultimate Knockout",
                    "added": 6637
                },
                {
                    "id": 2572,
                    "slug": "dirt-rally",
                    "name": "DiRT Rally",
                    "added": 5697
                },
                {
                    "id": 53341,
                    "slug": "jet-set-radio-2012",
                    "name": "Jet Set Radio",
                    "added": 4489
                },
                {
                    "id": 715,
                    "slug": "steep",
                    "name": "Steep",
                    "added": 3473
                },
                {
                    "id": 9575,
                    "slug": "vrchat",
                    "name": "VRChat",
                    "added": 3422
                }
            ]
        },
        {
            "id": 6,
            "name": "Fighting",
            "slug": "fighting",
            "games_count": 10619,
            "image_background": "https://media.rawg.io/media/games/416/4164ca654a339af5be8e63cc9c480c70.jpg",
            "games": [
                {
                    "id": 17540,
                    "slug": "injustice-gods-among-us-ultimate-edition",
                    "name": "Injustice: Gods Among Us Ultimate Edition",
                    "added": 7981
                },
                {
                    "id": 108,
                    "slug": "mortal-kombat-x",
                    "name": "Mortal Kombat X",
                    "added": 7378
                },
                {
                    "id": 28179,
                    "slug": "sega-mega-drive-and-genesis-classics",
                    "name": "SEGA Mega Drive and Genesis Classics",
                    "added": 6796
                },
                {
                    "id": 9830,
                    "slug": "brawlhalla",
                    "name": "Brawlhalla",
                    "added": 5785
                },
                {
                    "id": 274480,
                    "slug": "mortal-kombat-11",
                    "name": "Mortal Kombat 11",
                    "added": 4100
                },
                {
                    "id": 44525,
                    "slug": "yakuza-kiwami",
                    "name": "Yakuza Kiwami",
                    "added": 3673
                }
            ]
        },
        {
            "id": 19,
            "name": "Family",
            "slug": "family",
            "games_count": 5364,
            "image_background": "https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg",
            "games": [
                {
                    "id": 3254,
                    "slug": "journey",
                    "name": "Journey",
                    "added": 7320
                },
                {
                    "id": 2597,
                    "slug": "lego-lord-of-the-rings",
                    "name": "LEGO The Lord of the Rings",
                    "added": 4570
                },
                {
                    "id": 3350,
                    "slug": "broken-age",
                    "name": "Broken Age",
                    "added": 4361
                },
                {
                    "id": 3729,
                    "slug": "lego-the-hobbit",
                    "name": "LEGO The Hobbit",
                    "added": 4162
                },
                {
                    "id": 1259,
                    "slug": "machinarium",
                    "name": "Machinarium",
                    "added": 3829
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
            "id": 28,
            "name": "Board Games",
            "slug": "board-games",
            "games_count": 8154,
            "image_background": "https://media.rawg.io/media/games/d3f/d3f9638e581b01d872bec784aaa9bdad.jpg",
            "games": [
                {
                    "id": 23557,
                    "slug": "gwent-the-witcher-card-game",
                    "name": "Gwent: The Witcher Card Game",
                    "added": 3799
                },
                {
                    "id": 327999,
                    "slug": "dota-underlords",
                    "name": "Dota Underlords",
                    "added": 3256
                },
                {
                    "id": 2055,
                    "slug": "adventure-capitalist",
                    "name": "AdVenture Capitalist",
                    "added": 2759
                },
                {
                    "id": 2306,
                    "slug": "poker-night-2",
                    "name": "Poker Night 2",
                    "added": 1815
                },
                {
                    "id": 3187,
                    "slug": "armello",
                    "name": "Armello",
                    "added": 1688
                },
                {
                    "id": 758,
                    "slug": "hue",
                    "name": "Hue",
                    "added": 1597
                }
            ]
        },
        {
            "id": 34,
            "name": "Educational",
            "slug": "educational",
            "games_count": 13778,
            "image_background": "https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg",
            "games": [
                {
                    "id": 1358,
                    "slug": "papers-please",
                    "name": "Papers, Please",
                    "added": 5526
                },
                {
                    "id": 1140,
                    "slug": "world-of-goo",
                    "name": "World of Goo",
                    "added": 3802
                },
                {
                    "id": 2778,
                    "slug": "surgeon-simulator-cpr",
                    "name": "Surgeon Simulator",
                    "added": 3298
                },
                {
                    "id": 9768,
                    "slug": "gameguru",
                    "name": "GameGuru",
                    "added": 2084
                },
                {
                    "id": 13777,
                    "slug": "sid-meiers-civilization-iv-colonization",
                    "name": "Sid Meier's Civilization IV: Colonization",
                    "added": 1981
                },
                {
                    "id": 6885,
                    "slug": "pirates-3",
                    "name": "Sid Meier's Pirates!",
                    "added": 1849
                }
            ]
        },
        {
            "id": 17,
            "name": "Card",
            "slug": "card",
            "games_count": 4333,
            "image_background": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg",
            "games": [
                {
                    "id": 23557,
                    "slug": "gwent-the-witcher-card-game",
                    "name": "Gwent: The Witcher Card Game",
                    "added": 3799
                },
                {
                    "id": 28121,
                    "slug": "slay-the-spire",
                    "name": "Slay the Spire",
                    "added": 3682
                },
                {
                    "id": 18852,
                    "slug": "poker-night-at-the-inventory",
                    "name": "Poker Night at the Inventory",
                    "added": 2423
                },
                {
                    "id": 8923,
                    "slug": "faeria",
                    "name": "Faeria",
                    "added": 1893
                },
                {
                    "id": 2306,
                    "slug": "poker-night-2",
                    "name": "Poker Night 2",
                    "added": 1815
                },
                {
                    "id": 332,
                    "slug": "the-elder-scrolls-legends",
                    "name": "The Elder Scrolls: Legends",
                    "added": 1744
                }
            ]
        }
    ]
    const {NestedLayout, GameList} = Components();
  return (
    <NestedLayout>
        <GameList name='All Genre' content={genreContent} listLinks='Genre'/>
    </NestedLayout>
  )
}
