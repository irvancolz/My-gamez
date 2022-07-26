import React from 'react';
import style from './tag.module.css';
import Components from '../../components';

export default function Tags() {
    const tagContent =[
        {
            "id": 31,
            "name": "Singleplayer",
            "slug": "singleplayer",
            "games_count": 174814,
            "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
            "language": "eng",
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
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 13275
                }
            ]
        },
        {
            "id": 40847,
            "name": "Steam Achievements",
            "slug": "steam-achievements",
            "games_count": 26623,
            "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
            "language": "eng",
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
            "id": 7,
            "name": "Multiplayer",
            "slug": "multiplayer",
            "games_count": 32003,
            "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
            "language": "eng",
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
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 12809
                }
            ]
        },
        {
            "id": 13,
            "name": "Atmospheric",
            "slug": "atmospheric",
            "games_count": 23466,
            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
            "language": "eng",
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
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 13173
                }
            ]
        },
        {
            "id": 7808,
            "name": "steam-trading-cards",
            "slug": "steam-trading-cards",
            "games_count": 7582,
            "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
            "language": "eng",
            "games": [
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15554
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
            "id": 40836,
            "name": "Full controller support",
            "slug": "full-controller-support",
            "games_count": 12393,
            "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
            "language": "eng",
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
            "id": 40849,
            "name": "Steam Cloud",
            "slug": "steam-cloud",
            "games_count": 12116,
            "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
            "language": "eng",
            "games": [
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 15554
                },
                {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 13463
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
            "id": 42,
            "name": "Great Soundtrack",
            "slug": "great-soundtrack",
            "games_count": 3207,
            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
            "language": "eng",
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
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 13463
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
                }
            ]
        },
        {
            "id": 24,
            "name": "RPG",
            "slug": "rpg",
            "games_count": 14926,
            "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
            "language": "eng",
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
                }
            ]
        },
        {
            "id": 18,
            "name": "Co-op",
            "slug": "co-op",
            "games_count": 8638,
            "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
            "language": "eng",
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
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 12809
                },
                {
                    "id": 28,
                    "slug": "red-dead-redemption-2",
                    "name": "Red Dead Redemption 2",
                    "added": 12439
                }
            ]
        }
    ]
    const {NestedLayout, GameList} = Components();
  return (
    <NestedLayout>
        <GameList name='All Tags' content={tagContent} listLinks='Tags'/>
    </NestedLayout>
  )
}
