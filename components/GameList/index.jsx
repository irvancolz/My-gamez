import { useEffect, useRef, useState } from "react"
import GameCard from "../GameCard"
import style from "./GameList.module.css"

export default function GameList({name= '', content = []}){
    const swiperRef = useRef();
    const [start, setStart] = useState(0);
    const [swipe, setSwipe] = useState(10);
    const [drag, setDrag] = useState(false);
    
    function handleDrag(e){
         if(!drag) return;
         e.preventDefault();
    }
    function handleHold(e){
        setDrag(curr => curr = true);
        setStart(curr => curr = e.pageX);
    }
    function handleRelase(e){
        setDrag(curr => curr = false);
    }

    useEffect(()=>{
        console.log(swiperRef);
        if(drag){
            window.addEventListener('mouseup', (e) => handleRelase(e));
        }
    }, [swipe,drag])
    return(
        <section className={style.container}>
            <h1 className={`${style.title} title`}>{name}</h1>
            <div 
                className={style.gameList}>
                    <div 
                        className={style.swipper}
                        style={{
                            left: `${swipe}px`
                        }}
                        ref={swiperRef}
                        onMouseMove={(e)=> handleDrag(e)}
                        onMouseDown={ (e)=> handleHold(e)}
                        onMouseUp={(e) => handleRelase(e)}>
                        {content.map(game =>{
                            return(
                            <GameCard key={game.id} content={game} /> 
                            )
                        })} 
                    </div>
            </div>
        </section>
    )
}