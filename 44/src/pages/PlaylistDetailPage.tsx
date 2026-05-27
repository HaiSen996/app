import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { getPlaylistById } from '../data/mockData';
import { SongListItem } from '../components/SongListItem';
import { usePlayerStore } from '../store/playerStore';
import { IconButton } from '../components/IconButton';

type PlaylistDetailPageRouteProp = RouteProp<RootStackParamList, 'PlaylistDetail'>;

interface PlaylistDetailPageProps {
  route: PlaylistDetailPageRouteProp;
}

export const PlaylistDetailPage: React.FC<PlaylistDetailPageProps> = ({ route }) => {
  const { playlistId } = route.params;
  const playlist = getPlaylistById(playlistId);
  const setQueue = usePlayerStore(state => state.setQueue);
  const setCurrentSong = usePlayerStore(state => state.setCurrentSong);

  const handleShufflePlay = () => {
    if (playlist && playlist.songs.length > 0) {
      setQueue(playlist.songs);
      const randomIndex = Math.floor(Math.random() * playlist.songs.length);
      setCurrentSong(playlist.songs[randomIndex], randomIndex);
    }
  };

  if (!playlist) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>歌单不存在</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: playlist.coverUrl }} 
          style={styles.cover}
        />
        <View style={styles.info}>
          <Text style={styles.type}>歌单</Text>
          <Text style={styles.title}>{playlist.title}</Text>
          <Text style={styles.description}>{playlist.description}</Text>
          <View style={styles.meta}>
            <Text style={styles.metaItem}>{playlist.author}</Text>
            <Text style={styles.metaDot}>•</Text>
            <Text style={styles.metaItem}>{playlist.listeners} 听众</Text>
            <Text style={styles.metaDot}>•</Text>
            <Text style={styles.metaItem}>{playlist.songs.length} 首歌曲</Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.playButton} onPress={handleShufflePlay}>
          <IconButton icon="play" size={24} color="#000000" />
          <Text style={styles.playButtonText}>随机播放</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <IconButton icon="heart" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.downloadIcon}>⬇️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <IconButton icon="more" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.songsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>歌曲列表</Text>
          <Text style={styles.sectionCount}>{playlist.songs.length} 首歌曲</Text>
        </View>
        <View style={styles.songsContainer}>
          {playlist.songs.map((song, index) => (
            <SongListItem key={song.id} song={song} index={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#B3B3B3',
    fontSize: 18,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  cover: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 16,
  },
  info: {
    marginBottom: 8,
  },
  type: {
    color: '#1DB954',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    color: '#B3B3B3',
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: 12,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaItem: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  metaDot: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 24,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#1DB954',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  playButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  actionButton: {
    width: 40,
    height: 40,
    backgroundColor: '#121212',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadIcon: {
    fontSize: 20,
  },
  songsSection: {
    paddingBottom: 100,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  sectionCount: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  songsContainer: {
    backgroundColor: '#121212',
    borderRadius: 12,
    overflow: 'hidden',
  },
});
