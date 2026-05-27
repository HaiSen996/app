import { Song, Artist, Playlist } from './types';

export const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    duration: '4:03',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Starboy',
    artist: 'The Weeknd',
    album: 'Starboy',
    duration: '3:50',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    album: 'Dreamland',
    duration: '3:58',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'Let It Happen',
    artist: 'Tame Impala',
    album: 'Currents',
    duration: '7:46',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'Electric Feel',
    artist: 'MGMT',
    album: 'Oracular Spectacular',
    duration: '3:49',
    coverUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop'
  },
  {
    id: '6',
    title: 'Instant Crush',
    artist: 'Daft Punk',
    album: 'Random Access Memories',
    duration: '5:37',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
  },
  {
    id: '7',
    title: 'Circles',
    artist: 'Post Malone',
    album: 'Hollywood\'s Bleeding',
    duration: '3:35',
    coverUrl: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&h=400&fit=crop'
  },
  {
    id: '8',
    title: 'The Less I Know The Better',
    artist: 'Tame Impala',
    album: 'Currents',
    duration: '3:36',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: 'p1',
    title: '今日最爱独立乐',
    description: '当下最具活力的独立流行与电子音乐',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
    author: 'GreenBeat 精选',
    listeners: '1.2万',
    songs: mockSongs.slice(0, 4)
  },
  {
    id: 'p2',
    title: '电子舞曲精选',
    description: '最热门的 EDM 歌曲',
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    author: 'DJ Station',
    listeners: '89万',
    songs: mockSongs.slice(0, 3)
  },
  {
    id: 'p3',
    title: '深夜电台',
    description: '适合夜晚聆听的音乐',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    author: 'Night Radio',
    listeners: '56万',
    songs: mockSongs.slice(4, 7)
  }
];

export const getPlaylistById = (id: string): Playlist | undefined => {
  return mockPlaylists.find(p => p.id === id);
};
