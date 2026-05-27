import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IconButtonProps {
  icon: 'play' | 'pause' | 'skip-prev' | 'skip-next' | 'shuffle' | 'repeat' | 'heart' | 'more';
  size?: number;
  color?: string;
  active?: boolean;
  onPress?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  size = 24, 
  color = '#FFFFFF', 
  active = false,
  onPress 
}) => {
  const activeColor = active ? '#1DB954' : color;

  const renderIcon = () => {
    switch (icon) {
      case 'play':
        return (
          <Path 
            d="M8 5v14l11-7z" 
            fill={color}
          />
        );
      case 'pause':
        return (
          <Path 
            d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" 
            fill={color}
          />
        );
      case 'skip-prev':
        return (
          <Path 
            d="M6 6h2v12H6zm3.5 6l8.5 6V6z" 
            fill={activeColor}
          />
        );
      case 'skip-next':
        return (
          <Path 
            d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" 
            fill={activeColor}
          />
        );
      case 'shuffle':
        return (
          <Path 
            d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17 8.41 14.96 6.37 14.5 4zm0 9.41l-2.04 2.04L17 5.41 15.59 4 4 15.59 5.41 17 14.5 7.91z" 
            fill={activeColor}
          />
        );
      case 'repeat':
        return (
          <Path 
            d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" 
            fill={activeColor}
          />
        );
      case 'heart':
        return (
          <Path 
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
            fill={active ? '#1DB954' : color}
          />
        );
      case 'more':
        return (
          <Path 
            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" 
            fill={color}
          />
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}
    >
      <Svg width={size} height={size} viewBox="0 0 24 24">
        {renderIcon()}
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
