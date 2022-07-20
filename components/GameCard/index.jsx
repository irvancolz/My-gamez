import style from './GameCard.module.css';
import Star from "../Star";
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import {BsBookmark, BsFillBookmarkFill, BsPlay, BsPlayFill} from 'react-icons/bs'
import {FaPlaystation, FaXbox, FaAndroid} from 'react-icons/fa'
import {SiNintendoswitch} from 'react-icons/si';
import {AiOutlineHeart,AiFillHeart,AiOutlineDesktop, AiFillApple} from 'react-icons/ai'
import { useState } from 'react';
import GameCardCarousel from '../GameCardCarousel';

export default function GameCard({content = {}}){
    const [played, setPlayed] = useState(false);
    const [ bookmark, setBookmark] = useState(false);
    const [ favourite, setFavourite] = useState(false);
 
    function handlePlay(){
        setPlayed( curr => curr = !curr);
        showToast(played, 'play list');
    }

    function handleBookmark(){
        setBookmark( curr => curr = !curr);
        showToast(bookmark, 'bookmark list');
    }
    function handleFavourite(){
        setFavourite( curr => curr = !curr);
        showToast(favourite, 'favourite');
    }

    function showToast(par, msg){
        if(!par){
          toast.success(`added to ${msg}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark'
            });
        }else{
          toast.info(`deleted from ${msg}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark'
            });
        }
      }

    return(
        <div className={style.container}>
            {/* game image carousel */}
            <div className={style.imageContainer}>
                {content.games ? 
                    <Image src={content.image_background} layout='fill'></Image>
                :                
                <Link href={`/Games/${content.slug}`}>
                    <GameCardCarousel img={content.short_screenshots} />
                </Link>
            }
            </div>

            {/* game content */}
            <div className={`${style.contentContainer} ${content.games ? style.tags : null}`}>
                {!content.games && 
                <div className={style.gameProfilePic}>
                    <Image src={content.background_image} layout='fill'></Image>
                </div>
                }

                <div className={style.content}>
                    {/* game header */}
                    <div className={style.header}>
                        <h3 className={style.title}>
                            <Link href={`/Games/${content.slug}`}>
                                {content.name}
                            </Link>
                        </h3>
                    </div>
                    {!content.games &&
                    <div className={style.starContainer} title={`${content.rating}`}>
                             <Star limit={content.rating} />
                    </div>
                    }
                    {/* additional information about games */}
                    <div className={style.body}>
                        {!content.games_count &&
                        <div 
                            className={style.meta} 
                            title='metacritic score'
                            style={{
                                borderColor: `${content.metacritic > 70 ? 'var(--green-bg-col)' : content.metacritic >= 50 ? 'var(--gold-bg-col)' : 'var(--red-bg-col)'}`,
                                color: `var(--green-bg-col)`,
                            }}>
                            {content.metacritic}
                        </div>
                        }
                        <div className={style.genres}>
                            <div className={style.linkContainer}>
                            { content.games ? 
                             content.games.map(game =>{
                                return(
                                        <Link key={game.id} href={`/Games/${game.slug}`}>
                                            {`${game.name}, `}
                                        </Link>
                                    )
                                }):
                            content.genres.map(genre =>{
                                return(
                                        <Link key={genre.id} href={`/Genres/${genre.slug}`}>
                                            {`${genre.name}, `}
                                        </Link>
                                    )
                                })
                                }
                            </div>
                        </div>
                        {!content.games_count &&
                            <div className={`${style.platformsContainer} ${style.linkContainer}`}>
                            {content.parent_platforms.map(content =>{
                                return(
                                    <span key={content.platform.id} title={content.platform.name}>
                                        <Link href={`/platforms/${content.platform.slug}`}>
                                        {
                                            content.platform.slug.includes('playstation') ? <FaPlaystation /> :
                                            content.platform.slug.includes('xbox') ? <FaXbox /> :
                                            content.platform.slug.includes('nintendo') ? <SiNintendoswitch /> :
                                            content.platform.slug.includes('android') ? <FaAndroid /> :
                                            content.platform.slug.includes('pc') ? <AiOutlineDesktop /> :
                                            content.platform.slug.includes('ios') ? <AiFillApple /> :
                                            null
                                        }
                                        </Link>
                                    </span>
                                )
                            })}
                        </div>
                        }
                    </div>
                </div>

                     {/* game feature */}
                <div className={style.wrapper}>
                    <div className={style.featureContainer}>
                        {!content.games ?
                        <>
                            <div 
                                title='play'
                                className={style.feature}
                                onClick ={() => handlePlay()}>
                                    {played ? <BsPlayFill /> : <BsPlay />}
                            </div>
                            <div 
                                title='bookmark'
                                className={style.feature}
                                onClick={()=> handleBookmark()}>
                                    {bookmark ? <BsFillBookmarkFill /> : <BsBookmark />}
                            </div>
                        </>
                        :
                            <div
                            title='favourite'
                            className={style.feature}
                            onClick={()=> handleFavourite()}>
                                {favourite ? <AiFillHeart /> : <AiOutlineHeart />}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}