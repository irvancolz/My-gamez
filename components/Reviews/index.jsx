import style from "./Reviews.module.css";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { ReviewBar } from "./style";

export default function Reviews(){

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
    function getTotalReviews(review){
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
    

    const totalReview = getTotalReviews(ratings);
    return(
        <section className={`container`}>
            <div className="ratings-header">
                <h2>User Ratings</h2>
                <div className="star-container">
                    {starLogo}
                </div>
                <p><span>{star}</span> average points from <span>{totalReview}</span> Reviews</p>
            </div>
            <div className="reviews-container">
                {ratings.map((rating, index) =>{
                    return(
                <div className={style.review} key={index}>
                    <p>{rating.title}</p>
                    <ReviewBar title={rating.title} total={totalReview} count={rating.count}>
                       <div></div>
                    </ReviewBar>
                    <p>{rating.count}</p>
                </div>
                    )
                })}
            </div>
        </section>
    )
}