import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Song } from '../types';
import { usePlayerStore } from '../store/playerStore';

interface SongCardProps {
  song: Song;
  showArtist?: boolean;
  showAlbum?: boolean;
  onPress?: () => void;
}

export const SongCard: React.FC<SongCardProps> = ({ 
  song, 
  showArtist = true, 
  showAlbum = false,
  onPress 
}) => {
  const setCurrentSong = usePlayerStore(state => state.setCurrentSong);
  
  const handlePress = () => {
    setCurrentSong(song);
    onPress?.();
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={styles.card}
      activeOpacity={0.7}
    >
      <Image 
        source={{ uri: song.coverUrl }} 
        style={styles.cover}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{song.title}</Text>
        {showArtist && (
          <Text style={styles.artist} numberOfLines={1}>{song.artist}</Text>
        )}
        {showAlbum && (
          <Text style={styles.album} numberOfLines={1}>{song.album}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#121212',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cover: {
    width: '100%',
    aspectRatio: 1,
  },
  info: {
    padding: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  artist: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  album: {
    color: '#B3B3B3',
    fontSize: 11,
    marginTop: 2,
  },
});
