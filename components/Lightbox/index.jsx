import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import style from './lightbox.module.css';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'


export default function LightBox({images=[], counter='',setShowImg}) {
    const [carouselCounter, setCarouselCounter] = useState(counter);

  return (
    <div className={style.container}>
            {/* toggle */}
            <div 
                className={style.toggle}
                onClick={()=>{
                    setShowImg(false)
                }}>
                <AiOutlineClose />
            </div>
        <div className={style.wrapper}>
            {/* content */}
            <div className={style.carousel}>
                    {images.map((img, index) =>{
                        return(
                            <div
                                key={img.id} 
                                className={style.images}
                                style={
                                    {
                                        opacity: `${carouselCounter === index ? 1 : 0}`,
                                    }
                                }>
                                    <Image src={img.image} layout='fill' priority/> 
                            </div>
                        )
                    })}
            </div>
            {/* mini carousel */}
            <div className={style.imageList}>
                    {images.map((img, index) =>{
                        return(
                            <div
                            key={img.id} 
                            onClick={() => setCarouselCounter(curr => curr = index)}
                            className={style.images}>
                                    <Image src={img.image} layout='fill' priority/> 
                            </div>
                        )
                    })}
            </div>
        </div>
    </div>
  )
}
