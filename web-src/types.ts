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

export type PlaybackState = 'playing' | 'paused' | 'stopped';
export type RepeatMode = 'off' | 'one' | 'all';
