import React, { useRef, useState, useEffect } from 'react';
import style from './GameCardCarousel.module.css';
import Image from 'next/image';

export default function GameCardCarousel({img = []}) {
    const [shownImg, setShownImg] = useState(1);
    const [mousePos, setMousePos] = useState(1);


    function handleMouse(e){
        setMousePos(curr => curr = e.nativeEvent.offsetX);
        const total = mousePos / (e.target.clientWidth / img.length);
        const imgPos = parseInt(total.toFixed());
        imgPos === 0 ? setShownImg(1) : imgPos >= img.length ? setShownImg(img.length - 1) : setShownImg(curr => curr = imgPos);
    }

  return (
    <div className={style.container}>
        <div 
            className={style.carousel}
            onMouseMove={(e) => handleMouse(e)}>
            {img.map((item, index) =>{
                if(item.id != '-1'){
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
                }
            })}
        </div>
        <div className={style.indicatorContainer}>
            {img.map((item, index)=>{
                if(item.id != '-1'){
                    return(
                        <div 
                            key={item.id ? item.id : index} 
                            className={style.indicator}
                            style={{
                               flexBasis: `${1 / img.length * 100}%`,
                               backgroundColor: `${index === shownImg ? 'var(--text-col)' : 'var(--blur-bg-col)'}`
                            }}></div>
                    )
                }
            })}
        </div>
    </div>
  )
}
