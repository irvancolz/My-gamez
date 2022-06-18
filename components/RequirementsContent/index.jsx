import { useState } from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
import style from './RequirementsContent.module.css'

export default function RequirementsContent({content= {}}){
    return(
        <div className={style.requirement}>
           <div className={style.requirementHead}>
            <a href={`#${content.platform.slug}`} className={style.title}>{content.platform.name}</a>
            <AiOutlineUp  className={style.chevron}/>
           </div>
           <div id={content.platform.slug} className={style.requirementDesc}>
                <p className={style.textContent}>{content.requirements?.minimum}</p>
                <p className={style.textContent}>{content.requirements?.recommended}</p>
           </div>
        </div>
    )
}