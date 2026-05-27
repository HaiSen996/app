import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { PlaylistCard } from '../components/PlaylistCard';
import { SongCard } from '../components/SongCard';
import { mockTrendingPlaylists, mockPlaylists, mockCategories, mockSongs } from '../data/mockData';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export const HomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '早上好';
    if (hour < 18) return '下午好';
    return '晚上好';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>{getGreeting()}，Alex</Text>
        <Text style={styles.subtitle}>今天想听点什么？</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>当前趋势</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.sectionLink}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.trendingScroll}
        >
          {mockTrendingPlaylists.map(playlist => (
            <View key={playlist.id} style={styles.trendingCardContainer}>
              <PlaylistCard playlist={playlist} />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>推荐给你</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.sectionLink}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recommendScroll}
        >
          {mockPlaylists.slice(0, 6).map(playlist => (
            <View key={playlist.id} style={styles.recommendCardContainer}>
              <PlaylistCard playlist={playlist} />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>发现更多</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.sectionLink}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesContainer}>
          {mockCategories.map(category => (
            <TouchableOpacity 
              key={category.id}
              style={[styles.categoryButton, { backgroundColor: category.color }]}
              onPress={() => navigation.navigate('Search')}
            >
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>热门歌曲</Text>
        <View style={styles.songsGrid}>
          {mockSongs.slice(0, 6).map((song, index) => (
            <View key={song.id} style={styles.songCardContainer}>
              <SongCard song={song} showAlbum />
            </View>
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
    paddingTop: 20,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: '#B3B3B3',
    fontSize: 16,
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
    fontSize: 20,
    fontWeight: '600',
  },
  sectionLink: {
    color: '#1DB954',
    fontSize: 14,
    fontWeight: '500',
  },
  trendingScroll: {
    paddingHorizontal: 16,
    gap: 16,
  },
  trendingCardContainer: {
    width: 180,
  },
  recommendScroll: {
    paddingHorizontal: 16,
    gap: 12,
  },
  recommendCardContainer: {
    width: 150,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  songsGrid: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  songCardContainer: {
    width: '47%',
  },
});
