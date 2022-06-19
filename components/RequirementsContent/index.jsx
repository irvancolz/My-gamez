import { useState } from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
import style from './RequirementsContent.module.css'
import Link from 'next/dist/client/link'

export default function RequirementsContent({content= {}}){
    return(
        <div className={style.requirement}>
           <a href={`#${content.platform.slug}`}  className={style.requirementHead}>
            <p className={style.title}>{content.platform.name}</p>
            <AiOutlineUp  className={style.chevron}/>
           </a>
           {Object.keys(content.requirements).length !== 0 ? 
           <div id={content.platform.slug} className={style.requirementDesc}>
                <p className={style.textContent}>{content.requirements?.minimum}</p>
                <p className={style.textContent}>{content.requirements?.recommended}</p>
           </div>
            : 
            null
            }
        </div>
    )
}