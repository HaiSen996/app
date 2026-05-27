import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { IconButton } from '../components/IconButton';
import { ProgressBar } from '../components/ProgressBar';
import { usePlayerStore } from '../store/playerStore';
import { RepeatMode } from '../types';

export const PlayerPage: React.FC = () => {
  const { 
    currentSong, 
    playbackState, 
    progress, 
    duration, 
    isShuffled, 
    repeatMode,
    togglePlayPause,
    playNext,
    playPrevious,
    toggleShuffle,
    setRepeatMode,
    toggleFavorite,
    isFavorite,
    setProgress 
  } = usePlayerStore();

  const [progressValue, setProgressValue] = useState(progress);

  useEffect(() => {
    setProgressValue(progress);
  }, [progress]);

  useEffect(() => {
    if (playbackState !== 'playing') return;
    
    const interval = setInterval(() => {
      setProgressValue(prev => {
        if (prev >= duration) {
          playNext();
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [playbackState, duration, playNext]);

  const handleProgressChange = (newProgress: number) => {
    setProgressValue(newProgress);
    setProgress(newProgress);
  };

  const handleRepeatPress = () => {
    const modes: RepeatMode[] = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setRepeatMode(modes[nextIndex]);
  };

  if (!currentSong) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>暂无播放歌曲</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.albumCoverContainer}>
        <Image 
          source={{ uri: currentSong.coverUrl }} 
          style={styles.albumCover}
          resizeMode="cover"
        />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.songTitle}>{currentSong.title}</Text>
        <Text style={styles.songArtist}>{currentSong.artist}</Text>
      </View>

      <ProgressBar 
        progress={progressValue} 
        duration={duration} 
        onProgressChange={handleProgressChange}
      />

      <View style={styles.controlsSection}>
        <IconButton 
          icon="shuffle" 
          size={24} 
          color="#B3B3B3" 
          active={isShuffled}
          onPress={toggleShuffle}
        />
        <IconButton 
          icon="skip-prev" 
          size={28} 
          color="#FFFFFF"
          onPress={playPrevious}
        />
        <TouchableOpacity 
          style={styles.playButton}
          onPress={togglePlayPause}
          activeOpacity={0.8}
        >
          <IconButton 
            icon={playbackState === 'playing' ? 'pause' : 'play'} 
            size={32} 
            color="#1DB954"
          />
        </TouchableOpacity>
        <IconButton 
          icon="skip-next" 
          size={28} 
          color="#FFFFFF"
          onPress={playNext}
        />
        <IconButton 
          icon="repeat" 
          size={24} 
          color="#B3B3B3" 
          active={repeatMode !== 'off'}
          onPress={handleRepeatPress}
        />
      </View>

      <View style={styles.favoriteSection}>
        <IconButton 
          icon="heart" 
          size={28} 
          color="#FFFFFF"
          active={isFavorite(currentSong.id)}
          onPress={() => toggleFavorite(currentSong.id)}
        />
        <Text style={styles.favoriteText}>
          {isFavorite(currentSong.id) ? '已收藏' : '添加到收藏'}
        </Text>
      </View>

      <View style={styles.deviceSection}>
        <View style={styles.deviceInfo}>
          <Text style={styles.deviceIcon}>🎧</Text>
          <Text style={styles.deviceText}>已连接 AIRPODS PRO</Text>
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#B3B3B3',
    fontSize: 18,
  },
  albumCoverContainer: {
    paddingHorizontal: 32,
    marginBottom: 24,
  },
  albumCover: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  infoSection: {
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  songTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  songArtist: {
    color: '#B3B3B3',
    fontSize: 16,
  },
  controlsSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginVertical: 24,
  },
  playButton: {
    width: 64,
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  favoriteSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  favoriteText: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  deviceSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  deviceInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#1DB954',
    padding: 12,
    borderRadius: 20,
  },
  deviceIcon: {
    fontSize: 18,
  },
  deviceText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
