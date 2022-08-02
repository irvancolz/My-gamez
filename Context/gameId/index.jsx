import React, { createContext, useState  } from 'react';

export const GameId = createContext();

export default function GameIdContext({...props}) {
    const [currGameId, setcurrGameId] = useState(0);
    function changeId(e){
        setcurrGameId(curr => curr = e);
    }

  return (
    <GameId.Provider value={{
        currGameId,
        changeId,
       }}>
        {props.children}
       </GameId.Provider>
  )
}
