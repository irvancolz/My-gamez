import React, { useEffect, useRef } from 'react';
import style from './reviewBar.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
export default function Reviewbar({rating={}}) {
    const barRef = useRef();
    const containerRef = useRef();
    const textRef = useRef();
    useEffect(()=>{
        const tl = gsap.timeline({defaults:{
            duration: 2,
            ease: 'power1.out',    
        },
        scrollTrigger :{
            trigger: containerRef.current,
            start:'center bottom',
        }},
        )

        tl.fromTo(containerRef.current,{
            opacity: 0,
        }, {
            opacity: 1,
        })
        .fromTo(barRef.current, {
           opacity: 0,
           x: '-100%',
        },{
            opacity: 1,
            x: 0,
            delay: '-1'
        })
        .fromTo(textRef.current,{
            opacity: 0,
        }, {
            opacity: 1,
        })
    })
  return (
        <div 
            ref={containerRef}
            className={style.rating} 
            title={`${rating.title} ${rating.count} reviews`}>
                <p>{rating.title}</p>
                <div className={style.ReviewBar}>
                    <div 
                        ref={barRef}
                        style={{
                        width: `${rating.percent}%`,
                        background: `var(${rating.title === 'exceptional' ? '--green-bg-col' : rating.title === 'recommended' ? '--cyan-bg-col' : rating.title === 'meh' ? '--gold-bg-col' : '--red-bg-col'})`
                        }}>

                    </div>
                </div>
                <p
                ref={textRef}
                >{rating.count}</p>
        </div>
  )
}
