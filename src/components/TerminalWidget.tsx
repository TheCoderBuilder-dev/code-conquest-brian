import React, { useState, useEffect } from 'react';
import { Terminal, X, Minimize2 } from 'lucide-react';

const TerminalWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const responses = {
    'help': [
      'Available commands:',
      '  status    - Current project status',
      '  coffee    - Coffee consumption today ☕',
      '  mood      - How I\'m feeling right now',
      '  projects  - What I\'m working on',
      '  playlist  - Current coding music 🎵',
      '  clear     - Clear terminal',
      '  whoami    - About Brian'
    ],
    'status': ['🔥 Currently: Building the future, one line at a time', '📍 Status: Caffeinated and ready to code'],
    'coffee': ['☕ Coffee count today: 4 cups (and counting...)', '⚡ Energy level: MAXIMUM OVERDRIVE'],
    'mood': ['😤 Feeling: UNSTOPPABLE', '💪 Confidence: Through the roof', '🎯 Focus: Laser sharp'],
    'projects': ['🚀 Deliveroo v2.0 - Adding real-time chat', '💻 Personal portfolio - You\'re looking at it!', '🎮 Secret gaming project - Stay tuned...'],
    'playlist': ['🎵 Now playing: Lofi Hip Hop Radio 24/7', '🎧 Vibe: Productive coding mode activated'],
    'whoami': ['👨🏽‍💻 Brian Munene', '🎯 18-year-old full stack developer', '📍 Nairobi, Kenya 🇰🇪', '💡 Mission: Millionaire by 22'],
    'clear': []
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const response = responses[command as keyof typeof responses] || [`Command not found: ${cmd}. Type 'help' for available commands.`];
    
    if (command === 'clear') {
      setCommandHistory([]);
    } else {
      setCommandHistory(prev => [...prev, `brian@portfolio:~$ ${cmd}`, ...response, '']);
    }
    setCurrentInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  // Auto-open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="glass rounded-lg p-3 hover:scale-105 transition-transform glow-primary"
        >
          <Terminal size={20} className="text-primary" />
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed ${isMinimized ? 'bottom-4 left-4' : 'bottom-4 left-4 w-96 h-80'} z-50 transition-all duration-300`}>
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="glass rounded-lg p-3 hover:scale-105 transition-transform"
        >
          <Terminal size={20} className="text-primary" />
        </button>
      ) : (
        <div className="glass rounded-lg border border-border/50 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-muted/30 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-fire rounded-full"></div>
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <span className="text-sm font-mono text-muted-foreground">brian@portfolio:~</span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:bg-muted/50 rounded"
              >
                <Minimize2 size={12} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-fire/20 rounded"
              >
                <X size={12} />
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 h-64 overflow-y-auto bg-background/90 font-mono text-sm">
            <div className="text-primary mb-2">Welcome to Brian's Terminal! Type 'help' for commands.</div>
            
            {commandHistory.map((line, index) => (
              <div key={index} className={line.startsWith('brian@') ? 'text-primary-glow' : 'text-muted-foreground'}>
                {line}
              </div>
            ))}

            {/* Current Input */}
            <div className="flex items-center text-primary-glow">
              <span>brian@portfolio:~$ </span>
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent border-none outline-none flex-1 text-foreground ml-1"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="animate-blink">|</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalWidget;