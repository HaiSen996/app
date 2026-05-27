import React from 'react';
import { Playlist } from '../types';
import { usePlayerStore } from '../store';

interface PlaylistCardProps {
  playlist: Playlist;
  showAuthor?: boolean;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ 
  playlist, showAuthor = true }) => {
  const { setCurrentPage, setSelectedPlaylistId } = usePlayerStore();
  
  const handleClick = () => {
    setSelectedPlaylistId(playlist.id);
    setCurrentPage('playlist');
  };

  return (
    <div 
      className="bg-card rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
      onClick={handleClick}
    >
      <img 
        src={playlist.coverUrl} 
        alt={playlist.title}
        className="w-full aspect-square object-cover"
      />
      <div className="p-3">
        <h4 className="text-white font-semibold truncate">{playlist.title}</h4>
        {showAuthor && (
          <p className="text-text-secondary text-sm truncate">{playlist.author}</p>
        )}
      </div>
    </div>
  );
};
