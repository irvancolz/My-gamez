import style from './GameCard.module.css';
import Star from "../Star";
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import {BsBookmark, BsFillBookmarkFill, BsPlay, BsPlayFill} from 'react-icons/bs'
import { useState } from 'react';
import GameCardCarousel from '../GameCardCarousel';
import PlatformLogo from '../PlatformLogo';

export default function GameCard({content = {}, links=''}){
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
        <div className={`${style.container} ${content.games ? style.tags : null}`}>
            {/* game image carousel */}
            <div className={style.imageContainer}>
                {content.games ? 
                    <Image src={content.image_background} layout='fill'></Image>
                :                
                    <GameCardCarousel img={content.short_screenshots} />
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
                    <div className={style.header} data-name={content.name}>
                        <h3 className={style.title}>
                            <Link href={`/${content.games ? links : 'Games'}/${content.slug}`}>
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
                                    <span key={game.id} data-count ={game.added} title={game.name}>
                                        <Link  href={`/Games/${game.slug}`} >
                                            {`${game.name}, `}
                                        </Link>
                                    </span>
                                    )
                                })
                                :
                            content.genres.map(genre =>{
                                return(
                                    <span key={genre.id} title={genre.name}>
                                        <Link href={`/Genres/${genre.slug}`} title={genre.name}>
                                            {`${genre.name}, `}
                                        </Link>
                                    </span>
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
                                            <PlatformLogo logo={content.platform.slug} />
                                        </Link>
                                    </span>
                                )
                            })}
                        </div>
                        }
                    </div>
                </div>

                     {/* game feature */}
                {!content.games &&
                <div className={style.wrapper}>
                    <div className={style.featureContainer}>
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
                    </div>
                </div>
                }
            </div>
        </div>
    )
}