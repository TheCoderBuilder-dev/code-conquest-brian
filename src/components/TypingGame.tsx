import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, RotateCcw, Trophy, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TypingGame = () => {
  const codeSnippets = [
    "const brianCodes = () => { return 'magic'; }",
    "if (coffee.empty()) { brian.refill(); }",
    "while (coding) { dreams.become(reality); }",
    "function buildEmpire() { return 'success'; }",
    "const millionaire = async () => await grind();",
    "print('Hello, World! - Brian Munene')",
    "SELECT * FROM opportunities WHERE age = 18;",
    "git commit -m 'Building the future'"
  ];

  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [bestWpm, setBestWpm] = useState(68); // Brian's best WPM
  const [gameComplete, setGameComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const startGame = () => {
    setIsActive(true);
    setUserInput('');
    setTimeLeft(30);
    setGameComplete(false);
    setCurrentSnippet(Math.floor(Math.random() * codeSnippets.length));
    inputRef.current?.focus();
  };

  const resetGame = () => {
    setIsActive(false);
    setUserInput('');
    setTimeLeft(30);
    setWpm(0);
    setAccuracy(100);
    setGameComplete(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setGameComplete(true);
      // Calculate final WPM and update best if needed
      const finalWpm = Math.round((userInput.length / 5) * 2); // 30 seconds = 0.5 minutes
      if (finalWpm > bestWpm) {
        setBestWpm(finalWpm);
      }
    }
    return () => clearTimeout(timer);
  }, [isActive, timeLeft, userInput.length, bestWpm]);

  // Calculate WPM and accuracy in real-time
  useEffect(() => {
    if (isActive) {
      const correctChars = userInput.split('').filter((char, index) => 
        char === codeSnippets[currentSnippet][index]
      ).length;
      
      const currentWpm = Math.round((correctChars / 5) / ((30 - timeLeft) / 60));
      setWpm(isNaN(currentWpm) || currentWpm === Infinity ? 0 : currentWpm);
      
      const currentAccuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100;
      setAccuracy(currentAccuracy);
    }
  }, [userInput, timeLeft, isActive, currentSnippet]);

  const getCharStatus = (index: number) => {
    if (index >= userInput.length) return 'upcoming';
    if (userInput[index] === codeSnippets[currentSnippet][index]) return 'correct';
    return 'incorrect';
  };

  const getTypingLevel = () => {
    if (wpm >= 70) return { level: " CODING NINJA", color: "text-fire" };
    if (wpm >= 50) return { level: " SPEED DEMON", color: "text-accent" };
    if (wpm >= 30) return { level: " DEVELOPER", color: "text-primary" };
    return { level: " LEARNER", color: "text-muted-foreground" };
  };

  return (
    <div className="glass rounded-xl p-6 border border-border/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Keyboard className="text-primary" size={24} />
          <div>
            <h3 className="text-xl font-bold text-foreground">Typing Speed Test</h3>
            <p className="text-sm text-muted-foreground">Test your coding speed!</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="text-accent" size={16} />
          <span className="text-sm font-medium text-accent">{bestWpm} WPM</span>
        </div>
      </div>

      {/* Game Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{wpm}</div>
          <div className="text-xs text-muted-foreground">WPM</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">{accuracy}%</div>
          <div className="text-xs text-muted-foreground">Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-fire">{timeLeft}s</div>
          <div className="text-xs text-muted-foreground">Time</div>
        </div>
      </div>

      {/* Typing Level */}
      <div className="text-center mb-6">
        <div className={`text-lg font-bold ${getTypingLevel().color}`}>
          {getTypingLevel().level}
        </div>
      </div>

      {/* Code Snippet Display */}
      <div className="mb-4">
        <div className="bg-muted/20 rounded-lg p-4 font-mono text-sm border border-border/30">
          {codeSnippets[currentSnippet].split('').map((char, index) => (
            <span
              key={index}
              className={`${
                getCharStatus(index) === 'correct' ? 'bg-accent/20 text-accent' :
                getCharStatus(index) === 'incorrect' ? 'bg-fire/20 text-fire' :
                index === userInput.length ? 'bg-primary/30 text-primary animate-pulse' :
                'text-muted-foreground'
              }`}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="mb-6">
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={!isActive || gameComplete}
          placeholder={isActive ? "Start typing..." : "Click 'Start Game' to begin"}
          className="w-full p-3 bg-background border border-border/50 rounded-lg focus:border-primary focus:outline-none font-mono"
        />
      </div>

      {/* Game Controls */}
      <div className="flex gap-3 justify-center">
        {!isActive && !gameComplete && (
          <Button onClick={startGame} className="bg-primary hover:bg-primary/90">
            <Zap size={16} className="mr-2" />
            Start Game
          </Button>
        )}
        
        {(isActive || gameComplete) && (
          <Button onClick={resetGame} variant="outline">
            <RotateCcw size={16} className="mr-2" />
            Reset
          </Button>
        )}
      </div>

      {/* Game Complete Modal */}
      {gameComplete && (
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
          <div className="text-center">
            <div className="text-2xl mb-2">🎉</div>
            <div className="text-lg font-bold text-primary mb-2">Game Complete!</div>
            <div className="text-sm text-muted-foreground mb-3">
              Final Score: {wpm} WPM • {accuracy}% Accuracy
            </div>
            {wpm > bestWpm - 5 && (
              <div className="text-sm text-accent font-medium">
                 Excellent performance! You're coding fast!
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 text-center">
        <div className="text-xs text-muted-foreground">
           Practice makes perfect • Keep grinding!
        </div>
      </div>
    </div>
  );
};

export default TypingGame;