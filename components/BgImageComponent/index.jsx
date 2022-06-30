import style from './BgImage.module.css';
import Image from 'next/image';
import image2 from '../../public/images/forza2.jpg'
export default function BgImageComponent({src=''}){
    return(
            <div className={style.imgContainer}>
                <Image  src={image2}/>
            </div>
    )
}