import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { LibraryPage } from '../pages/LibraryPage';
import { PlayerPage } from '../pages/PlayerPage';
import { ProfilePage } from '../pages/ProfilePage';
import { PlaylistDetailPage } from '../pages/PlaylistDetailPage';
import { ArtistDetailPage } from '../pages/ArtistDetailPage';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Player: undefined;
  Profile: undefined;
  PlaylistDetail: { playlistId: string };
  ArtistDetail: { artistId: string };
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon: React.FC<{ name: string; focused: boolean }> = ({ name, focused }) => {
  const color = focused ? '#1DB954' : '#B3B3B3';
  
  const renderIcon = () => {
    switch (name) {
      case 'Home':
        return <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={color} />;
      case 'Search':
        return <Path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z" fill={color} />;
      case 'Library':
        return <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill={color} />;
      case 'Player':
        return <Path d="M8 5v14l11-7z" fill={color} />;
      case 'Profile':
        return <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill={color} />;
      default:
        return null;
    }
  };

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      {renderIcon()}
    </Svg>
  );
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopWidth: 1,
          borderTopColor: '#282828',
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
        tabBarActiveTintColor: '#1DB954',
        tabBarInactiveTintColor: '#B3B3B3',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ focused }) => <TabIcon name="Home" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarLabel: '搜索',
          tabBarIcon: ({ focused }) => <TabIcon name="Search" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryPage}
        options={{
          tabBarLabel: '音乐库',
          tabBarIcon: ({ focused }) => <TabIcon name="Library" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Player"
        component={PlayerPage}
        options={{
          tabBarLabel: '播放器',
          tabBarIcon: ({ focused }) => <TabIcon name="Player" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ focused }) => <TabIcon name="Profile" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#FFFFFF',
          headerBackTitle: '',
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={TabNavigator} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PlaylistDetail" 
          component={PlaylistDetailPage} 
          options={{ title: '播放列表' }}
        />
        <Stack.Screen 
          name="ArtistDetail" 
          component={ArtistDetailPage} 
          options={{ title: '艺人' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
