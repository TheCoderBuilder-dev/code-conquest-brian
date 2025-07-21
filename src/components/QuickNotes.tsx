import React, { useState, useEffect } from 'react';
import { StickyNote, Plus, X, Save, Lightbulb, Code, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Note {
  id: number;
  content: string;
  type: 'idea' | 'code' | 'todo';
  timestamp: Date;
  pinned: boolean;
}

const QuickNotes = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      content: "AI integration idea: Add GPT chat assistant to portfolio for real-time visitor interaction",
      type: 'idea',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      pinned: true
    },
    {
      id: 2,
      content: "// TODO: Implement dark/light mode toggle\n// Add user preference storage\nconst theme = localStorage.getItem('theme');",
      type: 'code',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      pinned: false
    },
    {
      id: 3,
      content: "Research blockchain payment integration for Deliveroo - could be game changer for international deliveries",
      type: 'idea',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      pinned: false
    }
  ]);

  const [newNote, setNewNote] = useState('');
  const [noteType, setNoteType] = useState<'idea' | 'code' | 'todo'>('idea');
  const [isAdding, setIsAdding] = useState(false);

  const addNote = () => {
    if (newNote.trim()) {
      const note: Note = {
        id: Date.now(),
        content: newNote,
        type: noteType,
        timestamp: new Date(),
        pinned: false
      };
      setNotes([note, ...notes]);
      setNewNote('');
      setIsAdding(false);
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const togglePin = (id: number) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, pinned: !note.pinned } : note
    ));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'idea': return <Lightbulb className="text-accent" size={14} />;
      case 'code': return <Code className="text-primary" size={14} />;
      case 'todo': return <Target className="text-fire" size={14} />;
      default: return <StickyNote className="text-muted-foreground" size={14} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'idea': return 'border-accent/30 bg-accent/5';
      case 'code': return 'border-primary/30 bg-primary/5';
      case 'todo': return 'border-fire/30 bg-fire/5';
      default: return 'border-border/30 bg-muted/5';
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  // Sort notes: pinned first, then by timestamp
  const sortedNotes = [...notes].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return b.timestamp.getTime() - a.timestamp.getTime();
  });

  return (
    <div className="glass rounded-xl p-6 border border-border/50 max-h-96 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <StickyNote className="text-primary" size={24} />
          <div>
            <h3 className="text-xl font-bold text-foreground">Quick Notes</h3>
            <p className="text-sm text-muted-foreground">Capture ideas on the fly</p>
          </div>
        </div>
        <Button
          onClick={() => setIsAdding(!isAdding)}
          variant="outline"
          size="icon"
          className="h-8 w-8"
        >
          <Plus size={16} />
        </Button>
      </div>

      {/* Add New Note */}
      {isAdding && (
        <div className="mb-4 p-4 bg-muted/20 rounded-lg border border-border/30">
          {/* Note Type Selector */}
          <div className="flex gap-2 mb-3">
            {(['idea', 'code', 'todo'] as const).map(type => (
              <button
                key={type}
                onClick={() => setNoteType(type)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  noteType === type 
                    ? type === 'idea' ? 'bg-accent text-white' :
                      type === 'code' ? 'bg-primary text-white' :
                      'bg-fire text-white'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                {type === 'idea' ? '💡 Idea' : type === 'code' ? '💻 Code' : '🎯 Todo'}
              </button>
            ))}
          </div>

          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder={`Write your ${noteType}...`}
            className="w-full bg-transparent border-none outline-none text-foreground placeholder-muted-foreground resize-none"
            rows={3}
            autoFocus
          />
          <div className="flex justify-end gap-2 mt-3">
            <Button onClick={() => setIsAdding(false)} variant="ghost" size="sm">
              Cancel
            </Button>
            <Button onClick={addNote} size="sm" className="bg-primary">
              <Save size={14} className="mr-1" />
              Save
            </Button>
          </div>
        </div>
      )}

      {/* Notes List */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {sortedNotes.map((note) => (
          <div 
            key={note.id} 
            className={`p-3 rounded-lg border transition-all duration-200 hover:shadow-sm group ${getTypeColor(note.type)}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {getTypeIcon(note.type)}
                <span className="text-xs font-medium text-muted-foreground uppercase">
                  {note.type}
                </span>
                {note.pinned && <span className="text-xs">📌</span>}
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => togglePin(note.id)}
                  className="p-1 hover:bg-muted/50 rounded text-xs"
                  title={note.pinned ? 'Unpin' : 'Pin'}
                >
                  📌
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="p-1 hover:bg-fire/20 rounded"
                >
                  <X size={12} className="text-fire" />
                </button>
              </div>
            </div>

            <div className={`text-sm text-foreground mb-2 ${note.type === 'code' ? 'font-mono bg-muted/30 p-2 rounded text-xs' : ''}`}>
              {note.content}
            </div>

            <div className="text-xs text-muted-foreground">
              {formatTimestamp(note.timestamp)}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Footer */}
      <div className="mt-4 pt-3 border-t border-border/20">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-sm font-bold text-accent">{notes.filter(n => n.type === 'idea').length}</div>
            <div className="text-xs text-muted-foreground">Ideas</div>
          </div>
          <div>
            <div className="text-sm font-bold text-primary">{notes.filter(n => n.type === 'code').length}</div>
            <div className="text-xs text-muted-foreground">Code</div>
          </div>
          <div>
            <div className="text-sm font-bold text-fire">{notes.filter(n => n.type === 'todo').length}</div>
            <div className="text-xs text-muted-foreground">Todos</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 text-center">
        <div className="text-xs text-muted-foreground">
          💭 Creativity captured • Innovation documented
        </div>
      </div>
    </div>
  );
};

export default QuickNotes;