import React from 'react';
import style from './gametitle.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {BsBookmark, BsFillBookmarkFill} from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';

export default function GameTitle({title='', id=''}) {
    const [bookmark, setBookmark] = useState(false);

    function handleBookmark(){
      setBookmark(curr => curr = !curr);
      showToast(!bookmark)
    }

    function showToast(bookmark){
      if(bookmark){
        toast.success('Added to bookmark', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
          });
      }else{
        toast.info('Deleted from bookmark', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
          });
      }
    }
  return (
    <div className={style.container}>
        <div className={style.titleContainer}>
          <h1 className={style.title}>{title}</h1>
          <span 
            className={style.bookmark} 
            title="add to bookmark"
            onClick={(e)=> handleBookmark()}>
            {bookmark ? <BsFillBookmarkFill /> : <BsBookmark />}
          </span>
      </div>
    </div>
  )
}
