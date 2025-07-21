import React, { useState, useEffect } from 'react';
import { Coffee, Plus, TrendingUp, Zap, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CoffeeTracker = () => {
  const [todayCoffee, setTodayCoffee] = useState(4);
  const [weekTotal, setWeekTotal] = useState(28);
  const [lastCoffee, setLastCoffee] = useState(new Date(Date.now() - 2 * 60 * 60 * 1000)); // 2 hours ago
  const [energyLevel, setEnergyLevel] = useState(85);

  const addCoffee = () => {
    setTodayCoffee(prev => prev + 1);
    setWeekTotal(prev => prev + 1);
    setLastCoffee(new Date());
    setEnergyLevel(Math.min(100, energyLevel + 15));
  };

  const getEnergyStatus = () => {
    if (energyLevel >= 80) return { text: "🚀 MAXIMUM OVERDRIVE", color: "text-fire" };
    if (energyLevel >= 60) return { text: "⚡ High Performance", color: "text-accent" };
    if (energyLevel >= 40) return { text: "☕ Need Refuel", color: "text-primary" };
    return { text: "😴 Low Battery", color: "text-muted-foreground" };
  };

  const getCoffeeAdvice = () => {
    const hoursSinceLastCoffee = (Date.now() - lastCoffee.getTime()) / (1000 * 60 * 60);
    
    if (hoursSinceLastCoffee > 4) return "Time for a coffee break! ☕";
    if (todayCoffee >= 6) return "Maybe switch to water? 💧";
    if (todayCoffee < 2) return "Need more fuel for coding! 🔥";
    return "Perfect coffee balance! 👌";
  };

  const formatTimeAgo = (date: Date) => {
    const minutes = Math.floor((Date.now() - date.getTime()) / (1000 * 60));
    if (minutes < 60) return `${minutes} mins ago`;
    const hours = Math.floor(minutes / 60);
    if (hours === 1) return "1 hour ago";
    return `${hours} hours ago`;
  };

  const coffeeEmojis = ["☕", "🔥", "⚡", "💪", "🚀"];
  const currentEmoji = coffeeEmojis[Math.min(todayCoffee - 1, coffeeEmojis.length - 1)] || "☕";

  return (
    <div className="glass rounded-xl p-6 border border-border/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Coffee className="text-accent" size={24} />
          <div>
            <h3 className="text-xl font-bold text-foreground">Coffee Tracker</h3>
            <p className="text-sm text-muted-foreground">Fuel for the coding journey</p>
          </div>
        </div>
        <Button
          onClick={addCoffee}
          className="bg-accent hover:bg-accent/90 text-white font-medium"
          size="sm"
        >
          <Plus size={16} className="mr-1" />
          Add Cup
        </Button>
      </div>

      {/* Today's Count */}
      <div className="text-center mb-6">
        <div className="text-6xl mb-2">{currentEmoji}</div>
        <div className="text-4xl font-bold text-foreground mb-1">{todayCoffee}</div>
        <div className="text-sm text-muted-foreground">cups today</div>
      </div>

      {/* Energy Level */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Zap className="text-primary" size={16} />
            <span className="text-sm font-medium text-foreground">Energy Level</span>
          </div>
          <span className={`text-sm font-bold ${getEnergyStatus().color}`}>
            {energyLevel}%
          </span>
        </div>
        <div className="w-full bg-muted/50 h-3 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              energyLevel >= 80 ? 'bg-gradient-fire' : 
              energyLevel >= 60 ? 'bg-gradient-cyber' : 'bg-accent'
            }`}
            style={{ width: `${energyLevel}%` }}
          />
        </div>
        <div className={`text-center mt-2 text-sm font-medium ${getEnergyStatus().color}`}>
          {getEnergyStatus().text}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-muted/20 rounded-lg">
          <TrendingUp className="text-primary mx-auto mb-2" size={20} />
          <div className="text-2xl font-bold text-foreground">{weekTotal}</div>
          <div className="text-xs text-muted-foreground">This week</div>
        </div>
        <div className="text-center p-3 bg-muted/20 rounded-lg">
          <Clock className="text-accent mx-auto mb-2" size={20} />
          <div className="text-sm font-bold text-foreground">{formatTimeAgo(lastCoffee)}</div>
          <div className="text-xs text-muted-foreground">Last coffee</div>
        </div>
      </div>

      {/* Coffee Timeline */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-foreground mb-3">Today's Timeline</h4>
        <div className="flex justify-center gap-2">
          {Array.from({ length: Math.max(6, todayCoffee) }, (_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                i < todayCoffee 
                  ? 'bg-accent text-white' 
                  : 'bg-muted/30 text-muted-foreground'
              }`}
            >
              {i < todayCoffee ? '☕' : '○'}
            </div>
          ))}
        </div>
      </div>

      {/* Advice */}
      <div className="mt-4 p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
        <div className="text-sm text-primary font-medium">
          💡 {getCoffeeAdvice()}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <div className="text-xs text-muted-foreground">
          ☕ Powered by caffeine • Built with passion
        </div>
      </div>
    </div>
  );
};

export default CoffeeTracker;