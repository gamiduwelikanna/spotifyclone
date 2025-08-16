import { createContext, useRef } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

  const audioRef = useRef(null);  
  const contextValue = {
    audioRef 
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};


export default PlayerContextProvider;
