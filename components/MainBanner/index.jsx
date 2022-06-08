import style from './MainBanner.module.css'
import Image from 'next/image'
import forza from '../../public/images/forza.jpg';
import {BsBookmark} from 'react-icons/bs'

export default function MainBanner(){
    return(
    <section className={style.container}>
      <div className={style.image}>
          <Image 
          src={forza} />
      </div>
      <div className={style.titleContainer}>
          <h1 className={style.title}>Forza Horizon 5</h1>
          <span className={style.bookmark} title="add to bookmark">
            <BsBookmark />
          </span>
      </div>
    </section>
    )
}