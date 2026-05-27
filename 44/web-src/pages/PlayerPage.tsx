import React, { useEffect } from 'react';
import { ProgressBar } from '../components/ProgressBar';
import { usePlayerStore } from '../store';

export const PlayerPage: React.FC = () => {
  const {
    currentSong,
    playbackState,
    isShuffled,
    repeatMode,
    togglePlayPause,
    playNext,
    playPrevious,
    toggleShuffle,
    setRepeatMode,
    toggleFavorite,
    isFavorite,
    progress,
    duration,
    setProgress
  } = usePlayerStore();
  
  useEffect(() => {
    if (playbackState !== 'playing') return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= duration) {
          playNext();
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [playbackState, duration, playNext, setProgress]);

  if (!currentSong) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-text-secondary text-lg">暂无播放歌曲</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="mb-8">
          <img
            src={currentSong.coverUrl}
            alt={currentSong.title}
            className="w-full aspect-square object-cover rounded-xl shadow-2xl"
          />
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-white text-2xl font-bold mb-2">{currentSong.title}</h2>
          <p className="text-text-secondary text-lg">{currentSong.artist}</p>
        </div>
        
        <div className="mb-6">
          <ProgressBar />
        </div>
        
        <div className="flex items-center justify-center gap-6 mb-8">
          <button
            onClick={toggleShuffle}
            className={`text-2xl ${isShuffled ? 'text-primary' : 'text-text-secondary'}`}
          >
            🔀
          </button>
          <button
            onClick={playPrevious}
            className="text-white text-3xl"
          >
            ⏮️
          </button>
          <button
            onClick={togglePlayPause}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-3xl hover:scale-105 transition-transform"
          >
            {playbackState === 'playing' ? '⏸️' : '▶️'}
          </button>
          <button
            onClick={playNext}
            className="text-white text-3xl"
          >
            ⏭️
          </button>
          <button
            onClick={() => {
              const modes = ['off', 'all', 'one'] as const;
              const currentIndex = modes.indexOf(repeatMode);
              const nextMode = modes[(currentIndex + 1) % modes.length];
              setRepeatMode(nextMode);
            }}
            className={`text-2xl ${repeatMode !== 'off' ? 'text-primary' : 'text-text-secondary'}`}
          >
            🔁
          </button>
        </div>
        
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => toggleFavorite(currentSong.id)}
            className={`text-2xl ${isFavorite(currentSong.id) ? 'text-primary' : 'text-white'}`}
          >
            ❤️
          </button>
          <span className="text-text-secondary text-sm">
            {isFavorite(currentSong.id) ? '已收藏' : '添加到收藏'}
          </span>
        </div>
      </div>
    </div>
  );
};
