import React, { useState } from 'react';
import styles from './UserCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import GameCard from '../GameCard';

export default function UserCards({content}) {
    const [listview, setListView] = useState(0)
  return (
    <div className={styles.container}>
        <div className={styles.user}>
            <div className={styles.profilePic}>
                {content.profileImg ? 
                <Image layout='fill' src={content.profileImg} ></Image> :
                null
                }
            </div>
            <div className={styles.profileDesc}>
                <h4 className={styles.name}>
                    <Link href={`/User/${content.slug}`}>
                        {content.name}
                    </Link>
                </h4>
                <p className={styles.title}>{content.title}</p>
            </div>
        </div>
        <div className={styles.filter}>
           {content.file.map((item, index) =>{
            return(
                <button 
                key={item.id}
                    type='button' 
                    className={`btn ${styles.btn} ${listview === index ? styles.active : null}`}
                    onClick={()=>{
                        setListView( curr => curr = index);
                    }}>{item.name}
                </button>
            )
           })}
        </div>
        <div  className={styles.list}>
           {content.file[listview].list.length > 0 ? content.file[listview].list.map(game =>{
                return(
                    <GameCard key={game.id} content={game} />
                )
           }) :
           <>
            <p>Your game is empty.</p>
            <button className={`nav-btn ${styles.navBtn}`}>
                <Link href={'/Games'}>Get One</Link>
            </button>
           </>
           }
        </div>
    </div>
  )
}
