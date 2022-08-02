import { useState, useEffect } from 'react';
import style from './GamePicCarousel.module.css';
import Image from 'next/image';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

export default function GamePicCarousel(){
    const [displayedImage, setDisplayedimage] = useState(0);
    const [carouselCounter, setCarouselCounter] = useState(0);

    const imgSrc =  [
        {
            "id": 2882904,
            "image": "https://media.rawg.io/media/screenshots/5e2/5e2e7ccb084034da25d0b21b7c03c273.jpg",
            "width": 1399,
            "height": 787,
            "is_deleted": false
        },
        {
            "id": 2882905,
            "image": "https://media.rawg.io/media/screenshots/6c6/6c69fe99ec23d08b2b0a62feb9d89c65.jpg",
            "width": 1399,
            "height": 787,
            "is_deleted": false
        },
        {
            "id": 2882906,
            "image": "https://media.rawg.io/media/screenshots/32c/32c5651c381e6b628c5ac681601a036a.jpg",
            "width": 1399,
            "height": 787,
            "is_deleted": false
        },
        {
            "id": 2882907,
            "image": "https://media.rawg.io/media/screenshots/312/3122a56932654c304a60e9ef762277a7.jpg",
            "width": 1399,
            "height": 787,
            "is_deleted": false
        },
        {
            "id": 2882908,
            "image": "https://media.rawg.io/media/screenshots/04c/04c7be71d5fd1abace38c90aaa95529d.jpg",
            "width": 1399,
            "height": 787,
            "is_deleted": false
        },
        {
            "id": 2882909,
            "image": "https://media.rawg.io/media/screenshots/797/7979f94d39181787ee248a423191563f.jpg",
            "width": 1399,
            "height": 787,
            "is_deleted": false
        }
    ]

    function minCarouselCounter(){
        if(carouselCounter <= 0){
            return
        }else{
            setCarouselCounter(curr => curr - 1)
        }
    }
   function addCarouselCounter (){
        if(carouselCounter >= imgSrc.length - 2){
            return
        }else{
            setCarouselCounter(curr => curr + 1)
        }
        
    }

    return(
        <div className={style.container}>

        </div>
    )
}