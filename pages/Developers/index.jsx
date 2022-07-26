import React from 'react';
import style from './developers.module.css';
import Components from '../../components';

export default function Developers() {
    const devContent =[
        {
            "id": 405,
            "name": "Ubisoft",
            "slug": "ubisoft",
            "games_count": 334,
            "image_background": "https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg",
            "games": [
                {
                    "id": 4161,
                    "slug": "far-cry-3",
                    "name": "Far Cry 3",
                    "added": 8446
                },
                {
                    "id": 362,
                    "slug": "for-honor",
                    "name": "For Honor",
                    "added": 7879
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
                    "id": 23585,
                    "slug": "far-cry-5",
                    "name": "Far Cry 5",
                    "added": 6538
                },
                {
                    "id": 58616,
                    "slug": "assassins-creed-odyssey",
                    "name": "Assassin's Creed Odyssey",
                    "added": 6313
                }
            ]
        },
        {
            "id": 18893,
            "name": "Feral Interactive",
            "slug": "feral-interactive",
            "games_count": 106,
            "image_background": "https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg",
            "games": [
                {
                    "id": 7689,
                    "slug": "rise-of-the-tomb-raider",
                    "name": "Rise of the Tomb Raider",
                    "added": 9840
                },
                {
                    "id": 11973,
                    "slug": "shadow-of-mordor",
                    "name": "Middle-earth: Shadow of Mordor",
                    "added": 9299
                },
                {
                    "id": 4427,
                    "slug": "bioshock-2",
                    "name": "BioShock 2",
                    "added": 9045
                },
                {
                    "id": 10035,
                    "slug": "hitman",
                    "name": "Hitman",
                    "added": 9032
                },
                {
                    "id": 10754,
                    "slug": "bioshock-remastered",
                    "name": "BioShock Remastered",
                    "added": 8447
                },
                {
                    "id": 10243,
                    "slug": "company-of-heroes-2",
                    "name": "Company of Heroes 2",
                    "added": 7756
                }
            ]
        },
        {
            "id": 1612,
            "name": "Valve Software",
            "slug": "valve-software",
            "games_count": 42,
            "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
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
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 13173
                },
                {
                    "id": 13537,
                    "slug": "half-life-2",
                    "name": "Half-Life 2",
                    "added": 11912
                },
                {
                    "id": 11859,
                    "slug": "team-fortress-2",
                    "name": "Team Fortress 2",
                    "added": 10859
                }
            ]
        },
        {
            "id": 109,
            "name": "Electronic Arts",
            "slug": "electronic-arts",
            "games_count": 319,
            "image_background": "https://media.rawg.io/media/games/568/5689c58278e807c1574ceefb8dec026b.jpg",
            "games": [
                {
                    "id": 4570,
                    "slug": "dead-space",
                    "name": "Dead Space",
                    "added": 7936
                },
                {
                    "id": 5525,
                    "slug": "brutal-legend",
                    "name": "Brutal Legend",
                    "added": 7069
                },
                {
                    "id": 998,
                    "slug": "battlefield-1",
                    "name": "Battlefield 1",
                    "added": 6190
                },
                {
                    "id": 4550,
                    "slug": "dead-space-2",
                    "name": "Dead Space 2",
                    "added": 5524
                },
                {
                    "id": 3842,
                    "slug": "battlefield-4",
                    "name": "Battlefield 4",
                    "added": 5281
                },
                {
                    "id": 50778,
                    "slug": "a-way-out-2018",
                    "name": "A Way Out",
                    "added": 4561
                }
            ]
        },
        {
            "id": 6,
            "name": "Sony Interactive Entertainment",
            "slug": "sony-interactive-entertainment",
            "games_count": 618,
            "image_background": "https://media.rawg.io/media/games/bbc/bbce6f1659d35ffc16aed8b66e9990a1.jpg",
            "games": [
                {
                    "id": 3387,
                    "slug": "bloodborne",
                    "name": "Bloodborne",
                    "added": 7598
                },
                {
                    "id": 3254,
                    "slug": "journey",
                    "name": "Journey",
                    "added": 7320
                },
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
                    "id": 4491,
                    "slug": "shadow-of-the-colossus",
                    "name": "Shadow of the Colossus (2011)",
                    "added": 4151
                },
                {
                    "id": 693,
                    "slug": "the-last-guardian",
                    "name": "The Last Guardian",
                    "added": 2832
                }
            ]
        },
        {
            "id": 3709,
            "name": "Ubisoft Montreal",
            "slug": "ubisoft-montreal",
            "games_count": 114,
            "image_background": "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
            "games": [
                {
                    "id": 4161,
                    "slug": "far-cry-3",
                    "name": "Far Cry 3",
                    "added": 8446
                },
                {
                    "id": 362,
                    "slug": "for-honor",
                    "name": "For Honor",
                    "added": 7879
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
                    "id": 28568,
                    "slug": "assassins-creed-ii",
                    "name": "Assassin's Creed II",
                    "added": 6585
                },
                {
                    "id": 23585,
                    "slug": "far-cry-5",
                    "name": "Far Cry 5",
                    "added": 6538
                }
            ]
        },
        {
            "id": 4132,
            "name": "Square Enix",
            "slug": "square-enix",
            "games_count": 338,
            "image_background": "https://media.rawg.io/media/games/b50/b501727147644474562935f19a60134e.jpg",
            "games": [
                {
                    "id": 10035,
                    "slug": "hitman",
                    "name": "Hitman",
                    "added": 9032
                },
                {
                    "id": 3017,
                    "slug": "just-cause-3",
                    "name": "Just Cause 3",
                    "added": 7427
                },
                {
                    "id": 4513,
                    "slug": "just-cause-2",
                    "name": "Just Cause 2",
                    "added": 7197
                },
                {
                    "id": 3766,
                    "slug": "thief",
                    "name": "Thief",
                    "added": 5939
                },
                {
                    "id": 3474,
                    "slug": "lara-croft-and-the-temple-of-osiris",
                    "name": "Lara Croft and the Temple of Osiris",
                    "added": 5813
                },
                {
                    "id": 750,
                    "slug": "final-fantasy-xv",
                    "name": "FINAL FANTASY XV",
                    "added": 5056
                }
            ]
        },
        {
            "id": 3678,
            "name": "Capcom",
            "slug": "capcom",
            "games_count": 428,
            "image_background": "https://media.rawg.io/media/games/041/041026016869e440fb1fb2b6be5222c4.jpg",
            "games": [
                {
                    "id": 46889,
                    "slug": "monster-hunter-world-2",
                    "name": "Monster Hunter: World",
                    "added": 7056
                },
                {
                    "id": 480,
                    "slug": "resident-evil-7-biohazard",
                    "name": "Resident Evil 7: Biohazard",
                    "added": 6680
                },
                {
                    "id": 13461,
                    "slug": "resident-evil-5-biohazard-5",
                    "name": "Resident Evil 5",
                    "added": 6055
                },
                {
                    "id": 56184,
                    "slug": "resident-evil-4",
                    "name": "Resident Evil 4 (2005)",
                    "added": 5400
                },
                {
                    "id": 58755,
                    "slug": "devil-may-cry-5",
                    "name": "Devil May Cry 5",
                    "added": 5045
                },
                {
                    "id": 2623,
                    "slug": "resident-evil-6",
                    "name": "Resident Evil 6",
                    "added": 4986
                }
            ]
        },
        {
            "id": 17132,
            "name": "Aspyr Media",
            "slug": "aspyr-media",
            "games_count": 62,
            "image_background": "https://media.rawg.io/media/games/50c/50c69996b917ae50d8d319f6ce9bed37.jpg",
            "games": [
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
                    "id": 13633,
                    "slug": "civilization-v",
                    "name": "Sid Meier's Civilization V",
                    "added": 7950
                },
                {
                    "id": 3543,
                    "slug": "borderlands-the-pre-sequel",
                    "name": "Borderlands: The Pre-Sequel",
                    "added": 7471
                },
                {
                    "id": 4527,
                    "slug": "modern-warfare-2",
                    "name": "Call of Duty: Modern Warfare 2",
                    "added": 6142
                },
                {
                    "id": 15859,
                    "slug": "star-wars-knights-of-the-old-republic-2",
                    "name": "Star Wars: Knights of the Old Republic",
                    "added": 5488
                }
            ]
        },
        {
            "id": 4,
            "name": "Bethesda Softworks",
            "slug": "bethesda-softworks",
            "games_count": 62,
            "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg",
            "games": [
                {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 13463
                },
                {
                    "id": 2454,
                    "slug": "doom",
                    "name": "DOOM (2016)",
                    "added": 11192
                },
                {
                    "id": 3696,
                    "slug": "wolfenstein-the-new-order",
                    "name": "Wolfenstein: The New Order",
                    "added": 8205
                },
                {
                    "id": 4248,
                    "slug": "dishonored",
                    "name": "Dishonored",
                    "added": 7677
                },
                {
                    "id": 864,
                    "slug": "dishonored-2",
                    "name": "Dishonored 2",
                    "added": 7294
                },
                {
                    "id": 28202,
                    "slug": "wolfenstein-2-the-new-colossus",
                    "name": "Wolfenstein II: The New Colossus",
                    "added": 5817
                }
            ]
        }
    ]
    const {NestedLayout, GameList} = Components();
  return (
    <NestedLayout>
        <GameList name='All Developers' content={devContent} listLinks='Developers'/>
    </NestedLayout>
  )
}
