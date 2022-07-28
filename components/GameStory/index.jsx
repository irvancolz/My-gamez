import {useRef, useState} from 'react';
import style from './GameStory.module.css';
import parser from 'html-react-parser'

export default function GameStory({desc = " "}){
    const paraRef = useRef();
    const [expandDesc, setExpandDesc] = useState(false);

    return(
        <section className={`${style.mainContainer}`}>
            <div>
                <h1 className="title">Game Prolog</h1>
                <div>
                    <article 
                    className={style.article}
                    style={{
                        height: `${expandDesc ? `calc(${paraRef.current.clientHeight}px + 3.5rem)` : '150px'}`
                    }}
                    >
                        <div ref={paraRef}>
                            {parser(desc)}
                        </div>
                    </article>
                    <button 
                        type='button'
                        className={`${style.toggleBtn} btn`}
                        onClick={()=> setExpandDesc( curr => !curr)}
                    >{expandDesc ? "Show Less" : "Show More"}</button>
                </div>
            </div>
        </section>
    )
}