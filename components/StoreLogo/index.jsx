import React from 'react';
import {FaSteam, FaXbox, FaGooglePlay, FaPlaystation, FaItchIo} from 'react-icons/fa'
import {AiOutlineDownload} from 'react-icons/ai';
import {GrAppleAppStore} from 'react-icons/gr';
import {SiEpicgames, SiNintendoswitch} from 'react-icons/si';


export default function StoreLogo({content=''}) {
  return (
    <>
        {
        content == '1' ? <FaSteam /> : 
        // xbox
        content == '2' || content == '7' ? <FaXbox /> : 
        content == '3' ? <FaPlaystation /> : 
        content == '4' ? <GrAppleAppStore /> : 
        content == '6' ? <SiNintendoswitch /> : 
        content == '8' ? <FaGooglePlay /> : 
        content == '9' ? <FaItchIo /> : 
        content == '11' ? <SiEpicgames /> : 
        <AiOutlineDownload />
        }
    </>
  )
}
