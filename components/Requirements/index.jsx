import style from './Requirements.module.css';
import RequirementsContent from '../RequirementsContent';

export default function Requirements(){

    const requirement = [
        {
            "platform": {
                "id": 187,
                "name": "PlayStation 5",
                "slug": "playstation5",
                "image": null,
                "year_end": null,
                "year_start": 2020,
                "games_count": 611,
                "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
            },
            "released_at": "2020-09-28",
            "requirements": {}
        },
        {
            "platform": {
                "id": 21,
                "name": "Android",
                "slug": "android",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 48693,
                "image_background": "https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg"
            },
            "released_at": "2020-09-28",
            "requirements": {
                "minimum": "5.0 and up"
            }
        },
        {
            "platform": {
                "id": 18,
                "name": "PlayStation 4",
                "slug": "playstation4",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 6406,
                "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
            },
            "released_at": "2020-09-28",
            "requirements": {}
        },
        {
            "platform": {
                "id": 7,
                "name": "Nintendo Switch",
                "slug": "nintendo-switch",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 4866,
                "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            },
            "released_at": "2020-09-28",
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
                "games_count": 455668,
                "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
            },
            "released_at": "2020-09-28",
            "requirements": {
                "minimum": "Minimum:\r\n\r\nOperating system: Windows 7 SP1 64-bit, Windows 8.1 64-bit or Windows 10 64-bit\r\n\r\nProcessor: Intel Core i5 or equivalent\r\n\r\nMemory: 8 GB RAM\r\n\r\nGraphics card: NVIDIA® GeForce® GT 1030 and higher\r\n\r\nDirectX version: 11\r\n\r\nStorage: 30 GB of space",
                "recommended": "Recommended:\r\n\r\nOperating system: Windows 7 SP1 64-bit, Windows 8.1 64-bit, or Windows 10 64-bit\r\n\r\nProcessor: Intel Core i7 equivalent or higher\r\n\r\nMemory: 16 GB RAM\r\n\r\nGraphics: NVIDIA GeForce GTX 1060 6 GB and higher\r\n\r\nDirectX version: 11\r\n\r\nStorage: 30 GB of space"
            }
        },
        {
            "platform": {
                "id": 3,
                "name": "iOS",
                "slug": "ios",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 74675,
                "image_background": "https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg"
            },
            "released_at": "2020-09-28",
            "requirements": {
                "minimum": "iPhone 1 1 Pro, iPad Pro Second Gen, iPhone 6 Plus, iPhone 7, iPad 6 1 2, iPad 7 3, iPad Air 2, iPhone 8, iPad 7 6, iPad Eighth Gen Cellular, iPod Touch Sixth Gen, iPad 8 1 2, iPhone 1 1 Pro Max, iPhone 6s Plus, iPhone 7 Plus, iPad Air 3, iPad Air 3 Cellular, iPhone 6, iPhone X R, iPad 8 5 6, iPad 8 7 8, iPhone X S Max, iPad Air 4, iPad 7 4, iPad 7 5, iPhone 8 Plus, iPad Air, iPad Pro Cellular, iPad Pro Second Gen Cellular, iPad Mini Retina Cellular, iPad Pro 9.7, iPhone 6s, iPhone X, iPhone 5s, iPad 7 2, iPad Eighth Gen, iPhone X S, iPad Mini 3, iPad Pro, iPad Mini 5, iPad 8 3 4, iPad Mini 4 Cellular, iPad Pro Fourth Gen, iPad Air 2 Cellular, iPad Pro Fourth Gen Cellular, iPad Mini 4, iPad Seventh Gen, iPad Mini 3 Cellular, iPad Air Cellular, iPad 6 1 1, iPhone 1 1, iPad Air 4 Cellular, iPad Mini 5 Cellular, iPhone SE, iPad 7 1, iPad Mini Retina, iPad Seventh Gen Cellular, iPhone SE Second Gen, iPad Pro 9.7 Cellular, iPod Touch Seventh Gen"
            }
        },
        {
            "platform": {
                "id": 186,
                "name": "Xbox Series S/X",
                "slug": "xbox-series-x",
                "image": null,
                "year_end": null,
                "year_start": 2020,
                "games_count": 547,
                "image_background": "https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg"
            },
            "released_at": "2018-10-02",
            "requirements": {}
        },
        {
            "platform": {
                "id": 1,
                "name": "Xbox One",
                "slug": "xbox-one",
                "image": null,
                "year_end": null,
                "year_start": null,
                "games_count": 5328,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
            },
            "released_at": "2018-10-02",
            "requirements": {}
        },
    ]
    return(
        <section className={style.container}>
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