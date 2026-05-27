import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { mockGenres, mockSearchHistory, mockTrendingPlaylists } from '../data/mockData';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const quickActions = [
    { id: '1', name: '新歌速递', color: '#3B82F6', icon: '🎵' },
    { id: '2', name: '电台', color: '#F97316', icon: '📻' },
    { id: '3', name: '现场直播', color: '#A855F7', icon: '🎙️' },
    { id: '4', name: '播客', color: '#14B8A6', icon: '🎧' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>搜索</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="想听什么？"
          placeholderTextColor="#B3B3B3"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.micButton}>
          <Text style={styles.micIcon}>🎤</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.genresContainer}>
        {mockGenres.map(genre => (
          <TouchableOpacity 
            key={genre.id}
            style={styles.genreButton}
            onPress={() => setSearchQuery(genre.name)}
          >
            <Text style={styles.genreText}>{genre.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>最近搜索</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.sectionLink}>清除全部</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.historyList}>
          {mockSearchHistory.map(item => (
            <TouchableOpacity 
              key={item.id}
              style={styles.historyItem}
              onPress={() => setSearchQuery(item.query)}
            >
              <Text style={styles.historyIcon}>🕐</Text>
              <Text style={styles.historyText}>{item.query}</Text>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteIcon}>✕</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>浏览全部</Text>
        <View style={styles.quickActionsContainer}>
          {quickActions.map(action => (
            <TouchableOpacity 
              key={action.id}
              style={[styles.quickActionCard, { backgroundColor: action.color }]}
              onPress={() => {}}
            >
              <Text style={styles.quickActionIcon}>{action.icon}</Text>
              <Text style={styles.quickActionText}>{action.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.trendingCard}
          onPress={() => navigation.navigate('PlaylistDetail', { playlistId: mockTrendingPlaylists[0].id })}
        >
          <View style={styles.trendingInfo}>
            <Text style={styles.trendingIcon}>📈</Text>
            <View>
              <Text style={styles.trendingTitle}>当前趋势</Text>
              <Text style={styles.trendingSubtitle}>看看大家都在听什么</Text>
            </View>
          </View>
          <Text style={styles.trendingArrow}>→</Text>
        </TouchableOpacity>
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
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 12,
  },
  micButton: {
    padding: 8,
  },
  micIcon: {
    fontSize: 20,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 24,
  },
  genreButton: {
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#282828',
  },
  genreText: {
    color: '#FFFFFF',
    fontSize: 14,
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
  historyList: {
    paddingHorizontal: 16,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  historyIcon: {
    marginRight: 12,
    fontSize: 16,
  },
  historyText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    color: '#B3B3B3',
    fontSize: 16,
  },
  quickActionsContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionCard: {
    width: '47%',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quickActionIcon: {
    fontSize: 28,
  },
  quickActionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  trendingCard: {
    marginHorizontal: 16,
    backgroundColor: '#1DB954',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trendingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  trendingIcon: {
    fontSize: 28,
  },
  trendingTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  trendingSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    marginTop: 2,
  },
  trendingArrow: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '300',
  },
});
