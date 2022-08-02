import React, { createContext,  useState} from 'react';

export const Sidenav = createContext();

export default function SidenavContext({...props}) {
    const [activeLink, setActiveLink] = useState('Home');
    function handleActive(e){
        setActiveLink(e);
    }

  return (
   <Sidenav.Provider value={{
    activeLink,
    handleActive,
   }}>
    {props.children}
   </Sidenav.Provider>
  )
}
