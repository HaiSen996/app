import React, { useState } from 'react';
import { PlaylistCard } from '../components/PlaylistCard';
import { mockPlaylists } from '../data';

export const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const genres = ['流行', '摇滚', '爵士', '嘻哈', '电子', '古典', '民谣'];
  
  return (
    <div className="flex-1 overflow-y-auto pb-20">
      <div className="p-6">
        <h1 className="text-white text-3xl font-bold mb-6">搜索</h1>
        
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="想听什么？"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card text-white placeholder-text-secondary px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setSearchQuery(genre)}
              className="bg-card text-white px-4 py-2 rounded-full border border-border hover:border-primary transition-colors"
            >
              {genre}
            </button>
          ))}
        </div>
        
        <section className="mb-10">
          <h2 className="text-white text-xl font-semibold mb-4">浏览全部</h2>
          <div className="grid grid-cols-2 gap-4">
            {mockPlaylists.map(playlist => (
              <div key={playlist.id}>
                <PlaylistCard playlist={playlist} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
