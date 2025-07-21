import React, { useState } from 'react';
import { Grid, X, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import GitHubActivity from './GitHubActivity';
import WeatherWidget from './WeatherWidget';
import ToDoWidget from './ToDoWidget';
import CoffeeTracker from './CoffeeTracker';
import TypingGame from './TypingGame';
import QuickNotes from './QuickNotes';

const PersonalDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const widgets = [
    { component: GitHubActivity, title: "GitHub Activity", span: "lg:col-span-2" },
    { component: WeatherWidget, title: "Weather", span: "lg:col-span-1" },
    { component: ToDoWidget, title: "Daily Tasks", span: "lg:col-span-2" },
    { component: CoffeeTracker, title: "Coffee Tracker", span: "lg:col-span-1" },
    { component: TypingGame, title: "Typing Game", span: "lg:col-span-2" },
    { component: QuickNotes, title: "Quick Notes", span: "lg:col-span-1" }
  ];

  if (!isOpen) {
    return (
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="glass rounded-lg p-3 hover:scale-105 transition-transform glow-primary rotate-90"
          variant="outline"
        >
          <Grid size={20} className="text-primary -rotate-90" />
        </Button>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-sm ${isFullscreen ? 'p-0' : 'p-4'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-6 py-4 glass border-b border-border/20">
        <div>
          <h2 className="text-2xl font-bold hero-text">Brian's Dashboard</h2>
          <p className="text-muted-foreground">Personal productivity hub • Real-time life metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setIsFullscreen(!isFullscreen)}
            variant="ghost"
            size="icon"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
          >
            <X size={20} />
          </Button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="max-w-7xl mx-auto px-6 h-full overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
          {widgets.map((Widget, index) => (
            <div key={index} className={Widget.span}>
              <Widget.component />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 glass rounded-lg px-4 py-2">
        <div className="text-xs text-muted-foreground text-center">
          🚀 Live from Nairobi • Building the future one widget at a time
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;