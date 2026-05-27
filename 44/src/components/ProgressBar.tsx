import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface ProgressBarProps {
  progress: number;
  duration: number;
  onProgressChange: (progress: number) => void;
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  duration, 
  onProgressChange 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const barRef = useRef<View>(null);
  const [barWidth, setBarWidth] = useState(0);

  const handleLayout = (event: { nativeEvent: { layout: { width: number } } }) => {
    setBarWidth(event.nativeEvent.layout.width);
  };

  const handlePress = (event: { nativeEvent: { locationX: number } }) => {
    const x = event.nativeEvent.locationX;
    const newProgress = Math.max(0, Math.min(1, x / barWidth));
    onProgressChange(newProgress * duration);
  };

  const progressWidth = (progress / duration) * barWidth;

  return (
    <TouchableWithoutFeedback 
      onPress={handlePress}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <View style={styles.container}>
        <Text style={styles.time}>{formatTime(progress)}</Text>
        <View 
          ref={barRef}
          style={styles.bar}
          onLayout={handleLayout}
        >
          <View 
            style={[styles.progress, { width: isDragging ? progressWidth : progressWidth }]}
          />
          <View 
            style={[styles.thumb, { left: progressWidth - 6 }]}
          />
        </View>
        <Text style={styles.time}>{formatTime(duration)}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  time: {
    color: '#B3B3B3',
    fontSize: 12,
    width: 45,
  },
  bar: {
    flex: 1,
    height: 4,
    backgroundColor: '#282828',
    borderRadius: 2,
    position: 'relative',
    marginHorizontal: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: '#1DB954',
    borderRadius: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  thumb: {
    width: 12,
    height: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    position: 'absolute',
    top: -4,
  },
});
