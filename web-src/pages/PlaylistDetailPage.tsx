import React from 'react';
import { SongListItem } from '../components/SongListItem';
import { usePlayerStore } from '../store';
import { getPlaylistById } from '../data';

export const PlaylistDetailPage: React.FC = () => {
  const { selectedPlaylistId, setCurrentPage, setQueue, setCurrentSong } = usePlayerStore();
  const playlist = selectedPlaylistId ? getPlaylistById(selectedPlaylistId) : null;

  const handleBack = () => {
    setCurrentPage('main');
  };

  const handleShufflePlay = () => {
    if (playlist && playlist.songs.length > 0) {
      setQueue(playlist.songs);
      const randomIndex = Math.floor(Math.random() * playlist.songs.length);
      setCurrentSong(playlist.songs[randomIndex], randomIndex);
    }
  };

  if (!playlist) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-text-secondary">歌单不存在</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center p-4">
        <button onClick={handleBack} className="text-white text-xl mr-4">←</button>
        <h1 className="text-white text-lg font-semibold">{playlist.title}</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="p-6">
          <div className="text-center mb-8">
            <img
              src={playlist.coverUrl}
              alt={playlist.title}
              className="w-64 h-64 mx-auto rounded-xl shadow-2xl mb-6"
            />
            <h2 className="text-white text-3xl font-bold mb-2">{playlist.title}</h2>
            <p className="text-text-secondary mb-2">{playlist.description}</p>
            <p className="text-text-secondary text-sm">{playlist.author} · {playlist.listeners}听众 · {playlist.songs.length}首歌曲</p>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={handleShufflePlay}
              className="bg-primary text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#1ed760] transition-colors"
            >
              <span>▶️</span> 随机播放
            </button>
            <button className="w-11 h-11 bg-card rounded-full flex items-center justify-center text-white">❤️</button>
            <button className="w-11 h-11 bg-card rounded-full flex items-center justify-center text-white">⬇️</button>
            <button className="w-11 h-11 bg-card rounded-full flex items-center justify-center text-white">⋯</button>
          </div>
          
          <div className="bg-card rounded-xl overflow-hidden">
            {playlist.songs.map((song, index) => (
              <SongListItem key={song.id} song={song} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
