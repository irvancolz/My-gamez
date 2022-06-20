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
                    <p>safbauybaoewrnpawnfweaioiwnf</p>
                    <Star limit={content.rating} />
                </div>
                <div className={style.cardDesc}>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
            </div>
        </div>
    )
}