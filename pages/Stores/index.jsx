import React from 'react';
import style from './store.module.css';
import Components from '../../components';

export default function Stores() {
    const storeContent =[
        {
            "id": 1,
            "name": "Steam",
            "domain": "store.steampowered.com",
            "slug": "steam",
            "games_count": 65272,
            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
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
            "id": 3,
            "name": "PlayStation Store",
            "domain": "store.playstation.com",
            "slug": "playstation-store",
            "games_count": 7788,
            "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
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
            "id": 2,
            "name": "Xbox Store",
            "domain": "microsoft.com",
            "slug": "xbox-store",
            "games_count": 4720,
            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
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
            "id": 4,
            "name": "App Store",
            "domain": "apps.apple.com",
            "slug": "apple-appstore",
            "games_count": 73254,
            "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
            "games": [
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
                }
            ]
        },
        {
            "id": 5,
            "name": "GOG",
            "domain": "gog.com",
            "slug": "gog",
            "games_count": 4285,
            "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
            "games": [
                {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 16543
                },
                {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 12819
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
                    "id": 41494,
                    "slug": "cyberpunk-2077",
                    "name": "Cyberpunk 2077",
                    "added": 9524
                }
            ]
        },
        {
            "id": 6,
            "name": "Nintendo Store",
            "domain": "nintendo.com",
            "slug": "nintendo",
            "games_count": 8832,
            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
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
                },
                {
                    "id": 3939,
                    "slug": "payday-2",
                    "name": "PAYDAY 2",
                    "added": 10756
                }
            ]
        },
        {
            "id": 7,
            "name": "Xbox 360 Store",
            "domain": "marketplace.xbox.com",
            "slug": "xbox360",
            "games_count": 1915,
            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
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
            "id": 8,
            "name": "Google Play",
            "domain": "play.google.com",
            "slug": "google-play",
            "games_count": 16848,
            "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
            "games": [
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
                },
                {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 11509
                }
            ]
        },
        {
            "id": 9,
            "name": "itch.io",
            "domain": "itch.io",
            "slug": "itch",
            "games_count": 588156,
            "image_background": "https://media.rawg.io/media/games/d79/d794c9198ec994cc12ede5ebd4672623.jpg",
            "games": [
                {
                    "id": 613,
                    "slug": "bastion",
                    "name": "Bastion",
                    "added": 7363
                },
                {
                    "id": 5525,
                    "slug": "brutal-legend",
                    "name": "Brutal Legend",
                    "added": 7069
                },
                {
                    "id": 1010,
                    "slug": "transistor",
                    "name": "Transistor",
                    "added": 6670
                },
                {
                    "id": 3740,
                    "slug": "fez",
                    "name": "FEZ",
                    "added": 6064
                },
                {
                    "id": 1358,
                    "slug": "papers-please",
                    "name": "Papers, Please",
                    "added": 5526
                },
                {
                    "id": 1774,
                    "slug": "grim-fandango-remastered",
                    "name": "Grim Fandango Remastered",
                    "added": 5448
                }
            ]
        },
        {
            "id": 11,
            "name": "Epic Games",
            "domain": "epicgames.com",
            "slug": "epic-games",
            "games_count": 1035,
            "image_background": "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg",
            "games": [
                {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 17760
                },
                {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 13910
                },
                {
                    "id": 28,
                    "slug": "red-dead-redemption-2",
                    "name": "Red Dead Redemption 2",
                    "added": 12439
                },
                {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 11509
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
        }
    ]
    const {NestedLayout, GameList} = Components();
  return (
    <NestedLayout>
        <GameList name='All Developers' content={storeContent} listLinks='Stores'/>
    </NestedLayout>
  )
}
