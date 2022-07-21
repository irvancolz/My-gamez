import {FaPlaystation, FaXbox, FaAndroid, FaLinux, FaGamepad} from 'react-icons/fa';
import {SiSega, SiAtari, SiPlaystationvita, SiWii, SiNintendogamecube} from 'react-icons/si'
import {SiNintendoswitch} from 'react-icons/si';
import {AiOutlineDesktop, AiFillApple} from 'react-icons/ai';
import styles from './platformLogo.module.css'

export default function PlatformLogo({logo=''}){
    
    return(
        <>
            {
                logo.includes('playstation') ? <FaPlaystation /> :
                logo.includes('xbox') ? <FaXbox /> :
                logo.includes('nintendo') ? <SiNintendoswitch /> :
                logo.includes('android') ? <FaAndroid /> :
                logo.includes('pc') ? <AiOutlineDesktop /> :
                logo.includes('mac') ? <AiOutlineDesktop /> :
                logo.includes('vita') ? <SiPlaystationvita /> :
                logo.includes('sega') ? <SiSega /> :
                logo.includes('atari') ? <SiAtari /> :
                logo.includes('wii') ? <SiWii /> :
                logo.includes('linux') ? <FaLinux /> :
                logo.includes('cube') ? <SiNintendogamecube /> :
                logo.includes('ios') ? <AiFillApple /> :
                <FaGamepad />
            }
        </>
    )
}