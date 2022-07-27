import Link from 'next/link';
import style from './Tags.module.css'

export default function Tags({listTags =[]}){
    const list = [
        {
            "id": 31,
            "name": "Singleplayer",
            "slug": "singleplayer",
            "language": "eng",
            "games_count": 168136,
            "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
        },
        {
            "id": 40847,
            "name": "Steam Achievements",
            "slug": "steam-achievements",
            "language": "eng",
            "games_count": 26179,
            "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
        },
        {
            "id": 7,
            "name": "Multiplayer",
            "slug": "multiplayer",
            "language": "eng",
            "games_count": 31392,
            "image_background": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg"
        },
        {
            "id": 13,
            "name": "Atmospheric",
            "slug": "atmospheric",
            "language": "eng",
            "games_count": 22476,
            "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
        },
        {
            "id": 40849,
            "name": "Steam Cloud",
            "slug": "steam-cloud",
            "language": "eng",
            "games_count": 11911,
            "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        {
            "id": 40836,
            "name": "Full controller support",
            "slug": "full-controller-support",
            "language": "eng",
            "games_count": 12165,
            "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
        },
        {
            "id": 18,
            "name": "Co-op",
            "slug": "co-op",
            "language": "eng",
            "games_count": 8448,
            "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
        },
        {
            "id": 36,
            "name": "Open World",
            "slug": "open-world",
            "language": "eng",
            "games_count": 5180,
            "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
        },
        {
            "id": 411,
            "name": "cooperative",
            "slug": "cooperative",
            "language": "eng",
            "games_count": 3436,
            "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
        },
        {
            "id": 8,
            "name": "First-Person",
            "slug": "first-person",
            "language": "eng",
            "games_count": 21968,
            "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
        },
        {
            "id": 149,
            "name": "Third Person",
            "slug": "third-person",
            "language": "eng",
            "games_count": 7215,
            "image_background": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg"
        },
        {
            "id": 9,
            "name": "Online Co-Op",
            "slug": "online-co-op",
            "language": "eng",
            "games_count": 3556,
            "image_background": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
        },
        {
            "id": 6,
            "name": "Exploration",
            "slug": "exploration",
            "language": "eng",
            "games_count": 15609,
            "image_background": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg"
        },
        {
            "id": 40832,
            "name": "Cross-Platform Multiplayer",
            "slug": "cross-platform-multiplayer",
            "language": "eng",
            "games_count": 1954,
            "image_background": "https://media.rawg.io/media/screenshots/bf7/bf71c819eace914e6c42ae3ecb667308.jpg"
        },
        {
            "id": 157,
            "name": "PvP",
            "slug": "pvp",
            "language": "eng",
            "games_count": 5635,
            "image_background": "https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg"
        },
        {
            "id": 130,
            "name": "Driving",
            "slug": "driving",
            "language": "eng",
            "games_count": 4158,
            "image_background": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg"
        },
        {
            "id": 40937,
            "name": "Steam Trading Cards",
            "slug": "steam-trading-cards-2",
            "language": "eng",
            "games_count": 294,
            "image_background": "https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg"
        },
        {
            "id": 45878,
            "name": "Online PvP",
            "slug": "online-pvp",
            "language": "eng",
            "games_count": 2226,
            "image_background": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg"
        },
        {
            "id": 577,
            "name": "Beautiful",
            "slug": "beautiful",
            "language": "eng",
            "games_count": 1757,
            "image_background": "https://media.rawg.io/media/games/ae3/ae336267c9dfa6732f66619b375ce0af.jpg"
        },
        {
            "id": 1632,
            "name": "cars",
            "slug": "cars",
            "language": "eng",
            "games_count": 5603,
            "image_background": "https://media.rawg.io/media/screenshots/4c9/4c960e7470731a79ef0bd6cf3fc7cd5a.jpg"
        },
        {
            "id": 2156,
            "name": "drift",
            "slug": "drift",
            "language": "eng",
            "games_count": 1323,
            "image_background": "https://media.rawg.io/media/screenshots/4d3/4d3a252a120e0c1b7e8e2150e12d2be6.jpg"
        },
        {
            "id": 9336,
            "name": "mexico",
            "slug": "mexico",
            "language": "eng",
            "games_count": 67,
            "image_background": "https://media.rawg.io/media/screenshots/ac2/ac2c1b95c1a5d6c4951e5c639e658559.jpg"
        },
        {
            "id": 8803,
            "name": "racing-game",
            "slug": "racing-game",
            "language": "eng",
            "games_count": 35,
            "image_background": "https://media.rawg.io/media/screenshots/8f8/8f885bd4fd74b7fb7e58582640b45d2f.jpg"
        },
        {
            "id": 12669,
            "name": "sprint",
            "slug": "sprint",
            "language": "eng",
            "games_count": 6,
            "image_background": "https://media.rawg.io/media/screenshots/75a/75a2b63be78a0891ec8084d2bffd7b70.jpg"
        },
        {
            "id": 5270,
            "name": "festival",
            "slug": "festival",
            "language": "eng",
            "games_count": 22,
            "image_background": "https://media.rawg.io/media/screenshots/5e4/5e4974efd1e5b3b3c1a81907b776d20f.jpg"
        },
        {
            "id": 27142,
            "name": "photorealism",
            "slug": "photorealism",
            "language": "eng",
            "games_count": 2,
            "image_background": "https://media.rawg.io/media/screenshots/fb6/fb6bf0655098fbd2f4e6473569f660fb.jpg"
        }
    ]
    return(
        <div className={style.container}>
            <h1 className="title">Tags</h1>
            <div className={style.tagsContainer}>
                {list.map(tag =>{
                    return(
                    <div className={style.tag} key={tag.id} title={`see all ${tag.games_count} ${tag.name} games`}>
                        <Link href={`/Tags/${tag.slug}`}>
                            <p className={style.tagLink}>
                                {tag.name}
                            </p>
                        </Link>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}