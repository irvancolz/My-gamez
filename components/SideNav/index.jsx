import style from './Sidenav.module.css'
import Image from 'next/image';
import bell from '../../public/assets/bell.svg'

export default function SideNav(){
    return(
        <div className={style.container}>
            <div title='notification' id={style.image}>
                    
            </div>
        </div>
    )
}