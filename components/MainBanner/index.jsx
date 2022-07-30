import { useEffect,useState} from 'react'
import style from './MainBanner.module.css';

export default function MainBanner({ dataBg=''}){
  const [scrolled, setScrolled] = useState(0);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.pageYOffset > 500 ? setScrolled(500) :
        setScrolled(curr => curr = window.pageYOffset);
    })
    })
    return(
    <section 
      className={style.container}>
      <div className={style.image}
        style={
          { 
            filter: `brightness(${scrolled >= 500 ? .3 : scrolled > 300 ? .5 : scrolled > 50 ? .7  : 1})`,
            backgroundImage: `url(${dataBg})`,
          }
        }>
         
      </div>
    </section>
    )
}