import React, { useEffect, useState } from 'react';
import style from './MainCarousel.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {IoChevronBack, IoChevronForward} from 'react-icons/io5';

export default function MainCarousel({content =[]}) {
    const [counter, setCounter] = useState(0);

    let imgPos = [];
    for(let i = 0; i < content.length; i++){
        imgPos.push(<div 
            key={content[i].id} 
            className={`${style.imgPos} ${i == counter ? style.active : null}`}
            onClick={()=> setCounter(i)}></div>)
    }

    function addCounter(){
        counter >= content.length - 1 ? setCounter(0) :  setCounter(curr => curr = curr + 1);
    }
    function minCounter(){
        counter <= 0 ? setCounter(content.length - 1) :  setCounter(curr => curr = curr - 1);
    }

    // automation add counter
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            addCounter();
        }, 4000)
    
        return ()=> clearTimeout(timeout);
    },[counter])
  return (
    <div className={style.container}>
        <div 
            className={style.imgContainer}
            style={
                {
                    transform: `translateX(calc(${counter} * -100%))`
                }
            }>
            {content.map(game =>{
                return(
                    <Link href={`/Games/${game.slug}`} key={game.id}>
                        <div className={style.img}>
                            <Image src={game.background_image} layout='fill' priority></Image>
                        </div>
                    </Link>
                )
            })}
        </div>
        <div className={style.navContainer}>
            <button 
                className={style.navBtn}
                onClick={()=> minCounter()}>
                <IoChevronBack />
            </button>
            <button 
                className={style.navBtn}
                onClick={() => addCounter()}>
                <IoChevronForward />
            </button>
        </div>
        <div className={style.imgPosContainer}>
            {imgPos}
        </div>
    </div>
  )
}
