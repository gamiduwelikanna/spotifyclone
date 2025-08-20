import { createContext, useEffect, useRef, useState, useCallback } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = useCallback(async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
        setPlayStatus(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setPlayStatus(false);
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  }, []);


  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus
  }

  const previous = async () => {
    if(track.id > 0){
      await setTrack(songsData[track.id-1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const next = async () => {
    if(track.id < songsData.length - 1){
      await setTrack(songsData[track.id+1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const seekSong = async (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
  }

  useEffect(() => {
    if (!audioRef.current) return;

    const resetProgress = () => {
      if (seekBar.current) {
        seekBar.current.style.width = '0%';
      }
    };

    const handleLoadedMetadata = () => {
      setTime(prev => ({
        ...prev,
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        }
      }));
    };

    const handleTimeUpdate = () => {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;

      setTime(prev => ({
        ...prev,
        currentTime: {
          second: Math.floor(currentTime % 60),
          minute: Math.floor(currentTime / 60),
        }
      }));

      if (seekBar.current && !isNaN(duration)) {
        const percentage = (currentTime / duration) * 100;
        seekBar.current.style.width = `${percentage}%`;
      }
    };

    resetProgress();
    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [track]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    loading,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,next,
    seekSong
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      <audio
        ref={audioRef}
        src={track.src}
        preload="metadata"
      />
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
