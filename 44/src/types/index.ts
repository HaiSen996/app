export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
}

export interface Artist {
  id: string;
  name: string;
  followers: string;
  imageUrl: string;
  verified?: boolean;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  author: string;
  listeners: string;
  songs: Song[];
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface Genre {
  id: string;
  name: string;
}

export interface SearchHistory {
  id: string;
  query: string;
}

export type PlaybackState = 'playing' | 'paused' | 'stopped';

export type RepeatMode = 'off' | 'one' | 'all';

export interface PlayerState {
  currentSong: Song | null;
  currentIndex: number;
  playbackState: PlaybackState;
  progress: number;
  duration: number;
  isShuffled: boolean;
  repeatMode: RepeatMode;
  favorites: string[];
  queue: Song[];
}
