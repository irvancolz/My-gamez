import style from './GameCard.module.css';
import Star from "../Star";
import Image from 'next/image'
import Link from 'next/link'

export default function GameCard({content = {}}){
    return(
        <div className={style.container}>
            <div className={style.cardImage}>
                <Image 
                src={content.background_image}
                layout='fill'/>

            </div>
            <div className={style.cardBody}>
                <div className={style.cardTitle}>
                    <p title='see detail'>
                        <Link href={'#'}>
                            {content.name}
                        </Link>
                    </p>
                    <Star limit={content.rating} />
                </div>
                <ul className={style.cardDesc}>
                    <li>
                        <h3>Genre :</h3>
                            <ul>
                        {content.genres.map(genre =>{
                            return (
                            <li className={style.listText} title={`see all ${genre.name} games`}>
                                <Link href={'#'}>{`${genre.name}, `}</Link>
                            </li>
                            )
                        })}
                        </ul>
                    </li>
                    <li>
                        <h3>Platforms :</h3>
                        <ul>
                        {content.platforms.map(platform =>{
                            return (
                            <li className={style.listText} title={`see all ${platform.platform.name} games`}>
                                <Link href={'#'}>{`${platform.platform.name}, `}</Link>
                            </li>
                            )
                        })}
                        </ul>
                    </li>
                    <li>
                        <h3>Esrb :</h3>
                        <ul>
                            <li className={style.listText}>
                                <Link href='#'>
                                    {content.esrb_rating.name}
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}