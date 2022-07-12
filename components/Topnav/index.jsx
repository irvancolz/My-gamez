import {useRef, useEffect, useState} from 'react'
import style from "./Topnav.module.css"
import Searchbar from "../Searchbar";
import Image from 'next/image';
import logo from '../../public/assets/logo.svg';
import Link from 'next/link';
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
                background: `${isScrolled ? 'var(--second-bg-col)' : 'none'}`
            }}>
            <div className={style.logoContainer}>
                <Link href={'/'}>
                    <div className={style.logo}> 
                        <Image  src={logo}/>        
                    </div>
                </Link>
                <div title="back" className={style.back}>                  
                    <IoArrowBack />
                </div>
                <div title="menu" className={style.menu}>
                    <IoEllipsisVertical />
                </div>
                <h1 className={style.title}>My gamez</h1>
            </div>
            <div>
               <Searchbar />
            </div>
            <div>
                {/* notification */}
                notification
            </div>
        </header>
    )
}