import React, { useContext, useEffect } from 'react';
import styles from './Menugroup.module.css';
import Link from 'next/link';
import {Sidenav} from '../../Context/sidenav';

export default function MenuGroup({title='', menu=[]}) {
    const {activeLink, handleActive} = useContext(Sidenav);
   
  return (
    <div className={styles.container}>
        <Link href={``}>
            <h3
            onClick={() => handleActive(title)} 
            className={`${styles.title} ${activeLink === title ? styles.active : null}`}>
                {title}
            </h3>
        </Link>
        <ul className={styles.list}>
            {menu.map(item =>{
                return(
                    <li 
                    key={item.id} 
                    className={`${styles.link} ${activeLink === item.name ? styles.active : null}`}
                    onClick={() => handleActive(item.name)}
                    >
                        <Link href={``}>{item.name}</Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
