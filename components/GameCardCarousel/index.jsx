import React, { useRef, useState, useEffect } from 'react';
import style from './GameCardCarousel.module.css';
import Image from 'next/image';

export default function GameCardCarousel({img = []}) {
    const [shownImg, setShownImg] = useState(0);
    const [mousePos, setMousePos] = useState(0);


    function handleMouse(e){
        console.log();
        setMousePos(curr => curr = e.nativeEvent.offsetX);
        const total = mousePos / (e.target.clientWidth / img.length);
        const imgPos = parseInt(total.toFixed());
        imgPos >= img.length ? setShownImg(img.length - 1) : setShownImg(curr => curr = imgPos);
    }

  return (
    <div className={style.container}>
        <div 
            className={style.carousel}
            onMouseMove={(e) => handleMouse(e)}>
            {img.map((item, index) =>{
                return(
                    <div 
                    key={item.id? item.id : index}
                    className={style.img}
                    style={{
                        opacity: `${index === shownImg ? 1 : 0}`
                    }}>
                        <Image src={item.image} layout='fill' priority='true'/>
                    </div>
                )
            })}
        </div>
        <div className={style.indicatorContainer}>
            {img.map((item, index)=>{
                return(
                    <div 
                        key={item.id ? item.id : index} 
                        className={style.indicator}
                        style={{
                           flexBasis: `${1 / img.length * 100}%`,
                           backgroundColor: `${index === shownImg ? 'var(--text-col)' : 'var(--blur-bg-col)'}`
                        }}></div>
                )
            })}
        </div>
    </div>
  )
}
