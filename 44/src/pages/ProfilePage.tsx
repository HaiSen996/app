import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { mockPlaylists, mockSongs } from '../data/mockData';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export const ProfilePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const menuItems = [
    { id: '1', icon: '📁', title: '我的歌单', count: '8' },
    { id: '2', icon: '❤️', title: '收藏', count: '24' },
    { id: '3', icon: '📥', title: '下载', count: '12' },
    { id: '4', icon: '🎤', title: '播客', count: '5' },
    { id: '5', icon: '🎧', title: '电台', count: '10' },
    { id: '6', icon: '🎬', title: 'MV', count: '3' },
  ];

  const settingsItems = [
    { id: '1', title: '账户设置' },
    { id: '2', title: '隐私设置' },
    { id: '3', title: '通知设置' },
    { id: '4', title: '数据与缓存' },
    { id: '5', title: '关于 GreenBeat' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image 
            source={{ uri: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=professional%20portrait%20young%20man%20avatar%20modern&image_size=square' }}
            style={styles.avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>Alex</Text>
            <Text style={styles.userEmail}>alex@example.com</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>编辑资料</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>128</Text>
          <Text style={styles.statLabel}>关注</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>5.2K</Text>
          <Text style={styles.statLabel}>粉丝</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>24</Text>
          <Text style={styles.statLabel}>收藏</Text>
        </View>
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
            <TouchableOpacity 
              key={playlist.id}
              style={styles.miniPlaylistCard}
              onPress={() => navigation.navigate('PlaylistDetail', { playlistId: playlist.id })}
            >
              <Image 
                source={{ uri: playlist.coverUrl }} 
                style={styles.miniPlaylistCover}
              />
              <Text style={styles.miniPlaylistTitle} numberOfLines={1}>{playlist.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>快捷操作</Text>
        <View style={styles.menuGrid}>
          {menuItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuCount}>{item.count}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>设置</Text>
        <View style={styles.settingsList}>
          {settingsItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.settingsItem}>
              <Text style={styles.settingsText}>{item.title}</Text>
              <Text style={styles.settingsArrow}>→</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.logoutSection}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>退出登录</Text>
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
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  userEmail: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#282828',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#121212',
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  statLabel: {
    color: '#B3B3B3',
    fontSize: 12,
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#282828',
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
  miniPlaylistCard: {
    width: 100,
  },
  miniPlaylistCover: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  miniPlaylistTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 8,
  },
  menuGrid: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  menuItem: {
    width: '31%',
    backgroundColor: '#121212',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  menuTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 4,
  },
  menuCount: {
    color: '#B3B3B3',
    fontSize: 10,
  },
  settingsList: {
    paddingHorizontal: 16,
    backgroundColor: '#121212',
    borderRadius: 12,
    overflow: 'hidden',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  settingsItem:last-child: {
    borderBottomWidth: 0,
  },
  settingsText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  settingsArrow: {
    color: '#B3B3B3',
    fontSize: 16,
  },
  logoutSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
  },
  logoutButton: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#282828',
    borderRadius: 20,
  },
  logoutText: {
    color: '#B3B3B3',
    fontSize: 14,
  },
});
