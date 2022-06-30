import {useState} from 'react';
import style from './GameStory.module.css';

export default function GameStory({desc = " "}){
    const [expandDesc, setExpandDesc] = useState(false);
    const description =  "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.\r\nExplore a world of striking contrast and beauty. Discover living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons and a towering snow-capped volcano.\r\nImmerse yourself in a deep campaign with hundreds of challenges that reward you for engaging in the activities you love. Meet new characters and choose the outcomes of their Horizon Story missions.\r\nTake on awe-inspiring weather events like towering dust storms and intense tropical storms as Mexico’s unique, dynamic seasons change the world every week. Keep coming back for new events, challenges, collectibles, and rewards, and new areas to explore.\r\nTeam up with other players and enter the Horizon Arcade for a continuing series of fun, over-the-top challenges that keep you and your friends in the action and having fun with no menus, loading screens or lobbies.\r\nCreate your own expressions of fun with the new EventLab gameplay toolset including custom races, challenges, stunts, and new game modes. Customize your cars in more ways than ever before. Use the Gift Drops feature to share your custom creations."

    return(
        <section className={`${style.mainConainer} container`}>
            <div>
                <h1 className="title">Game Prolog</h1>
                <div>
                    <article 
                    className={style.article}
                    style={{
                        height: `${expandDesc ? '500px' : '150px'}`
                    }}
                    >
                        <p>
                            {description}
                        </p>
                    </article>
                    <button 
                        type='button'
                        className={`${style.toggleBtn} btn`}
                        onClick={()=> setExpandDesc( curr => !curr)}
                    >{expandDesc ? "Show Less" : "Show More"}</button>
                </div>
            </div>
        </section>
    )
}