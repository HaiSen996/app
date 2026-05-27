import { Song, Artist, Playlist, Category, Genre, SearchHistory } from '../types';

export const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    duration: '4:03',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=neon%20city%20night%20synthwave%20retro%20futuristic&image_size=square_hd'
  },
  {
    id: '2',
    title: 'Starboy',
    artist: 'The Weeknd',
    album: 'Starboy',
    duration: '3:50',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dark%20mysterious%20man%20with%20neon%20cross%20starry%20background&image_size=square_hd'
  },
  {
    id: '3',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    album: 'Dreamland',
    duration: '3:58',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20abstract%20waves%20dreamlike%20psychedelic&image_size=square_hd'
  },
  {
    id: '4',
    title: 'Let It Happen',
    artist: 'Tame Impala',
    album: 'Currents',
    duration: '7:46',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=swirling%20colorful%20patterns%20cosmic%20psychedelic&image_size=square_hd'
  },
  {
    id: '5',
    title: 'Electric Feel',
    artist: 'MGMT',
    album: 'Oracular Spectacular',
    duration: '3:49',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=electric%20neon%20lights%20retro%20disco%20vintage&image_size=square_hd'
  },
  {
    id: '6',
    title: 'Instant Crush',
    artist: 'Daft Punk',
    album: 'Random Access Memories',
    duration: '5:37',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=futuristic%20robot%20punk%20electronic%20music%20neon&image_size=square_hd'
  },
  {
    id: '7',
    title: 'Circles',
    artist: 'Post Malone',
    album: 'Hollywood\'s Bleeding',
    duration: '3:35',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=red%20orange%20circles%20abstract%20artistic&image_size=square_hd'
  },
  {
    id: '8',
    title: 'The Less I Know The Better',
    artist: 'Tame Impala',
    album: 'Currents',
    duration: '3:36',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=psychedelic%20colorful%20swirls%20dreamy%20art&image_size=square_hd'
  },
  {
    id: '9',
    title: 'After Hours',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:30',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dark%20neon%20city%20night%20mysterious%20man&image_size=square_hd'
  },
  {
    id: '10',
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:04',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=retro%20futuristic%20pink%20car%20palm%20trees%20sunset&image_size=square_hd'
  },
  {
    id: '11',
    title: 'Cruel Summer',
    artist: 'Taylor Swift',
    album: '1989 (Taylor\'s Version)',
    duration: '3:48',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=synth%20pop%20retro%2080s%20summer%20vibes%20colorful&image_size=square_hd'
  },
  {
    id: '12',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=floating%20in%20space%20disco%20ball%20retro%20futuristic&image_size=square_hd'
  },
  {
    id: '13',
    title: '交换余生',
    artist: '林俊杰',
    album: '幸存者·如你',
    duration: '4:32',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=surreal%20ocean%20sunset%20peaceful%20dreamy%20Chinese%20style&image_size=square_hd'
  },
  {
    id: '14',
    title: '不为谁而作的歌',
    artist: '林俊杰',
    album: '和自己对话',
    duration: '4:24',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=lonely%20piano%20dark%20room%20emotional%20intimate&image_size=square_hd'
  },
  {
    id: '15',
    title: '修炼爱情',
    artist: '林俊杰',
    album: '因你而在',
    duration: '4:32',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=romantic%20soft%20light%20love%20story%20warm%20colors&image_size=square_hd'
  },
  {
    id: '16',
    title: '江南',
    artist: '林俊杰',
    album: '第二天堂',
    duration: '4:27',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=misty%20river%20south%20China%20traditional%20architecture&image_size=square_hd'
  },
  {
    id: '17',
    title: '可惜没如果',
    artist: '林俊杰',
    album: '新地球',
    duration: '4:52',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=regret%20sad%20emotional%20rainy%20night%20city&image_size=square_hd'
  },
  {
    id: '18',
    title: 'Someone Like You',
    artist: 'Adele',
    album: '21',
    duration: '4:45',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=emotional%20sad%20woman%20piano%20black%20white&image_size=square_hd'
  },
  {
    id: '19',
    title: 'Hello',
    artist: 'Adele',
    album: '25',
    duration: '4:55',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=woman%20singing%20emotional%20dramatic%20lighting&image_size=square_hd'
  },
  {
    id: '20',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    album: '÷ (Divide)',
    duration: '4:23',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=romantic%20couple%20sunset%20beach%20love&image_size=square_hd'
  }
];

export const mockArtists: Artist[] = [
  {
    id: 'a1',
    name: '林俊杰 (JJ Lin)',
    followers: '12,458,902',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=male%20Asian%20singer%20on%20stage%20concert%20spotlight&image_size=landscape_16_9',
    verified: true
  },
  {
    id: 'a2',
    name: 'The Weeknd',
    followers: '45,234,100',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=mysterious%20man%20dark%20sunglasses%20neon%20lights&image_size=landscape_16_9',
    verified: true
  },
  {
    id: 'a3',
    name: 'Dua Lipa',
    followers: '38,901,234',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=female%20pop%20star%20retro%20futuristic%20disco&image_size=landscape_16_9',
    verified: true
  },
  {
    id: 'a4',
    name: 'Tame Impala',
    followers: '12,876,543',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=psychedelic%20colorful%20band%20cosmic%20background&image_size=landscape_16_9',
    verified: true
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: 'p1',
    title: '今日最爱独立乐',
    description: '当下最具活力的独立流行与电子音乐，为你注入全天能量',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20swirling%20abstract%20music%20art&image_size=square_hd',
    author: 'GreenBeat 精选',
    listeners: '1.2万',
    songs: mockSongs.slice(0, 8)
  },
  {
    id: 'p2',
    title: 'After Hours',
    description: 'The Weeknd 的热门专辑',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dark%20neon%20city%20night%20retro%20wave&image_size=square_hd',
    author: 'The Weeknd',
    listeners: '234万',
    songs: [mockSongs[8], mockSongs[1]]
  },
  {
    id: 'p3',
    title: 'Future Nostalgia',
    description: 'Dua Lipa 的复古未来主义专辑',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=retro%20futuristic%20pink%20purple%20disco&image_size=square_hd',
    author: 'Dua Lipa',
    listeners: '189万',
    songs: [mockSongs[9], mockSongs[11]]
  },
  {
    id: 'p4',
    title: 'Currents',
    description: 'Tame Impala 的迷幻摇滚之旅',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20psychedelic%20waves%20cosmic&image_size=square_hd',
    author: 'Tame Impala',
    listeners: '156万',
    songs: [mockSongs[3], mockSongs[7]]
  },
  {
    id: 'p5',
    title: 'JJ Lin: 极致现场精选集',
    description: '林俊杰最精彩的现场表演合集',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=concert%20stage%20spotlights%20crowd%20energy&image_size=square_hd',
    author: '艺人亲自推荐',
    listeners: '56万',
    songs: mockSongs.slice(12, 17)
  },
  {
    id: 'p6',
    title: 'Midnights',
    description: 'Taylor Swift 的午夜故事',
    coverUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=midnight%20blue%20starry%20sky%20mysterious&image_size=square_hd',
    author: 'Taylor Swift',
    listeners: '312万',
    songs: [mockSongs[10]]
  }
];

export const mockCategories: Category[] = [
  { id: 'c1', name: '流行音乐', color: '#1DB954' },
  { id: 'c2', name: '电子舞曲', color: '#FF6B6B' },
  { id: 'c3', name: '怀旧经典', color: '#4ECDC4' },
  { id: 'c4', name: '独立摇滚', color: '#FFE66D' },
  { id: 'c5', name: '学习专注', color: '#95E1D3' }
];

export const mockGenres: Genre[] = [
  { id: 'g1', name: '流行' },
  { id: 'g2', name: '摇滚' },
  { id: 'g3', name: '爵士' },
  { id: 'g4', name: '嘻哈' },
  { id: 'g5', name: '电子' },
  { id: 'g6', name: 'R&B' },
  { id: 'g7', name: '古典' },
  { id: 'g8', name: '民谣' }
];

export const mockSearchHistory: SearchHistory[] = [
  { id: 'h1', query: '周杰伦' },
  { id: 'h2', query: 'NewJeans' },
  { id: 'h3', query: 'Lo-fi Hip Hop' },
  { id: 'h4', query: 'Taylor Swift' },
  { id: 'h5', query: '钢琴曲' }
];

export const mockTrendingPlaylists = mockPlaylists.slice(0, 4);

export const getArtistById = (id: string): Artist | undefined => {
  return mockArtists.find(a => a.id === id);
};

export const getPlaylistById = (id: string): Playlist | undefined => {
  return mockPlaylists.find(p => p.id === id);
};

export const getArtistSongs = (artistName: string): Song[] => {
  return mockSongs.filter(s => s.artist === artistName);
};

export const getArtistPlaylists = (artistName: string): Playlist[] => {
  return mockPlaylists.filter(p => p.author === artistName);
};
