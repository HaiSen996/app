import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { getArtistById, getArtistSongs, getArtistPlaylists, mockPlaylists } from '../data/mockData';
import { SongListItem } from '../components/SongListItem';
import { PlaylistCard } from '../components/PlaylistCard';

type ArtistDetailPageRouteProp = RouteProp<RootStackParamList, 'ArtistDetail'>;

interface ArtistDetailPageProps {
  route: ArtistDetailPageRouteProp;
}

export const ArtistDetailPage: React.FC<ArtistDetailPageProps> = ({ route }) => {
  const { artistId } = route.params;
  const artist = getArtistById(artistId);
  const [isFollowing, setIsFollowing] = useState(false);
  
  const artistSongs = artist ? getArtistSongs(artist.name.split(' ')[0]) : [];
  const artistPlaylists = artist ? getArtistPlaylists(artist.name) : [];

  if (!artist) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>艺人不存在</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image 
          source={{ uri: artist.imageUrl }} 
          style={styles.banner}
        />
        <View style={styles.bannerOverlay} />
        <View style={styles.artistInfo}>
          {artist.verified && (
            <Text style={styles.verifiedBadge}>✓</Text>
          )}
          <Text style={styles.artistName}>{artist.name}</Text>
          <Text style={styles.followers}>{artist.followers} 粉丝</Text>
          <TouchableOpacity 
            style={[styles.followButton, isFollowing ? styles.followingButton : styles.followButton]}
            onPress={() => setIsFollowing(!isFollowing)}
          >
            <Text style={isFollowing ? styles.followingText : styles.followText}>
              {isFollowing ? '已关注' : '关注'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>▶️</Text>
          <Text style={styles.actionText}>播放</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>❤️</Text>
          <Text style={styles.actionText}>收藏</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>⋯</Text>
          <Text style={styles.actionText}>更多</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>热门曲目</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.sectionLink}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.songsContainer}>
          {artistSongs.slice(0, 5).map((song, index) => (
            <SongListItem key={song.id} song={song} index={index} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>艺人精选</Text>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.playlistScroll}
        >
          {artistPlaylists.length > 0 ? (
            artistPlaylists.map(playlist => (
              <View key={playlist.id} style={styles.playlistCardContainer}>
                <PlaylistCard playlist={playlist} />
              </View>
            ))
          ) : (
            <View style={styles.emptyPlaylistContainer}>
              <Text style={styles.emptyPlaylistText}>暂无精选歌单</Text>
            </View>
          )}
        </ScrollView>
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
  bannerContainer: {
    position: 'relative',
    height: 280,
  },
  banner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
    background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
  },
  artistInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  verifiedBadge: {
    backgroundColor: '#1DB954',
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  artistName: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    flex: 1,
  },
  followers: {
    color: '#B3B3B3',
    fontSize: 14,
    marginBottom: 8,
  },
  followButton: {
    backgroundColor: '#1DB954',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followingButton: {
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#282828',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  followingText: {
    color: '#B3B3B3',
    fontSize: 14,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 32,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  actionButton: {
    alignItems: 'center',
    gap: 8,
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 4,
  },
  actionText: {
    color: '#B3B3B3',
    fontSize: 12,
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
  songsContainer: {
    backgroundColor: '#121212',
    borderRadius: 12,
    overflow: 'hidden',
  },
  playlistScroll: {
    paddingHorizontal: 16,
    gap: 12,
  },
  playlistCardContainer: {
    width: 150,
  },
  emptyPlaylistContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  emptyPlaylistText: {
    color: '#B3B3B3',
    fontSize: 14,
  },
});
