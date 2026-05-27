import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Song } from '../types';
import { usePlayerStore } from '../store/playerStore';

interface SongListItemProps {
  song: Song;
  index?: number;
  showIndex?: boolean;
  onPress?: () => void;
}

export const SongListItem: React.FC<SongListItemProps> = ({ 
  song, 
  index = 0, 
  showIndex = true,
  onPress 
}) => {
  const setCurrentSong = usePlayerStore(state => state.setCurrentSong);
  
  const handlePress = () => {
    setCurrentSong(song, index);
    onPress?.();
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={styles.container}
      activeOpacity={0.7}
    >
      {showIndex && (
        <View style={styles.indexContainer}>
          <Text style={styles.index}>{index + 1}</Text>
        </View>
      )}
      <Image 
        source={{ uri: song.coverUrl }} 
        style={styles.cover}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{song.title}</Text>
        <Text style={styles.artist} numberOfLines={1}>{song.artist}</Text>
      </View>
      <View style={styles.durationContainer}>
        <Text style={styles.duration}>{song.duration}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#121212',
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  indexContainer: {
    width: 24,
    alignItems: 'center',
    marginRight: 8,
  },
  index: {
    color: '#B3B3B3',
    fontSize: 14,
    fontWeight: '500',
  },
  cover: {
    width: 44,
    height: 44,
    borderRadius: 4,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  artist: {
    color: '#B3B3B3',
    fontSize: 12,
    marginTop: 2,
  },
  durationContainer: {
    marginLeft: 12,
  },
  duration: {
    color: '#B3B3B3',
    fontSize: 12,
  },
});
