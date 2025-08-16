import { createContext } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const contextValue = {
   
    currentSong: null,
    //playSong: () => {},
    //pauseSong: () => {},
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};


export default PlayerContextProvider;
