import img from '../public/assets/logo.svg';
import Image from 'next/image'
import style from '../styles/404.module.css'
import Link from 'next/link'
export default function NotFound(){
    return(
        <div className={`${style.container} container`}>
            <span className={style.img}>
                <Image 
                src={img} />
            </span>
            <h2 className={style.title}>404</h2>
            <p className={style.desc}>sorry.., looks like the page you're looking for is not yet available</p>
            <p className={style.author}>-My Gamezz-</p>
            <p className={`${style.link} btn ${style.btn}`}>
                <Link href={'/'}>
                    Back Home
                </Link>
            </p>
        </div>
    )
}