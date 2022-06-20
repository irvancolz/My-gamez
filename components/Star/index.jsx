import style from './Star.module.css';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { useState } from 'react';

export default function Star({limit= 1}){
    
    if(limit > 5){
        limit = 5
    }else if(limit <= 0){
        limit = 1
    }else{
        limit
    }

    const limitFixed = limit.toFixed(0);
    const star = [];
    for(let i = 0; i < 5; i++){
        if(i < limitFixed){
            star.push(<AiFillStar key={i} className={style.fillStar} />);
        }else{
            star.push(<AiOutlineStar key={i} className={style.outlineStar} />);
        }
    }

    return(
    <div className={style.container}>
        {star}
    </div>
    )
}