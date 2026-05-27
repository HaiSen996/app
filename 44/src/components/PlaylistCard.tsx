import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Playlist } from '../types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

interface PlaylistCardProps {
  playlist: Playlist;
  showAuthor?: boolean;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ 
  playlist, 
  showAuthor = true 
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const handlePress = () => {
    navigation.navigate('PlaylistDetail', { playlistId: playlist.id });
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={styles.card}
      activeOpacity={0.7}
    >
      <Image 
        source={{ uri: playlist.coverUrl }} 
        style={styles.cover}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{playlist.title}</Text>
        {showAuthor && (
          <Text style={styles.author} numberOfLines={1}>{playlist.author}</Text>
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
  author: {
    color: '#B3B3B3',
    fontSize: 12,
  },
});
