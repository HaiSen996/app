import React from 'react';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { LibraryPage } from './pages/LibraryPage';
import { PlayerPage } from './pages/PlayerPage';
import { ProfilePage } from './pages/ProfilePage';
import { PlaylistDetailPage } from './pages/PlaylistDetailPage';
import { usePlayerStore } from './store';

const App: React.FC = () => {
  const { currentTab, currentPage, setCurrentTab } = usePlayerStore();
  
  const tabs = [
    { id: 'home', icon: '🏠', label: '首页' },
    { id: 'search', icon: '🔍', label: '搜索' },
    { id: 'library', icon: '📚', label: '音乐库' },
    { id: 'player', icon: '▶️', label: '播放器' },
    { id: 'profile', icon: '👤', label: '我的' }
  ];
  
  const renderPage = () => {
    if (currentPage === 'playlist') {
      return <PlaylistDetailPage />;
    }
    
    switch (currentTab) {
      case 'home':
        return <HomePage />;
      case 'search':
        return <SearchPage />;
      case 'library':
        return <LibraryPage />;
      case 'player':
        return <PlayerPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="h-screen w-screen bg-background flex flex-col">
      <div className="flex-1 overflow-hidden">
        {renderPage()}
      </div>
      
      <nav className="bg-card border-t border-border">
        <div className="flex justify-around py-3">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id as any)}
              className={`flex flex-col items-center px-4 py-2 ${
                currentTab === tab.id ? 'text-primary' : 'text-text-secondary'
              }`}
            >
              <span className="text-2xl mb-1">{tab.icon}</span>
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default App;
