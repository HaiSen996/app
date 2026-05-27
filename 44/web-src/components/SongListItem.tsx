import React from 'react';
import { Song } from '../types';
import { usePlayerStore } from '../store';

interface SongListItemProps {
  song: Song;
  index?: number;
  showIndex?: boolean;
}

export const SongListItem: React.FC<SongListItemProps> = ({ 
  song, index = 0, showIndex = true }) => {
  const { setCurrentSong, queue } = usePlayerStore();
  
  const handleClick = () => {
    const queueIndex = queue.findIndex(s => s.id === song.id);
    setCurrentSong(song, queueIndex >= 0 ? queueIndex : index);
  };

  return (
    <div 
      className="flex items-center p-3 bg-card hover:bg-[#1a1a1a] cursor-pointer transition-colors"
      onClick={handleClick}
    >
      {showIndex && (
        <div className="w-8 text-center text-text-secondary text-sm mr-2">{index + 1}</div>
      )}
      <img 
        src={song.coverUrl} 
        alt={song.title}
        className="w-11 h-11 rounded object-cover mr-3"
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-white text-sm font-medium truncate">{song.title}</h4>
        <p className="text-text-secondary text-xs truncate">{song.artist}</p>
      </div>
      <div className="ml-4">
        <p className="text-text-secondary text-xs">{song.duration}</p>
      </div>
    </div>
  );
};
