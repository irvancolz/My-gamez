import {useRef, useEffect, useState} from 'react'
import style from "./Topnav.module.css"
import SideNav from "../SideNav"
import Searchbar from "../Searchbar";
import { IoArrowBack,IoEllipsisVertical } from "react-icons/io5";


export default function Topnav(){
    const navRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(()=>{
        const navHeight = navRef.current.clientHeight;
        window.addEventListener('scroll', ()=>{
            if(window.pageYOffset > navHeight){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        })
    })
    return(
        <header 
            ref={navRef} 
            className={`${style.header} scroll container`}
            style={{
                background: `${isScrolled ? 'var(--second-bg-col' : 'none'}`
            }}>
            <div className={style.logoContainer}>
                    <div className={style.logo}> 
                        <svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 15V27.5M15.5 21.5H26.5M23.5 5.5H40.5L43 2C47.3913 2.23929 49.0657 3.13971 52.5 6L54.1667 8.5C58.9794 15.7396 58.4849 20.1032 60.6667 28.5L62 39C61.5596 44.3876 60.6729 46.3406 56.5 45.5C52.152 40.4423 49.3637 38.2328 44 35H21.5C15.655 37.9028 12.3799 39.5441 7 45.5C4.00878 47.6618 2.51672 43.7966 2 35C4.37437 22.8588 6.14236 16.382 11.5 6.5C14.8966 3.27516 17.0502 2.1867 21.5 2L23.5 5.5Z" stroke="#EEEEEE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="42.5" cy="23.5" r="2.5" fill="#EEEEEE"/>
                        <circle cx="42.5" cy="13.5" r="2.5" fill="#EEEEEE"/>
                        <circle cx="48.5" cy="18.5" r="2.5" fill="#EEEEEE"/>
                        <circle cx="37.5" cy="18.5" r="2.5" fill="#EEEEEE"/>
                    </svg>   
                </div>
                <div title="back" className={style.back}>                  
                    <IoArrowBack />
                </div>
                <div title="menu" className={style.menu}>
                    <IoEllipsisVertical />
                </div>
                <h1>My gamez</h1>
            </div>
            <div>
               <Searchbar />
            </div>
            <div>
                <SideNav/>
            </div>
        </header>
    )
}