import React from 'react';
import { SongCard } from '../components/SongCard';
import { PlaylistCard } from '../components/PlaylistCard';
import { mockPlaylists, mockSongs } from '../data';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return '早上好';
  if (hour < 18) return '下午好';
  return '晚上好';
};

export const HomePage: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="p-6">
        <h1 className="text-white text-3xl font-bold mb-2">{getGreeting()}，Alex</h1>
        <p className="text-text-secondary text-lg mb-8">今天想听点什么？</p>
        
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">当前趋势</h2>
            <button className="text-primary text-sm font-medium hover:underline">查看全部</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {mockPlaylists.map(playlist => (
              <div key={playlist.id} className="min-w-[160px]">
                <PlaylistCard playlist={playlist} />
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">推荐给你</h2>
            <button className="text-primary text-sm font-medium hover:underline">查看全部</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {mockPlaylists.map(playlist => (
              <div key={playlist.id} className="min-w-[150px]">
                <PlaylistCard playlist={playlist} />
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-white text-xl font-semibold mb-4">热门歌曲</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockSongs.slice(0, 6).map(song => (
              <SongCard key={song.id} song={song} showAlbum />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
