import { create } from 'zustand';
import { Song, PlaybackState, RepeatMode } from './types';
import { mockSongs } from './data';

interface PlayerStore {
  currentSong: Song | null;
  currentIndex: number;
  playbackState: PlaybackState;
  progress: number;
  duration: number;
  isShuffled: boolean;
  repeatMode: RepeatMode;
  favorites: string[];
  queue: Song[];
  currentTab: 'home' | 'search' | 'library' | 'player' | 'profile';
  currentPage: 'main' | 'playlist' | 'artist';
  selectedPlaylistId: string | null;
  
  setCurrentSong: (song: Song, index?: number) => void;
  setPlaybackState: (state: PlaybackState) => void;
  togglePlayPause: () => void;
  setProgress: (progress: number) => void;
  toggleShuffle: () => void;
  setRepeatMode: (mode: RepeatMode) => void;
  toggleFavorite: (songId: string) => void;
  isFavorite: (songId: string) => boolean;
  playNext: () => void;
  playPrevious: () => void;
  setCurrentTab: (tab: 'home' | 'search' | 'library' | 'player' | 'profile') => void;
  setCurrentPage: (page: 'main' | 'playlist' | 'artist') => void;
  setSelectedPlaylistId: (id: string | null) => void;
}

const parseDuration = (durationStr: string): number => {
  const [minutes, seconds] = durationStr.split(':').map(Number);
  return minutes * 60 + seconds;
};

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  currentSong: mockSongs[0],
  currentIndex: 0,
  playbackState: 'paused',
  progress: 0,
  duration: parseDuration(mockSongs[0].duration),
  isShuffled: false,
  repeatMode: 'off',
  favorites: [],
  queue: mockSongs,
  currentTab: 'home',
  currentPage: 'main',
  selectedPlaylistId: null,

  setCurrentSong: (song, index = 0) => {
    set({ 
      currentSong: song, 
      currentIndex: index,
      playbackState: 'playing',
      progress: 0,
      duration: parseDuration(song.duration)
    });
  },

  setPlaybackState: (state) => set({ playbackState: state }),

  togglePlayPause: () => {
    const { playbackState } = get();
    set({ 
      playbackState: playbackState === 'playing' ? 'paused' : 'playing' 
    });
  },

  setProgress: (progress) => set({ progress }),

  toggleShuffle: () => {
    const { isShuffled } = get();
    set({ isShuffled: !isShuffled });
  },

  setRepeatMode: (mode) => set({ repeatMode: mode }),

  toggleFavorite: (songId) => {
    const { favorites } = get();
    const newFavorites = favorites.includes(songId)
      ? favorites.filter(id => id !== songId)
      : [...favorites, songId];
    set({ favorites: newFavorites });
  },

  isFavorite: (songId) => get().favorites.includes(songId),

  playNext: () => {
    const { queue, currentIndex, repeatMode } = get();
    
    let nextIndex: number;
    
    if (repeatMode === 'one') {
      set({ progress: 0 });
      return;
    }
    
    nextIndex = currentIndex + 1;
    if (nextIndex >= queue.length) {
      if (repeatMode === 'all') {
        nextIndex = 0;
      } else {
        return;
      }
    }
    
    const nextSong = queue[nextIndex];
    if (nextSong) {
      set({ 
        currentSong: nextSong, 
        currentIndex: nextIndex,
        progress: 0,
        duration: parseDuration(nextSong.duration)
      });
    }
  },

  playPrevious: () => {
    const { queue, currentIndex, repeatMode } = get();
    
    let prevIndex: number;
    
    if (repeatMode === 'one') {
      set({ progress: 0 });
      return;
    }
    
    prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      if (repeatMode === 'all') {
        prevIndex = queue.length - 1;
      } else {
        return;
      }
    }
    
    const prevSong = queue[prevIndex];
    if (prevSong) {
      set({ 
        currentSong: prevSong, 
        currentIndex: prevIndex,
        progress: 0,
        duration: parseDuration(prevSong.duration)
      });
    }
  },

  setCurrentTab: (tab) => set({ currentTab: tab }),

  setCurrentPage: (page) => set({ currentPage: page }),

  setSelectedPlaylistId: (id) => set({ selectedPlaylistId: id })
}));
