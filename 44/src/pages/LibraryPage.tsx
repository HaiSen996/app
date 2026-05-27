import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SongListItem } from '../components/SongListItem';
import { PlaylistCard } from '../components/PlaylistCard';
import { mockSongs, mockPlaylists } from '../data/mockData';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export const LibraryPage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const sections = [
    { id: 'playlists', title: '我的歌单', data: mockPlaylists.slice(0, 4) },
    { id: 'favorites', title: '收藏歌曲', data: mockSongs.slice(0, 5) },
    { id: 'recent', title: '最近播放', data: mockSongs.slice(5, 10) },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>音乐库</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>我的歌单</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.sectionLink}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.playlistScroll}
        >
          {mockPlaylists.slice(0, 4).map(playlist => (
            <View key={playlist.id} style={styles.playlistCardContainer}>
              <PlaylistCard playlist={playlist} />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>收藏歌曲</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.sectionLink}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.songListContainer}>
          {mockSongs.slice(0, 5).map((song, index) => (
            <SongListItem key={song.id} song={song} index={index} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>最近播放</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.sectionLink}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.songListContainer}>
          {mockSongs.slice(5, 10).map((song, index) => (
            <SongListItem key={song.id} song={song} index={index} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>下载管理</Text>
        <View style={styles.downloadSection}>
          <Text style={styles.downloadText}>暂无下载内容</Text>
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>立即下载</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 20,
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  section: {
    marginBottom: 24,
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
  sectionLink: {
    color: '#1DB954',
    fontSize: 14,
    fontWeight: '500',
  },
  playlistScroll: {
    paddingHorizontal: 16,
    gap: 12,
  },
  playlistCardContainer: {
    width: 150,
  },
  songListContainer: {
    backgroundColor: '#121212',
    borderRadius: 12,
    overflow: 'hidden',
  },
  downloadSection: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: '#121212',
    borderRadius: 12,
    alignItems: 'center',
  },
  downloadText: {
    color: '#B3B3B3',
    fontSize: 14,
    marginBottom: 12,
  },
  downloadButton: {
    backgroundColor: '#1DB954',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
