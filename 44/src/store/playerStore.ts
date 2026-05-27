import { create } from 'zustand';
import { Song, PlaybackState, RepeatMode } from '../types';
import { mockSongs } from '../data/mockData';

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
  
  setCurrentSong: (song: Song, index?: number) => void;
  setPlaybackState: (state: PlaybackState) => void;
  togglePlayPause: () => void;
  setProgress: (progress: number) => void;
  setDuration: (duration: number) => void;
  toggleShuffle: () => void;
  setRepeatMode: (mode: RepeatMode) => void;
  toggleFavorite: (songId: string) => void;
  isFavorite: (songId: string) => boolean;
  playNext: () => void;
  playPrevious: () => void;
  setQueue: (songs: Song[]) => void;
  playSongAtIndex: (index: number) => void;
}

const parseDuration = (durationStr: string): number => {
  const [minutes, seconds] = durationStr.split(':').map(Number);
  return minutes * 60 + seconds;
};

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  currentSong: null,
  currentIndex: -1,
  playbackState: 'stopped',
  progress: 0,
  duration: 180,
  isShuffled: false,
  repeatMode: 'off',
  favorites: [],
  queue: mockSongs,
  
  setCurrentSong: (song, index = 0) => {
    const queue = get().queue;
    const songIndex = index >= 0 ? index : queue.findIndex(s => s.id === song.id);
    set({ 
      currentSong: song, 
      currentIndex: songIndex,
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
  
  setDuration: (duration) => set({ duration }),
  
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
    const { queue, currentIndex, isShuffled, repeatMode } = get();
    
    if (repeatMode === 'one') {
      return;
    }
    
    let nextIndex: number;
    
    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * queue.length);
    } else {
      nextIndex = currentIndex + 1;
      if (nextIndex >= queue.length) {
        if (repeatMode === 'all') {
          nextIndex = 0;
        } else {
          return;
        }
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
    const { queue, currentIndex, isShuffled, repeatMode, progress } = get();
    
    if (repeatMode === 'one') {
      set({ progress: 0 });
      return;
    }
    
    let prevIndex: number;
    
    if (isShuffled) {
      prevIndex = Math.floor(Math.random() * queue.length);
    } else {
      prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        if (repeatMode === 'all') {
          prevIndex = queue.length - 1;
        } else {
          return;
        }
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
  
  setQueue: (songs) => {
    set({ queue: songs });
  },
  
  playSongAtIndex: (index) => {
    const { queue } = get();
    const song = queue[index];
    if (song) {
      set({ 
        currentSong: song, 
        currentIndex: index,
        playbackState: 'playing',
        progress: 0,
        duration: parseDuration(song.duration)
      });
    }
  }
}));
