import React, { useState } from 'react';
import { CheckSquare, Square, Plus, Trash2, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Task {
  id: number;
  text: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

const ToDoWidget = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Finish Deliveroo real-time chat feature", completed: false, priority: 'high' },
    { id: 2, text: "Update portfolio with new projects", completed: true, priority: 'medium' },
    { id: 3, text: "Learn Next.js for upcoming client project", completed: false, priority: 'medium' },
    { id: 4, text: "Coffee with potential startup co-founder", completed: false, priority: 'high' },
    { id: 5, text: "Practice algorithm challenges", completed: true, priority: 'low' },
    { id: 6, text: "Research AI integration opportunities", completed: false, priority: 'medium' }
  ]);

  const [newTask, setNewTask] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        completed: false,
        priority: 'medium'
      }]);
      setNewTask('');
      setIsAdding(false);
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-fire';
      case 'medium': return 'text-accent';
      case 'low': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getPriorityEmoji = (priority: string) => {
    switch (priority) {
      case 'high': return '🔥';
      case 'medium': return '⚡';
      case 'low': return '📝';
      default: return '📝';
    }
  };

  return (
    <div className="glass rounded-xl p-6 border border-border/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Target className="text-primary" size={24} />
          <div>
            <h3 className="text-xl font-bold text-foreground">Daily Missions</h3>
            <p className="text-sm text-muted-foreground">Building the future, task by task</p>
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

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Progress</span>
          <span className="text-primary font-medium">{completedCount}/{tasks.length} completed</span>
        </div>
        <div className="w-full bg-muted/50 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-cyber rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Add New Task */}
      {isAdding && (
        <div className="mb-4 p-3 bg-muted/20 rounded-lg">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="What needs to be done?"
            className="w-full bg-transparent border-none outline-none text-foreground placeholder-muted-foreground"
            autoFocus
          />
          <div className="flex justify-end gap-2 mt-2">
            <Button onClick={() => setIsAdding(false)} variant="ghost" size="sm">
              Cancel
            </Button>
            <Button onClick={addTask} size="sm" className="bg-primary">
              Add Task
            </Button>
          </div>
        </div>
      )}

      {/* Task List */}
      <div className="space-y-2 max-h-80 overflow-y-auto">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/20 group ${
              task.completed ? 'opacity-60' : ''
            }`}
          >
            <button
              onClick={() => toggleTask(task.id)}
              className="flex-shrink-0 hover:scale-110 transition-transform"
            >
              {task.completed ? (
                <CheckSquare className="text-accent" size={18} />
              ) : (
                <Square className="text-muted-foreground hover:text-primary" size={18} />
              )}
            </button>

            <div className="flex-1 min-w-0">
              <div className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {task.text}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className={getPriorityColor(task.priority)}>
                  {getPriorityEmoji(task.priority)}
                </span>
                <span className={`text-xs ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="opacity-0 group-hover:opacity-100 p-1 hover:bg-fire/20 rounded transition-all"
            >
              <Trash2 className="text-fire" size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="mt-6 pt-4 border-t border-border/20">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-fire">{tasks.filter(t => t.priority === 'high' && !t.completed).length}</div>
            <div className="text-xs text-muted-foreground">High Priority</div>
          </div>
          <div>
            <div className="text-lg font-bold text-accent">{completedCount}</div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary">{Math.round(progressPercentage)}%</div>
            <div className="text-xs text-muted-foreground">Done Today</div>
          </div>
        </div>
      </div>

      {/* Motivational Footer */}
      <div className="mt-4 text-center">
        <div className="text-xs text-primary font-mono">
          {progressPercentage === 100 ? "🎉 All done! Time for coffee ☕" : "💪 Keep pushing forward!"}
        </div>
      </div>
    </div>
  );
};

export default ToDoWidget;