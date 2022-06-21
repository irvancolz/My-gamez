import style from './Achievements.module.css'
import Image from 'next/image'
import Link from 'next/link';

export default function Achievements({achievements=[]}){
    const src ="https://media.rawg.io/media/achievements/513/513f37792de01a8f1ef9cf2144cb3d6b.jpg";
    const results = [
        {
            "id": 1532105,
            "name": "I Have the High Ground",
            "description": "Win 3 Rivals Events in 3 different PI Classes while driving the same car",
            "image": "https://media.rawg.io/media/achievements/513/513f37792de01a8f1ef9cf2144cb3d6b.jpg",
            "percent": "3.80"
        },
        {
            "id": 1532151,
            "name": "Water Performance",
            "description": "Earn 3 stars at the Puerta Pétrea and La Marisma Trailblazers within 2 minutes",
            "image": "https://media.rawg.io/media/achievements/a1e/a1ebc773e4e66c912b750333531101b7_piuU2Ui.jpg",
            "percent": "3.84"
        },
        {
            "id": 1532099,
            "name": "Chicken Dinner",
            "description": "Win your first game of The Eliminator",
            "image": "https://media.rawg.io/media/achievements/5f7/5f7a85eeba9c039c738191819f7ab12e.jpg",
            "percent": "4.04"
        },
        {
            "id": 1532126,
            "name": "Gotta Smash 'Em All",
            "description": "Complete 5 Seasonal Smashable Challenges",
            "image": "https://media.rawg.io/media/achievements/fc0/fc07ca191c68429f91997dc8f5fff62d.jpg",
            "percent": "4.56"
        },
        {
            "id": 1532108,
            "name": "Min, Meet Max",
            "description": "Complete all Events in a Festival Playlist Series",
            "image": "https://media.rawg.io/media/achievements/540/540808a6179943cb20abae3672d7f1c4_atI8sZR.jpg",
            "percent": "5.15"
        },
        {
            "id": 1532106,
            "name": "Unlimited Prowess!",
            "description": "Complete Round Three in all 5 Themes of Horizon Arcade",
            "image": "https://media.rawg.io/media/achievements/013/013185e44d63b86da64bb29d4de5cad7.jpg",
            "percent": "5.67"
        },
        {
            "id": 1532140,
            "name": "A Royal Affair",
            "description": "At sunrise, take a photo of your car with some monarch butterflies at Hotel Mirador Balderrama",
            "image": "https://media.rawg.io/media/achievements/005/005302c18be3e9642ed175275e556471_3hgQeDs.jpg",
            "percent": "5.71"
        },
        {
            "id": 1532148,
            "name": "Dust in the Lens",
            "description": "Take a photo featuring the Gran Telescopio and a dust storm",
            "image": "https://media.rawg.io/media/achievements/ff0/ff02a3ef3e29f930aac46e35a8f8942a_Mand4LH.jpg",
            "percent": "6.10"
        },
        {
            "id": 1532111,
            "name": "Ford of the Wings",
            "description": "Earn 3 Stars at the Eagle's Perch Danger Sign in a Ford Supervan 3",
            "image": "https://media.rawg.io/media/achievements/8aa/8aa533f5195a365ad90cc06723bc0333.jpg",
            "percent": "6.22"
        },
        {
            "id": 1532096,
            "name": "You Could Say I'm a Fan",
            "description": "Earn a Manufacturer Bonus for a collection of 25 or more cars",
            "image": "https://media.rawg.io/media/achievements/516/51640cfb818812bfdfa7280ef34762c3_j9pet1R.jpg",
            "percent": "7.84"
        }
    ]

    return(
        <div className={`${style.container} container`}>
            <h1 className="title">Achievements Section</h1>
            <div className={style.achievementsContainer}>
                {results.map(achievement =>{
                    return(
                    <div key={achievement.id} className={style.achievement}>
                        <div className={style.achievementPic}>
                            <Image 
                            src={achievement.image}
                            layout='fill'
                            />
                        </div>
                        <div className={style.achievementDesc}>
                            <div className={style.achievementHead}>
                                <span className={style.achievementTitle} title="see achievement">
                                    <Link href={''}>
                                            {achievement.name}
                                    </Link>
                                </span>
                                <p className={style.achievementProgress}>{achievement.percent} %</p>
                            </div>
                            <div className={style.achievementBody}>
                                <p className={style.achievementText}>{achievement.description}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className={style.achievementLink} title='show more achievements'>
                <Link href={'#'} scroll={false}>see more</Link>
            </div>
        </div>
    )
}