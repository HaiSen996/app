import React from 'react';
import { Song } from '../types';
import { usePlayerStore } from '../store';

interface SongCardProps {
  song: Song;
  showArtist?: boolean;
  showAlbum?: boolean;
}

export const SongCard: React.FC<SongCardProps> = ({ 
  song, showArtist = true, showAlbum = false }) => {
  const setCurrentSong = usePlayerStore(state => state.setCurrentSong);
  
  const handleClick = () => {
    setCurrentSong(song);
  };

  return (
    <div 
      className="bg-card rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
      onClick={handleClick}
    >
      <img 
        src={song.coverUrl} 
        alt={song.title}
        className="w-full aspect-square object-cover"
      />
      <div className="p-3">
        <h4 className="text-white font-semibold truncate">{song.title}</h4>
        {showArtist && (
          <p className="text-text-secondary text-sm truncate">{song.artist}</p>
        )}
        {showAlbum && (
          <p className="text-text-secondary text-xs truncate mt-1">{song.album}</p>
        )}
      </div>
    </div>
  );
};
