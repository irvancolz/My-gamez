import {AiOutlineUp} from 'react-icons/ai';
import style from './RequirementsContent.module.css'
import PlatformLogo from '../PlatformLogo';

export default function RequirementsContent({content= {}}){
    return(
        <div className={style.requirement} title={`see requirement for ${content.platform.name}`}>
           <a href={`#${content.platform.slug}`}  className={style.requirementHead}>
            <p className={style.title}>
            <span className={style.logo}>
               <PlatformLogo logo={content.platform.slug} />
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