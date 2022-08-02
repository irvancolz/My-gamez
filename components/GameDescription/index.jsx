import style from './GameDesc.module.css';
import GamePicCarousel from '../GamePicCarousel';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import GameInfo from '../GameInfo';
import CustomBtn from '../CustomBtn';
import StoreLogo from '../StoreLogo';
import GameStory from '../GameStory';


export default function GameDesc({storesSlug = [], desc=''}){

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
            <div className={style.content}>
                <div className={style.btnContainer}>
                    <CustomBtn 
                        bg='green'>
                        <a href="#storeBtn">
                            <FiShoppingCart />
                            Buy
                        </a>
                    </CustomBtn>
                    <div 
                        id='storeBtn'
                        className={style.storeBtnContainer}>
                            {store.map((item, index) =>{
                                return(
                                    <span 
                                        className={style.btn}
                                        key={item.id}
                                        style={
                                            {
                                                '--delay-time' : index,
                                            }
                                        }>        
                                        <CustomBtn
                                            code='secondary'
                                            bg='blur'
                                            >
                                            <Link href={item.url}>
                                                <a target='_blank'>
                                                <StoreLogo content={item.store_id} />
                                                {storesSlug[index].store.name}
                                                </a>
                                            </Link>
                                        </CustomBtn>
                                    </span>
                                )
                            })}
                    </div>
                </div>
                <div className={style.desc}>
                    <GameStory desc={desc}/>
                </div>
            </div>
            <div className={style.carousel}>
               <GamePicCarousel />
            </div>
        </section>
    )
}
