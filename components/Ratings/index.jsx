import style from "./Ratings.module.css";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { useState } from "react";
import AddRating from "../AddRating";

export default function Ratings(){

    const [isOpenRate, setIsOpenRate] = useState(true);
    const star = 4.42
    const starRating = star.toFixed(0);
    const ratings =  [
        {
            "id": 5,
            "title": "exceptional",
            "count": 196,
            "percent": 54.29
        },
        {
            "id": 4,
            "title": "recommended",
            "count": 132,
            "percent": 36.57
        },
        {
            "id": 3,
            "title": "meh",
            "count": 27,
            "percent": 7.48
        },
        {
            "id": 1,
            "title": "skip",
            "count": 6,
            "percent": 1.66
        }
    ]
    function getTotalRatings(review){
        let total = 0;
        review.forEach(item =>{
            total = total + item.count;
        })
        return total
    }

    const starLogo = []
    for(let i = 0; i < 5; i++){
        if(i < starRating){
            starLogo.push(<AiFillStar key={i} className={style.fillStar} />);
        }else{
            starLogo.push(<AiOutlineStar key={i} className={style.outlineStar} />);
        }
    }
    

    const totalRating = getTotalRatings(ratings);
    return(
        <section className={`${style.container} container`}>
            <h1>User Ratings</h1>
            <div className={style.ratingHeader}>
                <div className={style.starContainer}>
                    <div>
                        {starLogo}
                    </div>
                    <button 
                        type="button"
                        className={`btn ${style.rateBtn}`}
                        onClick={()=> setIsOpenRate(curr => curr = !curr)}>
                        <p>{isOpenRate ? "Hide" : "Rate"}</p>
                    </button>
                </div>
                <p><span>{star}</span> average points from <span>{totalRating}</span> Reviews</p>
            </div>
            <div className={style.ratingContainer}>
                {ratings.map((rating, index) =>{
                    return(
                    <div className={style.rating} key={index}>
                        <p>{rating.title}</p>
                        <div className={style.ReviewBar}>
                            <div style={{
                                width: `${rating.percent}%`,
                                background: `var(${rating.title === 'exceptional' ? '--green-bg-col' : rating.title === 'recommended' ? '--cyan-bg-col' : rating.title === 'meh' ? '--gold-bg-col' : '--red-bg-col'})`
                            }}></div>
                    </div>
                    <p>{rating.count}</p>
                </div>
                    )
                })}
            </div>
            {isOpenRate && <AddRating />}
        </section>
    )
}