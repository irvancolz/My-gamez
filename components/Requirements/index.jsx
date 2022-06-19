import style from './Requirements.module.css';
import RequirementsContent from '../RequirementsContent';

export default function Requirements(){

    const requirement = [
        {
            "platform": {
                "id": 1,
                "name": "Xbox One",
                "slug": "xbox-one",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 5302,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            "released_at": "2021-11-08",
            "requirements": {}
        },
        {
            "platform": {
                "id": 186,
                "name": "Xbox Series S/X",
                "slug": "xbox-series-x",
                "image": null,
                "year_end": null,
                "year_start": 2020,
                "games_count": 518,
                "image_background": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg"
            },
            "released_at": "2021-11-08",
            "requirements": {}
        },
        {
            "platform": {
                "id": 4,
                "name": "PC",
                "slug": "pc",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 448649,
                "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            },
            "released_at": "2021-11-08",
            "requirements": {
                "minimum": "Minimum:\nRequires a 64-bit processor and operating system\nOS: Windows 10 version 15063.0 or higher\nProcessor: Intel i5-4460 or AMD Ryzen 3 1200\nMemory: 8 GB RAM\nGraphics: NVidia GTX 970 OR AMD RX 470\nDirectX: Version 12\nNetwork: Broadband Internet connection\nStorage: 110 GB available space",
                "recommended": "Recommended:\nRequires a 64-bit processor and operating system\nOS: Windows 10 version 15063.0 or higher\nProcessor: Intel i5-8400 or AMD Ryzen 5 1500X\nMemory: 16 GB RAM\nGraphics: NVidia GTX 1070 OR AMD RX 590\nDirectX: Version 12\nNetwork: Broadband Internet connection\nStorage: 110 GB available space"
            }
        }
    ]
    return(
        <section className={`${style.container} container`}>
            <h1 className='title'>system requirements</h1>
            <div className={style.requirementsContainer}>
                {requirement.map((item, index)=>{
                    return(
                    <RequirementsContent content={item} key={index}/>
                    )
                })}
            </div>
        </section>
    )
}