import style from './GameDesc.module.css'
import image1  from '../../public/images/forza2.jpg'
import image2  from '../../public/images/forza-carousel-2.jpg'
import image3  from '../../public/images/forza-carousel.jpg'
import GamePicCarousel from '../GamePicCarousel'
import { FiShoppingCart } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import {FaSteam, FaXbox, FaGooglePlay, FaPlaystation} from 'react-icons/fa'
import {AiOutlineDownload} from 'react-icons/ai';
import {GrAppleAppStore} from 'react-icons/gr';
import {SiEpicgames} from 'react-icons/si';
import Link from 'next/link'
import GameInfo from '../GameInfo';
import CustomBtn from '../CustomBtn';


export default function GameDesc({storesSlug = []}){

    const store =[
        {
            "id": 617116,
            "game_id": 622492,
            "store_id": 2,
            "url": "https://www.microsoft.com/en-us/p/forza-horizon-5-standard-edition/9nkx70bbcdrn?cid=msft_web_chart"
        },
        {
            "id": 617117,
            "game_id": 622492,
            "store_id": 1,
            "url": "https://store.steampowered.com/app/1551360"
        }
    ]

    return (
        <section className={style.container} >
            <div className="">
                <div className="btnC">
                    <CustomBtn 
                        bg='green'>
                        <a href="#storeBtn">
                            Buybtn
                        </a>
                    </CustomBtn>
                    <div 
                        id='storeBtn'
                        className={style.storeBtnContainer}>
                            {store.map((item, index) =>{
                                return(
                                <CustomBtn
                                    variant='round'
                                    code='secondary'
                                    bg='blur'
                                    key={item.id}>
                                    <Link href={item.url}>
                                        <a target='_blank'>
                                        {storesSlug[index].store.name}
                                        </a>
                                    </Link>
                                </CustomBtn>
                                )
                            })}
                    </div>
                </div>
                <div className="descC"> desc</div>
            </div>
            <div className="">
               <GamePicCarousel />
            </div>
        </section>
    )
}
