import React, { useState, useRef} from 'react';
import style from './genreHeader.module.css';
import parse from 'html-react-parser';


export default function GenreHeader({content={}}) {
    const heightRef = useRef();
    const [follow,setFollow] = useState(false);
    const [expand,setExpand] = useState(false);

  return (
    <section 
        className={style.container}>
        <div className={style.bgImg}
        style={
            {
                background: `url(${content.image_background})`,
                backgroundSize: 'cover',
            }
            }></div>
        <h1 className={style.title}>{content.name}</h1>
        <p className={style.count}>{content.games_count} games</p>
        <button 
            title='follow'
            className={`${style.btn} ${follow ? style.active : null}`}
            onClick={()=> setFollow(curr => curr = !curr)}>
                {follow ? 'Followed' : 'Follow'}
        </button>
        <article 
            className={style.txt}>
            <div
                className={style.wrapper}
                style={
                    {
                        height: `${expand ? `${heightRef.current.children[0].clientHeight}px` : '5.5rem'}`
                    }
                }
                ref={heightRef}>
                {parse(content.description)}
            </div>
            <button
            className={style.btn}
            onClick={()=> setExpand(curr => curr = !curr)}>{expand ? 'See less' : 'See More'}</button>
        </article>
    </section>
  )
}
