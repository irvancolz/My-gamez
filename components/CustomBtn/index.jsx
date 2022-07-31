import React from 'react';
import style from './button.module.css'

export default function CustomBtn({children, variant='box', code ='primary', bg='white'}) {
  return (
    <div className={`
      ${style.container} ${variant == 'round' ? style.round : style.box } 
      ${code == 'ternary' ? style.third : code == 'secondary' ? style.second : style.prime}
      ${bg == 'red' ? style.red : bg == 'green' ? style.green : bg == 'blur' ? style.blur : style.white} `}>
      <button className={style.btn}>
        {children}
      </button>
    </div>
  )
}


