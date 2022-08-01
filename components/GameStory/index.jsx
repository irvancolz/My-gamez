import {useRef, useState} from 'react';
import style from './GameStory.module.css';
import parser from 'html-react-parser';
import CustomBtn from '../CustomBtn';

export default function GameStory({desc = " "}){
    const paraRef = useRef();
    const [expandDesc, setExpandDesc] = useState(false);

    return(
        <section className={`${style.mainContainer}`}>
            <article 
                className={style.article}
                style={{
                    height: `${expandDesc ? `calc(${paraRef.current.clientHeight}px + 3.5rem)` : '150px'}`
                }}>
                    <div 
                    className={style.content}
                    ref={paraRef}>
                        {parser(desc)}
                    </div>
            </article>
            {/* toggle height */}
            <span 
                onClick={() => setExpandDesc(curr => curr = !curr)}>
                <CustomBtn
                    code='secondary'
                    >
                        show {expandDesc ? 'less' : 'more'}
                </CustomBtn>
            </span>
        </section>
    )
}