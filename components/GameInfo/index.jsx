import Link from "next/link"
import style from './GameInfo.module.css'


export default function GameInfo({info= '', content=[]}){
//    content harus berupa array yang didalamnya object yang memiiki props 'name' dan 'slug'
    return(
        <div className={style.container}>
            <p className={style.info}>{info} : </p>
            <span className={style.linkContainer}>
                {content.map((link, index )=>{
                    return(
                        <Link href={''} key={index}>
                            <p className={style.link} title={`see all`}>
                            {`${link.name}, `}
                            </p>
                        </Link>
                    )
                })}
            </span>
        </div>
    )
}