import Link from "next/link";
import { useEffect, useRef, useState } from "react"
import GameCard from "../GameCard"
import style from "./GameList.module.css";
import {IoChevronBack, IoChevronForward} from 'react-icons/io5';

export default function GameList({name= '', content = [], filter = false, filterList=[], listLinks='', swipeable = false}){
    const swiperRef = useRef();
    const [start, setStart] = useState(0);
    const [swipe, setSwipe] = useState(10);
    const [filterVal, setFilterVal] = useState('');
    const [drag, setDrag] = useState(false);
    
    function handleDrag(e){
         if(!drag) return;
         e.preventDefault();
         setSwipe(start - e.pageX);
    }
    function handleHold(e){
        setDrag(curr => curr = true);
        setStart(curr => curr = e.pageX);
    }
    function handleRelase(e){
        setDrag(curr => curr = false);
        setSwipe(start - e.pageX);
    }
    function scrollLeft(){
        swiperRef.current.scrollLeft = swiperRef.current.scrollLeft + 320;
    }
    function scrollRight(){
        swiperRef.current.scrollLeft = swiperRef.current.scrollLeft - 320;
    }

    useEffect(()=>{
        // update gamelist on every filter changed

       
    },[filterVal])

    useEffect(()=>{
        if(drag){
            swiperRef.current.scrollLeft = swiperRef.current.scrollLeft + swipe;
           window.addEventListener('mouseup', (e) => handleRelase(e));
        }
    }, [swipe])
    return(
        <section className={style.container}>
            <div className={style.header}>
                <h1 className={`${style.title} title`}>{name}</h1>
                {swipeable &&
                    <div className={style.navContainer}>
                        <div 
                            className={style.nav}
                            onClick={()=> scrollRight()}>
                            <IoChevronBack />
                        </div>
                        <div 
                        className={style.nav}
                        onClick={()=> scrollLeft()}>
                            <IoChevronForward />
                        </div>
                    </div>
                }
            </div>
            {filter && 
                <div className={style.filterContainer}>
                    <p className={`btn ${style.btn} ${style.active} `}>Filter</p>
                    <ul className={style.filter}>
                        {filterList.map(item =>{
                            return(
                                <li
                                key={item.id} 
                                className={`btn ${style.btn} ${item.id === filterVal ? style.active : null}`}
                                onClick={()=> setFilterVal(curr => curr = item.id)}>
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                    <Link href={`/${listLinks}`}>See all</Link>
                </div>
            }
            <div 
                className={`${style.gameList} ${swipeable ? style.swipeable : null}`}
                ref={swiperRef}>
                    <div 
                        className={`${style.swipper} ${swipeable ? style.swipeable : null}`}
                        onMouseMove={(e)=> handleDrag(e)}
                        onMouseDown={ (e)=> handleHold(e)}
                        onMouseUp={(e) => handleRelase(e)}
                        onTouchStart={(e) => handleHold(e)}
                        onTouchMove={(e)=> handleDrag(e)}
                        onTouchEnd={(e) => handleRelase(e)}>
                        {content.length > 0 ? content.map(game =>{
                            return(
                            <GameCard key={game.id} content={game} links={listLinks}/> 
                            )
                        }) 
                    :
                        <p>No games :p</p>
                    } 
                    </div>
            </div>
        </section>
    )
}