import { useEffect, useRef, useState } from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import {BsFillEmojiHeartEyesFill,BsFillEmojiSunglassesFill, BsFillEmojiNeutralFill, BsEmojiFrownFill, BsEmojiAngryFill} from "react-icons/bs"
import style from './AddRating.module.css'

export default function AddRating(){
 
    const [rating, setRating] = useState(1)
    const [emoji, setEmoji] = useState(null);
    const [textReview, setTextReview] = useState("");
    const [review, setReview] = useState('');

    
    function showEmoji(index){
        if(index === 1){
            setEmoji(<BsEmojiAngryFill className={style.emoji}  />);
            setTextReview('skip');
        }else if( index === 2){
            setEmoji(<BsEmojiFrownFill className={style.emoji} />)
            setTextReview('skip');
        }else if( index === 3){
            setEmoji(<BsFillEmojiNeutralFill className={style.emoji} title='meh'/>)
            setTextReview('meh');
        }else if( index === 4){
            setEmoji(<BsFillEmojiSunglassesFill className={style.emoji} title='recomended'/>)
            setTextReview('recomended');
        }else{
            setEmoji(<BsFillEmojiHeartEyesFill className={style.emoji} title='exceptional'/>)
            setTextReview('exceptional');
        }
    }

    let star = [];
    for(let i = 1; i <= 5 ; i++){
        star.push(i <= rating ? <AiFillStar key={i} className={style.fillStar} /> : <AiOutlineStar key={i} className={style.outlineStar} />)
    }

    function handleSubmit(e){
        e.preventDefault();
    }
    function handleRate(e){
        setRating(curr => curr = parseInt(e.target.value));
    }
    function handleReview(e){  
        setReview(e.target.value)
    }
    useEffect(()=>{
        showEmoji(rating);
    },[rating])


    return(
        <div className={style.container}>
            <div className="review-header">
                <h3 className={style.title}>
                    Rate this game
                </h3>
            </div>
            <div className='review-star'>
                <form 
                className={style.AddRatingForm}
                onSubmit={(e) => handleSubmit(e)}>
                    <div className={style.formGroup} title='add rating'>
                        <input 
                        type="range"
                        name="rate" 
                        min={1} 
                        max={5} 
                        className={style.rateGames} 
                        onChange={(e)=> handleRate(e)}/>

                        {star}
                        
                        <div>
                        {emoji} 
                        <p>{textReview}</p>
                        </div>
                    </div>
                    <div className={style.formGroup} title='write review'>
                        <label className={style.label} htmlFor="review">Add a review</label>
                        <textarea
                            rows="5"
                            name='review' 
                            className={style.reviewGames}
                            value={review}
                            onChange={(e)=>handleReview(e)}>
                            </textarea>
                    </div>
                    <div className={style.formGroup} title='send review'>
                        <button type='submit' className={`${style.submitBtn} btn`}>Rate</button>
                    </div>
                </form>
            </div>
        </div>
    )
}