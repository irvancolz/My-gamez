import style from "./Ratings.module.css";
import { useState } from "react";
import AddRating from "../AddRating";
import Star from "../Star";
import Reviewbar from "../ReviewBar";

export default function Ratings({ratings = []}){

    const [isOpenRate, setIsOpenRate] = useState(false);
    const star = 4.42

    function getTotalRatings(review){
        let total = 0;
        review.forEach(item =>{
            total = total + item.count;
        })
        return total
    }
     const totalRating = getTotalRatings(ratings);

    return(
        <section className={`${style.container}`}>
            <h1>User Ratings</h1>
            <div className={style.ratingHeader}>
                <div className={style.starContainer}>
                        <Star limit={star} />
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
                {ratings.map(rating =>{
                    return(
                    <Reviewbar key={rating.id} rating={rating}/>
                    )
                })}
            </div>
            {isOpenRate && <AddRating />}
        </section>
    )
}