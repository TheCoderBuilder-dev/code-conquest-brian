import React, { useState, useEffect } from 'react';
import { MapPin, Thermometer, Droplets, Wind, Sun, Cloud } from 'lucide-react';

const WeatherWidget = () => {
  const [weather] = useState({
    location: "Nairobi, Kenya",
    temp: 24,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 8,
    uvIndex: 6,
    icon: ""
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCodingCondition = () => {
    const hour = currentTime.getHours();
    if (hour >= 22 || hour <= 5) return " Perfect for night coding";
    if (hour >= 6 && hour <= 11) return " Morning productivity peak";
    if (hour >= 12 && hour <= 17) return " Afternoon coding grind";
    return " Evening flow state";
  };

  return (
    <div className="glass rounded-xl p-6 border border-border/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="text-primary" size={20} />
          <span className="font-medium text-foreground">{weather.location}</span>
        </div>
        <div className="text-sm text-muted-foreground font-mono">
          {formatTime(currentTime)}
        </div>
      </div>

      {/* Main Weather Display */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="text-6xl">{weather.icon}</div>
          <div>
            <div className="text-3xl font-bold text-foreground">{weather.temp}°C</div>
            <div className="text-sm text-muted-foreground">{weather.condition}</div>
          </div>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-400" size={16} />
          <span className="text-sm text-muted-foreground">Humidity</span>
          <span className="text-sm font-medium text-foreground ml-auto">{weather.humidity}%</span>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="text-green-400" size={16} />
          <span className="text-sm text-muted-foreground">Wind</span>
          <span className="text-sm font-medium text-foreground ml-auto">{weather.windSpeed} km/h</span>
        </div>
        <div className="flex items-center gap-2">
          <Sun className="text-yellow-400" size={16} />
          <span className="text-sm text-muted-foreground">UV Index</span>
          <span className="text-sm font-medium text-foreground ml-auto">{weather.uvIndex}</span>
        </div>
        <div className="flex items-center gap-2">
          <Thermometer className="text-red-400" size={16} />
          <span className="text-sm text-muted-foreground">Feels like</span>
          <span className="text-sm font-medium text-foreground ml-auto">{weather.temp + 2}°C</span>
        </div>
      </div>

      {/* Coding Condition */}
      <div className="mt-4 pt-4 border-t border-border/20">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Coding conditions:</span>
          <span className="text-sm text-primary font-medium">
            {getCodingCondition()}
          </span>
        </div>
      </div>

      {/* Fun Fact */}
      <div className="mt-3 p-3 bg-primary/10 rounded-lg">
        <div className="text-xs text-primary">
           Perfect weather for building the next big thing!
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;