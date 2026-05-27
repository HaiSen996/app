import React from 'react';
import { PlaylistCard } from '../components/PlaylistCard';
import { SongListItem } from '../components/SongListItem';
import { mockPlaylists, mockSongs } from '../data';

export const LibraryPage: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="p-6">
        <h1 className="text-white text-3xl font-bold mb-8">音乐库</h1>
        
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">我的歌单</h2>
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
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">最近播放</h2>
            <button className="text-primary text-sm font-medium hover:underline">查看全部</button>
          </div>
          <div className="bg-card rounded-xl overflow-hidden">
            {mockSongs.slice(0, 5).map((song, index) => (
              <SongListItem key={song.id} song={song} index={index} />
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-white text-xl font-semibold mb-4">下载管理</h2>
          <div className="bg-card rounded-xl p-8 text-center">
            <p className="text-text-secondary mb-4">暂无下载内容</p>
            <button className="bg-primary text-black px-6 py-2 rounded-full font-medium hover:bg-[#1ed760] transition-colors">
              立即下载
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
