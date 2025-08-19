import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // Reset progress bar on component mount
  useEffect(() => {
    if (seekBar.current) {
      seekBar.current.style.width = '0%';
    }
  }, []);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  

  useEffect(() => {
    if (!audioRef.current) return;

    // Reset progress bar when track changes
    if (seekBar.current) {
      seekBar.current.style.width = '0%';
    }

    // Set total duration once audio metadata is loaded
    audioRef.current.onloadedmetadata = () => {
      setTime(prev => ({
        ...prev,
        currentTime: { second: 0, minute: 0 },
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        }
      }));
    };

    // Update current time and progress bar
    audioRef.current.ontimeupdate = () => {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;

      // Update time display
      setTime(prev => ({
        ...prev,
        currentTime: {
          second: Math.floor(currentTime % 60),
          minute: Math.floor(currentTime / 60),
        }
      }));

      // Update progress bar
      if (seekBar.current && !isNaN(duration)) {
        const percentage = (currentTime / duration) * 100;
        seekBar.current.style.width = `${percentage}%`;
      }
    };

    // Handle seek functionality
    if (seekBg.current) {
      seekBg.current.onclick = (e) => {
        const width = seekBg.current.clientWidth;
        const clickX = e.offsetX;
        const duration = audioRef.current.duration;

        if (!isNaN(duration)) {
          audioRef.current.currentTime = (clickX / width) * duration;
        }
      };
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null;
        audioRef.current.onloadedmetadata = null;
      }
    };
  }, [track]); // Added track as dependency to reset when track changes

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
