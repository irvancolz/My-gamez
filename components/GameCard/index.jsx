import style from './GameCard.module.css';
import Star from "../Star";
import Image from 'next/image'
import Link from 'next/link'
import {FaPlaystation, FaXbox, FaAndroid} from 'react-icons/fa'
import {SiNintendoswitch} from 'react-icons/si';
import {AiOutlineDesktop, AiFillApple} from 'react-icons/ai'

export default function GameCard({content = {}}){
    return(
        <div className={style.container}>
            <div className={style.imageContainer}>
                <Image 
                    src={content.background_image}
                    layout='fill'/>
            </div>
            <div className={style.contentContainer}>
                <div className={style.content}>
                    <h3 className={style.title}>{content.name}</h3>
                    <div className={style.starContainer} title={`${content.rating}`}>
                        <Star limit={content.rating} />
                    </div>
                    <div className={style.metaContainer}>
                        <div 
                            className={style.meta} 
                            title='metacritic score'
                            style={{
                                borderColor: `${content.metacritic > 70 ? 'var(--green-bg-col)' : content.metacritic >= 50 ? 'var(--gold-bg-col)' : 'var(--red-bg-col)'}`,
                                color: `var(--green-bg-col)`,
                            }}>
                            {content.metacritic}
                        </div>
                    </div>
                    <div className={style.genres}>
                        <p className={style.contentTitle}>genres</p>
                        <div className={style.linkContainer}>
                        { content.genres.map(genre =>{
                            return(
                                <span className={style.link} key={genre.id} title={`${genre.games_count} games`}>
                                    <Link href={`/categories/${genre.slug}`}>
                                        {genre.name}
                                    </Link>
                                </span>
                            )
                            })}
                        </div>
                    </div>
                    <div className={style.esrb}>
                        <p className={style.contentTitle}>Esrb ratings</p>
                        <div className={style.linkContainer}>
                            <p className={style.link}>{content.esrb_rating.name}</p>
                        </div>
                    </div>
                    <div className={style.platformsContainer}>
                       {content.parent_platforms.map(content =>{
                        return(
                            <span key={content.platform.id} title={content.platform.name}>
                            {
                                content.platform.slug.includes('playstation') ? <FaPlaystation /> :
                                content.platform.slug.includes('xbox') ? <FaXbox /> :
                                content.platform.slug.includes('nintendo') ? <SiNintendoswitch /> :
                                content.platform.slug.includes('android') ? <FaAndroid /> :
                                content.platform.slug.includes('pc') ? <AiOutlineDesktop /> :
                                content.platform.slug.includes('ios') ? <AiFillApple /> :
                                null
                            }
                            </span>
                        )
                       })}
                    </div>
                </div>
            </div>
        </div>
    )
}