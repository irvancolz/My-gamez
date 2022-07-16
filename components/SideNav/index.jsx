import style from './Sidenav.module.css';
import MenuGroup from '../MenuGroup';

export default function SideNav(){

    const genre = [
        {
            "id": 405,
            "name": "Ubisoft",
            "slug": "ubisoft",
            "games_count": 335,
            "image_background": "https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg",
            "games": [
                {
                    "id": 4161,
                    "slug": "far-cry-3",
                    "name": "Far Cry 3",
                    "added": 8406
                },
                {
                    "id": 362,
                    "slug": "for-honor",
                    "name": "For Honor",
                    "added": 7848
                },
                {
                    "id": 3841,
                    "slug": "assassins-creed-iv-black-flag",
                    "name": "Assassin’s Creed IV: Black Flag",
                    "added": 7732
                },
                {
                    "id": 3687,
                    "slug": "watch-dogs",
                    "name": "Watch Dogs",
                    "added": 6691
                },
                {
                    "id": 23585,
                    "slug": "far-cry-5",
                    "name": "Far Cry 5",
                    "added": 6454
                },
                {
                    "id": 58616,
                    "slug": "assassins-creed-odyssey",
                    "name": "Assassin's Creed Odyssey",
                    "added": 6278
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
                    "added": 9793
                },
                {
                    "id": 11973,
                    "slug": "shadow-of-mordor",
                    "name": "Middle-earth: Shadow of Mordor",
                    "added": 9258
                },
                {
                    "id": 4427,
                    "slug": "bioshock-2",
                    "name": "BioShock 2",
                    "added": 9013
                },
                {
                    "id": 10035,
                    "slug": "hitman",
                    "name": "Hitman",
                    "added": 9005
                },
                {
                    "id": 10754,
                    "slug": "bioshock-remastered",
                    "name": "BioShock Remastered",
                    "added": 8425
                },
                {
                    "id": 10243,
                    "slug": "company-of-heroes-2",
                    "name": "Company of Heroes 2",
                    "added": 7721
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
                    "added": 15476
                },
                {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 13386
                },
                {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 13210
                },
                {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 13107
                },
                {
                    "id": 13537,
                    "slug": "half-life-2",
                    "name": "Half-Life 2",
                    "added": 11856
                },
                {
                    "id": 11859,
                    "slug": "team-fortress-2",
                    "name": "Team Fortress 2",
                    "added": 10804
                }
            ]
        }
    ]
    return(
        <div className={style.container}>
            <MenuGroup title={'Genre'} menu={genre} />
            <MenuGroup title={'Genre'} menu={genre} />
            <MenuGroup title={'Genre'} menu={genre} />
            <MenuGroup title={'Genre'} menu={genre} />
            <MenuGroup title={'Genre'} menu={genre} />
            <MenuGroup title={'Genre'} menu={genre} />
        </div>
    )
}