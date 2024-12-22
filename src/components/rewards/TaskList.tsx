import React, { useState } from 'react';
import { CheckCircle, Circle, Plus, X, Bell } from 'lucide-react';

const initialTasks = [
  { id: 1, title: 'Complete morning health check', completed: true },
  { id: 2, title: 'Follow breakfast plan', completed: true },
  { id: 3, title: 'Log lunch meal', completed: true },
  { id: 4, title: 'Take evening walk', completed: false },
  { id: 5, title: 'Complete dinner log', completed: false },
];

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTask, completed: false }
    ]);
    setNewTask('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Remaining Tasks</h2>
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-emerald-600" />
            <span className="text-sm text-gray-600">
              {completedCount}/{totalTasks} completed
            </span>
          </div>
        </div>

        <form onSubmit={addTask} className="flex space-x-2 mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
          >
            <Plus className="h-5 w-5" />
          </button>
        </form>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-transparent transition-colors duration-300"
            >
              <div className="flex items-center space-x-3">
                <button onClick={() => toggleTask(task.id)}>
                  {task.completed ? (
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-300" />
                  )}
                </button>
                <span className={task.completed ? 'text-gray-500 line-through' : 'text-gray-700'}>
                  {task.title}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}