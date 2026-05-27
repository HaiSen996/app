import React from 'react';
import { usePlayerStore } from '../store';

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const ProgressBar: React.FC = () => {
  const { progress, duration, setProgress } = usePlayerStore();
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    setProgress(percentage * duration);
  };
  
  const progressPercentage = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-3">
      <span className="text-text-secondary text-xs w-10">{formatTime(progress)}</span>
      <div 
        className="flex-1 h-1 bg-border rounded-full relative cursor-pointer"
        onClick={handleClick}
      >
        <div 
          className="h-full bg-primary rounded-full"
          style={{ width: `${progressPercentage}% }}
        />
      </div>
      <span className="text-text-secondary text-xs w-10">{formatTime(duration)}</span>
    </div>
  );
};
