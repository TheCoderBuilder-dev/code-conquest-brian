import React, { useState, useEffect } from 'react';
import { Github, GitCommit, GitBranch, Star, Coffee } from 'lucide-react';

interface Commit {
  message: string;
  time: string;
  repo: string;
  files: number;
}

const GitHubActivity = () => {
  const [commits] = useState<Commit[]>([
    { message: "✨ Add real-time parcel tracking to Deliveroo", time: "2 hours ago", repo: "deliveroo-v2", files: 7 },
    { message: "🐛 Fix authentication bug in user dashboard", time: "5 hours ago", repo: "mad-carts", files: 3 },
    { message: "🚀 Implement Google Maps integration", time: "1 day ago", repo: "deliveroo-v2", files: 12 },
    { message: "💄 Update portfolio hero section styling", time: "1 day ago", repo: "portfolio", files: 4 },
    { message: "🔧 Optimize database queries for better performance", time: "2 days ago", repo: "mad-carts", files: 8 }
  ]);

  const [stats] = useState({
    todayCommits: 7,
    weekCommits: 23,
    currentStreak: 15,
    totalRepos: 24,
    starsEarned: 89
  });

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Github className="text-primary" size={24} />
          <div>
            <h3 className="text-xl font-bold text-foreground">GitHub Activity</h3>
            <p className="text-sm text-muted-foreground">Real-time coding activity</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-accent">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Active</span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{stats.todayCommits}</div>
          <div className="text-xs text-muted-foreground">Today</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">{stats.currentStreak}</div>
          <div className="text-xs text-muted-foreground">Day Streak</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-fire">{stats.starsEarned}</div>
          <div className="text-xs text-muted-foreground">Stars ⭐</div>
        </div>
      </div>

      {/* Recent Commits */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <GitCommit size={16} className="text-muted-foreground" />
            Recent Commits
          </h4>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>

        <div className="space-y-2">
          {commits.slice(0, isExpanded ? commits.length : 3).map((commit, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <GitBranch size={14} className="text-primary mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground truncate">
                  {commit.message}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span>{commit.repo}</span>
                  <span>•</span>
                  <span>{commit.files} files</span>
                  <span>•</span>
                  <span>{commit.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coding Mood */}
      <div className="mt-6 pt-4 border-t border-border/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="text-accent" size={16} />
            <span className="text-sm font-medium text-foreground">Current Mood:</span>
          </div>
          <div className="text-sm text-primary font-mono">
            {new Date().getHours() > 18 ? "🌙 Night owl mode" : "☀️ Productive vibes"}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border/20 text-center">
        <div className="text-xs text-muted-foreground">
          💻 Building the future • One commit at a time
        </div>
      </div>
    </div>
  );
};

export default GitHubActivity;