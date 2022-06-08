import { useState, useEffect } from 'react';
import style from './GamePicCarousel.module.css';
import Image from 'next/image';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

export default function GamePicCarousel({images = []}){
    const [displayedImage, setDisplayedimage] = useState(0);
    const [carouselCounter, setCarouselCounter] = useState(0);

    function minCarouselCounter(){
        if(carouselCounter <= 0){
            return
        }else{
            setCarouselCounter(curr => curr - 1)
        }
    }
   function addCarouselCounter (){
        if(carouselCounter >= images.length - 2){
            return
        }else{
            setCarouselCounter(curr => curr + 1)
        }
        
    }
    function addDisplayedImg(){
        if(displayedImage >= images.length - 1){
            return setDisplayedimage(0);
        }else{
            setDisplayedimage( curr => curr + 1);
        }
    }

    return(
        <div className={style.mainContainer}>
            <div className={style.imgShowContainer}>
                <div 
                className={style.imgShow}
                style={{
                    transform: `translateX(${displayedImage * -100}%`,
                }}>
                    {images.map((img , index)=>{
                        return (
                                <Image
                                key={index}  
                                src={img}
                                />
                                )
                    })}
                </div>
            </div>
            <div className={style.carouselContainer}>
                <button
                    className={style.toggleBtn}
                    onClick={()=> minCarouselCounter()}>
                    <BsChevronLeft />
                </button>
                <div className={style.carouselImgContainer}>
                <div 
                    style={{
                        transform: `translateX(calc(${carouselCounter * - 50}% - ${carouselCounter * .5}rem))`,
                    }}
                    >
                    {images.map((img, index)=>{
                    return(
                        <Image 
                        src={img}
                        key={index}
                        onMouseOver={()=> setDisplayedimage(index)}
                        />
                        )
                    })}
                </div>
                </div>
                <button
                className={style.toggleBtn}
                onClick={()=> addCarouselCounter()}
                >
                    <BsChevronRight />
                </button>
            </div>
        </div>
    )
}