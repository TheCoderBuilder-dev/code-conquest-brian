import React, { useState, useEffect } from 'react';
import { Music, Play, Pause, SkipForward, Volume2 } from 'lucide-react';

const SpotifyWidget = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(127);
  const [isVisible, setIsVisible] = useState(false);

  const currentTrack = {
    title: "Lofi Study Beats",
    artist: "ChilledCow",
    album: "Productivity Vibes",
    duration: 240,
    cover: "🎵"
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(prev => (prev + 1) % currentTrack.duration);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack.duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / currentTrack.duration) * 100;

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-40 w-80">
      <div className="glass rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <Music className="text-accent" size={16} />
          <span className="text-sm font-medium text-muted-foreground">Now Playing</span>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse ml-auto"></div>
        </div>

        {/* Track Info */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center text-2xl">
            {currentTrack.cover}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-foreground font-medium truncate">{currentTrack.title}</div>
            <div className="text-sm text-muted-foreground truncate">{currentTrack.artist}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="w-full bg-muted/50 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent rounded-full transition-all duration-1000"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(currentTrack.duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button className="p-2 hover:bg-muted/50 rounded-full transition-colors">
            <SkipForward size={16} className="rotate-180 text-muted-foreground" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            {isPlaying ? <Pause size={16} className="text-white" /> : <Play size={16} className="text-white" />}
          </button>
          <button className="p-2 hover:bg-muted/50 rounded-full transition-colors">
            <SkipForward size={16} className="text-muted-foreground" />
          </button>
          <button className="p-2 hover:bg-muted/50 rounded-full transition-colors ml-2">
            <Volume2 size={16} className="text-muted-foreground" />
          </button>
        </div>

        {/* Footer */}
        <div className="text-xs text-muted-foreground text-center mt-3">
           Brian's coding soundtrack
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;