import style from "./GameList.module.css"

export default function GameList({title = '', content=[]}){
    return(
        <section className={`container`}>
            <h1 className="title"></h1>
            <div className="gameList">
                
            </div>
        </section>
    )
}