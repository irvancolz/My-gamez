import {AiOutlineUp} from 'react-icons/ai';
import {FaPlaystation, FaXbox, FaAndroid} from 'react-icons/fa'
import {SiNintendoswitch} from 'react-icons/si';
import {AiOutlineDesktop, AiFillApple} from 'react-icons/ai'
import style from './RequirementsContent.module.css'

export default function RequirementsContent({content= {}}){
    return(
        <div className={style.requirement} title={`see requirement for ${content.platform.name}`}>
           <a href={`#${content.platform.slug}`}  className={style.requirementHead}>
            <p className={style.title}>
            <span className={style.logo}>
                {
                content.platform.slug.includes('playstation') ? <FaPlaystation /> :
                content.platform.slug.includes('xbox') ? <FaXbox /> :
                content.platform.slug.includes('nintendo') ? <SiNintendoswitch /> :
                content.platform.slug.includes('android') ? <FaAndroid /> :
                content.platform.slug.includes('pc') ? <AiOutlineDesktop /> :
                content.platform.slug.includes('ios') ? <AiFillApple /> :
                null
                }
            </span>
                {content.platform.name}</p>
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