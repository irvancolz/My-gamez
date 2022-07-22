import styles from './Layout.module.css';
import Topnav from '../Topnav';
import { ToastContainer } from 'react-toastify';
import Context from "../../Context";
import {AiOutlineUp} from 'react-icons/ai';
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Layout({ children}) {
  const {SideNavContext} = Context();
  const [navFade, setNavFade] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
       if( window.pageYOffset > 0){
        setNavFade(true)
       }else{
        setNavFade(false)
       }
    })
  })
  return (
    <SideNavContext>
      <div className={styles.container}>
        <ToastContainer />
        <Topnav />
        <div id="topOfPages"></div>
        <div className={styles.content}>

          {/* your pages here */}
          {children}


        </div>
        <div 
        className={styles.toTop}
        style={{
          opacity: `${navFade ? 1 : 0}`,
          transform: `${navFade ? 'translateY(0)' : 'translateY(100%)'}`
        }}
        >
          <Link href="#topOfPages">
            <AiOutlineUp />
          </Link>
        </div>
      </div>
    </SideNavContext>
  );
}